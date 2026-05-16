# 🔗 API Reference - Horizon Medical

**Versión:** 2.0  
**Base URL:** `https://api.horizon-medical.com/v2`  
**Última actualización:** Enero 2026

---

## Tabla de Contenidos

1. [Autenticación](#autenticación)
2. [Estructura de Respuestas](#estructura-de-respuestas)
3. [Códigos de Estado HTTP](#códigos-de-estado-http)
4. [Rate Limiting](#rate-limiting)
5. [Usuarios](#usuarios)
6. [Pacientes](#pacientes)
7. [Dispositivos Holter](#dispositivos-holter)
8. [Sesiones ECG](#sesiones-ecg)
9. [Análisis y Reportes](#análisis-y-reportes)
10. [Alertas](#alertas)
11. [WebSocket Events](#websocket-events)
12. [Manejo de Errores](#manejo-de-errores)

---

## Autenticación

### Obtener Token JWT

**Endpoint:** `POST /auth/login`

```bash
curl -X POST https://api.horizon-medical.com/v2/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "doctor@hospital.com",
    "password": "securepassword123",
    "mfaToken": "123456"  # opcional si MFA está habilitado
  }'
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600,
    "user": {
      "id": "user_507f1f77bcf86cd799439011",
      "email": "doctor@hospital.com",
      "name": "Dr. Juan López",
      "role": "doctor",
      "specialization": "cardiología"
    }
  }
}
```

### Renovar Token

**Endpoint:** `POST /auth/refresh`

```bash
curl -X POST https://api.horizon-medical.com/v2/auth/refresh \
  -H "Authorization: Bearer {refreshToken}" \
  -H "Content-Type: application/json"
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  }
}
```

### Headers de Autenticación

```bash
Authorization: Bearer {accessToken}
Content-Type: application/json
X-API-Key: optional_api_key  # Para integraciones
```

---

## Estructura de Respuestas

### Respuesta Exitosa

```json
{
  "success": true,
  "data": {
    // Objeto o array con datos
  },
  "meta": {
    "timestamp": "2026-01-15T14:30:00Z",
    "requestId": "req_507f1f77bcf86cd799439011",
    "version": "2.0"
  }
}
```

### Respuesta con Paginación

```json
{
  "success": true,
  "data": [
    // array de items
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

### Respuesta de Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  },
  "meta": {
    "timestamp": "2026-01-15T14:30:00Z",
    "requestId": "req_507f1f77bcf86cd799439011"
  }
}
```

---

## Códigos de Estado HTTP

| Código | Significado | Caso de Uso |
|---|---|---|
| **200** | OK | Solicitud exitosa |
| **201** | Created | Recurso creado exitosamente |
| **202** | Accepted | Procesando (jobs asíncronos) |
| **204** | No Content | Éxito sin contenido de respuesta |
| **400** | Bad Request | Parámetros inválidos |
| **401** | Unauthorized | Autenticación requerida/inválida |
| **403** | Forbidden | Autorización insuficiente |
| **404** | Not Found | Recurso no encontrado |
| **409** | Conflict | Conflicto de datos |
| **422** | Unprocessable Entity | Validación fallida |
| **429** | Too Many Requests | Rate limit excedido |
| **500** | Internal Server Error | Error del servidor |
| **503** | Service Unavailable | Servicio en mantenimiento |

---

## Rate Limiting

### Límites por Tier

```
Free Tier:
├── 100 requests/hour
├── 1000 requests/day
└── Max 10 concurrent

Professional Tier:
├── 10,000 requests/hour
├── 100,000 requests/day
└── Max 100 concurrent

Enterprise Tier:
├── Unlimited
├── Unlimited
└── Custom limits
```

### Headers de Rate Limiting

```
X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9950
X-RateLimit-Reset: 1705348800
```

### Manejo de Límite Excedido

```json
HTTP 429 Too Many Requests

{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please retry after 60 seconds.",
    "retryAfter": 60
  }
}
```

---

## Usuarios

### Obtener Perfil del Usuario Actual

**Endpoint:** `GET /users/me`

```bash
curl -X GET https://api.horizon-medical.com/v2/users/me \
  -H "Authorization: Bearer {accessToken}"
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "user_507f1f77bcf86cd799439011",
    "email": "doctor@hospital.com",
    "firstName": "Juan",
    "lastName": "López",
    "role": "doctor",
    "specialization": "cardiología",
    "institution": "Hospital Central",
    "mfaEnabled": true,
    "createdAt": "2025-06-15T10:30:00Z",
    "lastLogin": "2026-01-15T14:30:00Z"
  }
}
```

### Actualizar Perfil

**Endpoint:** `PATCH /users/me`

```bash
curl -X PATCH https://api.horizon-medical.com/v2/users/me \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Juan",
    "lastName": "López García",
    "specialization": "cardiología_pediátrica"
  }'
```

### Cambiar Contraseña

**Endpoint:** `POST /users/me/change-password`

```bash
curl -X POST https://api.horizon-medical.com/v2/users/me/change-password \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "currentPassword": "oldpass123",
    "newPassword": "newpass456",
    "confirmPassword": "newpass456"
  }'
```

---

## Pacientes

### Listar Pacientes

**Endpoint:** `GET /patients`

```bash
curl -X GET "https://api.horizon-medical.com/v2/patients?page=1&limit=20&search=juan" \
  -H "Authorization: Bearer {accessToken}"
```

**Parámetros Query:**
```
page: number (default: 1)
limit: number (default: 20, max: 100)
search: string (por nombre, email, ID)
status: string (active, inactive, archived)
sortBy: string (name, createdAt, lastMonitoring)
sortOrder: string (asc, desc)
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "patient_507f1f77bcf86cd799439011",
      "firstName": "Juan",
      "lastName": "García",
      "email": "juan@example.com",
      "dateOfBirth": "1965-03-20",
      "gender": "M",
      "medicalRecord": "MR-12345",
      "status": "active",
      "lastMonitoring": "2026-01-15T10:00:00Z",
      "activeDevices": 1,
      "totalSessions": 24,
      "primaryPhysician": "Dr. López"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

### Crear Paciente

**Endpoint:** `POST /patients`

```bash
curl -X POST https://api.horizon-medical.com/v2/patients \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Juan",
    "lastName": "García",
    "email": "juan@example.com",
    "phone": "+34612345678",
    "dateOfBirth": "1965-03-20",
    "gender": "M",
    "medicalHistory": "Hipertensión, diabetes tipo 2",
    "medicamentos": ["Lisinopril 10mg", "Metformina 500mg"],
    "alergias": "Penicilina",
    "emergencyContact": "María García (hermana) +34612345679"
  }'
```

### Obtener Paciente

**Endpoint:** `GET /patients/{patientId}`

```bash
curl -X GET https://api.horizon-medical.com/v2/patients/patient_507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer {accessToken}"
```

### Actualizar Paciente

**Endpoint:** `PATCH /patients/{patientId}`

```bash
curl -X PATCH https://api.horizon-medical.com/v2/patients/patient_507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "medicalHistory": "Hipertensión, diabetes tipo 2, nuevo diagnóstico",
    "medicamentos": ["Lisinopril 10mg", "Metformina 1000mg", "Atorvastatina 20mg"]
  }'
```

---

## Dispositivos Holter

### Listar Dispositivos

**Endpoint:** `GET /devices`

```bash
curl -X GET "https://api.horizon-medical.com/v2/devices?status=active&type=holter" \
  -H "Authorization: Bearer {accessToken}"
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "device_507f1f77bcf86cd799439011",
      "serialNumber": "HM-001-5A2C",
      "status": "active",
      "type": "holter",
      "modelVersion": "2.0",
      "batteryLevel": 87,
      "lastSyncTime": "2026-01-15T14:30:00Z",
      "assignedPatient": "patient_507f1f77bcf86cd799439012",
      "signalQuality": 95,
      "firmwareVersion": "3.2.1",
      "calibrationDate": "2025-12-20T10:00:00Z"
    }
  ]
}
```

### Asignar Dispositivo a Paciente

**Endpoint:** `POST /devices/{deviceId}/assign`

```bash
curl -X POST https://api.horizon-medical.com/v2/devices/device_507f1f77bcf86cd799439011/assign \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "patientId": "patient_507f1f77bcf86cd799439012",
    "monitoringDuration": 48,
    "syncFrequency": 30,
    "alertsEnabled": true
  }'
```

### Obtener Estado del Dispositivo

**Endpoint:** `GET /devices/{deviceId}/status`

```bash
curl -X GET https://api.horizon-medical.com/v2/devices/device_507f1f77bcf86cd799439011/status \
  -H "Authorization: Bearer {accessToken}"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "batteryLevel": 87,
    "batteryStatus": "charging",
    "lastSync": "2026-01-15T14:30:00Z",
    "signalQuality": 95,
    "isConnected": true,
    "lastLocation": {"latitude": 40.4168, "longitude": -3.7038},
    "storageFull": false,
    "errors": []
  }
}
```

---

## Sesiones ECG

### Iniciar Sesión de Monitoreo

**Endpoint:** `POST /sessions`

```bash
curl -X POST https://api.horizon-medical.com/v2/sessions \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "patientId": "patient_507f1f77bcf86cd799439012",
    "deviceId": "device_507f1f77bcf86cd799439011",
    "durationHours": 48,
    "syncFrequencySeconds": 30,
    "notes": "Evaluación de síncope"
  }'
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "session_507f1f77bcf86cd799439013",
    "patientId": "patient_507f1f77bcf86cd799439012",
    "deviceId": "device_507f1f77bcf86cd799439011",
    "status": "active",
    "startTime": "2026-01-15T14:30:00Z",
    "estimatedEndTime": "2026-01-17T14:30:00Z",
    "dataPoints": 0,
    "qualityScore": null
  }
}
```

### Obtener Sesión

**Endpoint:** `GET /sessions/{sessionId}`

```bash
curl -X GET https://api.horizon-medical.com/v2/sessions/session_507f1f77bcf86cd799439013 \
  -H "Authorization: Bearer {accessToken}"
```

### Listar Sesiones de Paciente

**Endpoint:** `GET /patients/{patientId}/sessions`

```bash
curl -X GET "https://api.horizon-medical.com/v2/patients/patient_507f1f77bcf86cd799439012/sessions?page=1&limit=10" \
  -H "Authorization: Bearer {accessToken}"
```

### Registrar Evento en Sesión

**Endpoint:** `POST /sessions/{sessionId}/events`

```bash
curl -X POST https://api.horizon-medical.com/v2/sessions/session_507f1f77bcf86cd799439013/events \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "symptoms",
    "category": "palpitations",
    "timestamp": "2026-01-15T16:45:00Z",
    "description": "Palpitaciones notables durante actividad",
    "severity": "moderate",
    "symptoms": ["palpitations", "shortness_of_breath"]
  }'
