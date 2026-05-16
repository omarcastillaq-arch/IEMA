/**
 * @file ecg-channel.service.ts
 * @description ECG Channel Management Service for Horizon Medical IoT Holter App
 *
 * Provides a unified, DRY approach to managing all 8 BLE ECG channels.
 * Replaces the repetitive per-channel code (readChannel1..readChannel8)
 * with a loop-based architecture. Also computes derived 12-lead ECG
 * signals from the 8 raw channels.
 *
 * 12-Lead ECG derivation from 8 channels:
 * - Channels 1-2: Limb leads (I, II) → derives III, aVR, aVL, aVF
 * - Channels 3-8: Precordial leads (V1-V6)
 *
 * @copyright Copyright (c) 2024 Horizon Medical
 */

import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {
  ECG_SERVICE_UUID,
  ECG_CHANNEL_UUIDS,
  SAMPLE_PERIOD_MS,
  SAMPLE_SIZE_BYTES,
  SAMPLES_PER_UPLOAD,
  ECGLead,
  ECGDataPacket,
} from '../models/ecg.models';

/** Derived lead data point */
export interface DerivedLeadSample {
  lead: ECGLead;
  timestamp: number;
  value: number;
}

/** Channel notification data */
export interface ChannelData {
  channelIndex: number;
  characteristicUUID: string;
  samples: number[];
  timestamps: number[];
}

/** All 12-lead derived samples for a time step */
export interface TwelveLeadSnapshot {
  timestamp: number;
  leads: { [key in ECGLead]?: number };
}

@Injectable()
export class ECGChannelService {
  /** Device ID of the connected device */
  private _deviceId: string = '';

  /** Channel data subject */
  private _channelData$: Subject<ChannelData> = new Subject();

  /** 12-lead derived data subject */
  private _twelveLeadData$: Subject<TwelveLeadSnapshot> = new Subject();

  /** Upload data subject (for socket emission) */
  private _uploadData$: Subject<ECGDataPacket> = new Subject();

  /** Per-channel time counters */
  private _channelTimes: number[] = new Array(8).fill(0);

  /** Per-channel sample buffers for upload batching */
  private _channelBuffers: number[][] = [[], [], [], [], [], [], [], []];

  /** Latest raw sample per channel (for lead derivation) */
  private _latestSamples: number[] = new Array(8).fill(0);

  /** Active notification subscriptions */
  private _subscriptions: any[] = [];

  /** Whether the service is actively receiving data */
  private _isActive: boolean = false;

  /** Configurable device ID for socket packets */
  private _configDeviceId: string = 'hrz_holter_001';

  constructor(private ble: BLE) {}

  // ========================================================================
  // Public API
  // ========================================================================

  /** Observable of per-channel raw data */
  get channelData$(): Observable<ChannelData> {
    return this._channelData$.asObservable();
  }

  /** Observable of 12-lead derived data */
  get twelveLeadData$(): Observable<TwelveLeadSnapshot> {
    return this._twelveLeadData$.asObservable();
  }

  /** Observable of upload-ready data packets */
  get uploadData$(): Observable<ECGDataPacket> {
    return this._uploadData$.asObservable();
  }

  /** Whether the service is actively collecting data */
  get isActive(): boolean {
    return this._isActive;
  }

  /**
   * Start notifications for all 8 ECG channels.
   *
   * @param deviceId  BLE peripheral device ID
   * @returns Promise that resolves when all channels are subscribed
   */
  startAllChannels(deviceId: string): Promise<void> {
    this._deviceId = deviceId;
    this._isActive = true;

    // Synchronize all channel start times
    const startTime = new Date().getTime();
    this._channelTimes = new Array(8).fill(startTime);
    this._channelBuffers = [[], [], [], [], [], [], [], []];
    this._latestSamples = new Array(8).fill(0);

    // Subscribe to all 8 channels
    const promises: Promise<void>[] = ECG_CHANNEL_UUIDS.map((uuid, index) => {
      return this._subscribeChannel(deviceId, uuid, index);
    });

    return Promise.all(promises).then(() => {
      console.log('[ECG Channel] All 8 channels subscribed successfully');
    });
  }

  /**
   * Stop all channel notifications.
   */
  stopAllChannels(): void {
    this._isActive = false;

    // Unsubscribe from all notifications
    this._subscriptions.forEach(sub => {
      try {
        if (sub && typeof sub.unsubscribe === 'function') {
          sub.unsubscribe();
        }
      } catch (e) {
        console.warn('[ECG Channel] Error unsubscribing:', e);
      }
    });
    this._subscriptions = [];

    // Flush remaining buffers
    for (let i = 0; i < 8; i++) {
      if (this._channelBuffers[i].length > 0) {
        this._emitUploadPacket(i);
      }
    }
  }

  /**
   * Set the device ID used in upload packets.
   */
  setDeviceId(deviceId: string): void {
    this._configDeviceId = deviceId;
  }

