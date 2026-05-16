# HORIZON MEDICAL — Design History File (DHF)

**Documento:** HM-DHF-001  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Referencia:** 21 CFR 820.30, ISO 13485:2016 Sección 7.3  

---

## Tabla de Contenidos

1. [Design and Development Planning](#1-design-and-development-planning)
2. [Design Inputs](#2-design-inputs)
3. [Design Outputs](#3-design-outputs)
4. [Design Reviews](#4-design-reviews)
5. [Design Verification](#5-design-verification)
6. [Design Validation](#6-design-validation)
7. [Design Transfer](#7-design-transfer)
8. [Design Changes](#8-design-changes)

---

## 1. Design and Development Planning

### 1.1 Información del Proyecto

| Campo | Detalle |
|---|---|
| **Nombre del proyecto** | Horizon Medical Holter ECG System |
| **Código del proyecto** | HM-H100 |
| **Project Manager** | [Nombre] |
| **Design Lead** | [Nombre] |
| **Inicio del diseño** | [Fecha] |
| **Design Freeze** | [Fecha] |
| **Design Transfer** | [Fecha] |

### 1.2 Fases del Diseño

| Fase | Descripción | Entregables | Gate Review |
|---|---|---|---|
| **Fase 0 — Concept** | Definición del concepto, estudio de factibilidad | Concept document, feasibility report | DR-0 |
| **Fase 1 — Planning** | Plan de diseño, requisitos iniciales | Design Plan, initial requirements | DR-1 |
| **Fase 2 — Input** | Requisitos completos, normas aplicables | SRS, HRS, risk assessment preliminar | DR-2 |
| **Fase 3 — Output** | Diseño detallado, prototipos | Specifications, schematics, SW architecture | DR-3 |
| **Fase 4 — Verification** | Testing y verificación | Test reports, V&V matrix | DR-4 |
| **Fase 5 — Validation** | Validación clínica y usabilidad | Clinical data, usability report | DR-5 |
| **Fase 6 — Transfer** | Transferencia a producción | DMR, manufacturing procedures | DR-6 |

### 1.3 Equipo de Diseño

| Rol | Responsabilidad |
|---|---|
| Project Manager | Gestión del proyecto, timeline, recursos |
| Hardware Engineer | Diseño electrónico, PCB, selección de componentes |
| Firmware Engineer | Desarrollo de firmware nRF52832, drivers, BLE stack |
| Software Engineer (Backend) | Arquitectura cloud, API, base de datos |
| AI/ML Engineer | Modelo CNN-LSTM, entrenamiento, validación |
| Mobile Developer | App iOS/Android |
| Frontend Developer | Dashboard web |
| Quality/Regulatory | QMS, risk management, regulatory submissions |
| Clinical Specialist | Evaluación clínica, requisitos clínicos |
| Industrial Designer | Diseño mecánico, ergonomía, carcasa |

---

## 2. Design Inputs

### 2.1 User Needs (Necesidades del Usuario)

| ID | User Need | Fuente | Prioridad |
|---|---|---|---|
| UN-001 | El paciente debe poder usar el dispositivo cómodamente durante 24–48 horas | Entrevistas con pacientes y cardiólogos | Alta |
| UN-002 | El cardiólogo debe poder revisar el ECG y recibir alertas de arritmias | Entrevistas con cardiólogos | Alta |
| UN-003 | El sistema debe detectar automáticamente arritmias clínicamente significativas | Requisito clínico | Alta |
| UN-004 | El dispositivo debe ser fácil de colocar y operar para personal no especializado | Entrevistas con enfermeros | Media |
| UN-005 | Los datos del paciente deben estar protegidos y ser confidenciales | Requisito regulatorio (HIPAA/GDPR) | Alta |
| UN-006 | El sistema debe funcionar sin conexión a Internet temporal | Feedback clínico | Media |
| UN-007 | El cardiólogo debe poder generar informes clínicos | Entrevistas con cardiólogos | Alta |
| UN-008 | El dispositivo debe ser liviano y discreto | Entrevistas con pacientes | Media |
| UN-009 | La batería debe durar al menos 48 horas | Requisito clínico | Alta |
| UN-010 | El sistema debe permitir correlación de síntomas del paciente con ECG | Práctica clínica estándar | Media |

### 2.2 Product Requirements (Requisitos del Producto)

#### 2.2.1 Requisitos de Hardware

| ID | Requisito | Derivado de | Criterio de Aceptación |
|---|---|---|---|
| HW-001 | El dispositivo debe adquirir ECG de 3 canales simultáneamente | UN-002 | 3 canales funcionales verificados |
| HW-002 | Frecuencia de muestreo ≥ 500 Hz por canal | IEC 60601-2-47 | Medición con osciloscopio |
| HW-003 | Resolución ADC ≥ 24 bits | Requisito de calidad de señal | Verificación de especificación ADS1298 |
| HW-004 | Autonomía de batería ≥ 48 horas en monitoreo continuo | UN-009 | Test de duración de batería |
| HW-005 | Peso del dispositivo < 50 g (sin electrodos) | UN-008 | Pesaje en balanza calibrada |
| HW-006 | Dimensiones ≤ 65 × 40 × 12 mm | UN-008 | Medición con calibrador |
| HW-007 | Conectividad BLE 5.0 con alcance ≥ 10 m | Requisito de conectividad | Test de alcance BLE |
| HW-008 | Corriente de fuga del paciente < 10 µA (condición normal) | IEC 60601-1 | Test de seguridad eléctrica |
| HW-009 | CMRR ≥ 100 dB | IEC 60601-2-47 | Test de laboratorio |
| HW-010 | Ruido referido a entrada ≤ 30 µV pp | IEC 60601-2-47 | Test de laboratorio |

#### 2.2.2 Requisitos de Software

| ID | Requisito | Derivado de | Criterio de Aceptación |
|---|---|---|---|
| SW-001 | El firmware debe filtrar la señal ECG (0.05–150 Hz paso-banda + notch 50/60 Hz) | Calidad de señal | Respuesta en frecuencia medida |
| SW-002 | El backend debe almacenar datos ECG de forma segura (encryption at rest) | UN-005 | Auditoría de seguridad |
| SW-003 | El módulo IA debe detectar FA con sensibilidad ≥ 95% y especificidad ≥ 95% | UN-003 | Validación con dataset anotado |
| SW-004 | El módulo IA debe detectar TV con sensibilidad ≥ 95% y especificidad ≥ 98% | UN-003 | Validación con dataset anotado |
| SW-005 | La app móvil debe mostrar ECG en tiempo real con latencia < 2 segundos | UN-002 | Test de latencia |
| SW-006 | El dashboard debe permitir generación de informes PDF | UN-007 | Test funcional |
| SW-007 | El sistema debe almacenar datos localmente si no hay conexión a Internet | UN-006 | Test de offline mode |
| SW-008 | Todos los datos en tránsito deben estar cifrados con TLS 1.3 | UN-005 | Verificación de protocolo |
| SW-009 | La app debe soportar registro de síntomas del paciente con timestamp | UN-010 | Test funcional |
| SW-010 | El tiempo de respuesta de alertas críticas (TV/FV) debe ser < 30 segundos | Requisito clínico | Test de latencia end-to-end |

#### 2.2.3 Requisitos Regulatorios y de Normas

| ID | Requisito | Norma | Criterio |
|---|---|---|---|
| REG-001 | Cumplimiento con IEC 60601-1:2020 | IEC 60601-1 | Reporte de lab acreditado |
| REG-002 | Cumplimiento con IEC 60601-1-2:2014+AMD1 | IEC 60601-1-2 | Reporte de lab acreditado |
| REG-003 | Cumplimiento con IEC 60601-2-47:2012+AMD1 | IEC 60601-2-47 | Reporte de lab acreditado |
| REG-004 | Software desarrollado según IEC 62304:2006+AMD1 | IEC 62304 | Documentación de software |
| REG-005 | Biocompatibilidad según ISO 10993-1, -5, -10 | ISO 10993 | Reportes de lab |
| REG-006 | Gestión de riesgos según ISO 14971:2019 | ISO 14971 | Risk Management File |
| REG-007 | Usabilidad según IEC 62366-1:2015 | IEC 62366 | Usability Engineering File |
| REG-008 | Seguridad de batería según IEC 62133-2 | IEC 62133-2 | Reporte de lab |

---

## 3. Design Outputs

### 3.1 Documentos de Diseño de Hardware

| ID | Documento | Versión | Estado |
|---|---|---|---|
| DO-HW-001 | Esquemático electrónico (PCB) | [Rev] | [Estado] |
| DO-HW-002 | Layout PCB (Gerber files) | [Rev] | [Estado] |
| DO-HW-003 | Bill of Materials (BOM) | [Rev] | [Estado] |
| DO-HW-004 | Mechanical drawings (carcasa, enclosure) | [Rev] | [Estado] |
| DO-HW-005 | 3D model (STEP/IGES) | [Rev] | [Estado] |
| DO-HW-006 | Assembly instructions | [Rev] | [Estado] |
| DO-HW-007 | Test fixtures specifications | [Rev] | [Estado] |

### 3.2 Documentos de Diseño de Software

| ID | Documento | Versión | Estado |
|---|---|---|---|
| DO-SW-001 | Software Requirements Specification (SRS) | [Rev] | [Estado] |
| DO-SW-002 | Software Architecture Document | [Rev] | [Estado] |
| DO-SW-003 | Software Detailed Design — Firmware | [Rev] | [Estado] |
| DO-SW-004 | Software Detailed Design — Backend | [Rev] | [Estado] |
| DO-SW-005 | Software Detailed Design — AI Module | [Rev] | [Estado] |
| DO-SW-006 | Software Detailed Design — Mobile App | [Rev] | [Estado] |
| DO-SW-007 | Software Detailed Design — Dashboard | [Rev] | [Estado] |
| DO-SW-008 | Database Schema | [Rev] | [Estado] |
| DO-SW-009 | API Specification (OpenAPI/Swagger) | [Rev] | [Estado] |
| DO-SW-010 | AI Model Architecture Document | [Rev] | [Estado] |

### 3.3 Etiquetado y Empaque

| ID | Documento | Versión | Estado |
|---|---|---|---|
| DO-LBL-001 | Device labeling artwork | [Rev] | [Estado] |
| DO-LBL-002 | Instructions for Use (IFU) — English | [Rev] | [Estado] |
| DO-LBL-003 | Instructions for Use (IFU) — Español | [Rev] | [Estado] |
| DO-LBL-004 | Quick Start Guide | [Rev] | [Estado] |
| DO-LBL-005 | Packaging specification | [Rev] | [Estado] |

---

## 4. Design Reviews

### 4.1 Registro de Design Reviews

| Review ID | Fase | Fecha | Participantes | Resultado | Acciones |
|---|---|---|---|---|---|
| DR-0 | Concept | [Fecha] | [Lista] | ☐ Aprobado / ☐ Aprobado con condiciones / ☐ Rechazado | [Acciones] |
| DR-1 | Planning | [Fecha] | [Lista] | ☐ Aprobado / ☐ Aprobado con condiciones / ☐ Rechazado | [Acciones] |
| DR-2 | Input | [Fecha] | [Lista] | ☐ Aprobado / ☐ Aprobado con condiciones / ☐ Rechazado | [Acciones] |
| DR-3 | Output | [Fecha] | [Lista] | ☐ Aprobado / ☐ Aprobado con condiciones / ☐ Rechazado | [Acciones] |
| DR-4 | Verification | [Fecha] | [Lista] | ☐ Aprobado / ☐ Aprobado con condiciones / ☐ Rechazado | [Acciones] |
| DR-5 | Validation | [Fecha] | [Lista] | ☐ Aprobado / ☐ Aprobado con condiciones / ☐ Rechazado | [Acciones] |
| DR-6 | Transfer | [Fecha] | [Lista] | ☐ Aprobado / ☐ Aprobado con condiciones / ☐ Rechazado | [Acciones] |

> **Nota:** Cada acta de Design Review debe incluir: fecha, participantes (con roles), items revisados, decisiones tomadas, action items con responsables y fechas, y firma del chairman.

---

## 5. Design Verification

### 5.1 Matriz de Trazabilidad de Verificación

| Req ID | Requisito | Test Protocol ID | Test Report ID | Resultado | Estado |
|---|---|---|---|---|---|
| HW-001 | 3 canales ECG | TP-HW-001 | TR-HW-001 | ☐ PASS / ☐ FAIL | [Estado] |
| HW-002 | Fs ≥ 500 Hz | TP-HW-002 | TR-HW-002 | ☐ PASS / ☐ FAIL | [Estado] |
| HW-004 | Batería ≥ 48h | TP-HW-004 | TR-HW-004 | ☐ PASS / ☐ FAIL | [Estado] |
| HW-005 | Peso < 50g | TP-HW-005 | TR-HW-005 | ☐ PASS / ☐ FAIL | [Estado] |
| HW-008 | Leakage < 10µA | TP-HW-008 | TR-HW-008 | ☐ PASS / ☐ FAIL | [Estado] |
| HW-009 | CMRR ≥ 100dB | TP-HW-009 | TR-HW-009 | ☐ PASS / ☐ FAIL | [Estado] |
| SW-001 | Filtrado ECG | TP-SW-001 | TR-SW-001 | ☐ PASS / ☐ FAIL | [Estado] |
| SW-003 | IA FA Se≥95% | TP-SW-003 | TR-SW-003 | ☐ PASS / ☐ FAIL | [Estado] |
| SW-004 | IA TV Se≥95% | TP-SW-004 | TR-SW-004 | ☐ PASS / ☐ FAIL | [Estado] |
| SW-005 | Latencia < 2s | TP-SW-005 | TR-SW-005 | ☐ PASS / ☐ FAIL | [Estado] |
| REG-001 | IEC 60601-1 | TP-REG-001 | TR-REG-001 | ☐ PASS / ☐ FAIL | [Estado] |
| REG-002 | IEC 60601-1-2 | TP-REG-002 | TR-REG-002 | ☐ PASS / ☐ FAIL | [Estado] |
| REG-005 | ISO 10993 | TP-REG-005 | TR-REG-005 | ☐ PASS / ☐ FAIL | [Estado] |

### 5.2 Resumen de Resultados de Verificación

| Categoría | Total Tests | PASS | FAIL | Pending | % Complete |
|---|---|---|---|---|---|
| Hardware | [N] | [N] | [N] | [N] | [%] |
| Software | [N] | [N] | [N] | [N] | [%] |
| Regulatory Testing | [N] | [N] | [N] | [N] | [%] |
| **TOTAL** | **[N]** | **[N]** | **[N]** | **[N]** | **[%]** |

---

## 6. Design Validation

### 6.1 Actividades de Validación

| ID | Actividad | Protocolo | Reporte | Estado |
|---|---|---|---|---|
| VAL-001 | Clinical validation study (Holter vs. gold standard) | VP-001 | VR-001 | ⬜ Pendiente |
| VAL-002 | AI algorithm clinical validation | VP-002 | VR-002 | ⬜ Pendiente |
| VAL-003 | Summative usability study — patients | VP-003 | VR-003 | ⬜ Pendiente |
| VAL-004 | Summative usability study — clinicians | VP-004 | VR-004 | ⬜ Pendiente |
| VAL-005 | Home use environment validation | VP-005 | VR-005 | ⬜ Pendiente |
| VAL-006 | Software system validation | VP-006 | VR-006 | ⬜ Pendiente |

### 6.2 Clinical Validation Protocol (Resumen)

| Parámetro | Detalle |
|---|---|
| **Objetivo** | Demostrar que Horizon HM-H100 proporciona ECG de calidad diagnóstica equivalente a un Holter estándar |
| **Diseño** | Prospectivo, comparativo, evaluador cegado |
| **Comparador** | Holter ECG de 12 derivaciones (gold standard) |
| **Endpoints** | Sensibilidad/especificidad de detección de arritmias, calidad de señal, concordancia diagnóstica |
| **Muestra** | N = 100–200 pacientes adultos con indicación de Holter |
| **Criterio de éxito** | Concordancia diagnóstica ≥ 90%, sensibilidad FA ≥ 95%, sensibilidad TV ≥ 95% |

---

## 7. Design Transfer

### 7.1 Checklist de Transferencia

- [ ] Device Master Record (DMR) completo y aprobado
- [ ] Manufacturing procedures documentados y validados
- [ ] Incoming inspection procedures para todos los componentes
- [ ] In-process inspection procedures
- [ ] Final inspection and testing procedures
- [ ] Packaging and labeling procedures
- [ ] Equipment calibration procedures
- [ ] Supplier qualification completada
- [ ] Training del personal de manufactura completada
- [ ] Pilot production run ejecutada y aprobada
- [ ] Process validation completada (IQ/OQ/PQ)

### 7.2 Device Master Record (DMR) — Contenido

| Elemento DMR | Documento | Referencia |
|---|---|---|
| Product specifications | Especificaciones del producto terminado | DO-HW-001 a DO-HW-007 |
| BOM | Bill of Materials completa | DO-HW-003 |
| Manufacturing procedures | Instrucciones de ensamblaje, soldadura, programación | MFG-001 a MFG-xxx |
| Quality procedures | Inspección, testing, criterios de aceptación | QP-001 a QP-xxx |
| Packaging specifications | Materiales, configuración, etiquetado | DO-LBL-005 |
| Labeling | IFU, etiquetas, Quick Start Guide | DO-LBL-001 a DO-LBL-005 |

---

## 8. Design Changes

### 8.1 Registro de Cambios de Diseño

| Change ID | Fecha | Descripción | Justificación | Impacto | Aprobado por | V&V Requerida |
|---|---|---|---|---|---|---|
| DCR-001 | [Fecha] | [Descripción del cambio] | [Justificación] | [Hardware/Software/Labeling] | [Nombre] | [Sí/No — detalle] |
| DCR-002 | [Fecha] | [Descripción] | [Justificación] | [Impacto] | [Nombre] | [Sí/No] |

### 8.2 Proceso de Control de Cambios

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Change       │────▶│  Impact      │────▶│  Risk        │
│  Request      │     │  Assessment  │     │  Assessment  │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
                                                  ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Implement   │◄────│  Approval    │◄────│  V&V Plan    │
│  Change      │     │  (CCB)       │     │  Update      │
└──────┬───────┘     └──────────────┘     └──────────────┘
       │
       ▼
┌──────────────┐     ┌──────────────┐
│  V&V of      │────▶│  DHF/DMR     │
│  Change      │     │  Update      │
└──────────────┘     └──────────────┘
```

---

## Apéndices

### Apéndice A — Lista de Documentos del DHF

| # | Documento | ID | Rev | Fecha |
|---|---|---|---|---|
| 1 | Design and Development Plan | HM-DDP-001 | [Rev] | [Fecha] |
| 2 | User Needs Document | HM-UND-001 | [Rev] | [Fecha] |
| 3 | Product Requirements Specification | HM-PRS-001 | [Rev] | [Fecha] |
| 4 | Software Requirements Specification | HM-SRS-001 | [Rev] | [Fecha] |
| 5 | Risk Management File | HM-RMF-001 | [Rev] | [Fecha] |
| 6 | Hardware Design Specifications | HM-HDS-001 | [Rev] | [Fecha] |
| 7 | Software Architecture Document | HM-SAD-001 | [Rev] | [Fecha] |
| 8 | Verification Test Reports | HM-VTR-xxx | [Rev] | [Fecha] |
| 9 | Validation Protocols & Reports | HM-VAL-xxx | [Rev] | [Fecha] |
| 10 | Design Review Minutes | HM-DRM-xxx | [Rev] | [Fecha] |
| 11 | Design Change Records | HM-DCR-xxx | [Rev] | [Fecha] |
| 12 | Design Transfer Records | HM-DTR-001 | [Rev] | [Fecha] |
| 13 | Usability Engineering File | HM-UEF-001 | [Rev] | [Fecha] |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial |

---

*Documento confidencial — Horizon Medical*
