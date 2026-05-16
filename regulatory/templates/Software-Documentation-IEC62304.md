# HORIZON MEDICAL — Software Documentation (IEC 62304)

**Documento:** HM-SWD-001  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Referencia:** IEC 62304:2006+AMD1:2015, FDA Software Guidance  

---

## Tabla de Contenidos

1. [Software Safety Classification](#1-software-safety-classification)
2. [Software Development Plan](#2-software-development-plan)
3. [Software Requirements Specification](#3-software-requirements-specification)
4. [Software Architecture](#4-software-architecture)
5. [Software Detailed Design](#5-software-detailed-design)
6. [Software Unit Testing](#6-software-unit-testing)
7. [Software Integration Testing](#7-software-integration-testing)
8. [Software System Testing](#8-software-system-testing)
9. [Software Validation](#9-software-validation)
10. [Software Maintenance](#10-software-maintenance)

---

## 1. Software Safety Classification

### 1.1 Classification per IEC 62304

| Software System / Item | Safety Class | Justification |
|---|---|---|
| **System: Horizon Medical Holter ECG Software** | **Class C** | Software whose failure can result in serious injury or death (misdetection of VT/VF) |
| Firmware (nRF52832) | Class C | Acquires and processes ECG signal; failure could result in loss or corruption of diagnostic data |
| Backend / Cloud Processing | Class C | Processes and stores clinical data; hosts AI engine for arrhythmia detection |
| AI Module (CNN-LSTM) | Class C | Detects potentially lethal arrhythmias; false negative could contribute to serious harm |
| Mobile App (iOS/Android) | Class B | Displays ECG and alerts; not the primary diagnostic interface (dashboard is); failure results in temporary loss of patient-facing alerts |
| Dashboard Web (Clinical) | Class B | Primary interface for clinician review; failure delays but does not prevent diagnosis (data is stored and can be accessed later) |

### 1.2 FDA Level of Concern

| Software Item | Level of Concern | Justification |
|---|---|---|
| Firmware | Major | Directly acquires physiological signals used for clinical decisions |
| Backend + AI | Major | AI detection of life-threatening arrhythmias |
| Mobile App | Moderate | Patient-facing visualization; not primary diagnostic tool |
| Dashboard | Moderate | Clinician interface; data available through other means if dashboard fails |

---

## 2. Software Development Plan

### 2.1 Development Lifecycle Model

**Model:** V-Model (adapted for agile sprints within phases)

```
User Needs ──────────────────────────────── Validation
     │                                           ▲
     ▼                                           │
Software Requirements ──────────────── System Testing
     │                                           ▲
     ▼                                           │
Architecture Design ─────────────── Integration Testing
     │                                           ▲
     ▼                                           │
Detailed Design ─────────────────── Unit Testing
     │                                    ▲
     ▼                                    │
     └──────── Coding ───────────────────┘
```

### 2.2 Development Activities per IEC 62304

| Activity | Class A | Class B | Class C | Horizon Applies |
|---|---|---|---|---|
| Software development planning | ✅ | ✅ | ✅ | ✅ |
| Software requirements analysis | ✅ | ✅ | ✅ | ✅ |
| Software architectural design | — | ✅ | ✅ | ✅ |
| Software detailed design | — | — | ✅ | ✅ |
| Software unit implementation | ✅ | ✅ | ✅ | ✅ |
| Software unit verification | — | — | ✅ | ✅ |
| Software integration and integration testing | — | ✅ | ✅ | ✅ |
| Software system testing | ✅ | ✅ | ✅ | ✅ |
| Software release | ✅ | ✅ | ✅ | ✅ |

### 2.3 Development Tools

| Tool | Purpose | Version | Validation Status |
|---|---|---|---|
| Git | Version control | Latest | Tool qualification not required (well-established) |
| Jira | Requirements management, traceability | Cloud | Validated for intended use |
| Segger Embedded Studio / VS Code | Firmware IDE | [Ver] | Tool qualification per IEC 62304 |
| GCC ARM | Firmware compiler | [Ver] | Compiler validation testing performed |
| PyTorch / TensorFlow | AI model development | [Ver] | Validated for model training |
| React Native CLI | Mobile app build | [Ver] | Build output verified |
| Jest / Pytest / Unity (C) | Unit testing frameworks | [Ver] | N/A (test tools) |
| SonarQube | Static code analysis | [Ver] | N/A (analysis tool) |
| Jenkins / GitHub Actions | CI/CD | [Ver] | Pipeline validation performed |

### 2.4 Configuration Management

| Element | Method |
|---|---|
| Source code | Git repository with branch protection, code review (PR) required |
| Requirements | Jira with traceability links |
| Documents | Document control system (QMS) |
| Build artifacts | CI/CD with artifact versioning |
| Release management | Git tags, release notes, checksum verification |

---

## 3. Software Requirements Specification

### 3.1 Firmware Requirements (nRF52832)

| Req ID | Requirement | Type | Priority | Verification |
|---|---|---|---|---|
| FW-REQ-001 | The firmware shall acquire ECG data from ADS1298 at 500 Hz per channel, 24-bit resolution | Functional | Mandatory | Unit test + bench test |
| FW-REQ-002 | The firmware shall apply bandpass filtering (0.05–150 Hz) to the raw ECG signal | Functional | Mandatory | Unit test + frequency response test |
| FW-REQ-003 | The firmware shall apply 50/60 Hz notch filter | Functional | Mandatory | Unit test |
| FW-REQ-004 | The firmware shall detect electrode disconnection via impedance measurement | Functional | Mandatory | Unit test + bench test |
| FW-REQ-005 | The firmware shall transmit ECG data via BLE to the paired mobile device | Functional | Mandatory | Integration test |
| FW-REQ-006 | The firmware shall buffer ECG data locally when BLE is disconnected (≥8 hours) | Functional | Mandatory | Unit test |
| FW-REQ-007 | The firmware shall monitor battery level and generate alerts at ≤20% and ≤5% | Functional | Mandatory | Unit test |
| FW-REQ-008 | The firmware shall support secure OTA updates with dual-bank and rollback | Functional | Mandatory | Integration test |
| FW-REQ-009 | The firmware shall use BLE Secure Connections with AES-128 encryption | Security | Mandatory | Security test |
| FW-REQ-010 | The firmware shall implement watchdog timer for crash recovery | Reliability | Mandatory | Unit test |

### 3.2 Backend Requirements

| Req ID | Requirement | Type | Priority |
|---|---|---|---|
| BE-REQ-001 | The backend shall receive ECG data from mobile apps via HTTPS/TLS 1.3 | Functional | Mandatory |
| BE-REQ-002 | The backend shall store ECG data with AES-256 encryption at rest | Security | Mandatory |
| BE-REQ-003 | The backend shall process ECG data through the AI module within 30 seconds of receipt | Performance | Mandatory |
| BE-REQ-004 | The backend shall implement OAuth 2.0 authentication for all API endpoints | Security | Mandatory |
| BE-REQ-005 | The backend shall support RBAC (clinician, admin, patient roles) | Security | Mandatory |
| BE-REQ-006 | The backend shall maintain audit logs for all data access events | Security | Mandatory |
| BE-REQ-007 | The backend shall achieve ≥99.9% uptime (SLA) | Availability | Mandatory |
| BE-REQ-008 | The backend shall implement rate limiting to prevent API abuse | Security | Mandatory |

### 3.3 AI Module Requirements

| Req ID | Requirement | Type | Priority |
|---|---|---|---|
| AI-REQ-001 | The AI module shall detect AF with sensitivity ≥95% and specificity ≥95% | Performance | Mandatory |
| AI-REQ-002 | The AI module shall detect VT with sensitivity ≥95% and specificity ≥98% | Performance | Mandatory |
| AI-REQ-003 | The AI module shall classify ECG segments into defined arrhythmia categories | Functional | Mandatory |
| AI-REQ-004 | The AI module shall provide confidence scores for each classification | Functional | Mandatory |
| AI-REQ-005 | The AI module shall process a 10-second ECG segment in <5 seconds | Performance | Mandatory |
| AI-REQ-006 | The AI module shall be a locked algorithm (no continuous learning in production) | Regulatory | Mandatory |
| AI-REQ-007 | The AI module shall log all inference inputs and outputs for auditability | Regulatory | Mandatory |

### 3.4 Mobile App Requirements

| Req ID | Requirement | Type | Priority |
|---|---|---|---|
| APP-REQ-001 | The app shall display real-time ECG waveform from the Holter device | Functional | Mandatory |
| APP-REQ-002 | The app shall display battery level of the Holter device | Functional | Mandatory |
| APP-REQ-003 | The app shall allow the patient to log symptoms with timestamp | Functional | Mandatory |
| APP-REQ-004 | The app shall display alerts received from the backend | Functional | Mandatory |
| APP-REQ-005 | The app shall transmit ECG data to the backend when Internet is available | Functional | Mandatory |
| APP-REQ-006 | The app shall store ECG data locally when offline and sync when reconnected | Functional | Mandatory |
| APP-REQ-007 | The app shall support iOS 15+ and Android 12+ | Compatibility | Mandatory |

---

## 4. Software Architecture

### 4.1 System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                     HORIZON MEDICAL SYSTEM                          │
│                                                                     │
│  ┌──────────────┐    BLE     ┌──────────────┐   HTTPS   ┌────────┐│
│  │  HOLTER       │◄─────────▶│  MOBILE APP  │◄─────────▶│BACKEND ││
│  │  DEVICE       │           │  (iOS/Android)│           │(Cloud) ││
│  │              │           │              │           │        ││
│  │ ┌──────────┐ │           │ ┌──────────┐ │           │┌──────┐││
│  │ │ADS1298   │ │           │ │ECG Display│ │           ││API   │││
│  │ │(AFE)     │ │           │ │Symptom Log│ │           ││Server│││
│  │ └──────────┘ │           │ │Alerts     │ │           │└──────┘││
│  │ ┌──────────┐ │           │ │BLE Manager│ │           │┌──────┐││
│  │ │nRF52832  │ │           │ │Data Sync  │ │           ││AI/ML │││
│  │ │(MCU+BLE) │ │           │ └──────────┘ │           ││Engine│││
│  │ └──────────┘ │           └──────────────┘           │└──────┘││
│  │ ┌──────────┐ │                                       │┌──────┐││
│  │ │Battery   │ │                                       ││DB    │││
│  │ │Mgmt (BMS)│ │                                       ││(Encr)│││
│  │ └──────────┘ │                                       │└──────┘││
│  └──────────────┘                                       └────────┘│
│                                                              │     │
│                                                              ▼     │
│                                                     ┌────────────┐ │
│                                                     │ DASHBOARD  │ │
│                                                     │ WEB        │ │
│                                                     │ (Clinical) │ │
│                                                     └────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.2 Data Flow

```
Electrodes → ADS1298 (ADC 24-bit, 500Hz) → nRF52832 (filtering, buffering)
    → BLE → Mobile App (display, cache) → HTTPS/TLS 1.3 → Backend API
    → AI Engine (CNN-LSTM inference) → Database (encrypted storage)
    → Dashboard (clinical review) → PDF Report
```

### 4.3 Software Decomposition

| Software System | Software Items | SOUP Items |
|---|---|---|
| Firmware | ECG acquisition, digital filter, BLE stack, OTA updater, battery manager, electrode monitor | Zephyr RTOS, Nordic SDK, mbed TLS |
| Backend | API server, data pipeline, auth service, notification service | Node.js/Python runtime, Express/FastAPI, PostgreSQL, Redis |
| AI Module | Preprocessing, CNN-LSTM model, inference engine, confidence scorer | PyTorch/TensorFlow, NumPy, SciPy |
| Mobile App | BLE manager, ECG renderer, data sync, UI components | React Native, BLE library |
| Dashboard | Auth module, ECG viewer, report generator, patient manager | React.js, Chart.js/D3.js |

---

## 5. Software Detailed Design

### 5.1 Firmware Modules

| Module | Description | Interfaces | Safety Relevance |
|---|---|---|---|
| `ecg_acquisition` | Configures ADS1298, reads samples via SPI, manages sampling rate | SPI to ADS1298, internal queue | Class C — primary data source |
| `digital_filter` | Implements IIR bandpass (0.05–150 Hz) and FIR notch (50/60 Hz) | Internal data pipeline | Class C — signal integrity |
| `ble_comm` | Manages BLE advertising, connection, data transmission | BLE stack API | Class C — data transmission |
| `data_buffer` | Circular buffer for offline storage (flash memory) | Internal storage API | Class C — data preservation |
| `electrode_monitor` | Monitors electrode impedance, detects disconnection | ADC channel, alert system | Class C — data quality |
| `battery_manager` | Monitors voltage, manages power states, generates alerts | ADC, GPIO, alert system | Class B — operational continuity |
| `ota_updater` | Dual-bank firmware update with rollback | BLE, flash memory | Class C — device integrity |
| `watchdog` | Hardware watchdog timer, system health monitoring | WDT peripheral | Class B — reliability |

### 5.2 AI Module Components

| Component | Description | Input | Output |
|---|---|---|---|
| `preprocessor` | Resamples, normalizes, segments ECG into 10-second windows | Raw ECG data (3-channel, 500 Hz) | Normalized segments (10s × 3ch × 5000 samples) |
| `feature_extractor` (CNN) | Convolutional layers extract spatial features from ECG segments | Preprocessed segments | Feature vectors |
| `sequence_analyzer` (LSTM) | LSTM layers analyze temporal patterns across segments | Feature vectors (sequential) | Temporal feature representation |
| `classifier` | Dense layers + softmax for arrhythmia classification | Temporal features | Class probabilities + confidence score |
| `post_processor` | Applies thresholds, aggregates results, generates alerts | Class probabilities | Arrhythmia labels, alert priority |

---

## 6. Software Unit Testing

### 6.1 Unit Testing Strategy

| Software Item | Test Framework | Coverage Target | Approach |
|---|---|---|---|
| Firmware | Unity (C), CMock | ≥80% line coverage | White-box testing of critical modules |
| Backend | Jest (Node.js) / Pytest (Python) | ≥80% line coverage | White-box + boundary testing |
| AI Module | Pytest | ≥70% line coverage + model tests | Unit tests + performance tests per class |
| Mobile App | Jest + React Native Testing Library | ≥70% line coverage | Component + integration tests |
| Dashboard | Jest + React Testing Library | ≥70% line coverage | Component tests |

### 6.2 Critical Unit Tests (Firmware)

| Test ID | Module | Test Description | Expected Result | Status |
|---|---|---|---|---|
| UT-FW-001 | `digital_filter` | Verify bandpass filter with known sinusoidal inputs at 0.01, 0.05, 1, 50, 150, 200 Hz | Correct attenuation per specification | ⬜ |
| UT-FW-002 | `digital_filter` | Verify notch filter attenuates 50 Hz by ≥40 dB | ≥40 dB attenuation at 50 Hz | ⬜ |
| UT-FW-003 | `electrode_monitor` | Verify disconnection detection when impedance > 50 kΩ | Alert generated within 5 seconds | ⬜ |
| UT-FW-004 | `data_buffer` | Fill buffer to capacity, verify oldest data is overwritten (circular) | FIFO behavior confirmed | ⬜ |
| UT-FW-005 | `battery_manager` | Simulate voltage at 20% and 5% thresholds | Correct alerts generated | ⬜ |

---

## 7. Software Integration Testing

### 7.1 Integration Test Cases

| Test ID | Components | Test Description | Expected Result | Status |
|---|---|---|---|---|
| IT-001 | Firmware → BLE → App | ECG data transmitted from device to app in real-time | ECG displayed on app with <2s latency | ⬜ |
| IT-002 | App → Backend | ECG data uploaded from app to backend via HTTPS | Data received, validated, stored in DB | ⬜ |
| IT-003 | Backend → AI Module | ECG data processed by AI engine | Arrhythmia classification returned within 30s | ⬜ |
| IT-004 | Backend → Dashboard | Clinical data displayed on dashboard | Correct patient data, ECG, AI results shown | ⬜ |
| IT-005 | Backend → App (alerts) | Alert notification sent from backend to app | Push notification received on app | ⬜ |
| IT-006 | Firmware (offline) → App (reconnect) → Backend | Buffered data synced after BLE reconnection | All buffered data successfully uploaded | ⬜ |
| IT-007 | OTA Update flow | Firmware update via BLE from app | Firmware updated successfully, rollback tested | ⬜ |

---

## 8. Software System Testing

### 8.1 System Test Cases

| Test ID | Description | Acceptance Criteria | Status |
|---|---|---|---|
| ST-001 | End-to-end: 48-hour continuous monitoring simulation | No data loss, all arrhythmias detected, battery sustains | ⬜ |
| ST-002 | Performance under maximum load (concurrent users on dashboard) | Response time <3s with 50 concurrent users | ⬜ |
| ST-003 | Offline mode: device operates without Internet for 8 hours, then syncs | All data recovered and processed correctly | ⬜ |
| ST-004 | Security: penetration testing of API, BLE, dashboard | No critical/high vulnerabilities | ⬜ |
| ST-005 | Stress test: rapid BLE connect/disconnect cycles | No crash, no data corruption | ⬜ |
| ST-006 | Compatibility: test on 5 Android + 3 iOS devices | App functions correctly on all devices | ⬜ |
| ST-007 | Recovery: backend crash and restart during data processing | No data loss, processing resumes | ⬜ |
| ST-008 | AI performance regression test with golden dataset | Metrics within specification (Se ≥95% AF, Se ≥95% VT) | ⬜ |

---

## 9. Software Validation

### 9.1 Validation Activities

| Activity | Method | Acceptance Criteria |
|---|---|---|
| Clinical validation | Comparative study vs. standard Holter | Diagnostic concordance ≥90% |
| AI clinical validation | Independent dataset evaluation | Se/Sp within specification |
| Usability validation | Summative study (patients + clinicians) | No critical use errors |
| Home use validation | Real-world deployment in patient homes | Task completion ≥95% |

### 9.2 Traceability Matrix Summary

```
User Needs → Product Requirements → Software Requirements → Design → Code → Unit Tests → Integration Tests → System Tests → Validation
```

Complete bidirectional traceability is maintained in [Jira/Requirements Management Tool].

---

## 10. Software Maintenance

### 10.1 Maintenance Plan

| Activity | Frequency | Responsible |
|---|---|---|
| Bug fix releases | As needed (severity-based SLA) | Development team |
| Security patches | As needed (CVSS-based priority) | Security team |
| Planned updates (features) | Quarterly | Product team |
| AI model updates | Annual (or as new data available) | AI team |
| SOUP/dependency updates | Quarterly review | Development team |
| Vulnerability monitoring | Continuous (SBOM-based) | Security team |

### 10.2 Change Control for Software

All software changes follow the Design Change Control process:
1. Change Request submitted with impact assessment
2. Risk analysis of the change (ISO 14971)
3. Regression analysis to determine required re-testing
4. Implementation with code review
5. Regression testing execution
6. Release approval by Quality
7. Version increment and release notes

### 10.3 Problem Resolution

| Severity | Response Time | Resolution Target |
|---|---|---|
| Critical (safety-related) | 4 hours | 24 hours (hotfix) |
| High (major functionality) | 24 hours | 1 week |
| Medium (minor functionality) | 1 week | Next planned release |
| Low (cosmetic, minor) | 2 weeks | Future release |

---

## Appendix: SOUP (Software of Unknown Provenance) List

| SOUP Item | Version | Manufacturer | License | Risk Class | Anomaly List Reviewed |
|---|---|---|---|---|---|
| Zephyr RTOS | [Ver] | Zephyr Project | Apache 2.0 | Class C | ✅ |
| Nordic nRF5 SDK | [Ver] | Nordic Semiconductor | BSD | Class C | ✅ |
| mbed TLS | [Ver] | ARM | Apache 2.0 | Class C | ✅ |
| PyTorch | [Ver] | Meta/PyTorch | BSD | Class C | ✅ |
| React Native | [Ver] | Meta | MIT | Class B | ✅ |
| React.js | [Ver] | Meta | MIT | Class B | ✅ |
| Node.js | [Ver] | OpenJS Foundation | MIT | Class C | ✅ |
| PostgreSQL | [Ver] | PostgreSQL Global | PostgreSQL | Class C | ✅ |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Ingeniería de Software | Creación inicial |

---

*Documento confidencial — Horizon Medical*
