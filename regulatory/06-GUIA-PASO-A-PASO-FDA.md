# HORIZON MEDICAL — Guía Paso a Paso: FDA 510(k)

**Documento:** HM-REG-007  
**Versión:** 1.0  
**Fecha:** 2026-05-16  

---

## Resumen Ejecutivo

| Parámetro | Valor |
|---|---|
| **Vía regulatoria** | 510(k) Traditional |
| **Product Code** | DRX (21 CFR 870.2340) |
| **Predicado** | iRhythm Zio XT (K142497) |
| **Tiempo estimado total** | 6–12 meses (post-preparación) |
| **Costo estimado** | $127,000–263,000 USD |
| **Vigencia** | Indefinida (mientras se mantenga compliance) |

---

## Timeline Visual

```
Mes:  1     2     3     4     5     6     7     8     9     10    11    12
      │     │     │     │     │     │     │     │     │     │     │     │
ESTAB ████
      Establishment Registration + Device Listing
      │     │     │     │     │     │     │     │     │     │     │     │
QSUB  ██████████
      Pre-Submission (Q-Sub) preparation + meeting
      │     │     │     │     │     │     │     │     │     │     │     │
TEST  ████████████████████████
      Testing (EMC, Safety, Bio, SW, AI, Cyber)
      │     │     │     │     │     │     │     │     │     │     │     │
PREP  │     │     │     ████████████████
      │     │     │     510(k) document preparation
      │     │     │     │     │     │     │     │     │     │     │     │
SUBM  │     │     │     │     │     │     │     ██
      │     │     │     │     │     │     │     eSTAR submission
      │     │     │     │     │     │     │     │     │     │     │     │
REV   │     │     │     │     │     │     │     │     ████████████████
      │     │     │     │     │     │     │     │     FDA Review (90+ days)
```

---

## Paso 1: Establecimiento y Registro (Mes 1)

### 1.1 Acciones

- [ ] **Obtener D-U-N-S Number** (Dun & Bradstreet) — requerido para registro FDA
- [ ] **Designar US Agent** (obligatorio si fabricante fuera de EE.UU.)
  - Requerimiento: persona o empresa en EE.UU. que actúe como punto de contacto
  - Servicios de US Agent: RQMIS, Registrar Corp, Pacific Bridge Medical, emergo
- [ ] **Registrar establecimiento ante FDA** (21 CFR 807)
  - Portal: https://www.fda.gov/medical-devices/device-registration-and-listing
  - Periodo: octubre 1 – diciembre 31 de cada año (registro anual)
- [ ] **Registrar dispositivo (Device Listing)** en FDA
- [ ] **Pagar Annual Registration Fee** (~$6,493 USD en 2026)

### 1.2 Costos

| Concepto | Costo (USD) |
|---|---|
| D-U-N-S Number | Gratuito |
| US Agent (anual) | $2,000–5,000 |
| FDA Establishment Registration (anual) | ~$6,493 |
| Device Listing | Gratuito |

---

## Paso 2: Pre-Submission Meeting (Mes 1–3)

### 2.1 ¿Por qué es importante?

El Pre-Submission (Q-Sub) permite obtener feedback de FDA **antes** de preparar la 510(k) completa. Es especialmente valioso para Horizon Medical debido al componente de IA/ML.

### 2.2 Acciones

- [ ] **Preparar Pre-Submission request** que incluya:
  - Descripción del dispositivo
  - Uso previsto y indicaciones
  - Predicado(s) propuesto(s)
  - Preguntas específicas para FDA
- [ ] **Formular preguntas clave** para FDA:
  1. ¿Es aceptable Zio XT (K142497) como predicado para este dispositivo?
  2. ¿Qué datos clínicos son necesarios para demostrar substantial equivalence?
  3. ¿Qué documentación de AI/ML es requerida?
  4. ¿Se necesita un PCCP o es suficiente documentar como locked algorithm?
  5. ¿Qué nivel de cybersecurity testing es esperado?
  6. ¿Es necesario un estudio clínico prospectivo o son suficientes los bench data + validación retrospectiva de IA?
- [ ] **Enviar Q-Sub a FDA** vía email a CDRH-PREMARKETQSUB@fda.hhs.gov
- [ ] **Asistir al meeting** (teleconferencia, ~60 minutos)
- [ ] **Documentar feedback** y ajustar plan de 510(k)

### 2.3 Timeline del Q-Sub

| Paso | Tiempo |
|---|---|
| Preparación del Q-Sub | 2–4 semanas |
| FDA acusa recibo | 1–2 semanas |
| FDA programa meeting | 60–75 días desde receipt |
| Meeting | 1 hora |
| FDA minutes (feedback escrito) | 30 días post-meeting |

---

## Paso 3: Testing y Evidencia (Mes 1–6)

### 3.1 Testing Plan