```

### Obtener Datos ECG de Sesión

**Endpoint:** `GET /sessions/{sessionId}/ecg-data`

```bash
curl -X GET "https://api.horizon-medical.com/v2/sessions/session_507f1f77bcf86cd799439013/ecg-data?derivation=II&limit=1000&offset=0" \
  -H "Authorization: Bearer {accessToken}"
```

**Parámetros:**
```
derivation: string (I, II, III, aVR, aVL, aVF, V1-V6)
limit: number (max: 10000)
offset: number (para paginación)
format: string (json, csv, binary)
```

**Response:**
```json
{
  "success": true,
  "data": {
    "sessionId": "session_507f1f77bcf86cd799439013",
    "derivation": "II",
    "samplingRate": 500,
    "unit": "mV",
    "samples": [
      {"timestamp": "2026-01-15T14:30:00.000Z", "value": 0.5},
      {"timestamp": "2026-01-15T14:30:00.002Z", "value": 0.6},
      // ... más samples
    ]
  },
  "pagination": {
    "total": 144000000,
    "offset": 0,
    "limit": 1000
  }
}
```

---

## Análisis y Reportes

### Generar Reporte

**Endpoint:** `POST /sessions/{sessionId}/report`

```bash
curl -X POST https://api.horizon-medical.com/v2/sessions/session_507f1f77bcf86cd799439013/report \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "reportType": "comprehensive",
    "format": "pdf",
    "includeGraphics": true,
    "includeStatistics": true,
    "includeDiagnosticSummary": true,
    "timeRange": {
      "startTime": "2026-01-15T14:30:00Z",
      "endTime": "2026-01-17T14:30:00Z"
    }
  }'
