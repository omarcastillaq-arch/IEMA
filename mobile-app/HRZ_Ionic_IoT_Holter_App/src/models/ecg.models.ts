/**
 * @file ecg.models.ts
 * @description Data models for ECG signal processing and BLE communication
 *
 * Defines interfaces and constants for the Horizon Medical IoT Holter
 * BLE protocol, 12-lead ECG derivation, and signal quality metrics.
 *
 * @copyright Copyright (c) 2024 Horizon Medical
 */

// ============================================================================
// BLE Protocol Constants
// ============================================================================

/** ECG BLE Service UUID */
export const ECG_SERVICE_UUID = '805B';

/** BLE Characteristic UUIDs for 8 ECG channels */
export const ECG_CHANNEL_UUIDS: string[] = [
  '8171', '8172', '8173', '8174',
  '8175', '8176', '8177', '8178'
];

/** Status characteristic UUID */
export const ECG_STATUS_UUID = '8170';

/** Sample period in milliseconds (250 Hz sampling rate) */
export const SAMPLE_PERIOD_MS = 4;

/** Size of each sample in bytes (32-bit signed int) */
export const SAMPLE_SIZE_BYTES = 4;

/** Number of samples per upload batch */
export const SAMPLES_PER_UPLOAD = 120;

/** SmoothieChart milliseconds per pixel */
export const MILLIS_PER_PIXEL = 8;

// ============================================================================
// BLE Security States (mirrors firmware HZM_BLE_Security states)
// ============================================================================

/** BLE security/connection states matching firmware LESC implementation */
export enum BleSecurityState {
  DISCONNECTED = 'disconnected',
  SCANNING = 'scanning',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  PAIRING = 'pairing',
  PAIRED_ENCRYPTED = 'paired_encrypted',
  BONDED = 'bonded',
  PAIRING_FAILED = 'pairing_failed',
  CONNECTION_LOST = 'connection_lost',
  RECONNECTING = 'reconnecting',
}

/** Human-readable labels for BLE security states (Spanish) */
export const BLE_STATE_LABELS: Record<BleSecurityState, string> = {
  [BleSecurityState.DISCONNECTED]: 'Desconectado',
  [BleSecurityState.SCANNING]: 'Buscando dispositivos...',
  [BleSecurityState.CONNECTING]: 'Conectando...',
  [BleSecurityState.CONNECTED]: 'Conectado (sin cifrar)',
  [BleSecurityState.PAIRING]: 'Emparejando (LESC)...',
  [BleSecurityState.PAIRED_ENCRYPTED]: 'Cifrado activo ✓',
  [BleSecurityState.BONDED]: 'Vinculado y cifrado ✓✓',
  [BleSecurityState.PAIRING_FAILED]: 'Error de emparejamiento',
  [BleSecurityState.CONNECTION_LOST]: 'Conexión perdida',
  [BleSecurityState.RECONNECTING]: 'Reconectando...',
};

/** Icon names for BLE security states */
export const BLE_STATE_ICONS: Record<BleSecurityState, string> = {
  [BleSecurityState.DISCONNECTED]: 'bluetooth',
  [BleSecurityState.SCANNING]: 'search',
  [BleSecurityState.CONNECTING]: 'bluetooth',
  [BleSecurityState.CONNECTED]: 'warning',
  [BleSecurityState.PAIRING]: 'lock',
  [BleSecurityState.PAIRED_ENCRYPTED]: 'lock',
  [BleSecurityState.BONDED]: 'checkmark-circle',
  [BleSecurityState.PAIRING_FAILED]: 'close-circle',
  [BleSecurityState.CONNECTION_LOST]: 'alert',
  [BleSecurityState.RECONNECTING]: 'refresh',
};

/** Color classes for BLE security states */
export const BLE_STATE_COLORS: Record<BleSecurityState, string> = {
  [BleSecurityState.DISCONNECTED]: 'medium',
  [BleSecurityState.SCANNING]: 'primary',
  [BleSecurityState.CONNECTING]: 'primary',
  [BleSecurityState.CONNECTED]: 'warning',
  [BleSecurityState.PAIRING]: 'primary',
  [BleSecurityState.PAIRED_ENCRYPTED]: 'secondary',
  [BleSecurityState.BONDED]: 'secondary',
  [BleSecurityState.PAIRING_FAILED]: 'danger',
  [BleSecurityState.CONNECTION_LOST]: 'danger',
  [BleSecurityState.RECONNECTING]: 'warning',
};

// ============================================================================
// BLE Connection Error Types
// ============================================================================

/** Categorized BLE error types with user-friendly messages */
export enum BleErrorType {
  BLUETOOTH_DISABLED = 'bluetooth_disabled',
  LOCATION_DISABLED = 'location_disabled',
  DEVICE_NOT_FOUND = 'device_not_found',
  CONNECTION_TIMEOUT = 'connection_timeout',
  CONNECTION_REFUSED = 'connection_refused',
  PAIRING_FAILED = 'pairing_failed',
  ENCRYPTION_FAILED = 'encryption_failed',
  DEVICE_OUT_OF_RANGE = 'device_out_of_range',
  NOTIFICATION_FAILED = 'notification_failed',
  UNEXPECTED_DISCONNECT = 'unexpected_disconnect',
  UNKNOWN = 'unknown',
}

