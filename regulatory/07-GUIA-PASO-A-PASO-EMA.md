# HORIZON MEDICAL — Guía Paso a Paso: EMA/MDR CE Marking

**Documento:** HM-REG-008  
**Versión:** 1.0  
**Fecha:** 2026-05-16  

---

## Resumen Ejecutivo

| Parámetro | Valor |
|---|---|
| **Regulación** | MDR 2017/745 |
| **Clasificación** | Clase IIb (conservador) |
| **Procedimiento** | Conformity Assessment vía Organismo Notificado (Annex IX) |
| **Tiempo estimado total** | 12–24 meses (post-preparación) |
| **Costo estimado** | $181,000–393,000 USD |
| **Vigencia certificado** | 5 años (renovable) |

---

## Timeline Visual

```
Mes:  1     2     3     4     5     6     7     8     9     10    11    12
      │     │     │     │     │     │     │     │     │     │     │     │
NB    ████████████
      Selección + Contrato con Organismo Notificado
      │     │     │     │     │     │     │     │     │     │     │     │
ECREP ████
      Designar EC REP + PRRC
      │     │     │     │     │     │     │     │     │     │     │     │
TD    │     ████████████████████████████████
      │     Preparación Technical Documentation + CER
      │     │     │     │     │     │     │     │     │     │     │     │

Mes:  13    14    15    16    17    18    19    20    21    22    23    24
      │     │     │     │     │     │     │     │     │     │     │     │
SUBM  ████
      Envío TD al NB
      │     │     │     │     │     │     │     │     │     │     │     │
DOC   │     ████████████████████
      │     NB Document Review + Observations
      │     │     │     │     │     │     │     │     │     │     │     │
AUDIT │     │     │     │     │     ████████
      │     │     │     │     │     QMS Audit (on-site)
      │     │     │     │     │     │     │     │     │     │     │     │
RESP  │     │     │     │     │     │     │     ████████
      │     │     │     │     │     │     │     Respuesta a NCs + Re-review
      │     │     │     │     │     │     │     │     │     │     │     │
CERT  │     │     │     │     │     │     │     │     │     │     ████████
      │     │     │     │     │     │     │     │     │     │     CE Certificate
```

---

## Paso 1: Designar Representante en la UE (Mes 1)

### 1.1 Acciones

- [ ] **Designar EC REP (Authorized Representative)** en un Estado Miembro de la UE
  - Obligatorio para fabricantes fuera de la UE (MDR Art. 11)
  - El EC REP actúa como punto de contacto para autoridades competentes
  - Debe estar establecido en un Estado Miembro de la UE
- [ ] **Designar Person Responsible for Regulatory Compliance (PRRC)**
  - Obligatorio bajo MDR Art. 15
  - Debe tener calificaciones y experiencia relevante
  - Puede ser empleado del fabricante o del EC REP
- [ ] **Firmar contrato con EC REP** que cubra responsabilidades MDR

### 1.2 Proveedores de EC REP

| Proveedor | Ubicación | Servicios |
|---|---|---|
| EMERGO by UL | Netherlands | EC REP + regulatory consulting |
| MedTech Europe Partners | Germany | EC REP + NB liaison |
| Obelis | Belgium | EC REP + regulatory services |
| Advena | Ireland | EC REP + quality services |
| EuropeMD | Multiple EU | EC REP services |

### 1.3 Costos

| Concepto | Costo Anual (USD) |
|---|---|
| EC REP | $5,000–10,000 |
| PRRC (si externo) | $3,000–8,000 |

---

## Paso 2: Seleccionar Organismo Notificado (Mes 1–3)

### 2.1 Acciones

- [ ] **Investigar NBs designados bajo MDR** para el alcance de tu dispositivo
  - Lista oficial: https://ec.europa.eu/growth/tools-databases/nando/
  - Filtrar por: MDR 2017/745, dispositivos activos, software médico
