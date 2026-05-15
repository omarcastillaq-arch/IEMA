/**
 * @file device.ts
 * @description Device Page - 12-Lead ECG Real-Time Visualization
 *
 * Displays all 12 standard ECG leads derived from 8 BLE channels,
 * with signal quality indicators and security state monitoring.
 *
 * Improvements over original:
 * - DRY: Uses ECGChannelService instead of 8 copy-pasted methods
 * - 12-lead display: Shows derived III, aVR, aVL, aVF alongside raw channels
 * - Signal quality: Real-time per-lead quality indicators
 * - Security: BLE encryption state indicator
 * - Performance: Optimized SmoothieChart configuration with requestAnimationFrame
 * - Error handling: User-friendly disconnect/error messages
 *
 * @copyright Copyright (c) 2024 Horizon Medical
 */

import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import SmoothieChart from 'smoothie';

import { ECGChannelService, ChannelData, TwelveLeadSnapshot } from '../../providers/ecg-channel.service';
import { BleSecurityService, BleSecurityEvent } from '../../providers/ble-security.service';
import { SignalQualityService } from '../../providers/signal-quality.service';
import {
  ECGLead,
  ECG_LEAD_GROUPS,
  MILLIS_PER_PIXEL,
  BleSecurityState,
  BLE_STATE_LABELS,
  BLE_STATE_ICONS,
  BLE_STATE_COLORS,
  SignalQuality,
  SIGNAL_QUALITY_INFO,
  ChannelQualityMetrics,
  SignalQualitySummary,
} from '../../models/ecg.models';

/** Chart configuration for different lead types */
interface ChartConfig {
  leadName: string;
  chartId: string;
  timeSeries: any;
  chart: any;
  color: string;
  lineWidth: number;
}

/** Standard ECG chart colors matching clinical conventions */
const LEAD_COLORS: { [key: string]: string } = {
  [ECGLead.I]:   '#1B5E20',  // Dark green - limb leads
  [ECGLead.II]:  '#1B5E20',
  [ECGLead.III]: '#1B5E20',
  [ECGLead.aVR]: '#E65100',  // Deep orange - augmented leads
  [ECGLead.aVL]: '#E65100',
  [ECGLead.aVF]: '#E65100',
  [ECGLead.V1]:  '#0D47A1',  // Deep blue - precordial leads
  [ECGLead.V2]:  '#0D47A1',
  [ECGLead.V3]:  '#0D47A1',
  [ECGLead.V4]:  '#1565C0',
  [ECGLead.V5]:  '#1565C0',
  [ECGLead.V6]:  '#1565C0',
};