```

**Response (202 Accepted):**
```json
{
  "success": true,
  "data": {
    "reportId": "report_507f1f77bcf86cd799439014",
    "status": "processing",
    "estimatedCompletionTime": "30s",
    "jobId": "job_507f1f77bcf86cd799439015"
  }
}
```

### Obtener Reporte Generado

**Endpoint:** `GET /reports/{reportId}`

```bash
curl -X GET https://api.horizon-medical.com/v2/reports/report_507f1f77bcf86cd799439014 \
  -H "Authorization: Bearer {accessToken}"
```

**Response (cuando está listo):**
```json
{
  "success": true,
  "data": {
    "id": "report_507f1f77bcf86cd799439014",
    "sessionId": "session_507f1f77bcf86cd799439013",
    "status": "completed",
    "format": "pdf",
    "downloadUrl": "https://storage.horizon-medical.com/reports/report_507f1f77bcf86cd799439014.pdf",
    "createdAt": "2026-01-15T14:35:00Z",
    "expiresAt": "2026-02-14T14:35:00Z",
    "fileSize": 2458624,
    "insights": {
      "summaryFindings": "Ritmo sinusal normal, 47 ESVs aisladas",
      "criticalFindings": [],
      "recommendations": ["Seguimiento en 4 semanas"]
    }
  }
}
```

### Descargar Reporte

**Endpoint:** `GET /reports/{reportId}/download`

```bash
curl -X GET https://api.horizon-medical.com/v2/reports/report_507f1f77bcf86cd799439014/download \
  -H "Authorization: Bearer {accessToken}" \
  --output report.pdf
