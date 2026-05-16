/**
 * @file ble-security.service.ts
 * @description BLE Security Service for Horizon Medical IoT Holter App
 *
 * Manages BLE LESC secure pairing, bonding state, connection lifecycle,
 * automatic reconnection, and security event handling. Integrates with
 * the firmware's HZM_BLE_Security module for HIPAA-compliant data transfer.
 *
 * Key features:
 * - LESC pairing awareness (the actual pairing is handled by the OS)
 * - Bond state tracking and reconnection to bonded devices
 * - Comprehensive error classification with user-friendly messages
 * - Automatic reconnection with exponential backoff
 * - Connection security state machine
 *
 * @copyright Copyright (c) 2024 Horizon Medical
 */

import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { Platform } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {
  BleSecurityState,
  BLE_STATE_LABELS,
  BleErrorType,
  BLE_ERROR_MESSAGES,
  ECG_SERVICE_UUID,
  ECG_CHANNEL_UUIDS,
} from '../models/ecg.models';

/** BLE security event emitted to subscribers */
export interface BleSecurityEvent {
  state: BleSecurityState;
  label: string;
  deviceId?: string;
  deviceName?: string;
  error?: BleErrorType;
  errorInfo?: { title: string; message: string; action: string };
  isBonded?: boolean;
  isEncrypted?: boolean;
  timestamp: number;
}

/** Configuration for the BLE security service */
export interface BleSecurityConfig {
  /** Target device name filter (e.g., 'IoT Holter') */
  targetDeviceName: string;
  /** Scan duration in milliseconds */
  scanDurationMs: number;
  /** Maximum reconnection attempts */
  maxReconnectAttempts: number;
  /** Initial reconnection delay in milliseconds */
  reconnectBaseDelayMs: number;
  /** Maximum reconnection delay in milliseconds */
  reconnectMaxDelayMs: number;
  /** Whether to auto-reconnect on disconnect */
  autoReconnect: boolean;
  /** Connection timeout in milliseconds */
  connectionTimeoutMs: number;
}

/** Default BLE security configuration */
const DEFAULT_CONFIG: BleSecurityConfig = {
  targetDeviceName: 'IoT Holter',
  scanDurationMs: 5000,
  maxReconnectAttempts: 5,
  reconnectBaseDelayMs: 1000,
  reconnectMaxDelayMs: 30000,
  autoReconnect: true,
  connectionTimeoutMs: 15000,
};

@Injectable()
export class BleSecurityService {
  /** Current security state */
  private _state: BleSecurityState = BleSecurityState.DISCONNECTED;

  /** Subject for security state change events */
  private _stateSubject: Subject<BleSecurityEvent> = new Subject();

  /** Currently connected device info */
  private _connectedDevice: { id: string; name: string } | null = null;

  /** Whether the current connection is considered bonded */
  private _isBonded: boolean = false;

  /** Reconnection attempt counter */
  private _reconnectAttempts: number = 0;

  /** Reconnection timer reference */
  private _reconnectTimer: any = null;

  /** Connection timeout timer */
  private _connectionTimer: any = null;

  /** Service configuration */
  private _config: BleSecurityConfig;

  /** Known bonded device IDs (stored between sessions) */
  private _bondedDeviceIds: Set<string> = new Set();

  constructor(
    private ble: BLE,
    private platform: Platform
  ) {
    this._config = { ...DEFAULT_CONFIG };
    this._loadBondedDevices();
  }

  // ========================================================================
  // Public API
  // ========================================================================

  /** Get observable of security state changes */
  get securityEvents$(): Observable<BleSecurityEvent> {
    return this._stateSubject.asObservable();
  }

  /** Get current security state */
  get currentState(): BleSecurityState {
    return this._state;
  }

  /** Get current state label (Spanish) */
  get currentStateLabel(): string {
    return BLE_STATE_LABELS[this._state];
  }

  /** Get connected device info */
  get connectedDevice(): { id: string; name: string } | null {
    return this._connectedDevice;
  }

