/**
 * @file home.ts
 * @description Home Page - BLE Device Scanner
 *
 * Provides BLE device discovery with improved error handling,
 * security state indicators, and user-friendly messages.
 * Integrates with BleSecurityService for LESC pairing awareness.
 *
 * @copyright Copyright (c) 2024 Horizon Medical
 */

import { Component, OnDestroy } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { DevicePage } from '../device/device';
import { BleSecurityService, BleSecurityEvent } from '../../providers/ble-security.service';
import {
  BleSecurityState,
  BLE_STATE_LABELS,
  BLE_STATE_ICONS,
  BLE_STATE_COLORS,
  BleErrorType,
} from '../../models/ecg.models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy {
  /** Whether scanning is in progress */
  isScanning: boolean = false;

  /** Discovered BLE devices */
  devices: any[] = [];

  /** Current BLE security state label */
  bleStateLabel: string = '';

  /** Current BLE state icon */
  bleStateIcon: string = 'bluetooth';

  /** Current BLE state color */
  bleStateColor: string = 'medium';

  /** Subscription to security events */
  private _secSub: any;

  /** Scan timeout handle */
  private _scanTimer: any;

  constructor(
    public navCtrl: NavController,
    private ble: BLE,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private bleSecurity: BleSecurityService,
  ) {
    // Subscribe to security state changes
    this._secSub = this.bleSecurity.securityEvents$.subscribe(
      (event: BleSecurityEvent) => this._onSecurityEvent(event)
    );

    this._updateStateUI();
  }

  ngOnDestroy(): void {
    if (this._secSub) {
      this._secSub.unsubscribe();
    }
    if (this._scanTimer) {
      clearTimeout(this._scanTimer);
    }
  }

  // ========================================================================
  // BLE Scanning
  // ========================================================================

  /**
   * Start scanning for BLE devices with improved error handling.
   */
  startScanning(): void {
    if (this.isScanning) return;

    // First check if BLE is enabled
    this.ble.isEnabled().then(
      () => this._performScan(),
      () => this._showBleError(BleErrorType.BLUETOOTH_DISABLED),
    );
  }

  /**
   * Connect to a discovered device.
   */
  connectToDevice(device: any): void {
    console.log('[Home] Connecting to device:', device.name, device.id);

    this.bleSecurity.setConnecting();

    const loader = this.loadingCtrl.create({
      content: `Conectando a ${device.name || 'dispositivo'}...`,
      dismissOnPageChange: true,
    });
    loader.present();

    this.ble.connect(device.id).subscribe(
      (result) => {
        console.log('[Home] Connected:', JSON.stringify(result));
        loader.dismiss();

        // Notify security service of successful connection
        this.bleSecurity.onDeviceConnected(device.id, device.name || 'IoT Holter', result.characteristics);

        // Show security toast
        this._showToast(
          `Conectado a ${device.name}. Iniciando emparejamiento seguro...`,
          'secondary',
          3000
        );

        // Navigate to device page
        this.navCtrl.push(DevicePage, {
          device: device,
          characteristics: result.characteristics,
        });
      },
      (err) => {
        console.error('[Home] Connection error:', err);
        loader.dismiss();

        const errorType = this.bleSecurity.classifyError(err);
        const errorInfo = this.bleSecurity.getErrorInfo(errorType);

        this.bleSecurity.onDeviceDisconnected(false);
        this._showConnectionError(errorInfo.title, errorInfo.message, errorInfo.action, device);
      }
    );
  }

  /**
   * Get a color indicator for the device RSSI signal strength.
   */
  getRssiColor(rssi: number): string {
    if (rssi >= -60) return 'secondary';   // Strong signal
    if (rssi >= -80) return 'primary';     // Medium signal
    if (rssi >= -90) return 'warning';     // Weak signal
    return 'danger';                        // Very weak
  }

  /**
   * Get a signal strength label for the RSSI value.
   */
  getRssiLabel(rssi: number): string {
    if (rssi >= -60) return 'Excelente';
    if (rssi >= -80) return 'Buena';
    if (rssi >= -90) return 'Débil';
    return 'Muy débil';
  }

  /**
   * Get a signal bar count (1-4) for visual indicator.
   */
  getRssiBars(rssi: number): number {
    if (rssi >= -60) return 4;
    if (rssi >= -70) return 3;
    if (rssi >= -80) return 2;
    return 1;
  }

  // ========================================================================
  // Private Methods
  // ========================================================================

  /** Perform the actual BLE scan */
  private _performScan(): void {
    const loader = this.loadingCtrl.create({
      content: 'Buscando dispositivos Holter...',
    });
    loader.present();

    this.devices = [];
    this.isScanning = true;
    this.bleSecurity.setScanning();

    this.ble.startScan([]).subscribe(
      (device) => {
        // Filter duplicates and unnamed devices
        if (device.name && !this.devices.find(d => d.id === device.id)) {
          this.devices.push(device);
        }
      },
      (err) => {
        console.error('[Home] Scan error:', err);
        this.isScanning = false;
        loader.dismiss();
        this._showBleError(this.bleSecurity.classifyError(err));
      }
    );

    // Stop scan after configured duration
    this._scanTimer = setTimeout(() => {
      this.ble.stopScan().then(() => {
        console.log('[Home] Scan complete. Found', this.devices.length, 'devices');
        this.isScanning = false;
        loader.dismiss();
        this.bleSecurity.reset();

        if (this.devices.length === 0) {
          this._showBleError(BleErrorType.DEVICE_NOT_FOUND);
        } else {
          this._showToast(
            `${this.devices.length} dispositivo(s) encontrado(s)`,
            'secondary',
            2000
          );
        }
      });
    }, 5000);
  }

  /** Handle security state change events */
  private _onSecurityEvent(event: BleSecurityEvent): void {
    this._updateStateUI();

    if (event.error && event.errorInfo) {
      this._showToast(event.errorInfo.message, 'danger', 4000);
    }
  }

  /** Update the UI state indicators */
  private _updateStateUI(): void {
    const state = this.bleSecurity.currentState;
    this.bleStateLabel = BLE_STATE_LABELS[state];
    this.bleStateIcon = BLE_STATE_ICONS[state];
    this.bleStateColor = BLE_STATE_COLORS[state];
  }

  /** Show a BLE error alert to the user */
  private _showBleError(errorType: BleErrorType): void {
    const errorInfo = this.bleSecurity.getErrorInfo(errorType);

    const alert = this.alertCtrl.create({
      title: errorInfo.title,
      message: errorInfo.message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: errorInfo.action,
          handler: () => {
            if (errorType === BleErrorType.DEVICE_NOT_FOUND ||
                errorType === BleErrorType.CONNECTION_TIMEOUT) {
              this.startScanning();
            }
          },
        },
      ],
    });
    alert.present();
  }

  /** Show a connection error alert with retry option */
  private _showConnectionError(title: string, message: string, action: string, device: any): void {
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: action,
          handler: () => {
            this.connectToDevice(device);
          },
        },
      ],
    });
    alert.present();
  }

  /** Show a toast notification */
  private _showToast(message: string, color: string, duration: number): void {
    const toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'bottom',
      cssClass: `toast-${color}`,
    });
    toast.present();
  }
}