- [ ] **Solicitar cotizaciones** a 3–5 NBs
- [ ] **Evaluar NBs** según criterios (experiencia, capacidad, costo, timeline)
- [ ] **Seleccionar NB** y firmar contrato (Application Agreement)
- [ ] **Enviar Application Form** al NB con descripción del dispositivo

### 2.2 Criterios de Selección

| Criterio | Peso | Evaluación |
|---|---|---|
| Experiencia en dispositivos cardiovasculares | 25% | ⬜ |
| Experiencia en software/IA como DM | 25% | ⬜ |
| Timeline estimado (backlog actual) | 20% | ⬜ |
| Costo total (auditoría + certificación + vigilancia) | 15% | ⬜ |
| Idioma y comunicación | 10% | ⬜ |
| Reputación y referencias | 5% | ⬜ |

### 2.3 ⚠️ Nota Crítica: Backlog de NBs

Debido al MDR, muchos NBs tienen **backlogs significativos** (6–18 meses de espera). Es esencial iniciar la selección lo antes posible. Considerar:
- Aplicar a NBs con menor backlog (verificar en NANDO)
- Tener toda la documentación lista antes de la auditoría
- Comunicación proactiva con el NB

### 2.4 Costos

| Concepto | Costo (USD) |
|---|---|
| NB Application Fee | $3,000–8,000 |
| NB Document Review | $10,000–25,000 |
| NB QMS Audit (on-site) | $8,000–20,000 |
| NB Certification (initial) | $5,000–10,000 |
| NB Surveillance Audit (anual) | $5,000–15,000 |
| **TOTAL NB (Year 1)** | **$30,000–60,000** |

---

## Paso 3: Preparar Technical Documentation (Mes 2–12)

### 3.1 Estructura de la Technical Documentation (MDR Annex II)

| Sección | Contenido | Responsable | Estado |
|---|---|---|---|
| **1. Device Description** | Nombre, clasificación, generaciones, componentes, materiales, accesorios, configuraciones, imágenes | Engineering | ⬜ |
| **2. Information by Manufacturer** | Labeling + IFU en todos los idiomas de comercialización | Regulatory | ⬜ |
| **3. Design & Manufacturing** | Proceso de manufactura, diagrama de flujo, proveedores, validación de procesos | Production/QA | ⬜ |
| **4. GSPRs** | Checklist de General Safety & Performance Requirements con normas armonizadas | Regulatory/QA | ⬜ |
| **5. Benefit-Risk & Risk Management** | Risk Management File (ISO 14971), análisis beneficio-riesgo | QA/Clinical | ⬜ |
| **6a. Verification & Validation** | Bench testing (safety, EMC, bio), software V&V, cybersecurity | Engineering | ⬜ |
| **6b. Clinical Evaluation** | Clinical Evaluation Report (CER) + PMCF Plan | Clinical | ⬜ |

### 3.2 GSPRs Checklist

La documentación técnica debe incluir un **checklist completo de los Requisitos Generales de Seguridad y Rendimiento** (MDR Annex I) indicando para cada requisito:
- Si aplica o no al dispositivo
- Qué norma armonizada se usa para demostrar conformidad
- Dónde está la evidencia de conformidad en la TD
- Si existen desviaciones y su justificación

### 3.3 Acciones de Documentación

- [ ] **Completar Device Description** con todas las variantes y accesorios
- [ ] **Preparar IFU** en los idiomas de los Estados Miembros donde se comercializará
  - Mínimo: inglés, alemán, francés, español, italiano, portugués
  - Considerar: holandés, sueco, polaco, según mercados objetivo
- [ ] **Documentar proceso de manufactura** con diagrama de flujo
- [ ] **Completar GSPRs checklist** con referencias cruzadas a normas y evidencia
- [ ] **Compilar Risk Management File** según ISO 14971
- [ ] **Compilar todos los reportes de V&V** (safety, EMC, bio, software, AI, cyber)
- [ ] **Redactar Clinical Evaluation Report** (CER) — ver Paso 4
- [ ] **Preparar PMS Plan** (MDR Art. 84)
- [ ] **Preparar PMCF Plan** (MDR Annex XIV Part B)

