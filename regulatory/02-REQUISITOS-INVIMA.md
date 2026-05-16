# HORIZON MEDICAL — Requisitos INVIMA (Colombia)

**Documento:** HM-REG-003  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Marco regulatorio:** Decreto 4725 de 2005, Resolución 4002 de 2007  

---

## Tabla de Contenidos

1. [Marco Regulatorio Colombiano](#1-marco-regulatorio-colombiano)
2. [Documentos Técnicos Requeridos](#2-documentos-técnicos-requeridos)
3. [Estudios Clínicos Necesarios](#3-estudios-clínicos-necesarios)
4. [Certificaciones ISO Requeridas](#4-certificaciones-iso-requeridas)
5. [Documentación de Software (IEC 62304)](#5-documentación-de-software-iec-62304)
6. [Documentación de IA/Machine Learning](#6-documentación-de-iamachine-learning)
7. [Buenas Prácticas de Manufactura](#7-buenas-prácticas-de-manufactura)
8. [Checklist Completo](#8-checklist-completo)

---

## 1. Marco Regulatorio Colombiano

### 1.1 Legislación Aplicable

| Norma | Descripción | Relevancia |
|---|---|---|
| **Decreto 4725 de 2005** | Régimen de registros sanitarios, permiso de comercialización y vigilancia sanitaria de dispositivos médicos | Marco principal |
| **Resolución 4002 de 2007** | Adopta el instrumento de verificación de cumplimiento de CCAA de dispositivos médicos | Verificación de BPM |
| **Resolución 2013009143 de 2013** | Manual de requisitos para registro sanitario de dispositivos médicos | Requisitos específicos |
| **Decreto 3770 de 2004** | Régimen de registros sanitarios (complementario) | Procedimientos |
| **Ley 1581 de 2012** | Protección de datos personales | Datos de pacientes |
| **Resolución 4816 de 2008** | Programa Nacional de Tecnovigilancia | Post-market |

### 1.2 Clasificación en INVIMA

- **Clase de riesgo:** IIa (Riesgo Moderado)
- **Tipo de registro:** Registro Sanitario de Dispositivo Médico
- **Vigencia:** 10 años, renovable
- **Titular:** Fabricante o importador autorizado en Colombia
- **Modalidad:** Registro sanitario nuevo

---

## 2. Documentos Técnicos Requeridos

### 2.1 Documentación Administrativa

| # | Documento | Descripción | Estado |
|---|---|---|---|
| 1 | **Formulario Único de Registro Sanitario** | Formulario oficial INVIMA diligenciado completamente | ⬜ Pendiente |
| 2 | **Poder o autorización del fabricante** | Documento que autoriza al titular a registrar el dispositivo en Colombia. Debe estar apostillado/consularizado | ⬜ Pendiente |
| 3 | **Certificado de existencia y representación legal** del titular | Cámara de Comercio vigente (< 90 días) | ⬜ Pendiente |
| 4 | **Certificado de libre venta (CLV)** | Emitido por la autoridad sanitaria del país de fabricación. Si el fabricante es colombiano, se requiere declaración de conformidad del fabricante | ⬜ Pendiente |
| 5 | **Certificado ISO 13485** o **Certificado BPM** | Certificado de sistema de gestión de calidad vigente, emitido por organismo acreditado | ⬜ Pendiente |
| 6 | **Recibo de pago** | Pago de la tasa de evaluación a INVIMA | ⬜ Pendiente |

### 2.2 Documentación Técnica del Dispositivo

| # | Documento | Contenido Requerido |
|---|---|---|
| 7 | **Descripción del dispositivo** | Nombre genérico y comercial, principio de funcionamiento, materiales, componentes, accesorios, especificaciones técnicas, fotografías o dibujos técnicos |
| 8 | **Uso previsto y indicaciones** | Indicaciones de uso, población objetivo, contraindicaciones, advertencias y precauciones |
| 9 | **Instrucciones de uso (IFU)** | En español. Incluir: instalación, operación, mantenimiento, limpieza, almacenamiento, eliminación. Debe cumplir con requisitos de etiquetado |
| 10 | **Etiquetado** | Maqueta de etiquetas en español. Incluir: nombre del dispositivo, fabricante, representante, lote, fecha de vencimiento (si aplica), condiciones de almacenamiento, símbolos ISO 15223 |
| 11 | **Especificaciones técnicas completas** | Parámetros eléctricos, mecánicos, de software. Para Horizon: frecuencia de muestreo, resolución, canales, rango BLE, autonomía de batería, etc. |
| 12 | **Análisis de riesgos** | Resumen del Risk Management File según ISO 14971. Incluir: identificación de peligros, estimación de riesgos, medidas de mitigación, riesgo residual |
| 13 | **Reportes de ensayos** | Reportes de laboratorios acreditados: seguridad eléctrica (IEC 60601-1), EMC (IEC 60601-1-2), Holter (IEC 60601-2-47), biocompatibilidad (ISO 10993) |
| 14 | **Información del software** | Descripción general del software, versión, clasificación de seguridad, proceso de validación. Para Horizon: firmware, backend, app, dashboard, módulo IA |
| 15 | **Evidencia clínica** | Revisión bibliográfica de seguridad y desempeño de dispositivos equivalentes. Datos clínicos propios si están disponibles |
| 16 | **Declaración de conformidad** | Declaración firmada por el fabricante de que el dispositivo cumple con las normas técnicas aplicables |

### 2.3 Documentación de Calidad

| # | Documento | Descripción |
|---|---|---|
| 17 | **Manual de calidad** | Resumen del sistema de gestión de calidad ISO 13485 |
| 18 | **Procedimientos de manufactura** | Descripción del proceso de fabricación, controles de proceso, controles de producto |
| 19 | **Procedimientos de inspección y ensayo** | Criterios de aceptación, métodos de inspección, registros |
| 20 | **Trazabilidad** | Sistema de trazabilidad de materiales, componentes, producto terminado |

---

## 3. Estudios Clínicos Necesarios

### 3.1 Requisitos de Evidencia Clínica para Clase IIa

Para dispositivos Clase IIa en INVIMA, **no se requieren ensayos clínicos propios** de forma obligatoria. Se acepta:

1. **Revisión bibliográfica** de la evidencia clínica publicada para dispositivos Holter ECG equivalentes
2. **Datos de equivalencia** con dispositivos ya registrados en INVIMA o aprobados por FDA/EMA
3. **Datos clínicos propios** (si están disponibles) como evidencia complementaria

### 3.2 Estrategia de Evidencia Clínica para Horizon Medical

| Fuente de Evidencia | Descripción | Prioridad |
|---|---|---|
| Revisión bibliográfica sistemática | Publicaciones sobre monitores Holter ECG, precisión diagnóstica, seguridad | Alta (obligatoria) |
| Equivalencia con predicados | Comparación técnica con Zio XT, MCOT, CardioScan | Alta |
| Datos de verificación y validación | Resultados de V&V del dispositivo (precisión de ECG, detección de arritmias) | Alta |
| FDA 510(k) clearance (si obtenida) | Referencia a aprobación FDA como evidencia adicional | Media (fortalece el dossier) |
| Estudio clínico piloto (opcional) | Estudio con 30–50 pacientes comparando con Holter de referencia | Baja (recomendado pero no obligatorio) |

### 3.3 Consideración Especial para IA

INVIMA no cuenta con una guía específica para dispositivos con IA. Se recomienda:
- Incluir una descripción clara del algoritmo y su función como herramienta de soporte
- Presentar métricas de rendimiento del modelo (sensibilidad, especificidad, AUC)
- Documentar que la decisión final es del profesional de salud
- Referenciar la guía FDA de AI/ML como estándar internacional de referencia

---

## 4. Certificaciones ISO Requeridas

| Certificación | Requerimiento | Estado |
|---|---|---|
| **ISO 13485:2016** | Obligatoria (o certificado BPM equivalente expedido por INVIMA o autoridad reconocida) | ⬜ Pendiente |
| **ISO 14971:2019** | Evidencia de cumplimiento (no requiere certificación separada; se demuestra con el Risk Management File) | ⬜ Pendiente |
| **IEC 60601-1** (serie) | Reporte de ensayo de laboratorio acreditado (no certificación del fabricante) | ⬜ Pendiente |
| **IEC 62304** | Evidencia de cumplimiento documentada (recomendado, no obligatorio para INVIMA) | ⬜ Pendiente |

### 4.1 Nota sobre ISO 13485 en Colombia

INVIMA acepta como alternativa al certificado ISO 13485:
- Certificado de Buenas Prácticas de Manufactura (BPM) emitido por una autoridad sanitaria reconocida
- Certificado ISO 13485 emitido por organismo de certificación acreditado bajo IAF

El certificado debe estar vigente al momento de la solicitud y durante toda la vigencia del registro sanitario.

---

## 5. Documentación de Software (IEC 62304)

### 5.1 Requisitos de Software para INVIMA

INVIMA no exige explícitamente la conformidad con IEC 62304, pero se recomienda fuertemente como estándar de referencia internacional. La documentación mínima requerida incluye:

| Documento | Descripción | Obligatorio |
|---|---|---|
| Descripción general del software | Arquitectura, componentes, versiones, funcionalidades | ✅ Sí |
| Clasificación de seguridad | Clasificación del software según su impacto en la seguridad del paciente | ✅ Sí |
| Proceso de desarrollo | Evidencia de un proceso controlado de desarrollo de software | ✅ Sí |
| Validación del software | Evidencia de que el software funciona según sus especificaciones | ✅ Sí |
| Control de versiones | Sistema de control de versiones y gestión de cambios | ✅ Sí |
| Cybersecurity (básico) | Descripción de medidas de seguridad para protección de datos | Recomendado |

### 5.2 Documentación de Software para Horizon Medical

Para el sistema Horizon Medical, se debe documentar:

1. **Firmware (nRF52832):** Descripción funcional, versión, proceso de actualización OTA
2. **Backend / Cloud:** Arquitectura de servicios, procesamiento de datos, API
3. **Módulo IA (CNN-LSTM):** Descripción del algoritmo, datos de entrenamiento, métricas de rendimiento
4. **App móvil:** Funcionalidades, plataformas soportadas (iOS/Android), versión
5. **Dashboard web:** Funcionalidades para el profesional de salud, acceso, seguridad

---

## 6. Documentación de IA/Machine Learning

### 6.1 Situación Regulatoria de IA en Colombia

A la fecha de este documento, **INVIMA no cuenta con regulación específica ni guía para dispositivos médicos con inteligencia artificial**. Sin embargo, se recomienda:

- Documentar la IA de forma transparente siguiendo estándares internacionales (FDA AI/ML Guidance)
- Clasificar el módulo de IA como componente de software del dispositivo médico
- Incluir en el dossier:

| Elemento | Descripción |
|---|---|
| Descripción del algoritmo | CNN-LSTM para detección de arritmias (FA, TV, bradicardia, etc.) |
| Tipo de algoritmo | Locked algorithm (no aprendizaje continuo post-deployment) |
| Datos de entrenamiento | Fuentes de datos, tamaño del dataset, distribución demográfica |
| Métricas de rendimiento | Sensibilidad, especificidad, VPP, VPN, AUC-ROC por tipo de arritmia |
| Validación | Metodología de validación (cross-validation, hold-out set, dataset externo) |
| Limitaciones | Limitaciones conocidas del algoritmo, condiciones de fallo |
| Rol del usuario | Herramienta de soporte — la decisión final es del profesional médico |

### 6.2 Recomendación

Anticipar que INVIMA adoptará regulación de IA en el futuro cercano. Preparar la documentación siguiendo estándares FDA/MDR facilitará la actualización cuando se requiera.

---

## 7. Buenas Prácticas de Manufactura

### 7.1 Requisitos BPM según INVIMA

| Requisito | Descripción | Aplicabilidad |
|---|---|---|
| Instalaciones | Áreas de producción adecuadas, controladas, limpias | Aplica |
| Personal | Personal calificado, capacitado, con roles definidos | Aplica |
| Equipos | Equipos calibrados, mantenidos, validados | Aplica |
| Documentación | Sistema documental controlado (SOPs, registros, especificaciones) | Aplica |
| Control de materiales | Proveedores calificados, inspección de entrada, trazabilidad | Aplica |
| Control de proceso | Procesos validados, controles en proceso, registros | Aplica |
| Control de producto | Inspección final, criterios de aceptación, liberación | Aplica |
| Almacenamiento y distribución | Condiciones controladas, FIFO, trazabilidad | Aplica |
| Quejas y CAPA | Sistema de manejo de quejas, acciones correctivas y preventivas | Aplica |
| Auditorías internas | Programa de auditorías internas periódicas | Aplica |

### 7.2 Verificación CCAA (Decreto 4725, Art. 38)

Para dispositivos Clase IIa, INVIMA puede realizar una verificación de Capacidad de Almacenamiento y Acondicionamiento (CCAA) en las instalaciones del titular o importador en Colombia. Esto incluye:

- Condiciones de almacenamiento adecuadas
- Control de temperatura y humedad (si aplica)
- Sistema de trazabilidad
- Personal capacitado
- Procedimientos de recepción e inspección

---

## 8. Checklist Completo

### 8.1 Documentación Administrativa

- [ ] Formulario Único de Registro Sanitario diligenciado
- [ ] Poder del fabricante al titular (apostillado/consularizado)
- [ ] Certificado de existencia y representación legal del titular (< 90 días)
- [ ] Certificado de libre venta del país de origen (apostillado/consularizado)
- [ ] Certificado ISO 13485 vigente (o BPM equivalente)
- [ ] Recibo de pago de tasa INVIMA
- [ ] Carta de responsabilidad del titular del registro sanitario

### 8.2 Documentación Técnica

- [ ] Descripción completa del dispositivo (nombre, componentes, principio de funcionamiento)
- [ ] Fotografías y/o dibujos técnicos del dispositivo
- [ ] Especificaciones técnicas completas (hardware + software)
- [ ] Uso previsto, indicaciones y contraindicaciones
- [ ] Instrucciones de uso (IFU) en español
- [ ] Etiquetado (maquetas) en español conforme a normatividad
- [ ] Declaración de conformidad del fabricante
- [ ] Lista de componentes y materiales
- [ ] Información del software (descripción, versión, clasificación, validación)
- [ ] Descripción del módulo de IA (algoritmo, rendimiento, limitaciones)

### 8.3 Reportes de Ensayo y Evidencia

- [ ] Reporte de seguridad eléctrica — IEC 60601-1 (laboratorio acreditado)
- [ ] Reporte de EMC — IEC 60601-1-2 (laboratorio acreditado)
- [ ] Reporte de norma particular — IEC 60601-2-47 (laboratorio acreditado)
- [ ] Reporte de biocompatibilidad — ISO 10993-5, 10993-10 (laboratorio acreditado)
- [ ] Reporte de seguridad de batería — IEC 62133-2 (laboratorio acreditado)
- [ ] Resumen del Risk Management File (ISO 14971)

### 8.4 Evidencia Clínica

- [ ] Revisión bibliográfica sistemática de dispositivos Holter ECG
- [ ] Análisis de equivalencia con dispositivos predicados
- [ ] Datos de verificación y validación (precisión de ECG, detección de arritmias)
- [ ] Métricas de rendimiento del módulo de IA (sensibilidad, especificidad)
- [ ] Referencia a aprobación FDA (si disponible)

### 8.5 Sistema de Calidad

- [ ] Manual de calidad (resumen)
- [ ] Procedimientos de manufactura relevantes
- [ ] Procedimientos de inspección y ensayo
- [ ] Sistema de trazabilidad documentado
- [ ] Programa de tecnovigilancia

### 8.6 Post-Registro

- [ ] Plan de tecnovigilancia conforme a Resolución 4816 de 2008
- [ ] Designación de responsable de tecnovigilancia
- [ ] Registro en el Programa Nacional de Tecnovigilancia
- [ ] Procedimiento de reporte de eventos e incidentes adversos
- [ ] Plan de renovación del registro (antes de vencimiento de 10 años)

### 8.7 Documentación Adicional (si aplica)

- [ ] Certificado de calibración de equipos de medición utilizados en testing
- [ ] Certificados de acreditación de los laboratorios de ensayo
- [ ] Traducciones oficiales de documentos en idioma extranjero
- [ ] Estudios de estabilidad y vida útil (si aplica)
- [ ] Información sobre accesorios (electrodos, cables, cargador)

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial |

---

*Documento confidencial — Horizon Medical*