```

---

## Alertas

### Listar Alertas

**Endpoint:** `GET /alerts`

```bash
curl -X GET "https://api.horizon-medical.com/v2/alerts?severity=critical&status=unread&limit=50" \
  -H "Authorization: Bearer {accessToken}"
```

**Parámetros:**
```
severity: string (critical, high, medium, low, info)
status: string (unread, read, acknowledged)
patientId: string (opcional)
since: ISO8601 datetime
sortBy: string (timestamp, severity)
```

### Obtener Alerta

**Endpoint:** `GET /alerts/{alertId}`

```bash
curl -X GET https://api.horizon-medical.com/v2/alerts/alert_507f1f77bcf86cd799439016 \
  -H "Authorization: Bearer {accessToken}"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "alert_507f1f77bcf86cd799439016",
    "sessionId": "session_507f1f77bcf86cd799439013",
    "patientId": "patient_507f1f77bcf86cd799439012",
    "type": "arrhythmia",
    "subtype": "atrial_fibrillation",
    "severity": "critical",
    "status": "unread",
    "timestamp": "2026-01-15T16:45:00Z",
    "message": "Atrial fibrillation detected",
    "details": {
      "heartRate": 145,
      "duration": 600,
      "confidence": 0.99
    },
    "actions": [
      {"type": "contact_patient", "status": "pending"},
      {"type": "contact_physician", "status": "pending"}
    ]
  }
}
```

### Marcar Alerta como Revisada

**Endpoint:** `PATCH /alerts/{alertId}/acknowledge`

```bash
curl -X PATCH https://api.horizon-medical.com/v2/alerts/alert_507f1f77bcf86cd799439016/acknowledge \
  -H "Authorization: Bearer {accessToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "notes": "Paciente evaluado, sin síntomas"
  }'
```

---

## WebSocket Events

### Conexión WebSocket

```javascript
const socket = io('wss://api.horizon-medical.com', {
  auth: {
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...'
  }
});

// Conectado
socket.on('connect', () => {
  console.log('Conectado al servidor de eventos');
  socket.emit('subscribe_session', {
    sessionId: 'session_507f1f77bcf86cd799439013'
  });
});
```

### Eventos en Tiempo Real

#### Nuevo Dato ECG

```javascript
socket.on('ecg_data', (data) => {
  console.log('Nuevo ECG:', {
    timestamp: data.timestamp,
    heartRate: data.heartRate,
    derivation: data.derivation,
    samples: data.samples
  });
});
```

#### Alerta Crítica

```javascript
socket.on('alert', (alert) => {
  console.log('¡ALERTA!:', {
    type: alert.type,
    severity: alert.severity,
    message: alert.message
  });
});
```

#### Cambio de Estado

```javascript
socket.on('session_status_changed', (data) => {
  console.log('Estado de sesión:', {
    sessionId: data.sessionId,
    status: data.status, // active, paused, completed
    timestamp: data.timestamp
  });
});
```

#### Sincronización Completada

```javascript
socket.on('sync_completed', (data) => {
  console.log('Sincronización:', {
    sessionId: data.sessionId,
    dataPoints: data.dataPointsReceived,
    timestamp: data.timestamp
  });
});
```

---

## Manejo de Errores

### Tipos de Error

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Mensaje legible para usuario",
    "details": {}
  }
}
```

