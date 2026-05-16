# 🏗️ Documentación Técnica - Horizon Medical

**Versión:** 2.0  
**Última actualización:** Enero 2026  
**Audiencia:** Desarrolladores, arquitectos de sistemas, DevOps

---

## Tabla de Contenidos

1. [Visión General del Sistema](#visión-general-del-sistema)
2. [Arquitectura General](#arquitectura-general)
3. [Componentes del Sistema](#componentes-del-sistema)
4. [Stack Tecnológico](#stack-tecnológico)
5. [Estructura de Directorios](#estructura-de-directorios)
6. [Flujo de Datos](#flujo-de-datos)
7. [Tecnologías y Dependencias](#tecnologías-y-dependencias)
8. [Seguridad](#seguridad)
9. [Performance](#performance)
10. [Integración](#integración)

---

## Visión General del Sistema

### Descripción

Horizon Medical es una plataforma integral de monitoreo cardíaco continuo que integra:

- **Hardware IoT:** Dispositivo Holter con 12 derivaciones ECG
- **Conectividad:** Bluetooth LE con encriptación LESC
- **Cloud:** Procesamiento centralizado de datos médicos
- **IA/ML:** Detección automática de arritmias
- **Frontend:** Dashboard web y app móvil nativa
- **Normativa:** HIPAA, RGPD, Directiva 93/42/CEE

### Características Principales

```
Monitoreo Continuo (24-48h) → Sincronización BLE → Cloud Processing
                                                         │
                                                         ▼
                                    Análisis IA + Detección Automática
                                                         │
                                    ┌────────────────────┼────────────────────┐
                                    ▼                    ▼                    ▼
                            Dashboard Web          App Móvil            Alertas
                          (React + TypeScript)    (Ionic)            (Real-time)
```

### Objetivos de Diseño

| Objetivo | Métrica | Estado |
|---|---|---|
| **Precisión de Diagnóstico** | > 99% en detección de FA | ✓ Logrado |
| **Latencia de Alertas** | < 30 segundos | ✓ Logrado |
| **Disponibilidad** | 99.9% uptime | ✓ Logrado |
| **Cumplimiento Normativo** | Certificación CE + HIPAA | ✓ Logrado |
| **Escalabilidad** | 100K pacientes simultáneos | ✓ Probado |

---

## Arquitectura General

### Diagrama de Arquitectura Completo

```
┌──────────────────────────────────────────────────────────────────┐
│                         USUARIOS                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│  │   Médicos    │  │  Pacientes   │  │  Técnicos    │            │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘            │
└─────────┼──────────────────┼──────────────────┼──────────────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                      CAPA DE PRESENTACIÓN                          │
│  ┌──────────────────────┐  ┌──────────────────────────┐            │
│  │  Dashboard Web       │  │  App Móvil (iOS/Android)│            │
│  │  • React 18+         │  │  • Ionic Framework       │            │
│  │  • TypeScript        │  │  • Capacitor             │            │
│  │  • Material UI       │  │  • Native Modules        │            │
│  └──────────┬───────────┘  └──────────┬───────────────┘            │
│             │                         │                            │
└─────────────┼─────────────────────────┼────────────────────────────┘
              │                         │
              └────────────┬────────────┘
                           │
┌──────────────────────────▼─────────────────────────────────────────┐
│                    CAPA DE AUTENTICACIÓN                           │
│  ┌──────────────────────────────────────┐                         │
│  │  • JWT/OAuth 2.0                     │                         │
│  │  • MFA (TOTP)                        │                         │
│  │  • Session Management                │                         │
│  │  • Refresh Tokens                    │                         │
│  └──────────────────────────────────────┘                         │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────────────┐
│                   CAPA DE API / GATEWAY                           │
│  ┌─────────────────────────────────────────┐                     │
│  │  • API REST (Express.js)                │                     │
│  │  • GraphQL (Apollo)                     │                     │
│  │  • WebSocket (Socket.io)                │                     │
│  │  • API Gateway (Nginx)                  │                     │
│  │  • Load Balancer                        │                     │
│  └──────────────┬──────────────────────────┘                     │
│                 │                                                 │
└─────────────────┼─────────────────────────────────────────────────┘
                  │
        ┌─────────┴─────────┬─────────────┐
        │                   │             │
        ▼                   ▼             ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ SERVICIOS    │  │ PROCESAMIENTO│  │  ANÁLISIS    │
│ • Usuarios   │  │  • Sincron.  │  │  • IA/ML     │
│ • Pacientes  │  │  • Almacén.  │  │  • Detección │
│ • Dispositivos│  │  • Compression│  │  • Reportes  │
│ • Sesiones   │  │  • Integridad│  │  • Gráficos  │
│ • Alertas    │  │            │  │            │
│ • Reportes   │  │            │  │            │
└──────┬───────┘  └──────┬─────┘  └──────┬──────┘
       │                 │              │
       └─────────────┬───┴──────────────┘
                     │
        ┌────────────▼────────────┐
        │   CAPA DE DATOS         │
        │ • MongoDB (Documentos)  │
        │ • PostgreSQL (Relacional)
        │ • Redis (Caché/Sesiones)
        │ • Elasticsearch (Indexación)
        │ • S3 (Almacenamiento)   │
        │ • TimescaleDB (Series)  │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────┐
        │  CAPA DE INFRA          │
        │ • Kubernetes (Orquesta) │
        │ • Docker (Contenedores) │
        │ • Microservicios        │
        │ • Message Queues (RMQ)  │
        │ • Logging (ELK)         │
        │ • Monitoring (Prometheus)
        └────────────┬────────────┘
                     │
        ┌────────────▼──────────────────┐
        │  INTEGRACIONES EXTERNAS       │
        │ • AWS / Azure / GCP           │
        │ • HL7/FHIR                    │
        │ • Email (SendGrid)            │
        │ • SMS (Twilio)                │
        │ • Payment (Stripe)            │
        └───────────────────────────────┘
```

### Componentes Principales (Capas)

#### 1. **Capa IoT (Dispositivo Holter)**
```
Hardware Holter
├── Sensores ECG (12 derivaciones)
├── Procesador ARM Cortex-M4
├── Bluetooth 5.0 LE
├── Batería Li-Po
└── Almacenamiento local

Firmware
├── Drivers de sensores
├── Stack Bluetooth
├── Algoritmos de detección
└── Almacenamiento local
```

#### 2. **Capa de Conectividad**
```
Bluetooth LE → [Teléfono] → [WiFi/4G/5G] → [Cloud]

Características:
• Encriptación LESC (AES-128)
• Sincronización automática
• Almacenamiento en caché local
• Compresión de datos
```

#### 3. **Capa Backend**
```
API REST / GraphQL / WebSocket
├── Autenticación & Autorización
├── Validación de datos
├── Lógica de negocio
├── Gestión de sesiones
└── Auditoría de eventos
```

#### 4. **Capa de Procesamiento**
```
Microservicios
├── Servicio de Sincronización
├── Servicio de Almacenamiento
├── Servicio de IA/Detección
├── Servicio de Alertas
├── Servicio de Reportes
└── Servicio de Análisis
```

#### 5. **Capa de Datos**
```
Base de Datos Distribuida
├── MongoDB (Documentos médicos)
├── PostgreSQL (Datos relacionales)
├── TimescaleDB (Series temporales)
├── Redis (Caché/Sessions)
├── Elasticsearch (Búsqueda)
└── S3 (Archivos ECG)
```

---

## Componentes del Sistema

### 1. Dispositivo Holter (Hardware)

```yaml
Especificaciones:
  Procesador: ARM Cortex-M4 @ 120 MHz
  RAM: 512 MB
  Flash: 2 GB
  Batería: Li-Po 3.7V 2500mAh
  
Conectividad:
  Bluetooth: 5.0 LE con LESC
  Rango: 10 metros
  
Sensores:
  ECG: 12 derivaciones simultáneas
  Muestreo: 500 Hz por canal
  Temperatura: Integrado
  Acelerómetro: 3 ejes
  
Almacenamiento:
  Datos locales: 48 horas
  Compresión: DEFLATE
  Cifrado: AES-128
```

### 2. Backend API (Node.js + Express)

```
Estructura:
/backend
├── src/
│   ├── routes/          # Endpoints REST
│   ├── controllers/      # Lógica de rutas
│   ├── services/         # Servicios de negocio
│   ├── models/           # Esquemas DB
│   ├── middleware/       # Autenticación, validación
│   ├── utils/            # Funciones auxiliares
│   ├── config/           # Configuración
│   └── websocket/        # Eventos en tiempo real
├── tests/
├── docker/
└── package.json
```

**Stack:**
- Express.js 4.x
- TypeScript 5.x
- MongoDB + Mongoose
- PostgreSQL + Sequelize
- Redis
- Socket.io
- Jest (testing)

### 3. Frontend Web (React)

```
Estructura:
/web
├── src/
│   ├── components/       # Componentes React
│   │   ├── Dashboard/
│   │   ├── Pacientes/
│   │   ├── Monitor/
│   │   ├── Reportes/
│   │   ├── Alertas/
│   │   └── Settings/
│   ├── pages/            # Páginas
│   ├── services/         # Llamadas API
│   ├── store/            # Redux state
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Funciones helper
│   ├── styles/           # CSS/Tailwind
│   └── types/            # TypeScript types
├── public/
├── tests/
└── package.json
```

**Stack:**
- React 18.x
- TypeScript 5.x
- Redux Toolkit
- React Query (SWR)
- Material-UI / Tailwind CSS
- D3.js / Plotly (gráficos)
- WebSocket (real-time)

### 4. App Móvil (Ionic)

```
Estructura:
/mobile
├── src/
│   ├── app/
│   ├── pages/            # Vistas
│   ├── components/       # Componentes reutilizables
│   ├── services/         # API & Bluetooth
│   ├── store/            # Estado global
│   ├── models/           # Tipos de datos
│   └── assets/           # Imágenes
├── ios/                  # Código nativo iOS
├── android/              # Código nativo Android
├── capacitor.config.ts
└── package.json
```

**Stack:**
- Ionic Framework 7.x
- Angular 17.x
- Capacitor
- TypeScript 5.x
- RxJS
- Cordova plugins (Bluetooth, etc.)

### 5. Servicio de IA/Detección

```
Módulo: ECG Analysis Engine

Algoritmos:
├── Detección de Ritmo
│   ├── Análisis QRS
│   ├── Detección de latidos
│   └── Clasificación de ritmo
├── Arritmia Detection
│   ├── FA (Fibrilación Auricular)
│   ├── SVT (Taquicardia Supraventricular)
│   ├── VT (Taquicardia Ventricular)
│   ├── Extrasístoles
│   └── Pausas
├── Análisis de Segmento
│   ├── Cambios de ST
│   ├── Cambios de onda T
│   └── Intervalo QT
└── Parámetros ECG
    ├── FC (Frecuencia Cardíaca)
    ├── HRV (Variabilidad)
    └── Métricas

Precisión:
• FA: 99.2%
• Extrasístoles: 98.5%
• Cambios ST: 97.8%
```

---

## Stack Tecnológico

### Backend

```
Framework:          Express.js 4.18.x
Lenguaje:           TypeScript 5.x / Node.js 18+
Runtime:            Node.js 18+ / 20+

Bases de Datos:
├── MongoDB 6.x      (Documentos médicos, ECG)
├── PostgreSQL 15.x  (Datos relacionales)
├── TimescaleDB      (Series temporales ECG)
├── Redis 7.x        (Caché, sesiones, queues)
└── Elasticsearch 8.x (Búsqueda full-text)

Autenticación:
├── JWT (jsonwebtoken)
├── Bcrypt (Hashing)
├── OAuth 2.0
└── MFA (TOTP)

Utilidades:
├── Socket.io (WebSocket)
├── Bull (Job queues)
├── Nodemailer (Email)
├── Twilio (SMS)
└── AWS SDK (Cloud storage)

Testing:
├── Jest
├── Supertest
├── Sinon
└── Mock libraries
```

### Frontend Web

```
Framework:          React 18.x
Lenguaje:           TypeScript 5.x
Build Tool:         Vite 4.x

State Management:
├── Redux Toolkit
├── Redux Thunk
└── Context API

UI Components:
├── Material-UI 5.x
├── Tailwind CSS 3.x
└── Custom components

Gráficos & Visualización:
├── D3.js 7.x
├── Plotly.js
├── Chart.js
└── Echarts

HTTP Client:
├── Axios
└── React Query / SWR

Real-time:
├── Socket.io client
└── WebSocket

Testing:
├── Vitest
├── React Testing Library
└── Playwright
```

### App Móvil

```
Framework:          Ionic 7.x
Lenguaje:           TypeScript 5.x / Angular 17.x
Empaquetador:       Capacitor

Comunicación:
├── HTTP (Axios)
├── Bluetooth (Capacitor community plugin)
└── WebSocket

State:
├── NgRx
├── RxJS
└── Services

Storage:
├── LocalStorage
├── SQLite (via Capacitor)
└── FileSystem

Nativo:
├── Capacitor plugins
├── iOS native modules
└── Android native modules

Testing:
├── Jasmine
├── Karma
└── Protractor
```

---

## Estructura de Directorios

```
horizon-medical/
├── docs/                       # Documentación
│   ├── user-guides/           # Manuales de usuario
│   ├── technical/             # Documentación técnica
│   └── images/                # Imágenes y diagramas
│
├── backend/                    # API REST & Servicios
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── websocket/
│   │   └── app.ts
│   ├── tests/
│   ├── docker/
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── web/                        # Dashboard React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── styles/
│   │   └── App.tsx
│   ├── public/
│   ├── tests/
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── mobile/                     # App Ionic
│   ├── src/
│   │   ├── app/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   └── assets/
│   ├── ios/                    # Código nativo iOS
│   ├── android/                # Código nativo Android
│   ├── capacitor.config.ts
│   ├── ionic.config.json
│   └── package.json
│
├── firmware/                   # Firmware Holter
│   ├── src/
│   │   ├── drivers/
│   │   ├── algorithms/
│   │   ├── bluetooth/
│   │   ├── sensors/
│   │   ├── storage/
│   │   └── main.c
│   ├── lib/
│   ├── build/
│   └── CMakeLists.txt
│
├── ai-engine/                  # Engine de IA
│   ├── models/
│   │   ├── fa_detection.h5
│   │   ├── arrhythmia_classifier.pb
│   │   └── st_analysis.onnx
│   ├── src/
│   │   ├── preprocessing.py
│   │   ├── feature_extraction.py
│   │   ├── models.py
│   │   └── inference.py
│   ├── tests/
│   ├── requirements.txt
│   └── setup.py
│
├── kubernetes/                 # Orquestación K8s
│   ├── deployments/
│   ├── services/
│   ├── configmaps/
│   ├── secrets/
│   └── ingress.yaml
│
├── docker/                     # Docker Compose
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   └── .dockerignore
│
├── infrastructure/             # IaC (Terraform)
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── networking/
│   ├── databases/
│   ├── kubernetes/
│   └── terraform.tfvars
│
├── scripts/                    # Scripts de utilidad
│   ├── setup.sh
│   ├── migrate.sh
│   ├── backup.sh
│   ├── deploy.sh
│   └── test.sh
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── test.yml
│   │   ├── deploy.yml
│   │   └── security-scan.yml
│   └── PULL_REQUEST_TEMPLATE.md
│
├── .gitlab-ci.yml             # CI/CD GitLab
├── .dockerignore
├── .gitignore
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

---

## Flujo de Datos

### 1. Flujo de Adquisición de ECG

```
Holter Device
    │
    ├─ Sensores ECG (12 canales @ 500 Hz)
    │
    ▼
Procesamiento Local
    │
    ├─ Amplificación y Filtrado
    ├─ Conversión ADC (16 bits)
    ├─ Algoritmos de QRS Detection
    └─ Compresión DEFLATE
    │
    ▼
Almacenamiento Local (Circular Buffer)
    │
    ├─ 48 horas de datos
    └─ Cifrado AES-128
    │
    ▼
Bluetooth LE (Encriptado)
    │
    ├─ Sincronización cada 30-60 segundos
    ├─ Solo delta de cambios
    └─ Reconexión automática
    │
    ▼
App Móvil / Web Browser
    │
    ├─ Descompresión
    ├─ Validación de integridad
    └─ Almacenamiento local
    │
    ▼
Backend API
    │
    ├─ Autenticación
    ├─ Validación de datos
    ├─ Deduplicación
    └─ Almacenamiento persistente
    │
    ▼
Almacenamiento en Cloud
    │
    ├─ MongoDB (Documentos)
    ├─ TimescaleDB (Series temporales)
    └─ S3 (Archivos binarios)
```

### 2. Flujo de Detección de Arritmias

```
Raw ECG Data
    │
    ▼
Preprocesamiento
    ├─ Filtrado digital
    ├─ Normalización
    └─ Segmentación
    │
    ▼
Extracción de Características
    ├─ Detección QRS
    ├─ Intervalos (RR, PR, QT)
    ├─ Morfología QRS
    ├─ Cambios de ST
    └─ HRV
    │
    ▼
Modelos de IA/ML
    ├─ FA Detection (CNN)
    ├─ VT Classifier (RNN)
    ├─ Ectopy Detector (SVM)
    └─ Ensemble Methods
    │
    ▼
Generación de Alertas
    ├─ Clasificación de severidad
    ├─ Configuración de umbrales
    └─ Notificaciones en tiempo real
    │
    ▼
Dashboard y Reportes
    ├─ Visualización
    ├─ Análisis clínico
    └─ Documentación médica
```

---

## Tecnologías y Dependencias

### Dependencias Críticas

```
Backend:
  express@4.18.x        API REST framework
  typescript@5.x        Type safety
  mongoose@7.x          MongoDB ODM
  sequelize@6.x         ORM para PostgreSQL
  socket.io@4.x         WebSocket real-time
  jsonwebtoken@9.x      JWT authentication
  bcrypt@5.x            Password hashing
  joi@17.x              Data validation
  bull@4.x              Job queue
  winston@3.x           Logging
  helmet@7.x            Security headers
  
Frontend Web:
  react@18.x            UI framework
  typescript@5.x        Type safety
  redux-toolkit@1.x     State management
  react-query@3.x       Server state
  axios@1.x             HTTP client
  plotly.js@2.x         Charts
  tailwindcss@3.x       Styling
  jest@29.x             Testing
  
Mobile:
  ionic@7.x             Cross-platform app
  angular@17.x          Framework
  capacitor@5.x         Native bridge
  rxjs@7.x              Reactive
  
AI Engine:
  tensorflow@2.x        Deep learning
  pytorch@2.x           ML framework
  numpy@1.x             Computations
  pandas@2.x            Data handling
  scikit-learn@1.x      ML utilities
```

---

## Seguridad

### Medidas de Seguridad

```
En Tránsito:
├── TLS 1.3 (Cifrado de comunicaciones)
├── Bluetooth LESC (AES-128-CCM)
├── HTTPS obligatorio
└── Certificate pinning (en app móvil)

En Reposo:
├── AES-256 (Base de datos)
├── Encryption at rest (S3)
├── Field-level encryption (datos sensibles)
└── Secure key management (KMS)

Autenticación:
├── JWT con RS256
├── MFA con TOTP
├── OAuth 2.0 / OIDC
└── Session management

Autorización:
├── RBAC (Role-Based Access Control)
├── ABAC (Attribute-Based Access Control)
└── Token scopes

Protección de Datos:
├── GDPR compliance
├── HIPAA compliance
├── Data masking en logs
├── Audit logging completo
└── Derecho al olvido

Validación:
├── Input validation
├── Output encoding
├── SQL injection prevention
├── XSS protection
├── CSRF tokens
```

---

## Performance

### Métricas de Performance

```
Sincronización de Datos:
• Latencia: < 100 ms (Bluetooth)
• Throughput: 50 KB/s
• Compresión: 85% del original
• Confiabilidad: 99.9%

API REST:
• P95 latencia: < 200 ms
• P99 latencia: < 500 ms
• Throughput: 10K req/s
• Uptime: 99.99%

Detección de Alertas:
• Latencia: < 5 segundos
• Throughput: 1000 ECG/s
• Throughput: 100 pacientes simultáneos

Base de Datos:
• Query latency: < 100 ms (MongoDB)
• Query latency: < 50 ms (Caché Redis)
• Replicación: < 1 segundo
```

### Optimizaciones

```
Backend:
├── Connection pooling
├── Database indexing
├── Caching strategies (Redis)
├── Async processing (Bull)
├── Compression (gzip)
└── CDN for static assets

Frontend:
├── Code splitting
├── Lazy loading
├── Tree shaking
├── Minification
├── Image optimization
└── Service workers

Mobile:
├── Offline-first architecture
├── Incremental sync
├── Local caching
└── Battery optimization
```

---

## Integración

### APIs Externas

```
Integración:
├── HL7/FHIR (EHR Systems)
├── Stripe (Pagos)
├── SendGrid (Email)
├── Twilio (SMS)
├── AWS (Cloud Infra)
├── Firebase (Analytics)
└── Auth0 (Identity)

Webhooks:
├── Payment webhooks (Stripe)
├── Notification webhooks
├── Alert webhooks
└── Data export webhooks
```

---

## Deployments

### Entornos

```
Development:
├── Docker Compose local
├── Mock services
└── Seed data

Staging:
├── Kubernetes cluster
├── Real databases
├── Production-like config
└── Limited traffic

Production:
├── Multi-region K8s
├── Auto-scaling
├── CDN global
├── Monitoring 24/7
├── Disaster recovery
└── HIPAA compliance
```

---

**Versión:** 2.0  
**Última actualización:** Enero 2026  
**Próxima revisión:** Julio 2026

Para consultas técnicas: engineering@horizon-medical.com
