# HORIZON MEDICAL — Quality Management System (ISO 13485:2016)

**Documento:** HM-QMS-001  
**Versión:** 1.0  
**Fecha:** 2026-05-16  
**Referencia:** ISO 13485:2016, 21 CFR 820 (QSR)  

---

## Tabla de Contenidos

1. [Estructura del QMS](#1-estructura-del-qms)
2. [Manual de Calidad](#2-manual-de-calidad)
3. [Procedimientos Operativos Estándar (SOPs)](#3-procedimientos-operativos-estándar-sops)
4. [Control de Documentos](#4-control-de-documentos)
5. [Auditorías Internas](#5-auditorías-internas)
6. [CAPA](#6-capa)

---

## 1. Estructura del QMS

### 1.1 Pirámide Documental

```
                    ┌──────────────┐
                    │   MANUAL DE  │  Nivel 1: Política y objetivos
                    │   CALIDAD    │
                    └──────┬───────┘
                           │
                 ┌─────────┴─────────┐
                 │   PROCEDIMIENTOS  │  Nivel 2: SOPs (cómo se hacen las cosas)
                 │   (SOPs)          │
                 └─────────┬─────────┘
                           │
           ┌───────────────┴───────────────┐
           │    INSTRUCCIONES DE TRABAJO   │  Nivel 3: WI, Templates, Forms
           │    (WI, Templates, Forms)     │
           └───────────────┬───────────────┘
                           │
              ┌────────────┴────────────┐
              │     REGISTROS           │  Nivel 4: Evidencia de cumplimiento
              │     (Records)           │
              └─────────────────────────┘
```

### 1.2 Alcance del QMS

El sistema de gestión de calidad de Horizon Medical cubre el diseño, desarrollo, manufactura, distribución, instalación, servicio y soporte del sistema de monitoreo electrocardiográfico ambulatorio Horizon Medical Holter ECG System (HM-H100) y todos sus componentes de software.

### 1.3 Exclusiones

| Cláusula ISO 13485 | Excluida | Justificación |
|---|---|---|
| 7.5.2 — Limpieza de producto | Parcial | No aplica esterilización; aplica limpieza general |
| 7.5.5 — Requisitos particulares de DM estériles | Sí | El dispositivo no es estéril |
| 7.5.7 — Requisitos particulares de validación de esterilización | Sí | No aplica |

---

## 2. Manual de Calidad

### 2.1 Política de Calidad

> **Política de Calidad de Horizon Medical:**
> 
> Horizon Medical se compromete a diseñar, desarrollar y fabricar dispositivos médicos seguros, eficaces y de la más alta calidad, cumpliendo con todos los requisitos regulatorios aplicables y las necesidades de nuestros usuarios — pacientes, profesionales de salud y sistemas de salud.
> 
> Nos comprometemos a:
> - Mantener un sistema de gestión de calidad conforme a ISO 13485:2016
> - Cumplir con los requisitos regulatorios de todas las jurisdicciones donde operamos
> - Mejorar continuamente la eficacia de nuestros procesos
> - Asegurar la competencia y capacitación de nuestro personal
> - Escuchar y responder a las necesidades de nuestros clientes y usuarios
> - Gestionar los riesgos de nuestros productos de manera proactiva

### 2.2 Objetivos de Calidad

| Objetivo | Indicador (KPI) | Meta | Frecuencia de Revisión |
|---|---|---|---|
| Cumplimiento regulatorio | Registros sanitarios vigentes | 100% | Trimestral |
| Satisfacción del cliente | NPS (Net Promoter Score) | ≥ 70 | Semestral |
| Quejas de campo | Tasa de quejas por unidad vendida | < 2% | Mensual |
| Eficacia de CAPA | CAPAs cerradas dentro de plazo | ≥ 90% | Trimestral |
| Calidad de producto | Tasa de rechazo en inspección final | < 1% | Mensual |
| Entrega a tiempo | Pedidos entregados a tiempo | ≥ 95% | Mensual |
| Auditorías internas | No conformidades mayores | 0 | Anual |
| Competencia del personal | Personal con capacitación vigente | 100% | Trimestral |

### 2.3 Organigrama de Calidad

```
┌─────────────────────┐
│   Gerencia General   │
│   (Management Rep.)  │
└──────────┬──────────┘
           │
     ┌─────┴──────────────────┬──────────────────┐
     │                        │                  │
┌────┴────┐          ┌───────┴────────┐   ┌─────┴──────┐
│Calidad & │          │ Ingeniería &   │   │ Operaciones│
│Regulatorio│         │ Desarrollo     │   │ & Manufactura│
└────┬────┘          └───────┬────────┘   └─────┬──────┘
     │                        │                  │
     ├── QA Manager           ├── HW Engineer    ├── Production
     ├── RA Manager           ├── FW Engineer    ├── Purchasing
     ├── Document Control     ├── SW Engineer    ├── Warehouse
     ├── Internal Auditor     ├── AI/ML Engineer └── Logistics
     └── Tecnovigilancia      ├── Clinical
                              └── UX/UI
```

### 2.4 Procesos del QMS

| ID | Proceso | Responsable | Procedimiento |
|---|---|---|---|
| P-01 | Gestión de documentos y registros | Quality Manager | SOP-001 |
| P-02 | Responsabilidad de la dirección | General Manager | SOP-002 |
| P-03 | Gestión de recursos y competencia | HR / Quality | SOP-003 |
| P-04 | Planificación y diseño del producto | Engineering Lead | SOP-004 |
| P-05 | Control de diseño | Engineering Lead | SOP-005 |
| P-06 | Compras y evaluación de proveedores | Purchasing | SOP-006 |
| P-07 | Producción y control de proceso | Production Manager | SOP-007 |
| P-08 | Inspección y ensayo | QA Manager | SOP-008 |
| P-09 | Control de producto no conforme | QA Manager | SOP-009 |
| P-10 | Acciones correctivas y preventivas (CAPA) | QA Manager | SOP-010 |
| P-11 | Auditorías internas | Internal Auditor | SOP-011 |
| P-12 | Revisión por la dirección | General Manager | SOP-012 |
| P-13 | Manejo de quejas | QA Manager | SOP-013 |
| P-14 | Tecnovigilancia / Vigilance reporting | RA Manager | SOP-014 |
| P-15 | Gestión de riesgos | Quality/Engineering | SOP-015 |
| P-16 | Validación de software | SW Engineering | SOP-016 |
| P-17 | Calibración y mantenimiento de equipos | QA Manager | SOP-017 |
| P-18 | Trazabilidad | QA/Production | SOP-018 |
| P-19 | Almacenamiento y distribución | Logistics | SOP-019 |
| P-20 | Control de cambios | Quality/Engineering | SOP-020 |

---

## 3. Procedimientos Operativos Estándar (SOPs)

### 3.1 Lista Maestra de SOPs

| SOP ID | Título | ISO 13485 | 21 CFR 820 | Rev | Estado |
|---|---|---|---|---|---|
| SOP-001 | Control de Documentos y Registros | 4.2.4, 4.2.5 | 820.40, 820.180, 820.184 | A | ⬜ Draft |
| SOP-002 | Responsabilidad de la Dirección y Revisión por la Dirección | 5.1–5.6 | 820.20 | A | ⬜ Draft |
| SOP-003 | Recursos Humanos y Competencia | 6.2 | 820.25 | A | ⬜ Draft |
| SOP-004 | Planificación de la Realización del Producto | 7.1 | 820.20 | A | ⬜ Draft |
| SOP-005 | Control de Diseño y Desarrollo | 7.3 | 820.30 | A | ⬜ Draft |
| SOP-006 | Compras y Control de Proveedores | 7.4 | 820.50 | A | ⬜ Draft |
| SOP-007 | Control de Producción y Prestación del Servicio | 7.5 | 820.70, 820.72 | A | ⬜ Draft |
| SOP-008 | Inspección, Medición y Ensayo | 7.6, 8.2.4 | 820.80, 820.250 | A | ⬜ Draft |
| SOP-009 | Control de Producto No Conforme | 8.3 | 820.90 | A | ⬜ Draft |
| SOP-010 | Acciones Correctivas y Preventivas (CAPA) | 8.5.2, 8.5.3 | 820.90(a), 820.90(b) | A | ⬜ Draft |
| SOP-011 | Auditorías Internas | 8.2.2 | 820.22 | A | ⬜ Draft |
| SOP-012 | Revisión por la Dirección | 5.6 | 820.20(c) | A | ⬜ Draft |
| SOP-013 | Manejo de Quejas y Feedback del Cliente | 8.2.1 | 820.198 | A | ⬜ Draft |
| SOP-014 | Tecnovigilancia y Reporte de Eventos Adversos | 8.2.3 | 820.198, 21 CFR 803 | A | ⬜ Draft |
| SOP-015 | Gestión de Riesgos | 7.1 (ISO 14971) | 820.30(g) | A | ⬜ Draft |
| SOP-016 | Validación de Software y Sistemas Computarizados | 7.5.6, 7.6 | 820.70(i) | A | ⬜ Draft |
| SOP-017 | Calibración y Mantenimiento de Equipos | 7.6 | 820.72 | A | ⬜ Draft |
| SOP-018 | Identificación y Trazabilidad | 7.5.8, 7.5.9 | 820.60, 820.65 | A | ⬜ Draft |
| SOP-019 | Almacenamiento, Manejo y Distribución | 7.5.11 | 820.150, 820.160 | A | ⬜ Draft |
| SOP-020 | Control de Cambios de Diseño y Proceso | 7.3.9 | 820.30(i) | A | ⬜ Draft |

### 3.2 Ejemplo de SOP — SOP-010: CAPA

**SOP-010: Acciones Correctivas y Preventivas (CAPA)**

**1. Propósito:** Establecer el procedimiento para identificar, investigar, implementar y verificar acciones correctivas y preventivas.

**2. Alcance:** Aplica a todas las no conformidades, quejas, eventos adversos, hallazgos de auditoría y tendencias negativas.

**3. Responsabilidades:**
- QA Manager: Administra el sistema CAPA
- Process Owner: Implementa las acciones
- Management Representative: Aprueba CAPAs de alto impacto

**4. Procedimiento:**

| Paso | Acción | Responsable | Registro |
|---|---|---|---|
| 1 | Identificar la no conformidad o situación | Cualquier empleado | CAPA Form (Sección A) |
| 2 | Evaluar impacto y asignar prioridad (Crítica/Mayor/Menor) | QA Manager | CAPA Form (Sección B) |
| 3 | Investigar causa raíz (5 Whys, Ishikawa, FTA) | Process Owner + QA | CAPA Form (Sección C) |
| 4 | Definir acciones correctivas/preventivas | Process Owner + QA | CAPA Form (Sección D) |
| 5 | Evaluar impacto regulatorio de los cambios | RA Manager | CAPA Form (Sección E) |
| 6 | Implementar acciones | Process Owner | CAPA Form (Sección F) |
| 7 | Verificar efectividad de las acciones | QA Manager | CAPA Form (Sección G) |
| 8 | Cerrar CAPA | QA Manager | CAPA Form (Sección H) |

**5. Plazos:**
- CAPA Crítica: Investigación en 5 días, implementación en 30 días
- CAPA Mayor: Investigación en 15 días, implementación en 60 días
- CAPA Menor: Investigación en 30 días, implementación en 90 días

---

## 4. Control de Documentos

### 4.1 Tipos de Documentos

| Tipo | Codificación | Ejemplo |
|---|---|---|
| Manual de Calidad | HM-QM-XXX | HM-QM-001 |
| Procedimiento (SOP) | HM-SOP-XXX | HM-SOP-010 |
| Instrucción de Trabajo | HM-WI-XXX | HM-WI-005 |
| Formulario / Template | HM-FM-XXX | HM-FM-020 |
| Registro | HM-REC-XXX | HM-REC-100 |
| Especificación | HM-SPEC-XXX | HM-SPEC-001 |
| Reporte | HM-RPT-XXX | HM-RPT-010 |
| Plano / Dibujo | HM-DWG-XXX | HM-DWG-001 |

### 4.2 Ciclo de Vida de Documentos

```
┌──────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Draft │───▶│ Review   │───▶│ Approval │───▶│ Effective│
└──────┘    └──────────┘    └──────────┘    └────┬─────┘
                                                  │
                                          ┌───────┴───────┐
                                          │               │
                                    ┌─────┴─────┐  ┌─────┴────┐
                                    │ Revision  │  │ Obsolete │
                                    │ (new ver) │  │ (retired)│
                                    └───────────┘  └──────────┘
```

### 4.3 Control de Revisiones

| Elemento | Política |
|---|---|
| Numeración de revisiones | A, B, C… (draft); 1.0, 1.1, 2.0… (approved) |
| Cambios menores | Incremento decimal (1.0 → 1.1) — aprobación del autor + QA |
| Cambios mayores | Incremento entero (1.x → 2.0) — revisión completa + aprobación |
| Retención de documentos | Mínimo 2 veces la vida útil del dispositivo (≥10 años) |
| Acceso a documentos obsoletos | Archivados, marcados como "OBSOLETO" |

---

## 5. Auditorías Internas

### 5.1 Programa de Auditorías

| Proceso / Área | Q1 | Q2 | Q3 | Q4 |
|---|---|---|---|---|
| Control de documentos | ✅ | | | |
| Control de diseño | | ✅ | | |
| Compras y proveedores | | | ✅ | |
| Producción | ✅ | | | ✅ |
| Inspección y ensayo | | ✅ | | |
| CAPA | | | ✅ | |
| Quejas y vigilancia | ✅ | | | ✅ |
| Gestión de riesgos | | | | ✅ |
| Calibración | | ✅ | | |
| Almacenamiento | | | ✅ | |
| Software/IA | | ✅ | | |

### 5.2 Requisitos del Auditor

- Independencia del área auditada
- Capacitación en auditoría de sistemas de gestión (ISO 19011)
- Conocimiento de ISO 13485 y/o 21 CFR 820
- Experiencia en dispositivos médicos (preferido)

### 5.3 Clasificación de Hallazgos

| Clasificación | Definición | Acción Requerida |
|---|---|---|
| **No conformidad mayor** | Falta de un requisito del QMS o falla sistémica | CAPA obligatoria, plazo 30 días |
| **No conformidad menor** | Desviación puntual que no compromete el sistema | Corrección + CAPA si es recurrente, plazo 60 días |
| **Observación** | Oportunidad de mejora, no es una no conformidad | Acción opcional, registro |
| **Buena práctica** | Práctica ejemplar identificada | Compartir con la organización |

---

## 6. CAPA

### 6.1 Fuentes de Entrada para CAPA

| Fuente | Frecuencia de Revisión | Responsable |
|---|---|---|
| Quejas de clientes | Continua | QA Manager |
| Eventos adversos / tecnovigilancia | Continua | RA Manager |
| Auditorías internas | Después de cada auditoría | Internal Auditor |
| Auditorías externas (NB, FDA, INVIMA) | Después de cada auditoría | QA Manager |
| Producto no conforme | Continua | QA / Production |
| Revisión por la dirección | Semestral/Anual | General Manager |
| Análisis de tendencias | Trimestral | QA Manager |
| Resultados de V&V | Al finalizar cada fase | Engineering |
| Post-market surveillance | Continua | RA Manager |
| Feedback de campo (servicio técnico) | Continua | Service Manager |

### 6.2 Métricas CAPA

| KPI | Fórmula | Meta | Frecuencia |
|---|---|---|---|
| CAPAs abiertas | Total CAPAs abiertas | < 10 | Mensual |
| Tiempo promedio de cierre | Σ(fecha cierre - fecha apertura) / N | < 45 días | Trimestral |
| CAPAs vencidas | CAPAs no cerradas dentro de plazo | 0 | Mensual |
| Efectividad | CAPAs cerradas sin recurrencia en 6 meses / Total cerradas | ≥ 90% | Semestral |
| CAPAs por fuente | Distribución por tipo de fuente | Análisis de tendencia | Trimestral |

### 6.3 Herramientas de Análisis de Causa Raíz

| Herramienta | Cuándo Usar |
|---|---|
| **5 Whys** | Problemas simples con causa lineal |
| **Diagrama de Ishikawa (Fishbone)** | Problemas complejos con múltiples factores (personas, métodos, materiales, equipos, ambiente, medición) |
| **Fault Tree Analysis (FTA)** | Análisis de fallos de seguridad |
| **Failure Mode and Effects Analysis (FMEA)** | Análisis preventivo de modos de fallo |
| **Is/Is Not Analysis** | Delimitar el problema |

---

## Apéndice: Registros Requeridos por ISO 13485

| Cláusula | Registro | Retención |
|---|---|---|
| 4.2.5 | Registros del QMS (generales) | Vida del dispositivo + 2 años (mín. 10 años) |
| 5.6.1 | Actas de revisión por la dirección | 10 años |
| 6.2 | Registros de capacitación y competencia | Empleo + 5 años |
| 7.3.2 | Design inputs | Vida del dispositivo + 5 años |
| 7.3.3 | Design outputs | Vida del dispositivo + 5 años |
| 7.3.4 | Actas de design review | Vida del dispositivo + 5 años |
| 7.3.5 | Registros de design verification | Vida del dispositivo + 5 años |
| 7.3.6 | Registros de design validation | Vida del dispositivo + 5 años |
| 7.3.9 | Registros de cambios de diseño | Vida del dispositivo + 5 años |
| 7.4 | Registros de evaluación de proveedores | 10 años |
| 7.5.1 | Registros de producción (DHR) | Vida del dispositivo + 2 años |
| 7.5.6 | Registros de validación de procesos | 10 años |
| 7.6 | Registros de calibración | 10 años |
| 8.2.2 | Registros de auditorías internas | 10 años |
| 8.2.4 | Registros de inspección y ensayo | Vida del dispositivo + 2 años |
| 8.3 | Registros de producto no conforme | 10 años |
| 8.5.2 | Registros de acciones correctivas | 10 años |
| 8.5.3 | Registros de acciones preventivas | 10 años |

---

**Control de Versiones:**

| Versión | Fecha | Autor | Descripción |
|---|---|---|---|
| 1.0 | 2026-05-16 | Quality Management | Creación inicial |

---

*Documento confidencial — Horizon Medical*
