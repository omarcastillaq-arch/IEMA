# HORIZON MEDICAL — Requisitos EMA/MDR (Unión Europea)

**Documento:** HM-REG-005  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Marco regulatorio:** Reglamento (UE) 2017/745 (MDR)  

---

## Tabla de Contenidos

1. [Regulación MDR 2017/745](#1-regulación-mdr-2017745)
2. [Requisitos para Clase IIa/IIb](#2-requisitos-para-clase-iiaiib)
3. [Organismo Notificado](#3-organismo-notificado)
4. [Evaluación Clínica](#4-evaluación-clínica)
5. [Clinical Evaluation Report (CER)](#5-clinical-evaluation-report-cer)
6. [Post-Market Clinical Follow-up (PMCF)](#6-post-market-clinical-follow-up-pmcf)
7. [Technical Documentation](#7-technical-documentation)
8. [UDI-DI Registration](#8-udi-di-registration)
9. [EUDAMED Registration](#9-eudamed-registration)
10. [Vigilancia Post-Comercialización](#10-vigilancia-post-comercialización)
11. [Checklist Completo](#11-checklist-completo)

---

## 1. Regulación MDR 2017/745

### 1.1 Alcance

El Reglamento (UE) 2017/745 sobre productos sanitarios (Medical Device Regulation — MDR) reemplaza a las Directivas 93/42/CEE (MDD) y 90/385/CEE (AIMDD). El MDR es de aplicación obligatoria desde el 26 de mayo de 2021 (con extensiones para ciertos dispositivos).

### 1.2 Clasificación del Horizon Medical bajo MDR

| Criterio | Análisis |
|---|---|
| **Regla de clasificación** | **Regla 11** (Annex VIII, Capítulo III, Sección 6.3) |
| **Texto de la regla** | *"Software intended to provide information which is used to take decisions with diagnosis or therapeutic purposes is classified as class IIa, except if such decisions have an impact that may cause: death or an irreversible deterioration → class III; a serious deterioration → class IIb; all other situations → class IIa"* |
| **Clasificación resultante** | **Clase IIb** — El software detecta arritmias ventriculares (TV/FV) cuya no detección oportuna podría causar un deterioro grave del estado de salud |
| **Clasificación alternativa** | Clase IIa si el NB acepta que la IA es puramente de soporte y la decisión final es siempre del médico |
| **Recomendación** | Preparar documentación para **Clase IIb** (enfoque conservador) |

### 1.3 Procedimiento de Evaluación de Conformidad

Para **Clase IIb** bajo MDR:

| Annex | Procedimiento | Descripción |
|---|---|---|
| **Annex IX** | EU quality management system assessment + Technical documentation assessment | Evaluación del QMS + evaluación de la TD por el NB |
| **Annex XI Part A** | Production quality assurance | Alternativa: aseguramiento de calidad de producción |

**Ruta recomendada:** Annex IX (completo) — Evaluación del sistema de gestión de calidad + evaluación de la documentación técnica por el Organismo Notificado.

---

## 2. Requisitos para Clase IIa/IIb

### 2.1 Requisitos Esenciales de Seguridad y Rendimiento (Annex I)

| Capítulo | Requisito | Aplicabilidad |
|---|---|---|
| **Cap. I — General Requirements** | Seguridad y rendimiento durante vida útil, riesgo aceptable, estado del arte | ✅ Aplica |
| **Cap. II — Design and Manufacture** | Propiedades químicas/físicas, infección, componentes biológicos, energía | ✅ Aplica (seguridad eléctrica, batería) |
| **Cap. III — Information** | Etiquetado, instrucciones de uso, idiomas | ✅ Aplica |
| **Sección 14.1–14.7** | Requisitos para dispositivos con función de medición | ✅ Aplica (medición ECG) |
| **Sección 17** | Requisitos para dispositivos con software | ✅ Aplica |
| **Sección 17.1** | Software según estado del arte (IEC 62304) | ✅ Aplica |
| **Sección 17.2** | Software como dispositivo médico (SaMD): repetibilidad, fiabilidad, rendimiento | ✅ Aplica (módulo IA) |
| **Sección 18** | Dispositivos con acceso a fuentes de energía | ✅ Aplica (batería LiPo) |
| **Sección 23** | Protección contra riesgos de software y entornos de TI | ✅ Aplica (cybersecurity) |

### 2.2 Requisitos Específicos de Software bajo MDR

| Requisito (MDR Annex I) | Descripción | Cumplimiento |
|---|---|---|
| **17.1** | Diseñado y fabricado conforme al estado del arte, ciclo de vida de desarrollo, gestión de riesgos, V&V | IEC 62304 + IEC 62366 |
| **17.2** | Repetibilidad, fiabilidad y rendimiento para uso previsto. Medidas contra acceso no autorizado | IEC 62304 + Cybersecurity |
| **17.2 (párr. 2)** | Software que se ejecuta en plataformas comerciales (móviles): validar la interacción con la plataforma | Validación en iOS/Android |
| **17.4** | Requisitos de interoperabilidad y seguridad | Protocolo BLE + API |
| **23.4** | Medidas de seguridad IT: protección contra acceso no autorizado, requisitos mínimos de plataformas | Cybersecurity documentation |

---

## 3. Organismo Notificado

### 3.1 Selección del Organismo Notificado

| Criterio de Selección | Consideración |
|---|---|
| **Designación MDR** | Debe estar designado bajo MDR 2017/745 (no MDD) |
| **Alcance de designación** | Debe cubrir el código de dispositivo relevante (dispositivos activos de diagnóstico, software) |
| **Experiencia en el sector** | Preferencia por NBs con experiencia en dispositivos cardiovasculares y software/IA |
| **Capacidad y backlog** | Tiempos de espera actuales varían de 6 a 18+ meses |
| **Localización** | NBs en la UE; considerar idioma y facilidad de comunicación |
| **Costo** | Tarifas varían significativamente entre NBs |

### 3.2 Organismos Notificados Recomendados

| Organismo Notificado | NB Number | País | Fortaleza |
|---|---|---|---|
| **BSI** | 2797 | UK/NL | Amplia experiencia en software médico |
| **TÜV SÜD** | 0123 | Alemania | Fuerte en dispositivos activos, IA |
| **TÜV Rheinland** | 0197 | Alemania | Experiencia cardiovascular |
| **DEKRA** | 0124 | Alemania/NL | Capacidad creciente bajo MDR |
| **SGS** | 0120 | Bélgica | Presencia internacional |
| **IMQ** | 0051 | Italia | Competitivo en costos |

### 3.3 Proceso con el Organismo Notificado

1. **Application:** Envío de solicitud formal con descripción del dispositivo y clasificación
2. **Quote & Contract:** El NB evalúa el alcance y emite cotización
3. **Document Review (Stage 1):** Revisión de la documentación técnica
4. **QMS Audit (Stage 2):** Auditoría presencial del sistema de gestión de calidad
5. **Technical Documentation Assessment:** Revisión detallada de la TD
6. **Observations & Responses:** El fabricante responde a no conformidades
7. **Certification Decision:** El NB decide si emite el certificado
8. **Surveillance Audits:** Auditorías anuales de vigilancia

---

## 4. Evaluación Clínica

### 4.1 Requisitos de Evaluación Clínica (MDR Annex XIV)

La evaluación clínica bajo MDR es **significativamente más rigurosa** que bajo MDD. Los requisitos incluyen:

| Requisito | Descripción | Referencia |
|---|---|---|
| **Clinical Evaluation Plan (CEP)** | Plan que define la estrategia, metodología y criterios de la evaluación clínica | MDR Art. 61, Annex XIV Part A |
| **Identification of clinical data** | Búsqueda sistemática de literatura + datos propios | MEDDEV 2.7/1 Rev 4 |
| **Appraisal of clinical data** | Evaluación crítica de la calidad y relevancia de cada dato | MEDDEV 2.7/1 Rev 4 |
| **Analysis of clinical data** | Análisis de los datos en relación con seguridad, rendimiento, beneficio-riesgo | MEDDEV 2.7/1 Rev 4 |
| **Clinical Evaluation Report (CER)** | Documento que consolida toda la evaluación clínica | MDR Annex XIV |

### 4.2 Equivalencia Clínica (MDR Annex XIV, Part A, Section 3)

Bajo MDR, la demostración de equivalencia con un dispositivo ya en el mercado es **más restrictiva** que bajo MDD:

| Criterio de Equivalencia | Requisito MDR | Análisis Horizon |
|---|---|---|
| **Técnica** | Mismo diseño, condiciones de uso, especificaciones, propiedades | Similar (ECG ambulatorio, electrodos de superficie) |
| **Biológica** | Mismos materiales en contacto con el cuerpo | Equivalente (Ag/AgCl, adhesivos estándar) |
| **Clínica** | Misma condición clínica, mismo sitio del cuerpo, misma población, mismo uso previsto | Equivalente (monitoreo ECG ambulatorio adultos) |
| **Acceso a datos del equivalente** | El fabricante debe tener acceso a los datos clínicos del dispositivo equivalente, o existir un contrato | ⚠️ Difícil (fabricantes diferentes) |

> **Nota crítica:** Bajo MDR, si el fabricante no tiene acceso contractual a los datos del dispositivo equivalente, la evaluación clínica debe incluir datos clínicos propios o una justificación muy robusta basada en literatura publicada.

### 4.3 Estrategia de Evaluación Clínica para Horizon

1. **Ruta 1 (Principal):** Equivalencia basada en literatura publicada extensiva sobre Holter ECG + datos de V&V propios + datos de validación de IA
2. **Ruta 2 (Complementaria):** Estudio clínico propio (prospectivo comparativo) para fortalecer el CER
3. **Ruta 3 (IA específica):** Validación del algoritmo con datasets públicos anotados (PhysioNet MIT-BIH, INCART) + dataset clínico propio

---

## 5. Clinical Evaluation Report (CER)

### 5.1 Estructura del CER (MEDDEV 2.7/1 Rev 4)

| Sección | Contenido |
|---|---|
| **Scope** | Dispositivo, uso previsto, clasificación, evaluador |
| **Clinical Background** | Contexto clínico, epidemiología, alternativas, estado del arte |
| **Device Description** | Descripción técnica, generaciones, accesorios |
| **Clinical Evaluation Plan** | Metodología, criterios de búsqueda, bases de datos consultadas |
| **Clinical Data — Literature** | Búsqueda sistemática, selección, appraisal, datos extraídos |
| **Clinical Data — Device** | Datos de V&V, datos clínicos propios, experiencia post-market |
| **Equivalence Assessment** | Análisis de equivalencia técnica, biológica y clínica |
| **Analysis of Safety** | Análisis de todos los datos de seguridad, eventos adversos |
| **Analysis of Performance** | Análisis del rendimiento clínico (sensibilidad, especificidad de arritmias) |
| **Benefit-Risk Analysis** | Evaluación beneficio-riesgo según MDR |
| **Conclusions** | Conclusiones clínicas, conformidad con GSPRs |
| **Date, Author, Qualifications** | Evaluador clínico calificado (médico con experiencia) |

> **Referencia:** Ver template detallado en `templates/Clinical-Evaluation-Report.md`

---

## 6. Post-Market Clinical Follow-up (PMCF)

### 6.1 Requisitos de PMCF (MDR Annex XIV, Part B)

| Elemento | Descripción |
|---|---|
| **PMCF Plan** | Plan detallado de seguimiento clínico post-comercialización |
| **Objetivo** | Confirmar seguridad y rendimiento durante toda la vida útil del dispositivo |
| **Métodos** | Estudios PMCF, registros, surveys, complaint analysis |
| **PMCF Evaluation Report** | Informe periódico de resultados (parte del PSUR para Clase IIb+) |

### 6.2 PMCF Plan para Horizon Medical

| Actividad PMCF | Descripción | Frecuencia |
|---|---|---|
| **Revisión de literatura** | Búsqueda continua de publicaciones sobre Holter ECG y IA cardíaca | Anual |
| **Análisis de complaints** | Revisión sistemática de quejas y reportes de campo | Continua |
| **Registry study** | Registro prospectivo de pacientes monitoreados (endpoints: accuracy, AE) | Continua |
| **User survey** | Encuestas de satisfacción a clínicos y pacientes | Semestral |
| **AI performance monitoring** | Monitoreo continuo de métricas del modelo de IA en producción | Continua |
| **Vigilance data analysis** | Análisis de datos de vigilancia propios y de la industria | Anual |

---

## 7. Technical Documentation

### 7.1 Estructura de la Technical Documentation (MDR Annex II + III)

#### Annex II — Technical Documentation

| Sección | Contenido |
|---|---|
| **1. Device Description and Specification** | Nombre, clasificación, uso previsto, generaciones, componentes, materiales, accesorios, configuraciones |
| **2. Information to be Supplied by the Manufacturer** | Etiquetado, IFU en todos los idiomas de los países de comercialización |
| **3. Design and Manufacturing Information** | Proceso de manufactura, proveedores, validación de procesos, diagrama de flujo |
| **4. General Safety and Performance Requirements (GSPRs)** | Checklist de requisitos esenciales (Annex I) con referencia a normas armonizadas |
| **5. Benefit-Risk Analysis and Risk Management** | Risk Management File según ISO 14971, análisis beneficio-riesgo |
| **6. Product Verification and Validation** | V&V completa: bench testing, software V&V, biocompatibilidad, EMC, seguridad eléctrica |
| **6 (cont.) Clinical Evaluation** | CER según MEDDEV 2.7/1 Rev 4, PMCF plan |

#### Annex III — Post-Market Surveillance Documentation

| Sección | Contenido |
|---|---|
| **1. PMS Plan** | Plan de vigilancia post-comercialización |
| **2. PSUR** | Periodic Safety Update Report (obligatorio para Clase IIb y III) |
| **3. PMCF Plan** | Plan de seguimiento clínico post-comercialización |
| **4. PMCF Evaluation Report** | Resultados del PMCF |

### 7.2 General Safety and Performance Requirements (GSPRs) Checklist

| GSPR # | Requisito | Aplica | Norma Armonizada | Método de Conformidad |
|---|---|---|---|---|
| 1 | Seguridad y rendimiento como uso previsto | ✅ | ISO 14971 | Risk Management File |
| 2 | Gestión de riesgos | ✅ | ISO 14971 | Risk Management File |
| 3 | Características de diseño para seguridad | ✅ | IEC 60601-1 | Design & V&V |
| 5 | Eliminación o reducción de riesgos | ✅ | ISO 14971 | Risk Management File |
| 10 | Propiedades químicas, físicas y biológicas | ✅ | ISO 10993 | Biocompatibility Report |
| 14 | Función de medición | ✅ | IEC 60601-2-47 | ECG Performance Testing |
| 17 | Software | ✅ | IEC 62304 | Software Documentation |
| 18 | Dispositivos activos y accesorios | ✅ | IEC 60601-1, -1-11 | Safety Testing |
| 20 | Protección contra riesgos mecánicos | ✅ | IEC 60601-1 | Design |
| 21 | Protección contra riesgos de radiación | ❌ | N/A | N/A |
| 23 | Protección contra riesgos de software/IT | ✅ | IEC 81001-5-1 | Cybersecurity Documentation |
| 23.4 | Requisitos mínimos de seguridad IT | ✅ | IEC 81001-5-1 | Cybersecurity Documentation |

---

## 8. UDI-DI Registration

### 8.1 Requisitos UDI bajo MDR

| Elemento | Descripción |
|---|---|
| **UDI-DI** | Device Identifier — identifica el modelo/versión del dispositivo |
| **UDI-PI** | Production Identifier — identifica la unidad de producción (lote, SN, fecha) |
| **Issuing Entity** | GS1, HIBCC, ICCBBA, o IFA |
| **EUDAMED UDI/Device** | Registro obligatorio del UDI-DI en la base de datos EUDAMED |
| **Formato** | Código de barras (GS1-128, DataMatrix) + texto legible |
| **Ubicación** | En el dispositivo (si factible), en el empaque, en todos los niveles de empaque |

### 8.2 UDI para Horizon Medical

| Nivel | UDI-DI | Descripción |
|---|---|---|
| Dispositivo Holter HM-H100 | (GTIN asignado por GS1) | Unidad del dispositivo Holter |
| Electrodos (paquete) | (GTIN asignado por GS1) | Paquete de electrodos desechables |
| Cable USB-C | (GTIN asignado por GS1) | Cable de carga |
| Kit completo (caja) | (GTIN asignado por GS1) | Kit de monitoreo completo |

### 8.3 Pasos para Implementar UDI

1. Registrarse como fabricante ante una Issuing Entity (recomendado: GS1)
2. Obtener un Company Prefix de GS1
3. Asignar GTINs a cada producto/empaque
4. Generar códigos de barras (DataMatrix recomendado)
5. Integrar UDI en etiquetado del producto
6. Registrar UDI-DI en EUDAMED

---

## 9. EUDAMED Registration

### 9.1 Registros Requeridos en EUDAMED

| Módulo EUDAMED | Descripción | Responsable |
|---|---|---|
| **Actor Registration** | Registro del fabricante y del EC REP | Fabricante + EC REP |
| **UDI/Device Registration** | Registro del UDI-DI y datos del dispositivo | Fabricante |
| **Notified Body & Certificates** | Certificados del NB | NB |
| **Clinical Investigations** | Registro de investigaciones clínicas (si aplica) | Fabricante |
| **Vigilance** | Reportes de incidentes y FSCAs | Fabricante |
| **Market Surveillance** | Datos de vigilancia del mercado | Autoridades |

### 9.2 Datos del Dispositivo en EUDAMED

| Campo | Valor para Horizon Medical |
|---|---|
| Device name | Horizon Medical Holter ECG System |
| Trade name | Horizon Medical HM-H100 |
| Manufacturer | [Nombre del fabricante] |
| SRN (Single Registration Number) | Asignado por EUDAMED |
| Basic UDI-DI | (Asignado por GS1) |
| Risk class | IIb (o IIa si reclasificado) |
| Intended purpose | Ambulatory ECG monitoring with AI-assisted arrhythmia detection |
| Medical Device Nomenclature | EMDN code (European Medical Device Nomenclature) |

### 9.3 Timeline de EUDAMED

| Fase | Estado (2026) |
|---|---|
| Actor Registration | Operativo |
| UDI/Device Registration | Operativo |
| Notified Body & Certificates | Operativo |
| Clinical Investigations | Operativo (fase de implementación) |
| Vigilance | En implementación |
| Market Surveillance | En implementación |

> **Nota:** EUDAMED ha tenido múltiples retrasos. Verificar el estado actual de cada módulo al momento de la submission.

---

## 10. Vigilancia Post-Comercialización

### 10.1 Post-Market Surveillance (PMS) — MDR Art. 83-86

| Elemento | Descripción | Frecuencia |
|---|---|---|
| **PMS Plan** | Plan proactivo de recopilación y análisis de datos post-market | Documento vivo |
| **PMS Report** | Informe de PMS (para Clase I) | Actualización periódica |
| **PSUR (Periodic Safety Update Report)** | Informe periódico de seguridad (para Clase IIb y III) | Anual (mínimo) |
| **Trend Reporting** | Reporte de tendencias significativas en incidentes | Según necesidad |
| **Vigilance Reporting** | Reporte de serious incidents y FSCAs | Inmediato (≤15 días, ≤2 días para threats to public health) |

### 10.2 Contenido del PSUR (MDR Art. 86)

| Sección | Contenido |
|---|---|
| Resumen de datos PMS | Complaints, vigilance, literature, PMCF |
| Conclusiones del análisis beneficio-riesgo | ¿Sigue siendo favorable? |
| Volumen de ventas | Unidades vendidas, pacientes expuestos |
| Estimación de pacientes expuestos | Base para calcular tasas de incidentes |
| Acciones correctivas de campo (FSCAs) | Resumen de cualquier FSCA realizada |
| Conclusiones y acciones | Acciones planeadas basadas en los datos |

### 10.3 Vigilance Reporting

| Tipo de Reporte | Plazo | Destinatario |
|---|---|---|
| **Serious incident** (muerte o deterioro grave) | ≤ 15 días (≤ 2 días si amenaza a salud pública) | Autoridad Competente del Estado Miembro |
| **Field Safety Corrective Action (FSCA)** | Inmediato | Autoridad Competente + EUDAMED |
| **Trend report** | Sin plazo fijo, cuando se identifica tendencia | Autoridad Competente |

---

## 11. Checklist Completo

### 11.1 Preparación General

- [ ] EC REP (Authorized Representative) designado en la UE
- [ ] Contrato con EC REP firmado (MDR Art. 11)
- [ ] Person Responsible for Regulatory Compliance (PRRC) designado (MDR Art. 15)
- [ ] Registro en EUDAMED como fabricante (Actor Registration)
- [ ] ISO 13485:2016 certificado por organismo acreditado
- [ ] Organismo Notificado seleccionado y contrato firmado

### 11.2 Technical Documentation (Annex II)

- [ ] Sección 1: Device Description and Specification completa
- [ ] Sección 2: Labeling and IFU en todos los idiomas requeridos
- [ ] Sección 3: Design and Manufacturing Information
- [ ] Sección 4: GSPRs Checklist completo con normas armonizadas
- [ ] Sección 5: Benefit-Risk Analysis and Risk Management File
- [ ] Sección 6.a: Verification and Validation (bench testing, EMC, safety, bio)
- [ ] Sección 6.b: Clinical Evaluation Report (CER)

### 11.3 Evaluación Clínica

- [ ] Clinical Evaluation Plan (CEP) redactado
- [ ] Búsqueda sistemática de literatura completada
- [ ] Appraisal de datos clínicos realizado
- [ ] Análisis de equivalencia (técnica, biológica, clínica) documentado
- [ ] Clinical Evaluation Report (CER) redactado por evaluador calificado
- [ ] CER revisado y aprobado por el fabricante

### 11.4 Software y IA

- [ ] Software Documentation según IEC 62304 completa
- [ ] Software clasificado (Clase C para firmware/backend/IA)
- [ ] AI/ML documentation completa (algoritmo, training, validation, bias)
- [ ] Cybersecurity documentation según IEC 81001-5-1

### 11.5 Testing

- [ ] IEC 60601-1 — Seguridad eléctrica (lab acreditado)
- [ ] IEC 60601-1-2 — EMC (lab acreditado)
- [ ] IEC 60601-1-11 — Home healthcare environment
- [ ] IEC 60601-2-47 — Norma particular Holter ECG
- [ ] ISO 10993 — Biocompatibilidad
- [ ] IEC 62133-2 — Seguridad de batería
- [ ] IEC 62366-1 — Usabilidad
- [ ] Software V&V según IEC 62304

### 11.6 Post-Market Surveillance

- [ ] PMS Plan redactado (MDR Art. 84)
- [ ] PMCF Plan redactado (MDR Annex XIV Part B)
- [ ] Template de PSUR preparado
- [ ] Vigilance reporting procedures establecidos
- [ ] Complaint handling procedures establecidos

### 11.7 UDI y EUDAMED

- [ ] Registro en GS1 (o issuing entity elegida)
- [ ] UDI-DIs asignados para todos los productos/empaque
- [ ] UDI integrado en etiquetado (DataMatrix + texto legible)
- [ ] Basic UDI-DI registrado en EUDAMED
- [ ] Datos del dispositivo registrados en EUDAMED
- [ ] Certificado del NB registrado en EUDAMED

### 11.8 Declaración y CE Marking

- [ ] EU Declaration of Conformity redactada (MDR Art. 19, Annex IV)
- [ ] CE marking aplicado al dispositivo y empaque
- [ ] NB number incluido junto al CE mark (0123, 2797, etc.)

### 11.9 Post-Certification

- [ ] Surveillance audit con NB programada (anual)
- [ ] PSUR schedule establecido (anual para Clase IIb)
- [ ] PMCF study iniciado
- [ ] Renovación de certificado planificada (antes de 5 años)

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial |

---

*Documento confidencial — Horizon Medical*