/** User-friendly error messages (Spanish) */
export const BLE_ERROR_MESSAGES: Record<BleErrorType, { title: string; message: string; action: string }> = {
  [BleErrorType.BLUETOOTH_DISABLED]: {
    title: 'Bluetooth Desactivado',
    message: 'Active el Bluetooth en su dispositivo para buscar el Holter.',
    action: 'Abrir Configuración',
  },
  [BleErrorType.LOCATION_DISABLED]: {
    title: 'Ubicación Requerida',
    message: 'Android requiere que la ubicación esté activa para escanear dispositivos BLE.',
    action: 'Activar Ubicación',
  },
  [BleErrorType.DEVICE_NOT_FOUND]: {
    title: 'Holter No Encontrado',
    message: 'No se encontró el dispositivo IoT Holter. Asegúrese de que esté encendido y cerca.',
    action: 'Reintentar Escaneo',
  },
  [BleErrorType.CONNECTION_TIMEOUT]: {
    title: 'Tiempo de Conexión Agotado',
    message: 'No se pudo conectar al Holter. Verifique que el dispositivo esté encendido y dentro del alcance.',
    action: 'Reintentar',
  },
  [BleErrorType.CONNECTION_REFUSED]: {
    title: 'Conexión Rechazada',
    message: 'El Holter rechazó la conexión. Puede estar conectado a otro dispositivo.',
    action: 'Reintentar',
  },
  [BleErrorType.PAIRING_FAILED]: {
    title: 'Error de Emparejamiento',
    message: 'No se pudo completar el emparejamiento seguro (LESC). Intente eliminar el vínculo anterior en Configuración de Bluetooth.',
    action: 'Reintentar Emparejamiento',
  },
  [BleErrorType.ENCRYPTION_FAILED]: {
    title: 'Error de Cifrado',
    message: 'No se pudo establecer la conexión cifrada necesaria para datos médicos.',
    action: 'Reintentar Conexión',
  },
  [BleErrorType.DEVICE_OUT_OF_RANGE]: {
    title: 'Fuera de Alcance',
    message: 'El Holter está demasiado lejos. Acérquese al dispositivo.',
    action: 'Reintentar',
  },
  [BleErrorType.NOTIFICATION_FAILED]: {
    title: 'Error de Notificación BLE',
    message: 'No se pudieron activar las notificaciones ECG. Reconecte el dispositivo.',
    action: 'Reconectar',
  },
  [BleErrorType.UNEXPECTED_DISCONNECT]: {
    title: 'Desconexión Inesperada',
    message: 'Se perdió la conexión con el Holter. Intentando reconectar automáticamente...',
    action: 'Reconectar Manualmente',
  },
  [BleErrorType.UNKNOWN]: {
    title: 'Error de Conexión',
    message: 'Ocurrió un error inesperado al comunicarse con el Holter.',
    action: 'Reintentar',
  },
};

// ============================================================================
// ECG Lead Types
// ============================================================================

/** Standard 12-lead ECG derivation names */
export enum ECGLead {
  I = 'I',
  II = 'II',
  III = 'III',
  aVR = 'aVR',
  aVL = 'aVL',
  aVF = 'aVF',
  V1 = 'V1',
  V2 = 'V2',
  V3 = 'V3',
  V4 = 'V4',
  V5 = 'V5',
  V6 = 'V6',
}

/** Lead group for organized display */
export interface ECGLeadGroup {
  name: string;
  leads: ECGLead[];
}

/** Standard 12-lead grouping for clinical display */
export const ECG_LEAD_GROUPS: ECGLeadGroup[] = [
  { name: 'Limb Leads', leads: [ECGLead.I, ECGLead.II, ECGLead.III] },
  { name: 'Augmented Leads', leads: [ECGLead.aVR, ECGLead.aVL, ECGLead.aVF] },
  { name: 'Precordial V1-V3', leads: [ECGLead.V1, ECGLead.V2, ECGLead.V3] },
  { name: 'Precordial V4-V6', leads: [ECGLead.V4, ECGLead.V5, ECGLead.V6] },
];

// ============================================================================
// Signal Quality Models
// ============================================================================

/** Signal quality levels */
export enum SignalQuality {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  FAIR = 'fair',
  POOR = 'poor',
  NO_SIGNAL = 'no_signal',
}

/** Signal quality metadata */
export const SIGNAL_QUALITY_INFO: Record<SignalQuality, { label: string; color: string; icon: string; minScore: number }> = {
  [SignalQuality.EXCELLENT]: { label: 'Excelente', color: '#4CAF50', icon: 'signal-cellular-4-bar', minScore: 90 },
  [SignalQuality.GOOD]: { label: 'Buena', color: '#8BC34A', icon: 'signal-cellular-3-bar', minScore: 70 },
  [SignalQuality.FAIR]: { label: 'Regular', color: '#FFC107', icon: 'signal-cellular-2-bar', minScore: 50 },
  [SignalQuality.POOR]: { label: 'Mala', color: '#FF5722', icon: 'signal-cellular-1-bar', minScore: 25 },
  [SignalQuality.NO_SIGNAL]: { label: 'Sin Señal', color: '#9E9E9E', icon: 'signal-cellular-0-bar', minScore: 0 },
};

/** Per-channel signal quality metrics */
export interface ChannelQualityMetrics {
  channelIndex: number;
  lead: string;
  quality: SignalQuality;
  score: number;  // 0-100
  noiseLevel: number;
  baselineDrift: number;
  saturationDetected: boolean;
  leadOff: boolean;
  lastUpdated: number;
}

/** Overall signal quality summary */
export interface SignalQualitySummary {
  overallQuality: SignalQuality;
  overallScore: number;
  channelMetrics: ChannelQualityMetrics[];
  contactImpedance: number;
  packetLossRate: number;
  timestamp: number;
}

// ============================================================================
// ECG Data Packet
// ============================================================================

/** ECG data packet for socket transmission */
export interface ECGDataPacket {
  device_id: string;
  channel: number;
  timestamp: Date;
  nsamples: number;
  nbits: number;
  filtered: boolean;
  data: number[];
  quality_score?: number;
}
