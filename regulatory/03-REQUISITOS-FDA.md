# HORIZON MEDICAL — Requisitos FDA (Estados Unidos)

**Documento:** HM-REG-004  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Marco regulatorio:** 21 CFR Parts 800–898, FD&C Act  

---

## Tabla de Contenidos

1. [Vía Regulatoria](#1-vía-regulatoria)
2. [Predicado (Predicate Device)](#2-predicado-predicate-device)
3. [Design History File (DHF)](#3-design-history-file-dhf)
4. [Device Master Record (DMR)](#4-device-master-record-dmr)
5. [Verificación y Validación](#5-verificación-y-validación)
6. [Biocompatibilidad (ISO 10993)](#6-biocompatibilidad-iso-10993)
7. [Ensayos Clínicos / FDA IDE](#7-ensayos-clínicos--fda-ide)
8. [Software Validation Documentation](#8-software-validation-documentation)
9. [Cybersecurity Documentation](#9-cybersecurity-documentation)
10. [AI/ML Special Controls](#10-aiml-special-controls)
11. [Checklist Completo](#11-checklist-completo)

---

## 1. Vía Regulatoria

### 1.1 Análisis de Vías Regulatorias

| Vía | Aplicabilidad | Recomendación |
|---|---|---|
| **510(k) Premarket Notification** | Dispositivo con predicado sustancialmente equivalente ya en mercado | ✅ **RECOMENDADA** |
| **De Novo Classification** | Dispositivo novedoso de riesgo bajo-moderado sin predicado | ❌ Existen predicados |
| **PMA (Premarket Approval)** | Dispositivo Clase III de alto riesgo | ❌ No aplica (Clase II) |

### 1.2 Justificación de 510(k)

El sistema Horizon Medical Holter ECG califica para la vía **510(k)** porque:

1. **Product Code DRX** (Electrocardiograph, Ambulatory) es un dispositivo Clase II con Special Controls establecidos
2. Existen múltiples predicados sustancialmente equivalentes ya cleared por FDA
3. El dispositivo tiene el mismo uso previsto (monitoreo ambulatorio de ECG) y características tecnológicas similares a los predicados
4. La inclusión de AI/ML para análisis de arritmias es consistente con predicados recientes que incorporan algoritmos computarizados de análisis

### 1.3 Tipo de 510(k)

- **Traditional 510(k):** Recomendado (vs. Special/Abbreviated)
- **eSTAR submission:** Formato electrónico obligatorio desde 2023
- **Product Code:** DRX
- **Review Panel:** Cardiovascular (CV)
- **Regulation Number:** 21 CFR 870.2340

### 1.4 Pre-Submission (Q-Sub)

Se recomienda enérgicamente solicitar un **Pre-Submission Meeting** con FDA antes de someter el 510(k), especialmente para discutir:

- Aceptabilidad del predicado seleccionado
- Requisitos de testing para el componente de IA/ML
- Adecuación del Predetermined Change Control Plan (PCCP) si se considera IA adaptativa
- Requisitos de cybersecurity
- Necesidad de datos clínicos

---

## 2. Predicado (Predicate Device)

### 2.1 Predicado Primario Propuesto

| Característica | Horizon Medical HM-H100 | Predicado: iRhythm Zio XT (K142497) |
|---|---|---|
| **Nombre** | Horizon Medical Holter ECG System | Zio XT Patch System |
| **Uso previsto** | Monitoreo ambulatorio ECG 24–48h con análisis de arritmias | Monitoreo ambulatorio ECG hasta 14 días con análisis de arritmias |
| **Tipo de dispositivo** | Holter ECG ambulatorio | Holter ECG ambulatorio (patch) |
| **Canales ECG** | 3 canales, electrodos convencionales | 1 canal, patch adhesivo |
| **Análisis computarizado** | IA (CNN-LSTM) para detección de arritmias | Algoritmo propietario para detección de arritmias |
| **Arritmias detectadas** | FA, TV, bradicardia, taquicardia, PVC, PAC, pausas, BAV | FA, TV, bradicardia, taquicardia, PVC, PAC, pausas |
| **Conectividad** | BLE → smartphone → cloud | Almacenamiento local → envío por correo → cloud |
| **Visualización en tiempo real** | Sí (vía app) | No (análisis post-hoc) |
| **Clasificación FDA** | Clase II | Clase II |
| **Product Code** | DRX | DRX |

### 2.2 Predicados de Referencia Adicionales

| Predicado | Clearance # | Fabricante | Relevancia |
|---|---|---|---|
| **BioTelemetry MCOT** | K162604 | BioTelemetry/Philips | Transmisión inalámbrica + análisis automatizado |
| **Cardiac Insight Cardea SOLO** | K173437 | Cardiac Insight | Parche ECG + análisis IA |
| **Apple Watch ECG** | DEN180044 | Apple Inc. | ECG con IA (De Novo, pero mismo product code MQP1) |
| **AliveCor KardiaMobile 6L** | K200623 | AliveCor | ECG portátil + IA para detección de FA |

### 2.3 Análisis de Equivalencia Sustancial

| Criterio | Equivalencia | Justificación |
|---|---|---|
| **Intended use** | ✅ Mismo | Monitoreo ambulatorio ECG + detección de arritmias |
| **Technological characteristics** | ✅ Similar | ECG con electrodos de superficie + análisis computarizado |
| **Performance** | ⚠️ Requiere testing | Demostrar rendimiento equivalente o superior |
| **Safety** | ✅ Similar | Mismo perfil de riesgo (dispositivo no invasivo) |
| **Diferencias tecnológicas** | BLE en tiempo real, IA CNN-LSTM | Las diferencias no plantean nuevos riesgos ni afectan la eficacia |

---

## 3. Design History File (DHF)

### 3.1 Estructura Requerida del DHF (21 CFR 820.30)

| Sección | Contenido | Referencia |
|---|---|---|
| **Design and Development Planning** | Plan de diseño, fases, responsabilidades, recursos | 820.30(b) |
| **Design Input** | Requisitos del usuario, requisitos del producto, normas aplicables | 820.30(c) |
| **Design Output** | Especificaciones, planos, firmware, software, BOM | 820.30(d) |
| **Design Review** | Actas de revisiones de diseño en cada fase | 820.30(e) |
| **Design Verification** | Pruebas de que los outputs cumplen con los inputs | 820.30(f) |
| **Design Validation** | Pruebas de que el dispositivo cumple las necesidades del usuario | 820.30(g) |
| **Design Transfer** | Transferencia a manufactura, procedimientos de producción | 820.30(h) |
| **Design Changes** | Control de cambios, revisiones, aprobaciones | 820.30(i) |

> **Referencia:** Ver template detallado en `templates/DHF-Design-History-File.md`

---

## 4. Device Master Record (DMR)

### 4.1 Contenido del DMR (21 CFR 820.181)

| Elemento | Descripción |
|---|---|
| **Device specifications** | Especificaciones del producto terminado, criterios de aceptación |
| **Production process specifications** | Instrucciones de manufactura, ensamblaje, testing |
| **Quality assurance procedures** | Procedimientos de inspección, métodos de ensayo |
| **Packaging and labeling specifications** | Materiales de empaque, instrucciones de empaque, artwork de etiquetas |
| **Installation and servicing procedures** | Procedimientos de instalación (si aplica), mantenimiento |
| **Bill of Materials (BOM)** | Lista completa de componentes, proveedores, especificaciones |

---

## 5. Verificación y Validación

### 5.1 Plan de Verificación (Design Verification)

| Test | Norma/Referencia | Descripción | Lab Acreditado |
|---|---|---|---|
| **Seguridad eléctrica** | IEC 60601-1:2020 | Corriente de fuga, rigidez dieléctrica, tierra protectora | Sí |
| **EMC** | IEC 60601-1-2:2014+AMD1 | Emisiones conducidas/radiadas, inmunidad ESD, RF, etc. | Sí |
| **Norma particular Holter** | IEC 60601-2-47:2012+AMD1 | Requisitos específicos para sistemas ECG ambulatorios | Sí |
| **Precisión de ECG** | IEC 60601-2-47, AHA/AAMI EC38 | Precisión de amplitud, respuesta en frecuencia, CMRR, ruido | Sí |
| **Biocompatibilidad** | ISO 10993-1, -5, -10 | Citotoxicidad, sensibilización, irritación | Sí |
| **Seguridad de batería** | IEC 62133-2:2017 | Cortocircuito, sobrecarga, aplastamiento, temperatura | Sí |
| **Usabilidad** | IEC 62366-1:2015 | Formative evaluation, summative usability test | Interno/Externo |
| **Software V&V** | IEC 62304 | Unit testing, integration, system, regression | Interno |
| **Rendimiento BLE** | Bluetooth SIG specs | Rango, throughput, estabilidad de conexión | Sí |
| **Vida útil y envejecimiento** | Internal protocol | Acelerado y en tiempo real para batería y componentes | Sí |
| **Empaque y transporte** | ASTM D4169 / ISTA | Vibración, caída, compresión | Sí |
| **IP rating** | IEC 60529 | Protección contra ingreso de líquidos y partículas | Sí |

### 5.2 Plan de Validación (Design Validation)

| Validación | Descripción | Muestra |
|---|---|---|
| **Clinical validation** | Comparación con Holter de referencia gold-standard en pacientes | 30–100 pacientes |
| **AI algorithm validation** | Validación independiente de detección de arritmias contra anotaciones de cardiólogos | Dataset externo (>1000 registros) |
| **Usability validation** | Summative usability study con usuarios representativos (pacientes + clínicos) | 15+ usuarios por grupo |
| **Home use validation** | Validación de uso en entorno domiciliario real | 20+ pacientes |

---

## 6. Biocompatibilidad (ISO 10993)

### 6.1 Evaluación de Biocompatibilidad

| Componente | Material | Contacto | Duración | Tests Requeridos |
|---|---|---|---|---|
| **Carcasa** | ABS/PC | Contacto con piel intacta | Prolongado (24–48h) | Citotoxicidad, Sensibilización, Irritación |
| **Electrodos** | Ag/AgCl + adhesivo | Contacto con piel intacta | Prolongado (24–48h) | Citotoxicidad, Sensibilización, Irritación |
| **Cable/correa** | Silicona/TPE | Contacto con piel intacta | Prolongado | Citotoxicidad, Sensibilización |

### 6.2 Tests de Biocompatibilidad Requeridos

| Test | Norma | Descripción |
|---|---|---|
| **Citotoxicidad** | ISO 10993-5:2009 | Evaluación in vitro de toxicidad celular |
| **Sensibilización** | ISO 10993-10:2021 | Test de sensibilización cutánea (GPMT o LLNA) |
| **Irritación** | ISO 10993-10:2021 | Test de irritación cutánea (in vitro o in vivo) |
| **Caracterización química** | ISO 10993-18:2020 | Identificación y cuantificación de extractables/leachables |

> **Nota:** Para electrodos desechables de terceros ya con certificación de biocompatibilidad, se puede referenciar la documentación existente del proveedor.

---

## 7. Ensayos Clínicos / FDA IDE

### 7.1 Necesidad de Estudios Clínicos

Para una 510(k) de un Holter ECG Clase II con predicado, **no se requiere IDE ni ensayo clínico formal** en la mayoría de los casos. Sin embargo, FDA puede solicitar datos clínicos para:

- Validar el rendimiento del algoritmo de IA en población clínica
- Demostrar equivalencia sustancial con el predicado

### 7.2 Estrategia de Datos Clínicos Recomendada

| Nivel | Descripción | Recomendación |
|---|---|---|
| **Nivel 1** | Bench testing + equivalencia con predicado | Mínimo requerido |
| **Nivel 2** | + Validación retrospectiva de IA con datasets anotados (PhysioNet, INCART) | Recomendado |
| **Nivel 3** | + Estudio clínico prospectivo comparativo (vs. Holter estándar) | Fuertemente recomendado para IA |

### 7.3 Estudio Clínico Propuesto (Nivel 3)

| Parámetro | Detalle |
|---|---|
| **Diseño** | Prospectivo, comparativo, cegado para interpretación |
| **Comparador** | Holter ECG estándar de 12 derivaciones (gold standard) |
| **Endpoint primario** | Sensibilidad y especificidad de detección de arritmias (FA, TV) |
| **Endpoints secundarios** | PPV, NPV, tiempo de uso, satisfacción del paciente, eventos adversos |
| **Muestra** | 100–200 pacientes con indicación de Holter ECG |
| **Duración** | 24–48 horas de monitoreo simultáneo |
| **Aprobación IRB** | Requerida |
| **FDA IDE** | No requerido (dispositivo non-significant risk si no se cambia el manejo clínico) |

---

## 8. Software Validation Documentation

### 8.1 Documentación Requerida por FDA

| Documento | Referencia | Descripción |
|---|---|---|
| **Level of Concern** | FDA Guidance "Content of Premarket Submissions for Software..." | Major Level of Concern (decisiones diagnósticas de arritmias potencialmente letales) |
| **Software Description** | — | Descripción funcional, arquitectura, flujo de datos |
| **Device Hazard Analysis** | — | Análisis de riesgos específicos del software |
| **Software Requirements Specification (SRS)** | IEC 62304 | Requisitos funcionales y no funcionales |
| **Architecture Design Chart** | — | Diagrama de arquitectura del software |
| **Software Design Specification (SDS)** | IEC 62304 | Diseño detallado de módulos |
| **Traceability Matrix** | — | Requisitos → Diseño → Test → Resultados |
| **Software Testing (V&V)** | — | Unit, integration, system, regression testing |
| **Revision Level History** | — | Historial de versiones y cambios |
| **Unresolved Anomalies** | — | Bugs conocidos y justificación de aceptación |
| **SBOM** | FDA Cybersecurity Guidance 2023 | Lista de componentes de software (open-source, third-party) |

### 8.2 Software Items para Horizon Medical

| Software Item | Clasificación IEC 62304 | Level of Concern (FDA) | Justificación |
|---|---|---|---|
| Firmware (nRF52832) | Clase C | Major | Adquisición y filtrado de señal ECG |
| Backend / API | Clase C | Major | Procesamiento y almacenamiento de datos clínicos |
| Módulo IA (CNN-LSTM) | Clase C | Major | Detección de arritmias potencialmente letales |
| App móvil | Clase B | Moderate | Visualización y alertas (no es fuente primaria de diagnóstico) |
| Dashboard web | Clase B | Moderate | Presentación de datos al clínico |

> **Referencia:** Ver template detallado en `templates/Software-Documentation-IEC62304.md`

---

## 9. Cybersecurity Documentation

### 9.1 Requisitos FDA de Ciberseguridad (2023 Guidance)

| Elemento | Descripción | Obligatorio |
|---|---|---|
| **Threat Modeling** | Identificación de amenazas y vectores de ataque | ✅ |
| **Security Risk Assessment** | Evaluación de riesgos de ciberseguridad usando CVSS o similar | ✅ |
| **Security Architecture** | Diagrama de arquitectura de seguridad del sistema | ✅ |
| **Security Controls** | Controles implementados (encryption, auth, access control) | ✅ |
| **SBOM** | Software Bill of Materials completo | ✅ |
| **Vulnerability Testing** | Resultados de penetration testing, vulnerability scanning | ✅ |
| **Patch Management Plan** | Plan para gestión de vulnerabilidades y actualizaciones | ✅ |
| **End-of-Life Plan** | Plan para fin de soporte del dispositivo | ✅ |

### 9.2 Superficie de Ataque de Horizon Medical

| Componente | Vector de Ataque | Riesgo | Controles |
|---|---|---|---|
| BLE (dispositivo → app) | Intercepción, MITM, replay | Alto | BLE Secure Connection, bonding, encryption AES-128 |
| App → Backend (HTTPS) | MITM, API abuse, data theft | Alto | TLS 1.3, certificate pinning, OAuth 2.0, rate limiting |
| Cloud Storage | Data breach, unauthorized access | Alto | Encryption at rest (AES-256), RBAC, audit logs |
| Firmware | Tampering, reverse engineering | Medio | Secure boot, signed firmware updates, OTA authentication |
| Dashboard web | XSS, CSRF, injection, session hijack | Medio | WAF, CSP, input validation, MFA |
| Modelo IA | Adversarial attacks, data poisoning | Medio | Input validation, model integrity verification |

> **Referencia:** Ver template detallado en `templates/Cybersecurity-Documentation.md`

---

## 10. AI/ML Special Controls

### 10.1 FDA AI/ML Framework

| Requisito | Descripción | Documento |
|---|---|---|
| **Algorithm Description** | Descripción completa del modelo CNN-LSTM, arquitectura, hiperparámetros | AI/ML Doc |
| **Training Data** | Fuentes, tamaño, distribución demográfica, anotación, split train/val/test | AI/ML Doc |
| **Performance Metrics** | Sensibilidad, especificidad, AUC-ROC, PPV, NPV — por tipo de arritmia | AI/ML Doc |
| **Reference Standard** | Gold standard utilizado para anotación (cardiólogos certificados, consenso) | AI/ML Doc |
| **Bias and Fairness** | Análisis de sesgos por edad, sexo, raza/etnia, comorbilidades | AI/ML Doc |
| **Robustness Testing** | Rendimiento con datos ruidosos, artefactos, edge cases | AI/ML Doc |
| **Clinical Validation** | Validación con dataset clínico independiente | Clinical Data |
| **Locked vs. Adaptive** | Declaración de algoritmo locked (no aprende post-deployment) | AI/ML Doc |
| **PCCP (si adaptativo)** | Predetermined Change Control Plan — describe cambios futuros planeados | Solo si adaptativo |
| **Transparency** | Explicabilidad de las decisiones del modelo (GradCAM, attention maps) | AI/ML Doc |

### 10.2 Métricas de Rendimiento Esperadas

| Arritmia | Sensibilidad Target | Especificidad Target | AUC Target |
|---|---|---|---|
| Fibrilación auricular (FA) | ≥ 95% | ≥ 95% | ≥ 0.97 |
| Taquicardia ventricular (TV) | ≥ 95% | ≥ 98% | ≥ 0.98 |
| Bradicardia sinusal | ≥ 90% | ≥ 95% | ≥ 0.95 |
| Taquicardia sinusal | ≥ 90% | ≥ 95% | ≥ 0.95 |
| PVC (extrasístoles ventriculares) | ≥ 85% | ≥ 95% | ≥ 0.93 |
| Pausas sinusales | ≥ 90% | ≥ 98% | ≥ 0.96 |
| Bloqueo AV II/III | ≥ 90% | ≥ 98% | ≥ 0.96 |

> **Referencia:** Ver template detallado en `templates/AI-ML-Documentation.md`

---

## 11. Checklist Completo

### 11.1 Pre-Submission

- [ ] Identificar predicado y confirmar Product Code (DRX)
- [ ] Preparar Pre-Submission (Q-Sub) request
- [ ] Incluir preguntas específicas sobre IA, cybersecurity, clinical data
- [ ] Asistir a Pre-Submission meeting con FDA
- [ ] Documentar feedback de FDA y ajustar plan

### 11.2 Establishment & Registration

- [ ] Designar US Agent (fabricante extranjero)
- [ ] FDA Establishment Registration (21 CFR 807)
- [ ] Device Listing en FDA (21 CFR 807)
- [ ] Obtener D-U-N-S Number
- [ ] Pago de User Fee (MDUFA)

### 11.3 Design Controls (21 CFR 820.30)

- [ ] Design and Development Plan documentado
- [ ] Design Input (requisitos) documentados y aprobados
- [ ] Design Output (especificaciones) documentados
- [ ] Design Reviews realizadas y documentadas (actas)
- [ ] Design Verification completada (testing)
- [ ] Design Validation completada (clinical/usability)
- [ ] Design Transfer completada
- [ ] Design History File (DHF) compilado y completo

### 11.4 Testing y Evidencia

- [ ] IEC 60601-1 — Seguridad eléctrica (reporte de lab acreditado)
- [ ] IEC 60601-1-2 — EMC (reporte de lab acreditado)
- [ ] IEC 60601-2-47 — Norma particular Holter (reporte de lab acreditado)
- [ ] ISO 10993 — Biocompatibilidad (reportes de lab)
- [ ] IEC 62133-2 — Seguridad de batería
- [ ] Software V&V completada según IEC 62304
- [ ] AI/ML validation con dataset independiente
- [ ] Usability study (summative) completada
- [ ] Cybersecurity testing (penetration test, vulnerability scan)

### 11.5 Documentación 510(k)

- [ ] Cover letter
- [ ] 510(k) Summary o Statement
- [ ] Truthful and Accuracy Statement
- [ ] Indications for Use Statement (FDA Form 3881)
- [ ] Class II Summary and Certification
- [ ] Financial Certification or Disclosure Statement (Form FDA 3674)
- [ ] Declarations of Conformity and Summary Reports (standards)
- [ ] Executive Summary / Device Description
- [ ] Substantial Equivalence Comparison
- [ ] Non-clinical (bench) performance testing
- [ ] Clinical performance data (si aplica)
- [ ] Software documentation (Level of Concern, SRS, architecture, V&V)
- [ ] AI/ML documentation
- [ ] Cybersecurity documentation + SBOM
- [ ] Biocompatibility evaluation
- [ ] EMC and Electrical Safety testing
- [ ] Sterilization (si aplica — N/A para Horizon)
- [ ] Shelf life / reliability data
- [ ] Labeling (IFU, packaging labels, warnings)
- [ ] eSTAR formatted and submitted

### 11.6 Post-Clearance

- [ ] MDR/ADR reporting procedures establecidos (21 CFR 803)
- [ ] Corrections and Removals procedures (21 CFR 806)
- [ ] Annual Registration renewal
- [ ] UDI registration en GUDID
- [ ] Post-market surveillance plan
- [ ] Complaint handling procedure (21 CFR 820.198)

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial |

---

*Documento confidencial — Horizon Medical*