---

## Paso 4: Preparar Clinical Evaluation Report (Mes 4–12)

### 4.1 Acciones

- [ ] **Redactar Clinical Evaluation Plan (CEP)**
- [ ] **Ejecutar búsqueda sistemática de literatura** en PubMed, Cochrane, Embase
- [ ] **Evaluar (appraise) cada artículo** por relevancia y calidad
- [ ] **Analizar datos de equivalencia** técnica, biológica y clínica
- [ ] **Compilar datos propios** del dispositivo (V&V, AI validation, usability)
- [ ] **Redactar análisis de seguridad** (safety analysis)
- [ ] **Redactar análisis de rendimiento** (performance analysis)
- [ ] **Redactar análisis beneficio-riesgo** (benefit-risk analysis)
- [ ] **Compilar CER** según MEDDEV 2.7/1 Rev 4
- [ ] **Revisión por evaluador clínico calificado** (médico con experiencia)

### 4.2 Consideraciones Especiales bajo MDR

| Aspecto | MDD (anterior) | MDR (actual) |
|---|---|---|
| Equivalencia | Flexible | Estricta — requiere acceso a datos del equivalente si fabricante diferente |
| Evaluador clínico | No especificado | Debe tener calificaciones y experiencia demostradas |
| PMCF | Opcional en muchos casos | Obligatorio para todos (excepto Clase I de bajo riesgo) |
| Actualización del CER | No frecuente | Continua (al menos anual para IIb) |

### 4.3 Costos

| Concepto | Costo (USD) |
|---|---|
| Consultor CER / Clinical evaluator | $15,000–40,000 |
| Literature search services | $2,000–5,000 |
| Translation of CER (si necesario) | $3,000–8,000 |

---

## Paso 5: Preparar PMS y PMCF (Mes 8–12)

### 5.1 Post-Market Surveillance (PMS) Plan

- [ ] **Definir fuentes de datos PMS:**
  - Complaints y feedback de usuarios
  - Vigilance reports (propios y de la industria)
  - Literature monitoring
  - PMCF data
  - Datos de servicio técnico
- [ ] **Definir frecuencia de análisis** y reporte
- [ ] **Definir responsabilidades** y flujos de escalación
- [ ] **Preparar template de PSUR** (Periodic Safety Update Report — obligatorio para Clase IIb)

### 5.2 PMCF Plan

- [ ] **Definir objetivos del PMCF** (confirmar seguridad y rendimiento a largo plazo)
- [ ] **Definir métodos de PMCF:**
  - Registry study (prospectivo)
  - User surveys
  - Literature monitoring continuo
  - AI performance monitoring
- [ ] **Definir endpoints y métricas**
- [ ] **Definir timeline y milestones**
- [ ] **Definir criterios de éxito y escalación**

---

## Paso 6: UDI y EUDAMED (Mes 10–12)

### 6.1 Acciones

- [ ] **Registrarse en GS1** (issuing entity recomendada para UDI)
- [ ] **Obtener Company Prefix** de GS1
- [ ] **Asignar GTINs** a cada producto y nivel de empaque
- [ ] **Generar códigos de barras** (DataMatrix recomendado)
- [ ] **Integrar UDI** en etiquetado del dispositivo
- [ ] **Registrarse en EUDAMED** como Actor (fabricante)
- [ ] **Registrar EC REP** en EUDAMED
- [ ] **Registrar Basic UDI-DI** en EUDAMED
- [ ] **Registrar datos del dispositivo** en EUDAMED

### 6.2 Costos

| Concepto | Costo (USD) |
|---|---|
| GS1 membership (anual) | $250–500 |
| EUDAMED registration | Gratuito |
| UDI label integration | $500–2,000 |