  /** Whether the connection is encrypted (bonded or paired) */
  get isSecure(): boolean {
    return this._state === BleSecurityState.PAIRED_ENCRYPTED ||
           this._state === BleSecurityState.BONDED;
  }

  /** Whether a device is connected (with or without encryption) */
  get isConnected(): boolean {
    return this._state === BleSecurityState.CONNECTED ||
           this._state === BleSecurityState.PAIRING ||
           this.isSecure;
  }

  /** Update configuration */
  configure(config: Partial<BleSecurityConfig>): void {
    this._config = { ...this._config, ...config };
  }

  /**
   * Classify a BLE error into a user-friendly error type.
   *
   * Maps raw error strings/codes from cordova-plugin-ble-central into
   * categorized BleErrorType values with appropriate user messages.
   */
  classifyError(error: any): BleErrorType {
    if (!error) return BleErrorType.UNKNOWN;

    const errorStr = typeof error === 'string'
      ? error.toLowerCase()
      : (error.message || JSON.stringify(error)).toLowerCase();

    // Bluetooth adapter disabled
    if (errorStr.includes('not enabled') ||
        errorStr.includes('bluetooth is disabled') ||
        errorStr.includes('bluetooth off') ||
        errorStr.includes('powered off')) {
      return BleErrorType.BLUETOOTH_DISABLED;
    }

    // Location services required (Android)
    if (errorStr.includes('location') ||
        errorStr.includes('gps') ||
        errorStr.includes('permission')) {
      return BleErrorType.LOCATION_DISABLED;
    }

    // Connection timeout
    if (errorStr.includes('timeout') ||
        errorStr.includes('timed out')) {
      return BleErrorType.CONNECTION_TIMEOUT;
    }

    // Connection refused / device busy
    if (errorStr.includes('refused') ||
        errorStr.includes('rejected') ||
        errorStr.includes('busy')) {
      return BleErrorType.CONNECTION_REFUSED;
    }

    // Pairing / authentication failure
    if (errorStr.includes('pair') ||
        errorStr.includes('auth') ||
        errorStr.includes('bond') ||
        errorStr.includes('pin') ||
        errorStr.includes('passkey') ||
        errorStr.includes('sec_') ||
        errorStr.includes('133') || // Android GATT_ERROR 133 (often pairing)
        errorStr.includes('encryption')) {
      // Distinguish pairing from encryption
      if (errorStr.includes('encrypt')) {
        return BleErrorType.ENCRYPTION_FAILED;
      }
      return BleErrorType.PAIRING_FAILED;
    }

    // Notification subscription failure
    if (errorStr.includes('notify') ||
        errorStr.includes('notification') ||
        errorStr.includes('subscribe') ||
        errorStr.includes('cccd')) {
      return BleErrorType.NOTIFICATION_FAILED;
    }

    // Disconnection
    if (errorStr.includes('disconnect') ||
        errorStr.includes('connection lost') ||
        errorStr.includes('link loss') ||
        errorStr.includes('terminated')) {
      return BleErrorType.UNEXPECTED_DISCONNECT;
    }

    // Out of range / RSSI too low
    if (errorStr.includes('range') ||
        errorStr.includes('rssi')) {
      return BleErrorType.DEVICE_OUT_OF_RANGE;
    }

    return BleErrorType.UNKNOWN;
  }

  /**
   * Get user-friendly error information for a given error type.
   */
  getErrorInfo(errorType: BleErrorType): { title: string; message: string; action: string } {
    return BLE_ERROR_MESSAGES[errorType] || BLE_ERROR_MESSAGES[BleErrorType.UNKNOWN];
  }