@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage implements OnDestroy {
  /** Device info from navigation params */
  device: { id: string; name?: string };
  characteristics: any[];

  /** 12-lead chart configurations */
  charts: ChartConfig[] = [];

  /** All 12 lead names for template iteration */
  leadNames: string[] = [
    ECGLead.I, ECGLead.II, ECGLead.III,
    ECGLead.aVR, ECGLead.aVL, ECGLead.aVF,
    ECGLead.V1, ECGLead.V2, ECGLead.V3,
    ECGLead.V4, ECGLead.V5, ECGLead.V6,
  ];

  /** Lead groups for organized display */
  leadGroups = ECG_LEAD_GROUPS;

  /** BLE security state */
  bleStateLabel: string = '';
  bleStateIcon: string = 'bluetooth';
  bleStateColor: string = 'medium';
  isSecure: boolean = false;

  /** Signal quality summary */
  overallQuality: string = 'Sin Señal';
  overallQualityColor: string = '#9E9E9E';
  overallScore: number = 0;
  channelQualities: ChannelQualityMetrics[] = [];

  /** Whether data is actively streaming */
  isStreaming: boolean = false;

  /** Device status from status characteristic */
  status: string = '';

  /** Subscriptions */
  private _subs: any[] = [];

  /** Map of lead name to chart config for quick lookup */
  private _chartMap: Map<string, ChartConfig> = new Map();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ble: BLE,
    private chRef: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private ecgChannelService: ECGChannelService,
    private bleSecurity: BleSecurityService,
    private signalQuality: SignalQualityService,
  ) {
    this.device = this.navParams.get('device');
    this.characteristics = this.navParams.get('characteristics');
  }

  // ========================================================================
  // Lifecycle
  // ========================================================================

  ionViewDidLoad(): void {
    this._initializeCharts();
    this._subscribeToServices();
    this._startDataAcquisition();
    this._updateSecurityUI();
  }

  ionViewWillUnload(): void {
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.ecgChannelService.stopAllChannels();
    this.signalQuality.stop();

    this._subs.forEach(sub => {
      try { sub.unsubscribe(); } catch (e) { /* ignore */ }
    });
    this._subs = [];

    // Stop all SmoothieCharts
    this.charts.forEach(config => {
      try { config.chart?.stop(); } catch (e) { /* ignore */ }
    });
  }

  // ========================================================================
  // UI Actions
  // ========================================================================

  /**
   * Disconnect from the device.
   */
  disconnect(): void {
    const alert = this.alertCtrl.create({
      title: 'Desconectar',
      message: '¿Desea desconectarse del Holter?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Desconectar',
          handler: () => {
            this.ecgChannelService.stopAllChannels();
            this.signalQuality.stop();
            this.ble.disconnect(this.device.id).then(
              () => {
                this.bleSecurity.onDeviceDisconnected(true);
                this.navCtrl.pop();
              },
              (err) => {
                console.error('[Device] Disconnect error:', err);
                this.navCtrl.pop();
              }
            );
          },
        },
      ],
    });
    alert.present();
  }

  /**
   * Get quality indicator color for a lead index.
   */
  getQualityColor(leadIndex: number): string {
    // Map 12-lead index to channel index (0-7)
    const channelIndex = this._leadIndexToChannel(leadIndex);
    if (channelIndex < 0) return '#9E9E9E';

    const metrics = this.signalQuality.getChannelQuality(channelIndex);
    return SIGNAL_QUALITY_INFO[metrics.quality].color;
  }

  /**
   * Get quality label for a lead index.
   */
  getQualityLabel(leadIndex: number): string {
    const channelIndex = this._leadIndexToChannel(leadIndex);
    if (channelIndex < 0) return '';

    const metrics = this.signalQuality.getChannelQuality(channelIndex);
    return SIGNAL_QUALITY_INFO[metrics.quality].label;
  }

  /**
   * Get quality score for a lead index.
   */
  getQualityScore(leadIndex: number): number {
    const channelIndex = this._leadIndexToChannel(leadIndex);
    if (channelIndex < 0) return 0;

    return this.signalQuality.getChannelQuality(channelIndex).score;
  }

  // ========================================================================
  // Private Methods
  // ========================================================================

  /** Initialize SmoothieChart instances for all 12 leads */
  private _initializeCharts(): void {
    this.charts = [];
    this._chartMap = new Map();

    for (const leadName of this.leadNames) {
      const chartId = `chart-${leadName}`;
      const timeSeries = new SmoothieChart.TimeSeries();
      const color = LEAD_COLORS[leadName] || '#000000';

      const chartConfig: ChartConfig = {
        leadName,
        chartId,
        timeSeries,
        chart: null,
        color,
        lineWidth: 1.0,
      };

      this.charts.push(chartConfig);
      this._chartMap.set(leadName, chartConfig);
    }

    // Defer chart creation to next tick (after template renders canvases)
    setTimeout(() => {
      for (const config of this.charts) {
        const canvas = document.getElementById(config.chartId) as HTMLCanvasElement;
        if (canvas) {
          const chart = new SmoothieChart.SmoothieChart({
            millisPerPixel: MILLIS_PER_PIXEL,
            grid: {
              fillStyle: '#ffffff',
              strokeStyle: '#f0f0f0',
              sharpLines: true,
              verticalSections: 4,
              borderVisible: false,
            },
            labels: {
              disabled: true,
            },
            responsive: true,
            interpolation: 'linear',
            maxValueScale: 1.1,
            minValueScale: 1.1,
          });

          chart.addTimeSeries(config.timeSeries, {
            lineWidth: config.lineWidth,
            strokeStyle: config.color,
          });

          chart.streamTo(canvas, 500);
          config.chart = chart;
        }
      }
    }, 100);
  }

  /** Subscribe to ECG channel, security, and quality services */
  private _subscribeToServices(): void {
    // ECG channel data → feed raw channels to their charts
    const channelSub = this.ecgChannelService.channelData$.subscribe(
      (data: ChannelData) => {
        this._onChannelData(data);
      }
    );
    this._subs.push(channelSub);

    // 12-lead derived data → feed derived leads to their charts
    const leadSub = this.ecgChannelService.twelveLeadData$.subscribe(
      (snapshot: TwelveLeadSnapshot) => {
        this._onTwelveLeadData(snapshot);
      }
    );
    this._subs.push(leadSub);

    // BLE security events
    const secSub = this.bleSecurity.securityEvents$.subscribe(
      (event: BleSecurityEvent) => {
        this._onSecurityEvent(event);
      }
    );
    this._subs.push(secSub);

    // Signal quality updates
    const qualSub = this.signalQuality.quality$.subscribe(
      (summary: SignalQualitySummary) => {
        this._onQualityUpdate(summary);
      }
    );
    this._subs.push(qualSub);
  }

  /** Start BLE data acquisition */
  private _startDataAcquisition(): void {
    this.signalQuality.start();

    this.ecgChannelService.startAllChannels(this.device.id).then(
      () => {
        console.log('[Device] All channels started');
        this.isStreaming = true;

        // If we successfully subscribe to encrypted characteristics, pairing succeeded
        this.bleSecurity.onPairingSucceeded(this.device.id);

        this._showToast('Adquisición ECG iniciada - 12 derivaciones activas', 'secondary', 2000);
        this.chRef.detectChanges();
      },
      (err) => {
        console.error('[Device] Failed to start channels:', err);
        this.isStreaming = false;

        this.bleSecurity.onPairingFailed(err);

        this.alertCtrl.create({
          title: 'Error de Notificación BLE',
          message: 'No se pudieron activar las notificaciones ECG. Esto puede deberse a un error de emparejamiento seguro (LESC). ¿Desea reintentar?',
          buttons: [
            {
              text: 'Volver',
              handler: () => this.navCtrl.pop(),
            },
            {
              text: 'Reintentar',
              handler: () => this._startDataAcquisition(),
            },
          ],
        }).present();
      }
    );
  }

  /** Handle raw channel data - feed to corresponding lead chart and quality service */
  private _onChannelData(data: ChannelData): void {
    // Feed samples to signal quality analyzer
    this.signalQuality.addSamples(data.channelIndex, data.samples);

    // Map channel to its direct lead name
    const directLeadMap = [
      ECGLead.I, ECGLead.II,
      ECGLead.V1, ECGLead.V2, ECGLead.V3,
      ECGLead.V4, ECGLead.V5, ECGLead.V6,
    ];

    const leadName = directLeadMap[data.channelIndex];
    if (!leadName) return;

    const config = this._chartMap.get(leadName);
    if (!config) return;

    // Append samples to the time series
    for (let i = 0; i < data.samples.length; i++) {
      config.timeSeries.append(data.timestamps[i], data.samples[i]);
    }
  }

  /** Handle 12-lead derived data - feed to augmented/derived lead charts */
  private _onTwelveLeadData(snapshot: TwelveLeadSnapshot): void {
    // Only update derived leads (III, aVR, aVL, aVF)
    const derivedLeads = [ECGLead.III, ECGLead.aVR, ECGLead.aVL, ECGLead.aVF];

    for (const lead of derivedLeads) {
      const config = this._chartMap.get(lead);
      if (config && snapshot.leads[lead] !== undefined) {
        config.timeSeries.append(snapshot.timestamp, snapshot.leads[lead]);
      }
    }
  }

  /** Handle security state changes */
  private _onSecurityEvent(event: BleSecurityEvent): void {
    this._updateSecurityUI();

    if (event.state === BleSecurityState.CONNECTION_LOST) {
      this.isStreaming = false;
      this.ecgChannelService.stopAllChannels();
      this.signalQuality.stop();

      this.alertCtrl.create({
        title: 'Conexión Perdida',
        message: 'Se perdió la conexión con el Holter. ¿Desea intentar reconectar?',
        buttons: [
          {
            text: 'Volver',
            handler: () => this.navCtrl.pop(),
          },
          {
            text: 'Reconectar',
            handler: () => this._startDataAcquisition(),
          },
        ],
      }).present();
    }

    this.chRef.detectChanges();
  }

  /** Handle quality summary updates */
  private _onQualityUpdate(summary: SignalQualitySummary): void {
    this.overallScore = summary.overallScore;
    this.overallQuality = SIGNAL_QUALITY_INFO[summary.overallQuality].label;
    this.overallQualityColor = SIGNAL_QUALITY_INFO[summary.overallQuality].color;
    this.channelQualities = summary.channelMetrics;
    this.chRef.detectChanges();
  }

  /** Update security state UI */
  private _updateSecurityUI(): void {
    const state = this.bleSecurity.currentState;
    this.bleStateLabel = BLE_STATE_LABELS[state];
    this.bleStateIcon = BLE_STATE_ICONS[state];
    this.bleStateColor = BLE_STATE_COLORS[state];
    this.isSecure = this.bleSecurity.isSecure;
  }

  /** Map a 12-lead display index to a raw channel index (0-7) */
  private _leadIndexToChannel(leadIndex: number): number {
    // leadNames: I,II,III,aVR,aVL,aVF,V1,V2,V3,V4,V5,V6
    // Direct channels: 0=I, 1=II, 6=V1..11=V6
    // Derived: 2=III(ch0+ch1), 3=aVR(ch0+ch1), 4=aVL(ch0+ch1), 5=aVF(ch0+ch1)
    const mapping = [0, 1, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7];
    return mapping[leadIndex] !== undefined ? mapping[leadIndex] : -1;
  }

  /** Show a toast notification */
  private _showToast(message: string, cssClass: string, duration: number): void {
    const toast = this.toastCtrl.create({
      message,
      duration,
      position: 'bottom',
      cssClass: `toast-${cssClass}`,
    });
    toast.present();
  }
}