---

## Paso 7: Auditoría del Organismo Notificado (Mes 13–20)

### 7.1 Proceso de Auditoría

```
Application Accepted by NB
     │
     ▼
Stage 1: Document Review ──── Observations/Questions ──▶ Responder
(TD + QMS docs)                                          (4–8 sem)
     │
     ▼
Stage 2: QMS On-Site Audit ── Non-Conformities ──▶ CAPA Plan
(2–5 días en sitio)            (Major/Minor)        (30–90 días)
     │
     ▼
TD Assessment ────────────── Technical Questions ──▶ Responder
(en paralelo o secuencial)                           (4–8 sem)
     │
     ▼
Final Assessment
     │
  ┌──┴──┐
  │     │
  OK    Major NCs pendientes ──▶ Follow-up audit
  │
  ▼
Certification Decision ──▶ CE Certificate emitido
```

### 7.2 Preparación para la Auditoría

- [ ] **Verificar QMS** (ISO 13485) completamente implementado y funcional
- [ ] **Realizar auditoría interna** antes de la auditoría del NB
- [ ] **Corregir no conformidades** de auditoría interna
- [ ] **Preparar Management Review** actualizada
- [ ] **Capacitar al personal** sobre procedimientos y QMS
- [ ] **Preparar sala de auditoría** con documentación accesible
- [ ] **Designar guías** para el equipo auditor
- [ ] **Preparar apertura y cierre** de la auditoría

### 7.3 Áreas Típicas de Enfoque del NB

| Área | Qué Revisan |
|---|---|
| Design Controls | DHF, design reviews, V&V, traceability |
| Risk Management | RMF, hazard analysis, risk controls, residual risk |
| Software/AI | IEC 62304 compliance, AI validation, cybersecurity |
| Clinical Evaluation | CER quality, literature search, equivalence, PMCF |
| PMS | PMS plan, vigilance procedures, PSUR template |
| Supplier Management | Supplier qualification, incoming inspection |
| CAPA | CAPA system, effectiveness, trending |
| Document Control | Control system, versioning, approvals |

---

## Paso 8: Certificación y CE Marking (Mes 20–24)

### 8.1 Acciones Post-Certificación

- [ ] **Recibir CE Certificate** del Organismo Notificado
- [ ] **Redactar EU Declaration of Conformity** (MDR Art. 19, Annex IV)
  - Debe incluir: fabricante, EC REP, dispositivo, clasificación, NB, certificado, normas, fecha, firma
- [ ] **Aplicar CE marking** al dispositivo y empaque
  - Incluir número del NB junto al CE mark (e.g., CE 0123)
  - CE mark debe ser ≥5mm de altura, proporcional
- [ ] **Registrar certificado** en EUDAMED
- [ ] **Notificar a autoridades competentes** de los Estados Miembros donde se comercializará
- [ ] **Iniciar comercialización** en la UE

### 8.2 EU Declaration of Conformity (Template)

```
EU DECLARATION OF CONFORMITY

Manufacturer: [Company Name]
Address: [Full Address]

Authorized Representative: [EC REP Name]
Address: [EC REP Address]

This declaration of conformity is issued under the sole
responsibility of the manufacturer.

Device: Horizon Medical Holter ECG System
Model: HM-H100
Basic UDI-DI: [GTIN]
Classification: Class IIb, Rule 11

Notified Body: [NB Name], NB Number: [XXXX]
EC Certificate Number: [Certificate Number]
Date of Issue: [Date]

The device identified above conforms to the provisions of
Regulation (EU) 2017/745 on medical devices.

Applied harmonized standards:
- EN ISO 13485:2016
- EN ISO 14971:2019
- EN IEC 60601-1:2020
- EN IEC 60601-1-2:2014+A1:2020
- EN IEC 60601-2-47:2012+A1:2019
- EN IEC 62304:2006+A1:2015
- EN IEC 62366-1:2015+A1:2020
- EN ISO 10993-1:2020
- EN IEC 81001-5-1:2021

Place: [City, Country]
Date: [Date]

[Name, Title]
Signature: _________________________
```

