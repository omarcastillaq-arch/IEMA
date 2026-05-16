# HORIZON MEDICAL — Roadmap Regulatorio Comparado

**Documento:** HM-REG-002  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Clasificación del documento:** Confidencial  

---

## Tabla de Contenidos

1. [Tabla Comparativa de Requisitos](#1-tabla-comparativa-de-requisitos)
2. [Timeline Estimado por Agencia](#2-timeline-estimado-por-agencia)
3. [Costos Aproximados por Agencia](#3-costos-aproximados-por-agencia)
4. [Prerequisitos Antes de Someter](#4-prerequisitos-antes-de-someter)
5. [Diferencias Clave entre Jurisdicciones](#5-diferencias-clave-entre-jurisdicciones)
6. [Estrategia Regulatoria Recomendada](#6-estrategia-regulatoria-recomendada)
7. [Diagramas de Flujo por Agencia](#7-diagramas-de-flujo-por-agencia)
8. [Hitos Críticos y Dependencias](#8-hitos-críticos-y-dependencias)

---

## 1. Tabla Comparativa de Requisitos

### 1.1 Requisitos Generales

| Requisito | INVIMA (Colombia) | FDA (EE.UU.) | EMA/MDR (UE) |
|---|---|---|---|
| **Clasificación del dispositivo** | Clase IIa | Clase II | Clase IIb (conservador) |
| **Vía regulatoria** | Registro Sanitario | 510(k) Premarket Notification | Marcado CE vía Organismo Notificado |
| **QMS requerido** | ISO 13485 o BPM | 21 CFR 820 (QSR) → transición a ISO 13485 | ISO 13485:2016 certificado |
| **Gestión de riesgos** | ISO 14971 | ISO 14971 | ISO 14971:2019 |
| **Evaluación clínica** | Revisión bibliográfica + datos clínicos | Clinical data / 510(k) substantial equivalence | CER completo (MEDDEV 2.7/1 Rev 4) |
| **Software documentation** | IEC 62304 (recomendado) | IEC 62304 + FDA Software Guidance | IEC 62304 (obligatorio) |
| **Documentación IA/ML** | No hay guía específica aún | FDA AI/ML Guidance + PCCP | MDR Annex I + MDCG guidance |
| **Ciberseguridad** | Básica | FDA Cybersecurity Guidance (2023) | IEC 81001-5-1 |
| **Biocompatibilidad** | ISO 10993 (básico) | ISO 10993 (completo) | ISO 10993 (completo) |
| **EMC/Seguridad eléctrica** | IEC 60601-1 | IEC 60601-1 + 60601-1-2 | IEC 60601-1 + 60601-1-2 |
| **Etiquetado** | Español + norma local | Inglés, 21 CFR 801 | Multiidioma, MDR Annex I Ch. III |
| **UDI** | No requerido actualmente | Obligatorio (21 CFR 830) | Obligatorio (EUDAMED) |
| **Post-market surveillance** | Tecnovigilancia | MDR/ADR reporting (21 CFR 803) | PMS plan + PMCF + PSUR |
| **Representante local** | Titular del registro (puede ser importador) | US Agent (si fabricante extranjero) | Authorized Representative (EC REP) |
| **Establecimiento registrado** | Registro INVIMA de fabricante | FDA Establishment Registration | No aplica directamente (vía NB) |
| **Vigencia** | 10 años (renovable) | Indefinida (mientras se mantenga compliance) | 5 años (certificado NB) |

### 1.2 Documentación Técnica Requerida

| Documento | INVIMA | FDA 510(k) | MDR/CE |
|---|---|---|---|
| Descripción del dispositivo | ✅ | ✅ | ✅ |
| Intended use / Indicaciones | ✅ | ✅ | ✅ |
| Design History File (DHF) | Parcial | ✅ Completo | ✅ (Technical Documentation) |
| Device Master Record (DMR) | ✅ | ✅ | ✅ |
| Risk Management File | ✅ | ✅ | ✅ |
| Verificación y Validación | ✅ (básico) | ✅ (extenso) | ✅ (extenso) |
| Clinical Evaluation Report | ❌ (revisión biblio.) | ✅ (si aplica) | ✅ (obligatorio) |
| Software Documentation | ✅ (básico) | ✅ (extenso) | ✅ (extenso) |
| Cybersecurity Documentation | ❌ (básico) | ✅ (extenso) | ✅ |
| AI/ML Documentation | ❌ | ✅ (extenso) | ✅ |
| Biocompatibility Report | ✅ (básico) | ✅ | ✅ |
| EMC Test Report | ✅ | ✅ | ✅ |
| Electrical Safety Report | ✅ | ✅ | ✅ |
| Usability Engineering File | Recomendado | ✅ | ✅ |
| Labeling / IFU | ✅ (español) | ✅ (inglés) | ✅ (multiidioma) |
| SBOM (Software Bill of Materials) | ❌ | ✅ | Recomendado |
| PMCF Plan | ❌ | ❌ | ✅ |
| PSUR (Periodic Safety Update Report) | ❌ | ❌ | ✅ (Clase IIb+) |

---

## 2. Timeline Estimado por Agencia

### 2.1 Timeline Secuencial

```
Fase                           │ Duración Estimada
───────────────────────────────┼───────────────────
PREPARACIÓN COMÚN              │
  ISO 13485 implementación     │ 6–9 meses
  ISO 13485 certificación      │ 3–4 meses (auditoría)
  Testing (EMC, Safety, Bio)   │ 4–6 meses
  Software V&V completa        │ 3–4 meses
  Risk Management File         │ 2–3 meses
  Clinical data compilation    │ 3–6 meses
                               │
SUBTOTAL PREPARACIÓN           │ 12–18 meses
───────────────────────────────┼───────────────────
FDA 510(k)                     │
  Preparación de 510(k)        │ 3–4 meses
  Pre-submission (Q-Sub)       │ 2–3 meses (opcional pero recomendado)
  Revisión FDA                 │ 3–6 meses (90 días MDUFA + AI)
  Respuesta a deficiencias     │ 1–3 meses (si aplica)
                               │
SUBTOTAL FDA                   │ 6–12 meses
───────────────────────────────┼───────────────────
EMA/MDR (CE)                   │
  CER + Technical Documentation│ 4–6 meses
  Selección Organismo Notific. │ 1–2 meses
  Auditoría NB (QMS + TD)      │ 6–12 meses (backlog de NBs)
  Respuesta a observaciones    │ 2–4 meses
  Certificado CE emitido       │ 1–2 meses
                               │
SUBTOTAL MDR                   │ 12–24 meses
───────────────────────────────┼───────────────────
INVIMA                         │
  Preparación del dossier      │ 2–3 meses
  Sometimiento                 │ 1 mes
  Revisión INVIMA              │ 3–6 meses
  Respuesta a requerimientos   │ 1–3 meses
  Emisión Registro Sanitario   │ 1–2 meses
                               │
SUBTOTAL INVIMA                │ 6–12 meses
```

### 2.2 Timeline en Paralelo (Recomendado)

```
Mes:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
      │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
QMS   ████████████████████████████
      ISO 13485 Implementación + Certificación
      │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
TEST  │  │  ██████████████████│  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
      EMC, Safety, Bio, V&V  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
      │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
FDA   │  │  │  │  │  │  │  ██████████████████████████│  │  │  │  │  │  │  │
      │  │  │  │  │  │  │  Q-Sub + 510(k) Prep + Review  │  │  │  │  │  │  │
      │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
MDR   │  │  │  │  │  │  │  │  │  ████████████████████████████████████████████
      │  │  │  │  │  │  │  │  │  CER + TD + NB Audit + Certificación       │
      │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
INV   │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  ██████████████████│  │  │
      │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  Dossier + Revisión INVIMA
```

### 2.3 Resumen de Tiempos

| Fase | Duración | Inicio (en paralelo) | Fin Estimado |
|---|---|---|---|
| Preparación común (QMS + Testing) | 12–18 meses | Mes 1 | Mes 12–18 |
| FDA 510(k) | 6–12 meses | Mes 8 | Mes 18–20 |
| EMA/MDR CE Marking | 12–24 meses | Mes 10 | Mes 22–34 |
| INVIMA Registro | 6–12 meses | Mes 16 | Mes 22–28 |
| **TOTAL (en paralelo)** | **22–34 meses** | — | — |

---

## 3. Costos Aproximados por Agencia

### 3.1 Desglose de Costos

| Concepto | INVIMA (USD) | FDA (USD) | EMA/MDR (USD) |
|---|---|---|---|
| **Tasas regulatorias** | $3,000–5,000 | $21,760 (510(k) fee 2026, small business: ~$5,440) | €0 (tasa de NB, no de agencia) |
| **Certificación ISO 13485** | $15,000–25,000 | Incluido (QSR) | $15,000–25,000 |
| **Testing EMC/Safety (laboratorio)** | $15,000–30,000 | $20,000–40,000 | $20,000–40,000 |
| **Biocompatibilidad testing** | $5,000–10,000 | $10,000–25,000 | $10,000–25,000 |
| **Software V&V** | $10,000–20,000 | $20,000–40,000 | $20,000–40,000 |
| **Consultoría regulatoria** | $10,000–20,000 | $30,000–80,000 | $40,000–100,000 |
| **Organismo Notificado (auditoría + certificado)** | N/A | N/A | $30,000–60,000 |
| **Clinical Evaluation / datos clínicos** | $5,000–15,000 | $10,000–30,000 | $20,000–50,000 |
| **Traducción y localización** | $2,000–5,000 | $2,000–5,000 | $10,000–20,000 |
| **UDI registration** | N/A | $500–2,000 | $1,000–3,000 |
| **US Agent / EC REP** | N/A | $2,000–5,000/año | $5,000–10,000/año |
| **FDA Establishment Registration** | N/A | $6,493/año (2026) | N/A |
| **Post-market (anual, primer año)** | $2,000–5,000 | $5,000–10,000 | $10,000–20,000 |
| **TOTAL ESTIMADO** | **$67,000–135,000** | **$127,000–263,000** | **$181,000–393,000** |

### 3.2 Costo Total Estimado (Tres Jurisdicciones)

| Escenario | Costo Total Estimado |
|---|---|
| Optimista (sinergias, small business) | **$300,000–400,000** |
| Realista | **$400,000–600,000** |
| Conservador (con estudios clínicos adicionales) | **$600,000–800,000** |

> **Nota:** Muchos costos son compartidos entre jurisdicciones (testing, ISO 13485, V&V). El costo incremental de cada jurisdicción adicional es menor que el costo individual.

---

## 4. Prerequisitos Antes de Someter

### 4.1 Prerequisitos Universales (Todas las Agencias)

- [ ] Sistema de Gestión de Calidad (QMS) ISO 13485:2016 implementado y documentado
- [ ] ISO 13485 certificado por organismo acreditado (requerido para MDR; recomendado para FDA/INVIMA)
- [ ] Risk Management File completo según ISO 14971:2019
- [ ] Design History File (DHF) completo
- [ ] Device Master Record (DMR) establecido
- [ ] Verificación y Validación (V&V) de hardware completada
- [ ] Software V&V completada según IEC 62304
- [ ] Testing de EMC según IEC 60601-1-2 completado (reporte de laboratorio acreditado)
- [ ] Testing de seguridad eléctrica según IEC 60601-1 completado
- [ ] Testing de seguridad de batería según IEC 62133-2 completado
- [ ] Biocompatibilidad evaluada según ISO 10993 (al menos citotoxicidad y sensibilización)
- [ ] Etiquetado (IFU) redactado en idiomas requeridos
- [ ] Declaración de conformidad con normas aplicables

### 4.2 Prerequisitos Específicos por Agencia

**INVIMA:**
- [ ] Certificado de libre venta del país de origen (o declaración del fabricante)
- [ ] Poder/autorización del fabricante al titular del registro
- [ ] Certificado ISO 13485 (o certificado BPM equivalente)
- [ ] Documentación traducida al español

**FDA:**
- [ ] US Agent designado (si fabricante fuera de EE.UU.)
- [ ] FDA Establishment Registration completada
- [ ] Device Listing en FDA completada
- [ ] Substantial equivalence analysis con predicado identificado
- [ ] Cybersecurity documentation según FDA Guidance 2023
- [ ] AI/ML documentation según FDA Guidance
- [ ] SBOM (Software Bill of Materials) preparado
- [ ] Pre-Submission (Q-Sub) completada (recomendado)

**EMA/MDR:**
- [ ] EC REP (Authorized Representative) designado en la UE
- [ ] Organismo Notificado seleccionado y contrato firmado
- [ ] Technical Documentation completa según MDR Annex II/III
- [ ] Clinical Evaluation Report (CER) según MEDDEV 2.7/1 Rev 4
- [ ] PMCF Plan redactado
- [ ] PMS Plan redactado
- [ ] UDI-DI asignado y registrado en EUDAMED
- [ ] Declaración de Conformidad UE redactada
- [ ] Etiquetado conforme a MDR Annex I, Capítulo III

---

## 5. Diferencias Clave entre Jurisdicciones

### 5.1 Diferencias Fundamentales

| Aspecto | INVIMA | FDA | EMA/MDR |
|---|---|---|---|
| **Filosofía regulatoria** | Registro basado en documentación | Premarket review (seguridad y eficacia) | Conformity assessment (cumplimiento de requisitos esenciales) |
| **Quién revisa** | INVIMA directamente | FDA directamente | Organismo Notificado (tercero) |
| **Evidencia clínica** | Mínima (bibliografía) | Moderada (equivalencia + datos) | Extensiva (CER + PMCF) |
| **Post-market** | Tecnovigilancia básica | MDR/ADR reporting | PMS + PMCF + PSUR (muy extenso) |
| **Software/IA** | Sin guía específica | Guías detalladas (PCCP, SaMD) | MDCG guidance + Regla 11 |
| **Ciberseguridad** | Requisitos mínimos | Requisitos extensos (FDA Guidance 2023) | IEC 81001-5-1 |
| **Renovación** | Cada 10 años | No aplica (perpetuo) | Cada 5 años (certificado NB) |
| **Idioma** | Español | Inglés | Multiidioma (según países de venta) |
| **Complejidad general** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### 5.2 Diferencias en Clasificación de Software/IA

| Criterio | INVIMA | FDA | MDR |
|---|---|---|---|
| IA como dispositivo médico | No regulado específicamente | SaMD framework + AI/ML guidance | Regla 11 MDR + MDCG 2019-11 |
| Locked vs. Adaptive AI | No diferenciado | PCCP para adaptive; locked = estándar | Ambos requieren evaluación clínica |
| Datos de entrenamiento | No requerido | Documentación extensiva | Documentación extensiva |
| Continuous learning | No regulado | Requiere PCCP aprobado | Requiere evaluación como cambio significativo |

---

## 6. Estrategia Regulatoria Recomendada

### 6.1 Orden de Sometimiento Recomendado

```
┌─────────────────────────────────────────────────────────────┐
│          ESTRATEGIA RECOMENDADA: FDA PRIMERO                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1º  FDA 510(k)     ← Prioridad #1                        │
│      • Mayor mercado (revenue)                              │
│      • Proceso más predecible (90 días + AI)                │
│      • 510(k) clearance facilita otras jurisdicciones       │
│      • Pre-Sub da feedback temprano                         │
│                                                             │
│  2º  INVIMA          ← Prioridad #2 (en paralelo con MDR) │
│      • Mercado local (Colombia)                             │
│      • Proceso más sencillo                                 │
│      • FDA clearance como referencia fortalece el dossier   │
│                                                             │
│  3º  EMA/MDR CE     ← Prioridad #3                        │
│      • Proceso más largo y complejo                         │
│      • Backlog de Organismos Notificados                    │
│      • Requiere evidencia clínica más extensa               │
│      • Iniciar selección de NB temprano                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Justificación de la Estrategia

1. **FDA primero** porque:
   - La 510(k) clearance es una referencia reconocida mundialmente
   - El proceso Pre-Submission permite obtener feedback regulatorio temprano sobre la clasificación de IA
   - El timeline es más predecible que MDR
   - El mercado estadounidense genera ingresos que financian las demás aprobaciones
   - La documentación de FDA se reutiliza significativamente para MDR e INVIMA

2. **INVIMA en paralelo con MDR** porque:
   - El dossier INVIMA se puede preparar con la documentación de FDA
   - El proceso INVIMA es relativamente rápido
   - Permite comercializar en Colombia mientras se espera CE Mark
   - La FDA clearance fortalece significativamente el dossier INVIMA

3. **MDR como proceso continuo** porque:
   - Es el proceso más largo (12–24 meses después de la preparación)
   - La selección de NB debe iniciarse lo antes posible (backlog)
   - El CER requiere tiempo de preparación significativo
   - Se puede ir avanzando con el NB mientras se obtienen las demás aprobaciones

### 6.3 Sinergias entre Jurisdicciones

| Documento | Creado para | Reutilizable en |
|---|---|---|
| Risk Management File (ISO 14971) | Todas | Todas (documento único) |
| Software Documentation (IEC 62304) | Todas | Todas (documento único) |
| EMC Test Reports (IEC 60601-1-2) | Todas | Todas (mismo reporte) |
| Biocompatibility (ISO 10993) | Todas | Todas (mismo reporte) |
| DHF | FDA | MDR (como base para Technical Documentation) |
| 510(k) Summary | FDA | INVIMA (como referencia), MDR (equivalencia) |
| Clinical data | FDA | MDR (CER), INVIMA (soporte) |
| AI/ML Documentation | FDA | MDR (adaptado) |
| Cybersecurity Documentation | FDA | MDR (adaptado a IEC 81001-5-1) |

---

## 7. Diagramas de Flujo por Agencia

### 7.1 Flujo FDA 510(k)

```
┌─────────────────┐
│  Identificar     │
│  Predicado       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│ Pre-Submission   │────▶│ Meeting con FDA  │
│ (Q-Sub) opcional │     │ Feedback         │
└────────┬────────┘     └────────┬────────┘
         │                       │
         ▼                       ▼
┌─────────────────────────────────────────┐
│        Preparar 510(k) Submission       │
│  • Device description                   │
│  • Substantial equivalence              │
│  • Performance testing                  │
│  • Software documentation               │
│  • AI/ML documentation                  │
│  • Cybersecurity                        │
│  • Biocompatibility                     │
│  • EMC/Safety testing                   │
│  • Labeling                             │
└────────────────────┬────────────────────┘
                     │
                     ▼
          ┌─────────────────┐
          │  Submit a FDA    │
          │  vía eSTAR       │
          └────────┬────────┘
                   │
                   ▼
          ┌─────────────────┐
          │ Acceptance Review│──── Refuse to Accept ──▶ Corregir y resubmit
          │ (15 días)        │
          └────────┬────────┘
                   │ Accepted
                   ▼
          ┌─────────────────┐
          │ Substantive      │
          │ Review (90 días) │
          └────────┬────────┘
                   │
              ┌────┴─────┐
              ▼          ▼
     ┌──────────┐  ┌──────────────┐
     │ Clearance│  │ Additional   │
     │ (SE/NSE) │  │ Information  │
     └──────────┘  │ Request (AI) │
                   └──────┬───────┘
                          │
                          ▼
                   ┌──────────┐
                   │ Responder │
                   │ y esperar │
                   └──────┬───┘
                          │
                     ┌────┴────┐
                     ▼         ▼
              ┌──────────┐ ┌────────┐
              │ Clearance│ │  NSE   │
              └──────────┘ │(denied)│
                           └────────┘
```

### 7.2 Flujo EMA/MDR CE Marking

```
┌─────────────────────┐
│ Seleccionar Org.     │
│ Notificado (NB)      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Contrato con NB      │
│ + Application        │
└──────────┬──────────┘
           │
           ▼
┌──────────────────────────────────────┐
│   Preparar Technical Documentation   │
│   (MDR Annex II + III)               │
│   • Device description               │
│   • Risk management                  │
│   • V&V + Clinical evaluation (CER)  │
│   • Software + AI documentation      │
│   • Post-market surveillance plan    │
│   • PMCF plan                        │
│   • Labeling                         │
└──────────────────┬───────────────────┘
                   │
                   ▼
        ┌─────────────────┐
        │ Submit TD to NB  │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ NB Document      │
        │ Review           │
        └────────┬────────┘
                 │
            ┌────┴─────┐
            ▼          ▼
   ┌──────────────┐  ┌──────────────┐
   │ Observations │  │ QMS Audit    │
   │ → Responder  │  │ (on-site)    │
   └──────┬───────┘  └──────┬───────┘
          │                 │
          └────────┬────────┘
                   ▼
        ┌─────────────────┐
        │ NB Final         │
        │ Assessment       │
        └────────┬────────┘
                 │
            ┌────┴─────┐
            ▼          ▼
   ┌──────────────┐  ┌──────────────┐
   │ CE Certificate│  │ Major NC     │
   │ Emitido       │  │ → Corregir   │
   └──────┬───────┘  └──────────────┘
          │
          ▼
   ┌──────────────┐
   │ Declaración   │
   │ de Conformidad│
   │ + CE Marking  │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │ EUDAMED       │
   │ Registration  │
   └──────────────┘
```

### 7.3 Flujo INVIMA Registro Sanitario

```
┌─────────────────────┐
│ Designar Titular     │
│ del Registro         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────────┐
│  Preparar Dossier               │
│  • Formulario de solicitud      │
│  • Certificado de libre venta   │
│  • Poder del fabricante         │
│  • Documentación técnica        │
│  • ISO 13485 / BPM              │
│  • Etiquetado en español        │
└──────────────┬──────────────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Radicar solicitud    │
    │ ante INVIMA          │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Evaluación documental│
    │ INVIMA (30–90 días)  │
    └──────────┬──────────┘
               │
          ┌────┴─────┐
          ▼          ▼
  ┌──────────────┐  ┌──────────────────┐
  │ Aprobado      │  │ Requerimiento    │
  │               │  │ de información   │
  └──────┬───────┘  └──────┬───────────┘
         │                 │
         │                 ▼
         │         ┌──────────────────┐
         │         │ Responder en     │
         │         │ plazo (30 días)  │
         │         └──────┬───────────┘
         │                │
         └────────┬───────┘
                  ▼
       ┌─────────────────────┐
       │ Emisión Registro     │
       │ Sanitario            │
       │ (vigencia 10 años)   │
       └─────────────────────┘
```

---

## 8. Hitos Críticos y Dependencias

### 8.1 Diagrama de Dependencias

```
┌─────────────────────────────────────────────────────────────────────┐
│                     MAPA DE DEPENDENCIAS                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  [ISO 13485 Cert] ──────┬──────────────────────────────────────┐   │
│         │                │                                      │   │
│         ▼                ▼                                      ▼   │
│  [Risk Mgmt File] [EMC/Safety Tests] [Biocompat Tests]  [NB Audit] │
│         │                │                   │                  │   │
│         └────────┬───────┘                   │                  │   │
│                  ▼                            │                  │   │
│          [Software V&V] ◄────────────────────┘                  │   │
│                  │                                               │   │
│         ┌───────┴───────┐                                       │   │
│         ▼               ▼                                       │   │
│  [510(k) Submit]  [CER + Tech Doc] ────────────────────▶ [NB Review]│
│         │               │                                       │   │
│         ▼               │                                       │   │
│  [FDA Clearance]        │                                       │   │
│         │               │                                       │   │
│         ├───────────────┤                                       │   │
│         ▼               ▼                                       ▼   │
│  [INVIMA Dossier] [CE Certificate]                              │   │
│         │               │                                       │   │
│         ▼               ▼                                       │   │
│  [Registro INVIMA] [EU Market Entry]                            │   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 8.2 Hitos Críticos (Milestones)

| # | Hito | Dependencias | Fecha Objetivo* | Criticidad |
|---|---|---|---|---|
| M1 | QMS ISO 13485 implementado | — | Mes 6 | 🔴 Crítico |
| M2 | ISO 13485 certificación obtenida | M1 | Mes 9–12 | 🔴 Crítico |
| M3 | Testing EMC/Safety completado | Prototipo final | Mes 8 | 🔴 Crítico |
| M4 | Biocompatibilidad testing completado | Materiales finales | Mes 8 | 🟡 Alto |
| M5 | Software V&V completada | M1, código frozen | Mes 10 | 🔴 Crítico |
| M6 | Risk Management File cerrado | M3, M4, M5 | Mes 10 | 🔴 Crítico |
| M7 | AI/ML documentation completa | M5, datos de validación | Mes 10 | 🔴 Crítico |
| M8 | FDA Pre-Submission meeting | M6 (draft) | Mes 8 | 🟡 Alto |
| M9 | 510(k) submission a FDA | M2, M3, M4, M5, M6, M7 | Mes 12 | 🔴 Crítico |
| M10 | NB seleccionado y contrato firmado | — | Mes 6 | 🔴 Crítico |
| M11 | CER completado | M5, datos clínicos | Mes 14 | 🔴 Crítico |
| M12 | Technical Documentation enviada a NB | M2, M6, M7, M11 | Mes 15 | 🔴 Crítico |
| M13 | FDA 510(k) Clearance | M9 | Mes 15–18 | 🔴 Crítico |
| M14 | INVIMA dossier sometido | M13 (opcional), M2, M6 | Mes 16 | 🟡 Alto |
| M15 | CE Certificate emitido | M12, auditoría NB | Mes 22–28 | 🔴 Crítico |
| M16 | INVIMA Registro Sanitario obtenido | M14 | Mes 22–24 | 🟡 Alto |

*\* Los meses son relativos al inicio del programa regulatorio.*

### 8.3 Riesgos del Roadmap

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Backlog de Organismos Notificados | Alta | Retraso 6–12 meses en CE | Iniciar selección de NB desde Mes 1 |
| FDA Additional Information Request por IA | Media | Retraso 2–4 meses | Pre-Submission meeting; documentación IA robusta |
| Fallo en testing EMC | Baja-Media | Retraso 2–3 meses + rediseño | Testing preliminar temprano; diseño para EMC |
| Cambios regulatorios IA (FDA/MDR) | Media | Retraso + re-documentación | Monitoreo continuo de guidance; enfoque conservador |
| Datos clínicos insuficientes para CER | Media | Retraso 6–12 meses (estudio clínico) | Equivalencia con predicados + literatura robusta |
| Certificación ISO 13485 rechazada | Baja | Retraso 3–6 meses | Gap analysis temprano; consultoría QMS |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción del Cambio |
|---|---|---|---|
| 1.0 | 2026-05-16 | Asuntos Regulatorios | Creación inicial del documento |

---

*Este documento es parte del expediente regulatorio del sistema Horizon Medical.*
