# Horizon Medical IoT Holter App - Fase 11: Mejoras Incrementales

## Resumen

Mejoras incrementales aplicadas a la app móvil Ionic 3 (`HRZ_Ionic_IoT_Holter_App`) para integrar las nuevas características de seguridad BLE, mejorar la experiencia de usuario y optimizar la visualización ECG en tiempo real.

> **Nota**: Se realizaron mejoras dentro del framework Ionic 3 existente, sin migración completa a Ionic 7, para mantener la estabilidad del proyecto.

---

## 1. Actualización de Dependencias de Seguridad

### Cambios en `package.json`

| Dependencia | Versión Anterior | Versión Nueva | Motivo |
|---|---|---|---|
| `@angular/*` | 4.1.3 | 5.2.11 | Parches de seguridad XSS y expression changes |
| `@ionic-native/ble` | ^4.0.1 | ^4.20.0 | Correcciones BLE para Android 10+ |
| `@ionic-native/core` | 3.12.1 | 4.20.0 | Compatibilidad con ble plugin actualizado |
| `@ionic-native/splash-screen` | 3.12.1 | 4.20.0 | Sincronización de versiones |
| `@ionic-native/status-bar` | 3.12.1 | 4.20.0 | Sincronización de versiones |
| `@ionic/storage` | 2.0.1 | 2.2.0 | Corrección de vulnerabilidad en localforage |
| `ionic-angular` | 3.5.3 | 3.9.10 | Última versión estable de Ionic 3, parches de seguridad |
| `rxjs` | 5.4.0 | 5.5.12 | Corrección de memory leaks y vulnerabilidades |
| `smoothie` | ^1.29.1 | ^1.36.1 | Mejoras de rendimiento de rendering |
| `socket.io-client` | (via ng-socket-io) | ^2.5.0 | Reemplazo directo, sin wrapper vulnerable |
| `zone.js` | 0.8.12 | 0.8.29 | Corrección de vulnerabilidades en async tracking |
| `@ionic/app-scripts` | 2.0.2 | 3.2.4 | Webpack actualizado con parches de seguridad |
| `typescript` | 2.3.4 | 2.6.2 | Mejor type-checking y seguridad |

### Dependencias Eliminadas
- **`ng-socket-io`** (^0.1.11): Reemplazado por `socket.io-client` directo para eliminar wrapper deprecated con vulnerabilidades conocidas.

### Plugins Cordova Añadidos
- **`cordova-plugin-ble-central`**: Plugin BLE explícito en la lista de plugins del proyecto.

---

## 2. Soporte de Emparejamiento Seguro BLE (LESC)

### Nuevo: `src/providers/ble-security.service.ts`

Servicio dedicado para gestionar la seguridad BLE en coordinación con el firmware `HZM_BLE_Security`.

#### Características:
- **Máquina de estados de seguridad**: Implementa estados que reflejan el flujo LESC del firmware:
  ```
  DISCONNECTED → SCANNING → CONNECTING → CONNECTED → PAIRING → PAIRED_ENCRYPTED → BONDED
  ```
- **Gestión de bonds**: Almacena IDs de dispositivos vinculados en `localStorage` para reconexión rápida
- **Detección de pairing**: Al conectarse a un dispositivo previamente bonded, asume cifrado automático por el OS
- **Reconexión automática**: Backoff exponencial configurable (1s → 2s → 4s → ... → 30s max)
- **Clasificación de errores**: Mapea errores raw BLE a 11 categorías con mensajes en español

#### Integración con Firmware:
```
Firmware (HZM_BLE_Security)          App (BleSecurityService)
─────────────────────────           ────────────────────────
HZM_SEC_STATE_DISCONNECTED    ←→    BleSecurityState.DISCONNECTED
HZM_SEC_STATE_CONNECTED       ←→    BleSecurityState.CONNECTED
HZM_SEC_STATE_ENCRYPTING      ←→    BleSecurityState.PAIRING
HZM_SEC_STATE_ENCRYPTED       ←→    BleSecurityState.PAIRED_ENCRYPTED
HZM_SEC_STATE_PAIRING_FAILED  ←→    BleSecurityState.PAIRING_FAILED
```