  /**
   * Handle a successful connection and initiate LESC pairing awareness.
   *
   * After connecting via BLE plugin, the OS will handle LESC pairing
   * automatically if the firmware requires it. This method tracks the
   * security state transitions.
   *
   * @param deviceId  BLE device peripheral ID
   * @param deviceName  Device advertised name
   * @param characteristics  Discovered characteristics from connect result
   */
  onDeviceConnected(deviceId: string, deviceName: string, characteristics?: any[]): void {
    this._connectedDevice = { id: deviceId, name: deviceName };
    this._reconnectAttempts = 0;
    this._clearConnectionTimer();

    // Check if this is a previously bonded device
    const wasBonded = this._bondedDeviceIds.has(deviceId);

    if (wasBonded) {
      // Previously bonded - OS should restore encryption automatically
      this._transitionTo(BleSecurityState.BONDED, {
        isBonded: true,
        isEncrypted: true,
      });
    } else {
      // New device - first connection, will go through pairing
      this._transitionTo(BleSecurityState.CONNECTED, {
        isBonded: false,
        isEncrypted: false,
      });

      // The firmware requires LESC pairing for ECG data access.
      // The OS pairing dialog will appear automatically when we try
      // to read/subscribe to encrypted characteristics.
      // We transition to PAIRING state preemptively.
      setTimeout(() => {
        if (this._state === BleSecurityState.CONNECTED) {
          this._transitionTo(BleSecurityState.PAIRING);
        }
      }, 500);
    }
  }

  /**
   * Handle pairing completion (called after successful characteristic subscription).
   *
   * When we can successfully subscribe to encrypted characteristics,
   * it means the LESC pairing succeeded.
   */
  onPairingSucceeded(deviceId: string): void {
    if (!this._bondedDeviceIds.has(deviceId)) {
      this._bondedDeviceIds.add(deviceId);
      this._saveBondedDevices();
    }
    this._isBonded = true;

    if (this._state !== BleSecurityState.BONDED) {
      this._transitionTo(BleSecurityState.PAIRED_ENCRYPTED, {
        isBonded: true,
        isEncrypted: true,
      });

      // After a short delay, mark as bonded (bond info stored by OS)
      setTimeout(() => {
        if (this.isSecure) {
          this._transitionTo(BleSecurityState.BONDED, {
            isBonded: true,
            isEncrypted: true,
          });
        }
      }, 2000);
    }
  }

  /**
   * Handle pairing failure.
   */
  onPairingFailed(error?: any): void {
    const errorType = error ? this.classifyError(error) : BleErrorType.PAIRING_FAILED;
    this._transitionTo(BleSecurityState.PAIRING_FAILED, {
      error: errorType,
      errorInfo: this.getErrorInfo(errorType),
    });
  }

  /**
   * Handle device disconnection.
   */
  onDeviceDisconnected(wasExpected: boolean = false): void {
    const deviceId = this._connectedDevice?.id;

    if (wasExpected) {
      this._connectedDevice = null;
      this._isBonded = false;
      this._transitionTo(BleSecurityState.DISCONNECTED);
      return;
    }

    // Unexpected disconnection
    this._transitionTo(BleSecurityState.CONNECTION_LOST, {
      error: BleErrorType.UNEXPECTED_DISCONNECT,
      errorInfo: this.getErrorInfo(BleErrorType.UNEXPECTED_DISCONNECT),
    });

    // Attempt auto-reconnection if configured
    if (this._config.autoReconnect && deviceId) {
      this._startReconnection(deviceId);
    }
  }

  /**
   * Remove bond information for a device.
   */
  removeBond(deviceId: string): void {
    this._bondedDeviceIds.delete(deviceId);
    this._saveBondedDevices();
  }

  /**
   * Cancel any pending reconnection attempts.
   */
  cancelReconnection(): void {
    this._clearReconnectTimer();
    this._reconnectAttempts = 0;
    if (this._state === BleSecurityState.RECONNECTING) {
      this._transitionTo(BleSecurityState.DISCONNECTED);
    }
  }

  /**
   * Start a connection timeout timer.
   */
  startConnectionTimer(): void {
    this._clearConnectionTimer();
    this._connectionTimer = setTimeout(() => {
      if (this._state === BleSecurityState.CONNECTING ||
          this._state === BleSecurityState.SCANNING) {
        this._transitionTo(BleSecurityState.DISCONNECTED, {
          error: BleErrorType.CONNECTION_TIMEOUT,
          errorInfo: this.getErrorInfo(BleErrorType.CONNECTION_TIMEOUT),
        });
      }
    }, this._config.connectionTimeoutMs);
  }

