# HORIZON MEDICAL — Clasificación del Dispositivo Médico

**Documento:** HM-REG-001  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Clasificación del documento:** Confidencial  
**Preparado por:** Departamento de Asuntos Regulatorios — Horizon Medical  

---

## Tabla de Contenidos

1. [Descripción Completa del Dispositivo](#1-descripción-completa-del-dispositivo)
2. [Uso Previsto (Intended Use)](#2-uso-previsto-intended-use)
3. [Indicaciones de Uso](#3-indicaciones-de-uso)
4. [Contraindicaciones](#4-contraindicaciones)
5. [Clasificación por Jurisdicción](#5-clasificación-por-jurisdicción)
6. [Justificación de la Clasificación](#6-justificación-de-la-clasificación)
7. [Normas Aplicables](#7-normas-aplicables)
8. [Resumen de Clasificación](#8-resumen-de-clasificación)

---

## 1. Descripción Completa del Dispositivo

### 1.1 Nombre del Dispositivo

- **Nombre comercial:** Horizon Medical Holter ECG System
- **Nombre genérico:** Sistema de monitoreo electrocardiográfico ambulatorio continuo con análisis algorítmico basado en inteligencia artificial
- **Nombre técnico:** Ambulatory electrocardiographic monitoring system with AI-based arrhythmia detection

### 1.2 Descripción General

El sistema Horizon Medical es un dispositivo médico de monitoreo cardíaco ambulatorio de tipo Holter que permite la adquisición, transmisión, almacenamiento y análisis de señales electrocardiográficas (ECG) de forma continua durante períodos de 24 a 48 horas. El sistema integra hardware portátil, conectividad inalámbrica IoT, software en la nube con algoritmos de inteligencia artificial (IA) para detección automatizada de arritmias, una aplicación móvil para el paciente y un dashboard web para el profesional de salud.

### 1.3 Componentes del Sistema

| Componente | Descripción | Modelo/Versión |
|---|---|---|
| **Dispositivo Holter (hardware)** | Unidad portátil de adquisición ECG con electrodos de superficie | HM-H100 v1.0 |
| **Firmware del dispositivo** | Software embebido en el microcontrolador | FW v1.0 (nRF52832) |
| **Backend / Servidor en la nube** | Plataforma de procesamiento, almacenamiento y análisis de datos ECG | Backend v1.0 |
| **Módulo de IA/ML** | Algoritmo CNN-LSTM para detección automatizada de arritmias | AI Engine v1.0 |
| **Aplicación móvil (App)** | Aplicación para paciente (iOS/Android) para visualización y alertas | App v1.0 |
| **Dashboard web clínico** | Interfaz web para profesionales de salud | Dashboard v1.0 |

### 1.4 Especificaciones Técnicas del Hardware

| Parámetro | Especificación |
|---|---|
| Microcontrolador | Nordic Semiconductor nRF52832 (ARM Cortex-M4F, 64MHz) |
| AFE (Analog Front-End) | Texas Instruments ADS1298 (8 canales, 24 bits) |
| Canales ECG activos | 3 canales (derivaciones) |
| Resolución ADC | 24 bits |
| Frecuencia de muestreo | 500 Hz por canal |
| Conectividad | Bluetooth Low Energy (BLE) 5.0 |
| Batería | LiPo 3.7V, 500mAh recargable |
| Autonomía | ≥ 48 horas de monitoreo continuo |
| Dimensiones | 65 × 40 × 12 mm (aprox.) |
| Peso | < 50 g (sin electrodos) |
| Protección IP | IP22 (resistente a salpicaduras) |
| Electrodos | Desechables, adhesivos Ag/AgCl, tipo snap |
| Carga | USB-C, 5V/500mA |

### 1.5 Especificaciones del Software

| Componente | Tecnología | Función |
|---|---|---|
| Firmware | C/C++ sobre Zephyr RTOS (nRF52832) | Adquisición, filtrado digital, transmisión BLE |
| Backend | Python / Node.js, infraestructura cloud (AWS/Azure) | Recepción, almacenamiento, procesamiento, API REST |
| Módulo IA | Python, TensorFlow/PyTorch — Arquitectura CNN-LSTM | Detección de arritmias: FA, TV, bradicardia, taquicardia, extrasístoles |
| App móvil | React Native (iOS/Android) | Visualización ECG en tiempo real, alertas, historial |
| Dashboard web | React.js | Revisión clínica, informes, gestión de pacientes |

### 1.6 Principio de Funcionamiento

1. **Adquisición:** Los electrodos de superficie captan las señales bioeléctricas cardíacas. El ADS1298 digitaliza las señales con resolución de 24 bits a 500 Hz.
2. **Preprocesamiento (firmware):** Filtrado digital paso-banda (0.05–150 Hz), filtro notch (50/60 Hz), detección de desconexión de electrodos.
3. **Transmisión:** Los datos se transmiten vía BLE al teléfono del paciente en tiempo real o se almacenan en buffer interno para transmisión diferida.
4. **Almacenamiento en la nube:** La app móvil retransmite los datos al backend vía HTTPS/TLS 1.3.
5. **Análisis IA:** El modelo CNN-LSTM analiza segmentos de ECG para clasificar ritmos cardíacos y detectar arritmias.
6. **Visualización y alertas:** Los resultados se presentan en la app del paciente y el dashboard clínico. Las alertas críticas se generan en tiempo real.

---

## 2. Uso Previsto (Intended Use)

### 2.1 Declaración de Uso Previsto

> El sistema Horizon Medical Holter ECG está destinado a la adquisición, registro, transmisión, almacenamiento, análisis y presentación de señales electrocardiográficas (ECG) de superficie de pacientes adultos en entorno ambulatorio. El dispositivo está diseñado para monitoreo continuo de ECG durante períodos de 24 a 48 horas. El módulo de inteligencia artificial proporciona detección automatizada asistida de arritmias cardíacas como herramienta de soporte a la decisión clínica. Todos los resultados del análisis de IA deben ser revisados y confirmados por un profesional de salud calificado antes de tomar decisiones clínicas.

### 2.2 Población Objetivo

- **Edad:** Pacientes adultos (≥ 18 años)
- **Sexo:** Masculino y femenino
- **Condición:** Pacientes con sospecha o diagnóstico de arritmias cardíacas, palpitaciones, síncope, evaluación post-eventos cardíacos, seguimiento post-ablación o post-implante de dispositivos
- **Entorno de uso:** Ambulatorio (hogar del paciente, vida cotidiana)

### 2.3 Usuarios Previstos

| Usuario | Rol | Interacción |
|---|---|---|
| Cardiólogo / Electrofisiólogo | Prescripción, revisión de resultados, diagnóstico | Dashboard web |
| Médico general | Prescripción inicial, derivación | Dashboard web |
| Técnico/Enfermero | Colocación del dispositivo, instrucción al paciente | Dispositivo físico |
| Paciente | Portador del dispositivo durante el monitoreo | App móvil |

### 2.4 Entorno de Uso

- **Dispositivo Holter:** Uso ambulatorio, portado sobre el pecho del paciente, ambiente doméstico/cotidiano
- **App móvil:** Smartphone del paciente con Bluetooth y conexión a Internet
- **Dashboard web:** Consultorio médico, hospital, centro de telemedicina
- **Backend:** Infraestructura cloud con certificación de seguridad

---

## 3. Indicaciones de Uso

### 3.1 Indicaciones Clínicas

El sistema Horizon Medical Holter ECG está indicado para:

1. **Detección y documentación de arritmias cardíacas** durante la actividad diaria normal del paciente
2. **Evaluación de palpitaciones** de origen indeterminado
3. **Evaluación de síncope o pre-síncope** de posible etiología cardíaca
4. **Monitoreo de fibrilación auricular (FA)** — detección, cuantificación de carga arrítmica
5. **Evaluación de la respuesta ventricular** en pacientes con fibrilación auricular conocida
6. **Seguimiento post-ablación** de arritmias auriculares o ventriculares
7. **Evaluación de la eficacia de terapia antiarrítmica**
8. **Detección de isquemia silente** (análisis del segmento ST)
9. **Evaluación de la variabilidad de la frecuencia cardíaca (HRV)**
10. **Correlación de síntomas** (diario del paciente) con hallazgos electrocardiográficos

### 3.2 Tipos de Arritmias Detectadas por el Módulo de IA

| Arritmia | Abreviatura | Prioridad de Alerta |
|---|---|---|
| Fibrilación auricular | FA / AF | Alta |
| Flutter auricular | AFL | Alta |
| Taquicardia ventricular | TV / VT | Crítica |
| Fibrilación ventricular | FV / VF | Crítica |
| Taquicardia supraventricular | TSV / SVT | Media |
| Bradicardia sinusal | BS | Media |
| Taquicardia sinusal | TS | Baja |
| Extrasístoles ventriculares | EV / PVC | Baja–Media |
| Extrasístoles supraventriculares | ESV / PAC | Baja |
| Pausas sinusales | — | Alta |
| Bloqueo AV de 2º y 3er grado | BAV II/III | Alta |

---

## 4. Contraindicaciones

### 4.1 Contraindicaciones Absolutas

1. **No utilizar para monitoreo en tiempo real en unidades de cuidados intensivos (UCI)** — el dispositivo no es un monitor de paciente hospitalario y no está diseñado para alarmas de emergencia en tiempo real en entorno hospitalario
2. **No utilizar como único medio de diagnóstico** — los resultados del análisis de IA son de soporte y deben ser confirmados por un profesional médico
3. **No utilizar en pacientes con implantes electrónicos activos** (marcapasos, desfibriladores implantables) sin supervisión médica, debido a posible interferencia electromagnética
4. **No utilizar en entornos con campos electromagnéticos intensos** (resonancia magnética, equipos de diatermia)

### 4.2 Contraindicaciones Relativas

1. Pacientes con alergias conocidas a adhesivos o electrodos de Ag/AgCl
2. Pacientes con lesiones cutáneas extensas en la zona de colocación de electrodos
3. Pacientes pediátricos (< 18 años) — no validado clínicamente para esta población
4. Pacientes con incapacidad para operar un smartphone (se requiere app para transmisión de datos)

### 4.3 Advertencias y Precauciones

- El dispositivo **no es un desfibrilador** ni proporciona terapia eléctrica
- Las alertas de IA **no reemplazan** el juicio clínico profesional
- La conectividad BLE tiene un alcance limitado (~10 m); el paciente debe mantener el smartphone cerca
- La pérdida temporal de conectividad a Internet no afecta la adquisición de datos (se almacenan localmente y se sincronizan después)

---

## 5. Clasificación por Jurisdicción

### 5.1 Clasificación INVIMA (Colombia)

| Criterio | Detalle |
|---|---|
| **Agencia** | INVIMA — Instituto Nacional de Vigilancia de Medicamentos y Alimentos |
| **Normativa aplicable** | Decreto 4725 de 2005 (dispositivos médicos en Colombia) |
| **Clasificación de riesgo** | **Clase IIa — Riesgo Moderado** |
| **Justificación** | Dispositivo activo, no invasivo, destinado a monitoreo de funciones fisiológicas (ECG) con software de diagnóstico asistido. Según el Artículo 7 del Decreto 4725, los dispositivos activos de diagnóstico destinados a suministrar información para detectar, diagnosticar o monitorizar funciones fisiológicas se clasifican como Clase IIa cuando no son de soporte vital directo |
| **Regla de clasificación** | Regla 10 (dispositivos activos de diagnóstico) |
| **Registro requerido** | Registro Sanitario de Dispositivo Médico |

### 5.2 Clasificación FDA (Estados Unidos)

| Criterio | Detalle |
|---|---|
| **Agencia** | FDA — Food and Drug Administration, CDRH (Center for Devices and Radiological Health) |
| **Regulación CFR** | 21 CFR Part 870 — Cardiovascular Devices |
| **Product Code** | DRX (Electrocardiograph, Ambulatory — Holter Monitor) |
| **Clasificación** | **Clase II (Special Controls)** |
| **Vía regulatoria recomendada** | **510(k) Premarket Notification** |
| **Panel** | Panel de dispositivos cardiovasculares |
| **Predicado (predicate device)** | iRhythm Zio XT (K142497), BioTelemetry MCOT (K162604), Cardiac Insight Cardea SOLO (K173437) |
| **Componente IA/ML** | Requiere documentación adicional según FDA Guidance "Artificial Intelligence/Machine Learning (AI/ML)-Based Software as a Medical Device (SaMD)" y "Predetermined Change Control Plan" |
| **Software Level of Concern** | Major (el software proporciona información para decisiones clínicas sobre arritmias potencialmente letales) |

### 5.3 Clasificación EMA/MDR (Unión Europea)

| Criterio | Detalle |
|---|---|
| **Regulación** | Reglamento (UE) 2017/745 — Medical Device Regulation (MDR) |
| **Clasificación** | **Clase IIa** (software de diagnóstico) / **Clase IIb** (si se considera que la información generada puede conducir directamente a decisiones terapéuticas sobre arritmias potencialmente letales) |
| **Clasificación recomendada** | **Clase IIb** (enfoque conservador debido a detección de TV/FV) |
| **Regla de clasificación MDR** | **Regla 11** — Software destinado a proporcionar información utilizada para tomar decisiones con fines de diagnóstico o terapéuticos. Si las decisiones tienen un impacto que puede causar la muerte o un deterioro irreversible del estado de salud → Clase III. Si puede causar un deterioro grave → Clase IIb. En otros casos → Clase IIa |
| **Justificación Clase IIb** | El sistema detecta arritmias ventriculares (TV/FV) cuya no detección podría causar un deterioro grave del estado de salud. Si bien la decisión final es del médico, la información proporcionada es crítica |
| **Organismo Notificado requerido** | Sí — obligatorio para Clase IIa y IIb |
| **Marcado CE** | CE bajo MDR 2017/745 con Declaración de Conformidad |

---

## 6. Justificación de la Clasificación

### 6.1 Análisis de Factores de Clasificación

| Factor | Análisis | Impacto en Clasificación |
|---|---|---|
| **Invasividad** | No invasivo (electrodos de superficie) | Reduce clasificación |
| **Duración de contacto** | Transitorio a corto plazo (24–48 h) | Neutral |
| **Fuente de energía** | Dispositivo activo (batería) | Incrementa clasificación vs. pasivo |
| **Parte del cuerpo** | Superficie del torso (no SNC, no sistema cardiovascular directo) | Neutral |
| **Función** | Diagnóstico/monitoreo (no terapéutico) | Reduce vs. terapéutico |
| **Software como componente** | SaMD — proporciona información diagnóstica | Incrementa clasificación |
| **IA/ML** | Análisis automatizado con clasificación de arritmias | Incrementa clasificación (especialmente en MDR) |
| **Severidad de la condición** | Arritmias potencialmente letales (TV, FV) | Incrementa clasificación |
| **Autonomía de decisión** | Herramienta de soporte; decisión final es del médico | Reduce vs. sistema autónomo |

### 6.2 Comparación con Predicados y Dispositivos Equivalentes

| Dispositivo | Fabricante | Clasificación FDA | Clasificación MDR | Vía Regulatoria |
|---|---|---|---|---|
| Zio XT / Zio AT | iRhythm Technologies | Clase II | Clase IIa | 510(k) |
| MCOT Patch | BioTelemetry (Philips) | Clase II | Clase IIa | 510(k) |
| Cardea SOLO | Cardiac Insight | Clase II | Clase IIa | 510(k) |
| KardiaMobile 6L | AliveCor | Clase II | Clase IIa | 510(k) / De Novo |
| Apple Watch ECG | Apple Inc. | Clase II | Clase IIa | De Novo (DEN180044) |

### 6.3 Conclusión de Clasificación

El sistema Horizon Medical se clasifica de manera consistente como **Clase II** (FDA) / **Clase IIa-IIb** (MDR) / **Clase IIa** (INVIMA), alineado con dispositivos predicados del mismo segmento. La presencia de IA para detección de arritmias ventriculares justifica un enfoque conservador hacia **Clase IIb en MDR**, aunque existe precedente de dispositivos similares clasificados como IIa.

---

## 7. Normas Aplicables

### 7.1 Normas de Seguridad y Rendimiento Esenciales

| Norma | Título | Aplicabilidad |
|---|---|---|
| **IEC 60601-1:2020** | Medical electrical equipment — General requirements for basic safety and essential performance | Hardware del dispositivo Holter |
| **IEC 60601-1-2:2014+AMD1:2020** | EMC — Electromagnetic compatibility | Hardware, emisiones e inmunidad |
| **IEC 60601-1-6:2010+AMD1:2013+AMD2:2020** | Usability | Todo el sistema (hardware + software) |
| **IEC 60601-1-8:2006+AMD1:2012+AMD2:2020** | Alarm systems | Alertas del sistema |
| **IEC 60601-1-11:2015+AMD1:2020** | Requirements for medical electrical equipment used in the home healthcare environment | Uso ambulatorio/domiciliario |
| **IEC 60601-2-47:2012+AMD1:2019** | Particular requirements for the basic safety and essential performance of ambulatory electrocardiographic systems | Norma particular para Holter ECG |

### 7.2 Normas de Software

| Norma | Título | Aplicabilidad |
|---|---|---|
| **IEC 62304:2006+AMD1:2015** | Medical device software — Software life cycle processes | Todo el software (firmware, backend, app, dashboard) |
| **IEC 82304-1:2016** | Health software — General requirements for product safety | Software de salud como producto |
| **IEC 62366-1:2015+AMD1:2020** | Medical devices — Application of usability engineering | Usabilidad del software y hardware |

### 7.3 Normas de Gestión de Calidad y Riesgo

| Norma | Título | Aplicabilidad |
|---|---|---|
| **ISO 13485:2016** | Medical devices — Quality management systems | Sistema de gestión de calidad del fabricante |
| **ISO 14971:2019** | Medical devices — Application of risk management | Gestión de riesgos del dispositivo |
| **ISO/TR 24971:2020** | Guidance on the application of ISO 14971 | Guía complementaria de gestión de riesgos |

### 7.4 Normas de Biocompatibilidad y Seguridad Eléctrica

| Norma | Título | Aplicabilidad |
|---|---|---|
| **ISO 10993-1:2018** | Biological evaluation of medical devices — Evaluation and testing within a risk management process | Electrodos, carcasa (contacto con piel) |
| **ISO 10993-5:2009** | Tests for in vitro cytotoxicity | Materiales en contacto con piel |
| **ISO 10993-10:2021** | Tests for skin sensitization | Materiales en contacto con piel |
| **IEC 62133-2:2017** | Secondary cells and batteries — Safety requirements | Batería LiPo |

### 7.5 Normas de Ciberseguridad y Protección de Datos

| Norma / Guía | Título | Aplicabilidad |
|---|---|---|
| **IEC 81001-5-1:2021** | Health software and health IT systems safety, effectiveness and security — Security | Ciberseguridad del software |
| **AAMI TIR57:2016** | Principles for medical device security — Risk management | Gestión de riesgos de ciberseguridad |
| **FDA Guidance (2023)** | Cybersecurity in Medical Devices: QSR Considerations and Content of Premarket Submissions | Ciberseguridad para FDA |
| **NIST Cybersecurity Framework** | Framework for Improving Critical Infrastructure Cybersecurity | Marco de referencia general |
| **GDPR (UE 2016/679)** | General Data Protection Regulation | Datos personales en UE |
| **HIPAA** | Health Insurance Portability and Accountability Act | Datos de salud en EE.UU. |
| **Ley 1581 de 2012** | Protección de datos personales (Colombia) | Datos personales en Colombia |

### 7.6 Normas de IA/ML para Dispositivos Médicos

| Norma / Guía | Título | Aplicabilidad |
|---|---|---|
| **FDA AI/ML Action Plan (2021)** | Artificial Intelligence/Machine Learning (AI/ML)-Based SaMD Action Plan | Marco regulatorio IA/ML FDA |
| **IMDRF SaMD:2014** | Software as a Medical Device (SaMD): Key Definitions and Possible Framework | Clasificación de SaMD |
| **ISO/IEC TR 24028:2020** | Information technology — AI — Overview of trustworthiness in AI | Confiabilidad de IA |
| **ISO/IEC 23894:2023** | Information technology — AI — Guidance on risk management | Gestión de riesgos de IA |
| **GMLP (2021)** | Good Machine Learning Practice for Medical Device Development | Buenas prácticas ML |

### 7.7 Otras Normas Aplicables

| Norma | Título | Aplicabilidad |
|---|---|---|
| **ISO 15223-1:2021** | Medical devices — Symbols to be used with information to be supplied by the manufacturer | Etiquetado |
| **IEC 60529:2013** | Degrees of protection provided by enclosures (IP Code) | Carcasa del dispositivo |
| **IEC 62133-2:2017** | Secondary lithium cells and batteries | Batería LiPo |
| **UN 38.3** | Transport of lithium batteries | Transporte de batería |
| **ISO 11607-1:2019** | Packaging for terminally sterilized medical devices | Empaque (si aplica) |
| **UDI (EU 2017/745 Art. 27)** | Unique Device Identification | Identificación UDI |
| **21 CFR 830** | Unique Device Identification | Identificación UDI FDA |

---

## 8. Resumen de Clasificación

```
┌──────────────────────────────────────────────────────────────────────┐
│              HORIZON MEDICAL — RESUMEN DE CLASIFICACIÓN             │
├──────────────┬───────────────┬───────────────┬───────────────────────┤
│ Jurisdicción │ Clasificación │ Vía Regul.    │ Norma/Regulación      │
├──────────────┼───────────────┼───────────────┼───────────────────────┤
│ INVIMA (CO)  │ Clase IIa     │ Registro San. │ Decreto 4725/2005     │
│ FDA (US)     │ Clase II      │ 510(k)        │ 21 CFR 870            │
│ EMA/MDR (EU) │ Clase IIb*    │ CE + NB       │ MDR 2017/745 Regla 11 │
├──────────────┴───────────────┴───────────────┴───────────────────────┤
│ * Enfoque conservador. Posible Clase IIa si el NB acepta            │
│   que la IA es solo soporte y no influye directamente en terapia.   │
└──────────────────────────────────────────────────────────────────────┘
```

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción del Cambio |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial del documento |

---

*Este documento es parte del expediente regulatorio del sistema Horizon Medical. Toda la información contenida es confidencial y propiedad de Horizon Medical.*