### Nuevo: `src/models/ecg.models.ts`

Modelos de datos centralizados:
- Constantes del protocolo BLE (UUIDs, tamaños de muestra)
- Enumeraciones de estados de seguridad con labels/iconos/colores
- Tipos de error BLE con mensajes de usuario en español
- Tipos de derivaciones ECG estándar de 12 leads
- Modelos de calidad de señal

---

## 3. Manejo de Errores de Conexión BLE

### Errores Clasificados (11 tipos)

| Tipo de Error | Mensaje al Usuario | Acción Sugerida |
|---|---|---|
| `BLUETOOTH_DISABLED` | "Active el Bluetooth en su dispositivo..." | Abrir Configuración |
| `LOCATION_DISABLED` | "Android requiere ubicación activa..." | Activar Ubicación |
| `DEVICE_NOT_FOUND` | "No se encontró el dispositivo IoT Holter..." | Reintentar Escaneo |
| `CONNECTION_TIMEOUT` | "No se pudo conectar al Holter..." | Reintentar |
| `CONNECTION_REFUSED` | "El Holter rechazó la conexión..." | Reintentar |
| `PAIRING_FAILED` | "Error de emparejamiento seguro (LESC)..." | Reintentar Emparejamiento |
| `ENCRYPTION_FAILED` | "No se pudo establecer cifrado..." | Reintentar Conexión |
| `DEVICE_OUT_OF_RANGE` | "El Holter está demasiado lejos..." | Reintentar |
| `NOTIFICATION_FAILED` | "No se pudieron activar notificaciones ECG..." | Reconectar |
| `UNEXPECTED_DISCONNECT` | "Se perdió la conexión con el Holter..." | Reconectar Manualmente |
| `UNKNOWN` | "Error inesperado al comunicarse..." | Reintentar |

### Mejoras en UI:
- **Alertas nativas de Ionic** con título, mensaje descriptivo y botón de acción
- **Toasts** para notificaciones no-bloqueantes (conexión exitosa, calidad, etc.)
- **Indicadores RSSI** con barras de señal y colores (verde/amarillo/rojo)
- **Estado de seguridad BLE** visible en la barra de navegación

---

## 4. Optimización de Visualización ECG de 12 Derivaciones

### Nuevo: `src/providers/ecg-channel.service.ts`

Reemplaza el código repetitivo de `readChannel1()...readChannel8()` con un servicio unificado.

#### Mejoras:
- **DRY**: Un solo método `_subscribeChannel()` para los 8 canales BLE
- **Derivación de 12 leads**: Método estático `deriveLeads()` calcula III, aVR, aVL, aVF
- **Corrección de aVF**: `aVF = II - I/2` (era `II - II/2` en el código original — bug crítico)
- **Observables tipados**: `channelData$`, `twelveLeadData$`, `uploadData$`
- **Batching de upload**: Acumula muestras y emite paquetes cuando se alcanza el batch size

#### Fórmulas ECG Implementadas:
```
Lead I   = Canal 1 (RA-LA)
Lead II  = Canal 2 (RA-LL)
Lead III = II - I                    (Ley de Einthoven)
aVR      = -(I + II) / 2
aVL      = I - II/2
aVF      = II - I/2                  ← CORREGIDO
V1-V6    = Canales 3-8 (precordiales)
```

### Template de 12 Leads (`device.html`):
- **4 grupos organizados**: Limb Leads, Augmented, Precordial V1-V3, Precordial V4-V6
- **Colores clínicos**: Verde (limb), naranja (augmented), azul (precordial)
- **Canvas responsive**: Ancho al 100% del contenedor
- **Grid ECG**: Fondo cuadriculado rosa/rojo como papel ECG clínico

### Configuración Optimizada de SmoothieChart:
```typescript
{
  millisPerPixel: 8,
  grid: { fillStyle: '#ffffff', strokeStyle: '#f0f0f0', sharpLines: true },
  labels: { disabled: true },
  responsive: true,
  interpolation: 'linear',
  maxValueScale: 1.1,
}
```

---

## 5. Indicadores de Calidad de Señal

### Nuevo: `src/providers/signal-quality.service.ts`

Análisis en tiempo real de la calidad de señal ECG, alineado con las métricas del backend `hrzmed_wss`.