  /**
   * Cleanup resources.
   */
  destroy(): void {
    this.stopAllChannels();
    this._channelData$.complete();
    this._twelveLeadData$.complete();
    this._uploadData$.complete();
  }

  // ========================================================================
  // 12-Lead ECG Derivation
  // ========================================================================

  /**
   * Derive all 12 ECG leads from the 8 raw channels.
   *
   * Channel mapping:
   * - Ch1 (0x8171) = Lead I  (RA-LA)
   * - Ch2 (0x8172) = Lead II (RA-LL)
   * - Ch3 (0x8173) = V1
   * - Ch4 (0x8174) = V2
   * - Ch5 (0x8175) = V3
   * - Ch6 (0x8176) = V4
   * - Ch7 (0x8177) = V5
   * - Ch8 (0x8178) = V6
   *
   * Derived leads (Einthoven's law):
   * - III = II - I
   * - aVR = -(I + II) / 2
   * - aVL = I - II/2
   * - aVF = II - I/2  ← CORRECTED (was II - II/2 in original code)
   */
  static deriveLeads(leadI: number, leadII: number, v1: number, v2: number,
                     v3: number, v4: number, v5: number, v6: number): { [key in ECGLead]: number } {
    return {
      [ECGLead.I]: leadI,
      [ECGLead.II]: leadII,
      [ECGLead.III]: leadII - leadI,
      [ECGLead.aVR]: -(leadI + leadII) / 2,
      [ECGLead.aVL]: leadI - leadII / 2,
      [ECGLead.aVF]: leadII - leadI / 2,  // CORRECTED formula
      [ECGLead.V1]: v1,
      [ECGLead.V2]: v2,
      [ECGLead.V3]: v3,
      [ECGLead.V4]: v4,
      [ECGLead.V5]: v5,
      [ECGLead.V6]: v6,
    };
  }

  // ========================================================================
  // Private Methods
  // ========================================================================

  /** Subscribe to a single channel's BLE notifications */
  private _subscribeChannel(deviceId: string, characteristicUUID: string, channelIndex: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const sub = this.ble.startNotification(deviceId, ECG_SERVICE_UUID, characteristicUUID)
        .subscribe(
          (result) => {
            this._onChannelData(channelIndex, characteristicUUID, result);
          },
          (err) => {
            console.error(`[ECG Channel] Error on channel ${channelIndex + 1} (${characteristicUUID}):`, err);
            reject(err);
          }
        );

      this._subscriptions.push(sub);
      resolve();
    });
  }

  /** Process incoming BLE data for a channel */
  private _onChannelData(channelIndex: number, uuid: string, result: ArrayBuffer): void {
    const data = new Uint8Array(result);
    const samples: number[] = [];
    const timestamps: number[] = [];

    for (let i = 0; i < data.length; i += SAMPLE_SIZE_BYTES) {
      // Parse 32-bit signed integer (big-endian from ADS1298)
      const sampleValue = data[i + 3] + (data[i + 2] << 8) +
                          (data[i + 1] << 16) + (data[i] << 24);

      this._channelTimes[channelIndex] += SAMPLE_PERIOD_MS;
      samples.push(sampleValue);
      timestamps.push(this._channelTimes[channelIndex]);

      // Update latest sample for lead derivation
      this._latestSamples[channelIndex] = sampleValue;

      // Buffer for upload
      this._channelBuffers[channelIndex].push(sampleValue);
    }

    // Emit raw channel data
    this._channelData$.next({
      channelIndex,
      characteristicUUID: uuid,
      samples,
      timestamps,
    });

    // Derive 12-lead snapshot from latest samples
    if (channelIndex === 0 || channelIndex === 1) {
      // Only emit 12-lead when we have fresh limb lead data
      const derived = ECGChannelService.deriveLeads(
        this._latestSamples[0], this._latestSamples[1],
        this._latestSamples[2], this._latestSamples[3],
        this._latestSamples[4], this._latestSamples[5],
        this._latestSamples[6], this._latestSamples[7],
      );
      this._twelveLeadData$.next({
        timestamp: this._channelTimes[channelIndex],
        leads: derived,
      });
    }

    // Check if upload batch is ready
    const batchSize = SAMPLES_PER_UPLOAD * (data.byteLength / SAMPLE_SIZE_BYTES);
    if (this._channelBuffers[channelIndex].length >= batchSize) {
      this._emitUploadPacket(channelIndex);
    }
  }

  /** Emit an upload-ready data packet */
  private _emitUploadPacket(channelIndex: number): void {
    const buffer = this._channelBuffers[channelIndex];
    if (buffer.length === 0) return;

    const packet: ECGDataPacket = {
      device_id: this._configDeviceId,
      channel: channelIndex + 1,
      timestamp: new Date(),
      nsamples: buffer.length,
      nbits: 32,
      filtered: false,
      data: [...buffer],
    };

    this._uploadData$.next(packet);
    this._channelBuffers[channelIndex] = [];
  }
}