| # | Test | Lab | Duración | Costo (USD) | Estado |
|---|---|---|---|---|---|
| 1 | IEC 60601-1 (seguridad eléctrica) | [Lab acreditado] | 6–8 sem | $8,000–15,000 | ⬜ |
| 2 | IEC 60601-1-2 (EMC) | [Lab acreditado] | 8–12 sem | $10,000–20,000 | ⬜ |
| 3 | IEC 60601-2-47 (Holter) | [Lab acreditado] | 4–6 sem | $5,000–10,000 | ⬜ |
| 4 | ISO 10993 (biocompatibilidad) | [Lab acreditado] | 6–10 sem | $10,000–25,000 | ⬜ |
| 5 | IEC 62133-2 (batería) | [Lab acreditado] | 4–6 sem | $3,000–8,000 | ⬜ |
| 6 | Software V&V (IEC 62304) | Interno | 8–12 sem | $15,000–30,000 | ⬜ |
| 7 | AI/ML validation | Interno + externo | 4–8 sem | $10,000–20,000 | ⬜ |
| 8 | Cybersecurity testing | Externo (pen test) | 2–4 sem | $10,000–20,000 | ⬜ |
| 9 | Usability study (IEC 62366) | Interno/Externo | 4–8 sem | $10,000–25,000 | ⬜ |
| 10 | Clinical validation (si requerido) | Hospital/CRO | 8–16 sem | $20,000–50,000 | ⬜ |

### 3.2 Laboratorios Recomendados (FDA-recognized)

| Laboratorio | Ubicación | Especialidad |
|---|---|---|
| Intertek | Multiple (US, EU) | Full suite IEC 60601 |
| TÜV SÜD | Munich / Portland | IEC 60601 + EMC |
| UL Solutions | Northbrook, IL | Safety + EMC |
| SGS | Multiple | Full suite |
| Nelson Labs | Salt Lake City, UT | Biocompatibilidad |
| NAMSA | Toledo, OH | Biocompatibilidad + preclinical |

---

## Paso 4: Preparación del 510(k) (Mes 4–8)

### 4.1 Estructura del 510(k) — eSTAR Format

| Sección eSTAR | Contenido | Páginas Est. |
|---|---|---|
| Administrative | Cover letter, 510(k) summary, truthful statement, financial cert | 10–15 |
| Device Description | Descripción completa, componentes, principio de funcionamiento | 20–30 |
| Substantial Equivalence | Comparison table, justificación de SE | 15–25 |
| Performance Testing — Bench | Safety, EMC, ECG accuracy, battery | 50–100 |
| Performance Testing — Software | Level of concern, SRS, architecture, V&V, anomalies | 100–200 |
| Performance Testing — AI/ML | Algorithm, training data, performance, bias, PCCP (if any) | 50–80 |
| Cybersecurity | Threat model, risk assessment, controls, SBOM | 30–50 |
| Biocompatibility | ISO 10993 evaluation, test reports | 20–40 |
| Clinical — Usability | IEC 62366 summative study | 20–40 |
| Clinical — Performance | Clinical data (if any), literature review | 20–40 |
| Labeling | IFU, device labels, warnings | 15–25 |
| Standards | Declarations of conformity | 5–10 |

### 4.2 Acciones

- [ ] **Descargar eSTAR template** de FDA (formato electrónico obligatorio)
  - https://www.fda.gov/medical-devices/how-study-and-market-your-device/estar-medical-device-premarket-submissions
- [ ] **Compilar 510(k) Summary** (o Statement)
- [ ] **Redactar Indications for Use** (FDA Form 3881)
- [ ] **Preparar Device Description** detallada
- [ ] **Elaborar Substantial Equivalence Discussion** con tablas comparativas
- [ ] **Compilar Performance Testing** (bench, software, AI/ML, cyber)
- [ ] **Preparar Biocompatibility Evaluation** (summary + reports)
- [ ] **Compilar Clinical Data** (usability + clinical performance)
- [ ] **Preparar Labeling** (IFU, labels)
- [ ] **Preparar Standards Declarations** (lista de normas con declaraciones de conformidad)
- [ ] **Completar Financial Certification** (FDA Form 3674)
- [ ] **Realizar revisión interna** completa del submission package
- [ ] **Contratar consultor regulatorio** para revisión final (recomendado)

### 4.3 Costos

| Concepto | Costo (USD) |
|---|---|
| Consultoría regulatoria (preparación 510(k)) | $30,000–80,000 |
| MDUFA User Fee (510(k), standard) | ~$21,760 (2026) |
| MDUFA User Fee (510(k), small business) | ~$5,440 (2026) |

> **Small Business Qualification:** Aplicar antes del 31 de diciembre del año fiscal anterior. Requiere ingresos brutos anuales < $100M.

---

## Paso 5: Sometimiento a FDA (Mes 8)

### 5.1 Acciones