---

## Paso 9: Post-Certificación (Continuo)

### 9.1 Obligaciones Continuas

| Obligación | Frecuencia | Referencia |
|---|---|---|
| Surveillance audit (NB) | Anual | MDR Art. 52 |
| PSUR (Periodic Safety Update Report) | Anual (mín. para IIb) | MDR Art. 86 |
| PMCF data collection and reporting | Continua | MDR Annex XIV Part B |
| CER update | Al menos anual (IIb) o con nuevos datos | MDR Art. 61 |
| Vigilance reporting (serious incidents) | ≤15 días (≤2 días for threats) | MDR Art. 87 |
| EUDAMED data maintenance | As needed | MDR Art. 29 |
| Certificate renewal | Before 5-year expiry | MDR Art. 56 |
| PMS Report / PSUR | Anual | MDR Art. 85, 86 |

### 9.2 Renovación del Certificado

| Paso | Timing |
|---|---|
| Iniciar proceso de renovación | 12–18 meses antes de vencimiento |
| Actualizar Technical Documentation | 12 meses antes |
| Actualizar CER | 12 meses antes |
| Auditoría de renovación (NB) | 6–12 meses antes |
| Nuevo certificado emitido | Antes de vencimiento |

---

## Checklist Final Completo

### Pre-Certificación

**Organización:**
- [ ] EC REP designado y contrato firmado
- [ ] PRRC designado
- [ ] NB seleccionado y contrato firmado
- [ ] ISO 13485 certificado
- [ ] EUDAMED Actor Registration completado

**Technical Documentation:**
- [ ] Device Description (Annex II, Sección 1)
- [ ] Labeling + IFU multiidioma (Sección 2)
- [ ] Design & Manufacturing Information (Sección 3)
- [ ] GSPRs Checklist completo (Sección 4)
- [ ] Risk Management File + Benefit-Risk (Sección 5)
- [ ] V&V — Safety testing (IEC 60601-1)
- [ ] V&V — EMC testing (IEC 60601-1-2)
- [ ] V&V — Holter ECG testing (IEC 60601-2-47)
- [ ] V&V — Biocompatibility (ISO 10993)
- [ ] V&V — Battery safety (IEC 62133-2)
- [ ] V&V — Software (IEC 62304)
- [ ] V&V — AI/ML validation
- [ ] V&V — Cybersecurity (IEC 81001-5-1)
- [ ] V&V — Usability (IEC 62366-1)
- [ ] Clinical Evaluation Report (CER)
- [ ] PMCF Plan

**Post-Market:**
- [ ] PMS Plan
- [ ] PSUR template
- [ ] Vigilance reporting procedures
- [ ] Complaint handling procedures

**UDI/EUDAMED:**
- [ ] GS1 membership
- [ ] UDI-DIs assigned
- [ ] UDI on labels
- [ ] EUDAMED UDI/Device registration

**Final:**
- [ ] EU Declaration of Conformity drafted
- [ ] CE marking artwork ready
- [ ] NB certification decision positive
- [ ] CE Certificate received

---

## Recursos

| Recurso | URL |
|---|---|
| MDR 2017/745 (texto completo) | https://eur-lex.europa.eu/eli/reg/2017/745/oj |
| EUDAMED | https://ec.europa.eu/tools/eudamed |
| NANDO (lista de NBs) | https://ec.europa.eu/growth/tools-databases/nando/ |
| MDCG Guidelines | https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en |
| MEDDEV 2.7/1 Rev 4 | https://ec.europa.eu/docsroom/documents/17522 |
| GS1 | https://www.gs1.org |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial |

---

*Documento confidencial — Horizon Medical*