#### Métricas Analizadas:

| Métrica | Método | Umbral |
|---|---|---|
| **Ruido** | RMS de diferencia primera | Excelente: <5, Buena: <15, Regular: <40, Mala: >100 |
| **Deriva de línea base** | Diferencia de medias entre mitades de ventana | Regular: >500, Mala: >2000 |
| **Saturación ADC** | Detección de muestras >95% del riel | >5% de muestras = saturado |
| **Lead-off** | Varianza < umbral (línea plana) | Varianza < 10 |
| **Pérdida de paquetes** | Ratio paquetes recibidos/esperados | Calculado en tiempo real |

#### Niveles de Calidad:

| Nivel | Puntuación | Color | Etiqueta |
|---|---|---|---|
| Excelente | ≥90 | #4CAF50 (verde) | "Excelente" |
| Buena | ≥70 | #8BC34A (verde claro) | "Buena" |
| Regular | ≥50 | #FFC107 (amarillo) | "Regular" |
| Mala | ≥25 | #FF5722 (rojo) | "Mala" |
| Sin Señal | <25 o lead-off | #9E9E9E (gris) | "Sin Señal" |

#### Visualización en UI:
- **Barra de estado superior**: Score general (%) + etiqueta con color
- **Por derivación**: Punto de color + etiqueta + porcentaje junto al nombre del lead
- **Actualización**: Cada 1 segundo (configurable)

---

## 6. Arquitectura de Archivos

### Archivos Nuevos:
```
src/
├── models/
│   └── ecg.models.ts              # Modelos, constantes, enums compartidos
├── providers/
│   ├── ble-security.service.ts     # Servicio de seguridad BLE (LESC)
│   ├── ecg-channel.service.ts      # Servicio de canales ECG (DRY)
│   └── signal-quality.service.ts   # Servicio de calidad de señal
```

### Archivos Modificados:
```
src/
├── app/
│   └── app.module.ts              # Nuevos providers registrados
├── pages/
│   ├── home/
│   │   ├── home.ts                # Escaneo mejorado + errores
│   │   ├── home.html              # UI con indicadores RSSI
│   │   └── home.scss              # Estilos nuevos
│   └── device/
│       ├── device.ts              # 12-lead + calidad + seguridad
│       ├── device.html            # UI de 12 derivaciones
│       └── device.scss            # Estilos clínicos ECG
package.json                       # Dependencias actualizadas
```

### Archivos Eliminados/Reemplazados:
- `ng-socket-io` dependencia removida (vulnerable, deprecated)

---

## 7. Compatibilidad

### Con Firmware v2.0 (HZM_BLE_Security):
- ✅ LESC pairing es manejado por el OS, la app rastrea el estado
- ✅ Reconexión automática a dispositivos previamente bonded
- ✅ Detección de fallo de pairing con mensaje descriptivo al usuario
- ✅ Características cifradas funcionan transparentemente tras pairing

### Con Backend (hrzmed_wss):
- ✅ Paquetes de upload mantienen formato compatible (`ECGDataPacket`)
- ✅ Métricas de calidad alineadas con `ecgValidator.js`
- ✅ Socket.IO client actualizado a v2.5 (compatible con backend v4.x)

### Con ecg-broker (v2 Ionic 6):
- ✅ Mismos UUIDs y protocolo BLE
- ✅ Corrección de aVF compartida entre ambas apps

---

## 8. Notas Técnicas

### Limitaciones:
1. **No se migró a Ionic 7**: Decisión deliberada para evitar breaking changes masivos
2. **Angular 5.2**: Última versión compatible con Ionic 3 que tiene parches de seguridad
3. **Socket.IO**: Se usa v2.5 (no v4) por compatibilidad con el wrapper existente
4. **LESC pairing**: La app no controla directamente el pairing, lo hace el OS; la app solo rastrea el estado

### Próximos Pasos Recomendados:
1. Migración completa a Ionic 7 + Angular 16+ (proyecto separado)
2. Implementación de almacenamiento local de ECG para modo offline
3. Tests unitarios con Jasmine/Karma para los nuevos services
4. Integración con API REST del backend para métricas de calidad remotas