- [ ] **Pagar MDUFA User Fee** antes del sometimiento
- [ ] **Enviar 510(k) vía eSTAR** (no se aceptan en papel)
- [ ] **Incluir todos los exhibits** referenciados
- [ ] **Confirmar receipt** de FDA (Acknowledgment Letter, ~2 semanas)
- [ ] **Anotar 510(k) number** asignado (formato: K2XXXXX)

### 5.2 Portal de Sometimiento

| Canal | URL |
|---|---|
| eSTAR Portal | Via FDA's eSTAR system |
| Tracking | https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/track-your-device |

---

## Paso 6: Revisión FDA (Mes 8–12)

### 6.1 Proceso de Revisión

```
Sometimiento (Día 0)
     │
     ▼
Acceptance Review ──── Refuse to Accept (RTA) ──▶ Corregir (15 días)
(Día 1–15)                                        y re-submit
     │ Accepted
     ▼
Filing Review ────── Assigned to Reviewer + Branch Chief
(Día 15)
     │
     ▼
Substantive Review ─── Additional Information (AI) Request ──▶ Responder
(Día 15–90)              (pausa el reloj)                      (180 días)
     │
     ▼
Decision
     │
  ┌──┴──┐
  │     │
  SE    NSE  (Not Substantially Equivalent → appeal o re-submit)
  │
  ▼
510(k) Clearance Letter (SE Decision)
```

### 6.2 Tiempos Típicos

| Fase | Tiempo | Notas |
|---|---|---|
| Acceptance Review | 15 calendar days | Si hay deficiencias → RTA letter |
| Substantive Review | 90 calendar days (MDUFA goal) | Para dispositivos con AI/ML puede extenderse |
| AI Request | Pausa el clock | El fabricante tiene 180 días para responder |
| Total (sin AI request) | ~90 días | Best case |
| Total (con AI request) | 120–180 días | Typical para dispositivos con IA |

### 6.3 Acciones Durante la Revisión

- [ ] **Monitorear estado** del 510(k) en el portal FDA
- [ ] **Preparar equipo de respuesta** para posibles AI requests
- [ ] **Responder AI requests** de forma completa y dentro de plazo
- [ ] **Considerar meeting** con reviewer si hay preguntas complejas

### 6.4 AI Requests Comunes para Dispositivos con IA/ML

| Área | Pregunta Típica | Cómo Prepararse |
|---|---|---|
| Training data | "Describe la representación demográfica del dataset de entrenamiento" | Tener análisis detallado de demographics |
| Performance | "Proporcione métricas de rendimiento en subgrupos (edad, sexo, raza)" | Análisis de bias completo listo |
| Clinical validation | "Proporcione datos de validación clínica independiente" | Estudio clínico o validación con dataset externo |
| PCCP | "¿Es un locked algorithm? Si no, proporcione PCCP" | Documentar claramente como locked algorithm |
| Cybersecurity | "Proporcione SBOM completo y threat model actualizado" | SBOM en formato CycloneDX/SPDX listo |

---

## Paso 7: Post-Clearance (Continuo)

### 7.1 Acciones Inmediatas

- [ ] **Registrar UDI en GUDID** (Global Unique Device Identification Database)
  - https://www.fda.gov/medical-devices/unique-device-identification-system-udi-system/global-unique-device-identification-database-gudid
- [ ] **Actualizar Device Listing** en FDA con 510(k) number
- [ ] **Implementar MDR/ADR reporting** (21 CFR 803)
- [ ] **Establecer complaint handling** (21 CFR 820.198)
- [ ] **Implementar Corrections and Removals** procedures (21 CFR 806)
- [ ] **Iniciar comercialización** en EE.UU.

### 7.2 Obligaciones Continuas

| Obligación | Frecuencia | Referencia |
|---|---|---|
| Annual Establishment Registration | Octubre 1 – Diciembre 31 | 21 CFR 807 |
| Annual Registration Fee | Anual | MDUFA |
| MDR (Medical Device Report) — deaths/injuries | 30 días / 5 días (awareness) | 21 CFR 803 |
| MDR — malfunctions | 30 días | 21 CFR 803 |
| Corrections and Removals reporting | 10 working days | 21 CFR 806 |
| Design controls maintenance | Continuo | 21 CFR 820.30 |
| QMS maintenance | Continuo | 21 CFR 820 (→ ISO 13485 transition) |
| UDI updates | When device info changes | 21 CFR 830 |

---

## Recursos y Contactos

| Recurso | URL / Contacto |
|---|---|
| FDA CDRH | https://www.fda.gov/medical-devices |
| eSTAR Portal | https://www.fda.gov/medical-devices/how-study-and-market-your-device/estar |
| 510(k) Database | https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm |
| MDUFA Fees | https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/medical-device-user-fee-amendments-mdufa |
| GUDID | https://www.fda.gov/medical-devices/unique-device-identification-system-udi-system/global-unique-device-identification-database-gudid |
| Pre-Submission email | CDRH-PREMARKETQSUB@fda.hhs.gov |
| AI/ML Guidance | https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial |

---

*Documento confidencial — Horizon Medical*
