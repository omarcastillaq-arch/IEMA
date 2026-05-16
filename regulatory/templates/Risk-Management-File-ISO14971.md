# HORIZON MEDICAL — Risk Management File (ISO 14971:2019)

**Documento:** HM-RMF-001  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Referencia:** ISO 14971:2019, ISO/TR 24971:2020  

---

## Tabla de Contenidos

1. [Risk Management Plan](#1-risk-management-plan)
2. [Identificación de Peligros (Hazard Identification)](#2-identificación-de-peligros)
3. [Análisis de Riesgo por Componente](#3-análisis-de-riesgo-por-componente)
4. [Estimación y Evaluación de Riesgos](#4-estimación-y-evaluación-de-riesgos)
5. [Control y Mitigación de Riesgos](#5-control-y-mitigación-de-riesgos)
6. [Riesgo Residual](#6-riesgo-residual)
7. [Análisis Beneficio-Riesgo](#7-análisis-beneficio-riesgo)
8. [Risk Management Review](#8-risk-management-review)

---

## 1. Risk Management Plan

### 1.1 Alcance

Este Risk Management File cubre el sistema completo Horizon Medical Holter ECG, incluyendo:
- Dispositivo Holter HM-H100 (hardware)
- Firmware (nRF52832)
- Backend cloud y API
- Módulo de IA (CNN-LSTM)
- Aplicación móvil (iOS/Android)
- Dashboard web clínico
- Electrodos y accesorios

### 1.2 Criterios de Aceptabilidad del Riesgo

#### Matriz de Severidad

| Nivel | Severidad | Descripción |
|---|---|---|
| S1 | Insignificante | Inconveniente o molestia temporal |
| S2 | Menor | Lesión temporal que no requiere intervención profesional |
| S3 | Seria | Lesión que requiere intervención médica profesional |
| S4 | Crítica | Lesión permanente o que pone en peligro la vida |
| S5 | Catastrófica | Muerte del paciente |

#### Matriz de Probabilidad

| Nivel | Probabilidad | Frecuencia Estimada |
|---|---|---|
| P1 | Improbable | < 1 en 1,000,000 usos |
| P2 | Remota | 1 en 100,000 a 1,000,000 usos |
| P3 | Ocasional | 1 en 10,000 a 100,000 usos |
| P4 | Probable | 1 en 1,000 a 10,000 usos |
| P5 | Frecuente | > 1 en 1,000 usos |

#### Matriz de Aceptabilidad del Riesgo

| | S1 (Insignif.) | S2 (Menor) | S3 (Seria) | S4 (Crítica) | S5 (Catastrófica) |
|---|---|---|---|---|---|
| **P5 (Frecuente)** | 🟡 ALARP | 🔴 Inaceptable | 🔴 Inaceptable | 🔴 Inaceptable | 🔴 Inaceptable |
| **P4 (Probable)** | 🟢 Aceptable | 🟡 ALARP | 🔴 Inaceptable | 🔴 Inaceptable | 🔴 Inaceptable |
| **P3 (Ocasional)** | 🟢 Aceptable | 🟡 ALARP | 🟡 ALARP | 🔴 Inaceptable | 🔴 Inaceptable |
| **P2 (Remota)** | 🟢 Aceptable | 🟢 Aceptable | 🟡 ALARP | 🟡 ALARP | 🔴 Inaceptable |
| **P1 (Improbable)** | 🟢 Aceptable | 🟢 Aceptable | 🟢 Aceptable | 🟡 ALARP | 🟡 ALARP |

- 🟢 **Aceptable:** Riesgo aceptable sin medidas adicionales
- 🟡 **ALARP:** As Low As Reasonably Practicable — requiere reducción si es factible
- 🔴 **Inaceptable:** Requiere medidas de mitigación obligatorias

---

## 2. Identificación de Peligros

### 2.1 Categorías de Peligros (ISO 14971 Annex C)

| Categoría | Peligros Identificados para Horizon Medical |
|---|---|
| **Energía** | Descarga eléctrica (batería, corriente de fuga), energía térmica (sobrecalentamiento de batería), energía electromagnética (interferencia BLE/RF) |
| **Biológica** | Reacción alérgica a electrodos/adhesivos, irritación cutánea, infección (superficial) |
| **Información** | Falso negativo de IA (arritmia no detectada), falso positivo (alarma falsa), datos incorrectos, pérdida de datos, diagnóstico erróneo |
| **Operacional** | Error de colocación de electrodos, uso incorrecto de la app, desconexión de electrodos inadvertida, confusión de pacientes (dashboard) |
| **Ciberseguridad** | Acceso no autorizado a datos, manipulación de datos, denegación de servicio, firmware malicioso |
| **Ambiental** | Interferencia electromagnética de otros dispositivos, exposición a agua/humedad, temperatura extrema |

### 2.2 Lista Completa de Peligros

| Hazard ID | Peligro | Situación Peligrosa | Daño Potencial |
|---|---|---|---|
| HAZ-001 | Fallo del módulo IA — falso negativo | Arritmia ventricular (TV/FV) no detectada | Deterioro grave o muerte si no se diagnostica |
| HAZ-002 | Fallo del módulo IA — falso positivo | Alarma de arritmia cuando el ritmo es normal | Ansiedad del paciente, tratamiento innecesario |
| HAZ-003 | Desconexión de electrodo no detectada | Pérdida de señal ECG sin alerta al paciente | Período de monitoreo sin datos, arritmia no registrada |
| HAZ-004 | Pérdida de datos en transmisión BLE | Datos ECG no llegan al backend | Diagnóstico incompleto |
| HAZ-005 | Corriente de fuga excesiva | Contacto eléctrico con el paciente | Estimulación cardíaca, quemadura, paro |
| HAZ-006 | Sobrecalentamiento de batería LiPo | Batería se calienta en contacto con piel | Quemadura térmica |
| HAZ-007 | Explosión/incendio de batería | Fallo catastrófico de celda LiPo | Quemadura, incendio |
| HAZ-008 | Reacción alérgica a adhesivo/electrodo | Contacto prolongado con piel sensible | Dermatitis, reacción alérgica |
| HAZ-009 | Interferencia EMI de otros dispositivos | Señal ECG corrupta por EMI | Artefactos interpretados como arritmias (falso +) |
| HAZ-010 | Acceso no autorizado a datos del paciente | Breach de datos vía BLE, API o cloud | Violación de privacidad, daño psicológico |
| HAZ-011 | Firmware corrupto / actualización fallida | Dispositivo deja de funcionar correctamente | Pérdida de monitoreo |
| HAZ-012 | Error de colocación de electrodos | Señal de baja calidad o derivaciones invertidas | Diagnóstico incorrecto |
| HAZ-013 | Confusión de pacientes en dashboard | Datos de un paciente mostrados a otro médico | Diagnóstico erróneo, violación de privacidad |
| HAZ-014 | App móvil crash durante monitoreo | App se cierra inesperadamente | Pérdida temporal de visualización y alertas |
| HAZ-015 | Backend no disponible (downtime) | Datos no procesados por IA | Retraso en detección de arritmias |
| HAZ-016 | Agotamiento prematuro de batería | Batería se agota antes de completar 24h | Monitoreo incompleto |
| HAZ-017 | Latencia excesiva en alertas | Alerta de arritmia crítica llega con retraso | Retraso en intervención médica |
| HAZ-018 | Software de IA entrenado con datos sesgados | Rendimiento inferior en subpoblaciones | Detección menos precisa en ciertos grupos demográficos |

---

## 3. Análisis de Riesgo por Componente

### 3.1 Hardware (Dispositivo Holter HM-H100)

| Riesgo ID | Peligro | Componente | P (antes) | S (antes) | Riesgo | Control de Riesgo |
|---|---|---|---|---|---|---|
| R-HW-001 | HAZ-005 | Circuito de aislamiento | P2 | S5 | 🟡 ALARP | Aislamiento galvánico, cumplimiento IEC 60601-1 |
| R-HW-002 | HAZ-006 | Batería LiPo | P2 | S3 | 🟡 ALARP | Circuito de protección BMS, thermal shutdown, IEC 62133-2 |
| R-HW-003 | HAZ-007 | Batería LiPo | P1 | S5 | 🟡 ALARP | Celda certificada UN 38.3, BMS, diseño mecánico |
| R-HW-004 | HAZ-009 | Frontend analógico | P3 | S3 | 🟡 ALARP | Filtros EMI, cumplimiento IEC 60601-1-2, shielding |
| R-HW-005 | HAZ-016 | Batería/firmware | P3 | S2 | 🟡 ALARP | Indicador de batería, alarma de batería baja, auto-sleep |
| R-HW-006 | HAZ-003 | Electrodos/detección | P4 | S3 | 🔴 Inaceptable | Detección de impedancia, alerta de desconexión |

### 3.2 Software — Módulo de IA

| Riesgo ID | Peligro | Componente | P (antes) | S (antes) | Riesgo | Control de Riesgo |
|---|---|---|---|---|---|---|
| R-AI-001 | HAZ-001 | CNN-LSTM (falso negativo) | P3 | S5 | 🔴 Inaceptable | Validación extensiva, threshold optimizado, alerta manual |
| R-AI-002 | HAZ-002 | CNN-LSTM (falso positivo) | P4 | S2 | 🟡 ALARP | Threshold calibrado, confirmación por médico |
| R-AI-003 | HAZ-018 | Training data | P3 | S4 | 🔴 Inaceptable | Dataset diverso, análisis de bias, validación por subgrupos |
| R-AI-004 | HAZ-017 | Pipeline de procesamiento | P3 | S4 | 🔴 Inaceptable | SLA de procesamiento, redundancia, monitoreo |

### 3.3 Software — Backend, App, Dashboard

| Riesgo ID | Peligro | Componente | P (antes) | S (antes) | Riesgo | Control de Riesgo |
|---|---|---|---|---|---|---|
| R-SW-001 | HAZ-004 | BLE stack | P3 | S3 | 🟡 ALARP | Buffer local, retransmisión, verificación de integridad |
| R-SW-002 | HAZ-013 | Dashboard (auth) | P2 | S4 | 🟡 ALARP | RBAC, autenticación MFA, session management |
| R-SW-003 | HAZ-014 | App móvil | P4 | S2 | 🟡 ALARP | Crash recovery, data persistence, auto-reconnect |
| R-SW-004 | HAZ-015 | Backend cloud | P3 | S3 | 🟡 ALARP | Redundancia, auto-scaling, buffer local |
| R-SW-005 | HAZ-011 | Firmware OTA | P2 | S3 | 🟡 ALARP | Dual-bank OTA, rollback, verificación de integridad |

### 3.4 Ciberseguridad

| Riesgo ID | Peligro | Componente | P (antes) | S (antes) | Riesgo | Control de Riesgo |
|---|---|---|---|---|---|---|
| R-CY-001 | HAZ-010 | BLE communication | P3 | S3 | 🟡 ALARP | BLE Secure Connection, encryption, bonding |
| R-CY-002 | HAZ-010 | Backend API | P3 | S3 | 🟡 ALARP | TLS 1.3, OAuth 2.0, rate limiting, WAF |
| R-CY-003 | HAZ-010 | Cloud storage | P2 | S4 | 🟡 ALARP | AES-256 at rest, RBAC, audit logs, backups |

---

## 4. Estimación y Evaluación de Riesgos

### 4.1 Tabla de Evaluación de Riesgos Antes y Después de Mitigación

| Riesgo ID | Peligro | P (antes) | S | Nivel (antes) | Control | P (después) | Nivel (después) | Aceptable |
|---|---|---|---|---|---|---|---|---|
| R-HW-001 | Corriente de fuga | P2 | S5 | 🟡 ALARP | Aislamiento + testing | P1 | 🟡 ALARP* | ✅ (ALARP demostrado) |
| R-HW-002 | Sobrecalentamiento | P2 | S3 | 🟡 ALARP | BMS + thermal cutoff | P1 | 🟢 Aceptable | ✅ |
| R-HW-003 | Explosión batería | P1 | S5 | 🟡 ALARP | UN 38.3 + BMS | P1 | 🟡 ALARP* | ✅ (ALARP demostrado) |
| R-HW-006 | Desconexión electrodo | P4 | S3 | 🔴 Inaceptable | Detección + alerta | P2 | 🟡 ALARP | ✅ (ALARP demostrado) |
| R-AI-001 | Falso negativo (TV/FV) | P3 | S5 | 🔴 Inaceptable | Val. extensiva + manual | P2 | 🟡 ALARP* | ✅ (beneficio > riesgo) |
| R-AI-002 | Falso positivo | P4 | S2 | 🟡 ALARP | Threshold + confirmación | P3 | 🟡 ALARP | ✅ |
| R-AI-003 | Bias en IA | P3 | S4 | 🔴 Inaceptable | Dataset diverso + val. | P2 | 🟡 ALARP | ✅ (ALARP demostrado) |
| R-AI-004 | Latencia alertas | P3 | S4 | 🔴 Inaceptable | SLA + redundancia | P2 | 🟡 ALARP | ✅ |
| R-SW-001 | Pérdida datos BLE | P3 | S3 | 🟡 ALARP | Buffer + retransmisión | P2 | 🟢 Aceptable | ✅ |
| R-CY-001 | Breach BLE | P3 | S3 | 🟡 ALARP | Encryption + bonding | P2 | 🟢 Aceptable | ✅ |
| R-CY-003 | Breach cloud | P2 | S4 | 🟡 ALARP | AES-256 + RBAC | P1 | 🟡 ALARP* | ✅ (ALARP demostrado) |

*\* ALARP: Se ha demostrado que la reducción adicional del riesgo no es practicable sin afectar desproporcionadamente el beneficio del dispositivo.*

---

## 5. Control y Mitigación de Riesgos

### 5.1 Jerarquía de Control de Riesgos (ISO 14971)

1. **Diseño inherentemente seguro** (eliminar el peligro)
2. **Medidas de protección** (barreras, alarmas, aislamiento)
3. **Información de seguridad** (etiquetado, IFU, training)

### 5.2 Controles Implementados

| Control ID | Riesgo(s) | Tipo | Descripción | Verificación |
|---|---|---|---|---|
| RC-001 | R-HW-001 | Diseño | Aislamiento galvánico paciente (BF type) | Test IEC 60601-1 |
| RC-002 | R-HW-002, R-HW-003 | Diseño + Protección | BMS con protección de sobrecarga, sobredescarga, cortocircuito, temperatura | Test IEC 62133-2 |
| RC-003 | R-HW-004 | Diseño | Filtros EMI en entrada, shielding de PCB | Test IEC 60601-1-2 |
| RC-004 | R-HW-006 | Protección | Monitoreo de impedancia de electrodos + alerta en app | Test funcional |
| RC-005 | R-AI-001 | Diseño | Threshold de detección optimizado para alta sensibilidad (≥95% Se para TV) | Validación con dataset |
| RC-006 | R-AI-001 | Información | IFU: "Los resultados de IA son de soporte. La decisión final es del médico." | Revisión de labeling |
| RC-007 | R-AI-003 | Diseño | Dataset de entrenamiento diverso (edad, sexo, etnia) + validación por subgrupos | Análisis de bias |
| RC-008 | R-SW-001 | Diseño | Buffer circular en firmware (8h de datos) + retransmisión automática | Test funcional |
| RC-009 | R-CY-001 | Diseño | BLE Secure Connections (LE Secure Connections, AES-CCM 128-bit) | Pen testing |
| RC-010 | R-CY-002 | Diseño | TLS 1.3, OAuth 2.0, API rate limiting, input validation | Pen testing |
| RC-011 | R-CY-003 | Diseño | AES-256 encryption at rest, RBAC, MFA, audit logs | Security audit |
| RC-012 | R-SW-005 | Diseño | OTA dual-bank con rollback automático, signature verification | Test funcional |
| RC-013 | R-AI-004 | Diseño + Protección | Processing SLA < 30s, queue monitoring, auto-scale | Load testing |

---

## 6. Riesgo Residual

### 6.1 Riesgos Residuales Aceptados

| Riesgo ID | Riesgo Residual | P | S | Nivel | Justificación de Aceptación |
|---|---|---|---|---|---|
| R-AI-001 | Falso negativo de IA (TV no detectada) en caso edge | P2 | S5 | ALARP | El dispositivo es herramienta de soporte, no reemplaza al médico. Beneficio de detección automatizada supera el riesgo residual. Sensibilidad validada ≥95%. |
| R-HW-001 | Corriente de fuga residual dentro de límites normativos | P1 | S5 | ALARP | Cumple IEC 60601-1 (< 10 µA), riesgo inherente a todo dispositivo eléctrico en contacto con paciente |
| R-HW-003 | Fallo de celda de batería (evento extremadamente raro) | P1 | S5 | ALARP | Celda certificada UN 38.3, BMS con múltiples protecciones, riesgo residual comparable al de cualquier dispositivo con batería LiPo |
| R-AI-002 | Falsas alarmas ocasionales que causan ansiedad | P3 | S2 | ALARP | El médico confirma cada alarma antes de actuar. Información en IFU sobre posibilidad de falsas alarmas |

### 6.2 Evaluación Global del Riesgo Residual

El riesgo residual global del sistema Horizon Medical Holter ECG se considera **aceptable** considerando:

1. Todos los riesgos inaceptables han sido mitigados a niveles ALARP o aceptables
2. Los riesgos residuales más significativos (R-AI-001) están inherentemente asociados a la naturaleza probabilística de los algoritmos de IA, y se mitigan con la supervisión obligatoria del médico
3. El perfil de riesgo es consistente con dispositivos equivalentes ya en el mercado (Zio XT, MCOT)
4. Los beneficios clínicos superan los riesgos residuales (ver Sección 7)

---

## 7. Análisis Beneficio-Riesgo

### 7.1 Beneficios Clínicos del Dispositivo

| Beneficio | Descripción | Evidencia |
|---|---|---|
| **Detección temprana de arritmias** | El monitoreo continuo 24–48h aumenta la probabilidad de capturar eventos arrítmicos intermitentes | Literatura publicada (Holter ECG) |
| **Detección automatizada con IA** | Reducción del tiempo de análisis manual, detección de arritmias que podrían pasar desapercibidas | Datos de validación del algoritmo |
| **Acceso remoto a datos** | El cardiólogo puede revisar datos sin que el paciente visite la clínica | Telemonitoreo |
| **Alertas en tiempo real** | Detección temprana de arritmias críticas (TV/FV) permite intervención rápida | Diseño del sistema |
| **Comodidad del paciente** | Dispositivo liviano y discreto mejora la adherencia al monitoreo | User needs research |
| **Registro de síntomas** | Correlación de síntomas del paciente con ECG mejora el diagnóstico | Práctica clínica |

### 7.2 Conclusión Beneficio-Riesgo

| Factor | Evaluación |
|---|---|
| **Severidad de la condición tratada** | Alta — las arritmias cardíacas pueden ser mortales si no se detectan |
| **Probabilidad de beneficio** | Alta — el monitoreo Holter es estándar de cuidado para evaluación de arritmias |
| **Magnitud del beneficio** | Significativa — detección temprana puede prevenir eventos cardíacos graves |
| **Riesgos residuales** | Bajos a moderados, todos en nivel ALARP o aceptable |
| **Alternativas disponibles** | Holter convencional (sin IA), monitores de eventos, implantable loop recorders |
| **Ventajas sobre alternativas** | IA automatizada, conectividad remota, alertas en tiempo real |
| **Balance beneficio-riesgo** | **FAVORABLE** — Los beneficios clínicos del monitoreo ECG continuo con IA superan los riesgos residuales identificados |

---

## 8. Risk Management Review

### 8.1 Conclusiones de la Revisión

| Elemento | Evaluación |
|---|---|
| ¿Se ejecutó el Risk Management Plan? | ☐ Sí / ☐ No |
| ¿Están todos los peligros conocidos identificados? | ☐ Sí / ☐ No |
| ¿Están todos los riesgos evaluados y controlados? | ☐ Sí / ☐ No |
| ¿Se verificó la efectividad de los controles? | ☐ Sí / ☐ No |
| ¿Se evaluó el riesgo residual global? | ☐ Sí / ☐ No |
| ¿Es aceptable el riesgo residual global? | ☐ Sí / ☐ No |
| ¿Se documentaron los datos de producción y post-producción? | ☐ Sí / ☐ No (post-launch) |

### 8.2 Aprobación

| Rol | Nombre | Firma | Fecha |
|---|---|---|---|
| Risk Management Lead | _________________ | _________________ | __________ |
| Quality Manager | _________________ | _________________ | __________ |
| Clinical Expert | _________________ | _________________ | __________ |
| Regulatory Affairs | _________________ | _________________ | __________ |
| General Manager | _________________ | _________________ | __________ |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial |

---

*Documento confidencial — Horizon Medical*