### Códigos de Error Comunes

```
AUTHENTICATION_REQUIRED       → 401 Unauthorized
INVALID_CREDENTIALS           → 401 Unauthorized
TOKEN_EXPIRED                 → 401 Unauthorized
INSUFFICIENT_PERMISSIONS      → 403 Forbidden
RESOURCE_NOT_FOUND            → 404 Not Found
VALIDATION_ERROR              → 422 Unprocessable Entity
RATE_LIMIT_EXCEEDED           → 429 Too Many Requests
DATABASE_ERROR                → 500 Internal Server Error
SERVICE_UNAVAILABLE           → 503 Service Unavailable
INVALID_FILE_FORMAT           → 400 Bad Request
DEVICE_NOT_CONNECTED          → 400 Bad Request
SESSION_NOT_ACTIVE            → 400 Bad Request
INSUFFICIENT_DATA             → 400 Bad Request
```

### Ejemplo de Manejo de Error

```javascript
try {
  const response = await fetch(
    'https://api.horizon-medical.com/v2/patients',
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    
    switch (response.status) {
      case 401:
        // Refresh token o redirigir a login
        break;
      case 429:
        // Esperar según X-RateLimit-Reset
        break;
      case 500:
        // Reintentar con backoff exponencial
        break;
    }
  }
  
  const data = await response.json();
  return data.data;
} catch (error) {
  console.error('API Error:', error);
}
```

---

## Ejemplos de Integración

### Python

```python
import requests
import jwt
from datetime import datetime, timedelta

class HorizonMedicalAPI:
    def __init__(self, api_key, api_secret):
        self.base_url = "https://api.horizon-medical.com/v2"
        self.api_key = api_key
        self.api_secret = api_secret
        self.token = None
        self.token_expires_at = None
    
    def get_token(self):
        if self.token and datetime.now() < self.token_expires_at:
            return self.token
        
        payload = {
            'iss': self.api_key,
            'iat': datetime.utcnow(),
            'exp': datetime.utcnow() + timedelta(hours=1)
        }
        
        token = jwt.encode(
            payload,
            self.api_secret,
            algorithm='HS256'
        )
        
        self.token = token
        self.token_expires_at = datetime.now() + timedelta(hours=1)
        return token
    
    def get_patients(self, page=1, limit=20):
        headers = {
            'Authorization': f'Bearer {self.get_token()}',
            'Content-Type': 'application/json'
        }
        
        response = requests.get(
            f'{self.base_url}/patients',
            headers=headers,
            params={'page': page, 'limit': limit}
        )
        
        response.raise_for_status()
        return response.json()['data']

# Uso
api = HorizonMedicalAPI('your_api_key', 'your_api_secret')
patients = api.get_patients(page=1, limit=50)
```

### JavaScript/TypeScript

```typescript
class HorizonMedicalAPI {
  private baseUrl = 'https://api.horizon-medical.com/v2';
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  async login(email: string, password: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) throw new Error('Login failed');
    
    const { data } = await response.json();
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;
  }

  async getPatients(page: number = 1, limit: number = 20) {
    const response = await fetch(
      `${this.baseUrl}/patients?page=${page}&limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`
        }
      }
    );

    if (response.status === 401) {
      await this.refreshAccessToken();
      return this.getPatients(page, limit);
    }

    const { data } = await response.json();
    return data;
  }

  private async refreshAccessToken(): Promise<void> {
    const response = await fetch(`${this.baseUrl}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.refreshToken}`
      }
    });

    const { data } = await response.json();
    this.accessToken = data.accessToken;
  }
}
```

---

**Versión:** 2.0  
**Última actualización:** Enero 2026  
**Próxima revisión:** Julio 2026

Para soporte API: api-support@horizon-medical.com  
Documentación interactiva: https://api.horizon-medical.com/docs
