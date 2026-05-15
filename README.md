# 🫀 IEMA — Intelligent ECG Monitoring Application

> Aplicaciones cliente y interfaces de usuario para el ecosistema de monitoreo electrocardiográfico Horizon Medical. Incluye app móvil, visor web, broker ECG y dashboard administrativo.

[![Mobile](https://img.shields.io/badge/Mobile-Ionic-blue)]()
[![Web](https://img.shields.io/badge/Web-TypeScript-3178c6)]()
[![Dashboard](https://img.shields.io/badge/Dashboard-Next.js-black)]()
[![BLE](https://img.shields.io/badge/BLE-Web_Bluetooth-purple)]()

---

## 📑 Tabla de Contenidos

- [Visión General](#-visión-general)
- [Arquitectura](#-arquitectura)
- [Componentes](#-componentes)
- [Mejoras Implementadas](#-mejoras-implementadas)
- [Instalación](#-instalación)
- [Licencia](#-licencia)

---

## 🔭 Visión General

IEMA agrupa todas las interfaces de usuario y aplicaciones cliente del ecosistema Horizon Medical. Desde la app móvil que se conecta directamente al Holter EKG via BLE, hasta el dashboard administrativo para gestión de pacientes y dispositivos.

### Componentes Principales

| Directorio | Descripción | Tecnología |
|-----------|-------------|------------|
| `mobile-app/` | App móvil Holter con BLE y 12 derivaciones | Ionic, Angular, Cordova |
| `web-viewer/` | Visor web de ECG con Web Bluetooth | TypeScript, WebSocket |
| `ecg-broker/` | Broker IoT para distribución ECG | Ionic/Angular, Capacitor |
| `ble-logger/` | Logger BLE con persistencia MongoDB | Node.js, Noble |
| `data-distributor/` | Servidor de distribución de datos ECG | Node.js, Socket.IO |
| `admin-dashboard/` | Dashboard administrativo | Next.js, Prisma, shadcn/ui |

---

## 🏗 Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│                     IEMA ARCHITECTURE                     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                  CLIENT TIER                         │ │
│  │                                                      │ │
│  │  ┌──────────────┐  ┌──────────────┐                 │ │
│  │  │  Mobile App   │  │  Web Viewer   │                 │ │
│  │  │  (Ionic)      │  │  (TS/WebBLE)  │                 │ │
│  │  │  BLE Central  │  │  13 canvas    │                 │ │
│  │  │  12 leads     │  │  leads        │                 │ │
│  │  └──────┬───────┘  └──────┬───────┘                 │ │
│  │         │                  │                          │ │
│  │         ▼                  ▼                          │ │
│  │  ┌──────────────────────────────┐                    │ │
│  │  │      ECG Broker (IoT)        │                    │ │
│  │  │      Socket.IO hub           │                    │ │
│  │  └──────────────┬───────────────┘                    │ │
│  └─────────────────┼───────────────────────────────────┘ │
│                    │                                      │
│  ┌─────────────────┼───────────────────────────────────┐ │
│  │                 DATA TIER                            │ │
│  │                 │                                     │ │
│  │  ┌──────────────▼───────┐  ┌────────────────────┐   │ │
│  │  │  BLE Logger          │  │  Data Distributor   │   │ │
│  │  │  noble → MongoDB     │  │  server.js → leads  │   │ │
│  │  └──────────────────────┘  └────────────────────┘   │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                  ADMIN TIER                           │ │
│  │  ┌────────────────────────────┐                      │ │
│  │  │  Admin Dashboard (Next.js) │                      │ │
│  │  │  - Patient management      │                      │ │
│  │  │  - Device monitoring       │                      │ │
│  │  │  - ECG session review      │                      │ │
│  │  └────────────────────────────┘                      │ │
│  └──────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 📦 Mejoras Implementadas (Horizon Improvements)

### Fase 1: Corrección Bug aVF (Web Viewer)
- Corrección de la fórmula de cálculo de la derivación aVF
- aVF = (Lead_II + Lead_III) / 2 - Lead_I / 2 (correcto)
- Validación de las 12 derivaciones en el visor web

### Fase 4: Documentación Técnica
- README completo con arquitectura
- Documentación de componentes y relaciones

### Fase 10: Dashboard de Monitoreo
- Dashboard administrativo con Next.js
- Gestión de pacientes y dispositivos
- Visualización de sesiones ECG
- Interfaz moderna con shadcn/ui

### Fase 11: Mejoras App Móvil
- Soporte BLE seguro (LESC compatible)
- Visualización de 12 derivaciones completas
- Mejoras de estabilidad en conexión BLE
- UI/UX optimizada para monitoreo continuo

---

## ⚙️ Instalación

### Mobile App
```bash
cd mobile-app/HRZ_Ionic_IoT_Holter_App
npm install
ionic serve
```

### Web Viewer
```bash
cd web-viewer
npm install
npm run build
# Open dist/index.html in Chrome (Web Bluetooth required)
```

### ECG Broker
```bash
cd ecg-broker
npm install
ionic serve
```

### BLE Logger
```bash
cd ble-logger
npm install
node index.js
```

### Admin Dashboard
```bash
cd admin-dashboard/nextjs_space
yarn install
yarn dev
```

---

## 📄 Licencia

Proyecto propietario — Horizon Medical © 2026