  /**
   * Set the current state to scanning.
   */
  setScanning(): void {
    this._transitionTo(BleSecurityState.SCANNING);
  }

  /**
   * Set the current state to connecting.
   */
  setConnecting(): void {
    this._transitionTo(BleSecurityState.CONNECTING);
    this.startConnectionTimer();
  }

  /**
   * Reset to disconnected state.
   */
  reset(): void {
    this._clearReconnectTimer();
    this._clearConnectionTimer();
    this._connectedDevice = null;
    this._isBonded = false;
    this._reconnectAttempts = 0;
    this._transitionTo(BleSecurityState.DISCONNECTED);
  }

  /**
   * Cleanup resources.
   */
  destroy(): void {
    this._clearReconnectTimer();
    this._clearConnectionTimer();
    this._stateSubject.complete();
  }

  // ========================================================================
  // Private Methods
  // ========================================================================

  /** Transition to a new security state and emit event */
  private _transitionTo(newState: BleSecurityState, extra?: Partial<BleSecurityEvent>): void {
    const oldState = this._state;
    this._state = newState;

    const event: BleSecurityEvent = {
      state: newState,
      label: BLE_STATE_LABELS[newState],
      deviceId: this._connectedDevice?.id,
      deviceName: this._connectedDevice?.name,
      timestamp: Date.now(),
      ...extra,
    };

    console.log(`[BLE Security] ${oldState} -> ${newState}: ${event.label}`);
    this._stateSubject.next(event);
  }

  /** Start automatic reconnection with exponential backoff */
  private _startReconnection(deviceId: string): void {
    if (this._reconnectAttempts >= this._config.maxReconnectAttempts) {
      console.log('[BLE Security] Max reconnection attempts reached');
      this._transitionTo(BleSecurityState.DISCONNECTED, {
        error: BleErrorType.DEVICE_OUT_OF_RANGE,
        errorInfo: this.getErrorInfo(BleErrorType.DEVICE_OUT_OF_RANGE),
      });
      this._reconnectAttempts = 0;
      return;
    }

    this._reconnectAttempts++;
    const delay = Math.min(
      this._config.reconnectBaseDelayMs * Math.pow(2, this._reconnectAttempts - 1),
      this._config.reconnectMaxDelayMs
    );

    console.log(`[BLE Security] Reconnection attempt ${this._reconnectAttempts}/${this._config.maxReconnectAttempts} in ${delay}ms`);
    this._transitionTo(BleSecurityState.RECONNECTING);

    this._reconnectTimer = setTimeout(() => {
      if (this._state === BleSecurityState.RECONNECTING) {
        // Emit event so the UI can trigger the actual reconnection
        this._transitionTo(BleSecurityState.CONNECTING, {
          deviceId: deviceId,
        });
      }
    }, delay);
  }

  /** Clear reconnection timer */
  private _clearReconnectTimer(): void {
    if (this._reconnectTimer) {
      clearTimeout(this._reconnectTimer);
      this._reconnectTimer = null;
    }
  }

  /** Clear connection timeout timer */
  private _clearConnectionTimer(): void {
    if (this._connectionTimer) {
      clearTimeout(this._connectionTimer);
      this._connectionTimer = null;
    }
  }

  /** Load bonded device IDs from local storage */
  private _loadBondedDevices(): void {
    try {
      const stored = localStorage.getItem('hrz_bonded_devices');
      if (stored) {
        const ids: string[] = JSON.parse(stored);
        ids.forEach(id => this._bondedDeviceIds.add(id));
      }
    } catch (e) {
      console.warn('[BLE Security] Failed to load bonded devices:', e);
    }
  }

  /** Save bonded device IDs to local storage */
  private _saveBondedDevices(): void {
    try {
      const ids = Array.from(this._bondedDeviceIds);
      localStorage.setItem('hrz_bonded_devices', JSON.stringify(ids));
    } catch (e) {
      console.warn('[BLE Security] Failed to save bonded devices:', e);
    }
  }
}
