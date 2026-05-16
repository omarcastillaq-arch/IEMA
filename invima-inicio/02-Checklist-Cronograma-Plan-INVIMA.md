# CHECKLIST, CRONOGRAMA Y PLAN EJECUTABLE INVIMA
## Dispositivo Médico HM-H100 (Holter ECG con IoT y AI)

---

## A) CHECKLIST COMPLETO DE DOCUMENTOS REGULATORIOS

**Instrucciones:** Marcar con [X] cada elemento conforme se completa. Este checklist es CRÍTICO para garantizar que no se omita documentación.

### FASE 1: DOCUMENTACIÓN TÉCNICA CENTRAL (SEMANA 1-2)

- [ ] **Especificación Técnica Completa**
  - Descripción detallada del dispositivo
  - Componentes y partes
  - Especificaciones eléctricas, físicas, de software
  - Rangos de operación y almacenamiento
  - Archivo: `Especificaciones-HM-H100-v2.1.docx`

- [ ] **Análisis de Riesgos (ISO 14971:2019)**
  - Identificación de peligros
  - Evaluación de riesgos (severity x probability)
  - Medidas de control
  - Evaluación de riesgos residuales
  - Tabla de trazabilidad riesgos-requisitos
  - Archivo: `Analisis-Riesgos-ISO14971.xlsx`

- [ ] **Dossier Técnico Compilado**
  - Documentación integrada del dispositivo
  - Índice con referencias cruzadas
  - Historiales de cambios de versión
  - Archivo: `Dossier-Tecnico-HM-H100.pdf`

- [ ] **Especificaciones de Software (IEC 62304:2015)**
  - Requisitos de software
  - Especificación de diseño
  - Diagrama de arquitectura
  - Código fuente (disponible para auditoría)
  - Trazabilidad requisitos-código
  - Archivo: `Validacion-Software-HM-H100.pdf`

### FASE 2: DOCUMENTACIÓN DE FABRICACIÓN Y CALIDAD (SEMANA 2-3)

- [ ] **Manual de Calidad (ISO 13485:2016)**
  - Estructura del SGC
  - Responsabilidades de calidad
  - Procedimientos de control
  - Gestión de cambios
  - Archivo: `Manual-Calidad-ISO13485.pdf`

- [ ] **Procedimientos de Fabricación**
  - Procesos críticos de manufactura
  - Especificaciones de componentes críticos
  - Procesos de ensamblaje
  - Pruebas en proceso
  - Control de calidad en línea
  - Archivo: `Procedimientos-Fabricacion.docx`

- [ ] **Procedimiento de Validación de Procesos**
  - Validación de esterilización (N/A si no estéril)
  - Validación de empaques
  - Calibración de equipos
  - Archivo: `Validacion-Procesos.docx`

- [ ] **Plan de Control de Calidad**
  - Especificaciones de materias primas
  - Inspección de recepción
  - Pruebas en proceso
  - Pruebas finales
  - Criterios de aceptación/rechazo
  - Archivo: `Plan-Control-Calidad.xlsx`

- [ ] **Gestión de Cambios Documentados**
  - Registro de todos los cambios de versión
  - Evaluación del impacto regulatorio
  - Validación de cambios
  - Aprobaciones
  - Archivo: `Historial-Cambios-v1.0-v2.0-v2.1.xlsx`

### FASE 3: DOCUMENTACIÓN DE SEGURIDAD ELÉCTRICA Y EMC (SEMANA 3-4)

- [ ] **Pruebas de Seguridad Eléctrica (Certificado)**
  - Certificado de laboratorio acreditado
  - Pruebas de aislamiento eléctrico (500V DC, ≥2MΩ)
  - Corriente de fuga (<100µA)
  - Resistencia dieléctrica (AC 1500V por 1 minuto)
  - Temperaturas superficiales (<43°C)
  - Laboratorio: [Completar]
  - Certificado Nº: [Completar]
  - Archivo: `Certificado-Seguridad-Electrica-IEC60601.pdf`

- [ ] **Pruebas de Compatibilidad Electromagnética - EMC**
  - Certificado de laboratorio acreditado
  - **Emisiones:**
    - Radiadas (CISPR 11) - Clase A
    - Conducidas (CISPR 11) - <150dBµV
  - **Inmunidad:**
    - Descarga electrostática (IEC 61000-4-2) ±8kV
    - Campo radiado (IEC 61000-4-3) 10V/m
    - Transitorios rápidos (IEC 61000-4-4) ±2kV
    - Sobretensión (IEC 61000-4-5) ±2kV
    - RF conducida (IEC 61000-4-6) 10V
    - Campo magnético 50/60Hz (IEC 61000-4-8) 100A/m
    - Variaciones de voltaje (IEC 61000-4-11)
  - Laboratorio: [Completar]
  - Certificado Nº: [Completar]
  - Archivo: `Certificado-EMC-IEC60601-1-2.pdf`

- [ ] **Análisis de Seguridad Electromagnética**
  - Justificación de selección de ensayos
  - Tabla de conformidad con normas
  - Medidas implementadas
  - Archivo: `Analisis-EMC.docx`

### FASE 4: DOCUMENTACIÓN DE BIOCOMPATIBILIDAD (SEMANA 4-5)

- [ ] **Evaluación de Biocompatibilidad (ISO 10993-1:2018)**
  - Categización de dispositivo (ISO 10993-1)
  - Matriz de ensayos requeridos
  - Justificación de ensayos seleccionados
  - Archivo: `Evaluacion-Biocompatibilidad-ISO10993-1.pdf`

- [ ] **Prueba de Citotoxicidad In Vitro (ISO 10993-5:2009)**
  - Certificado de laboratorio
  - Material ensayado y extracto
  - Metodología (cultivo celular)
  - Resultados: Grado citotoxicidad ≤1
  - Laboratorio: [Completar]
  - Certificado Nº: [Completar]
  - Archivo: `Certificado-Citotoxicidad-ISO10993-5.pdf`

- [ ] **Prueba de Irritación/Sensibilización Dermal**
  - Certificado de laboratorio
  - Protocolo de prueba en piel humana o animal
  - Resultados: No irritante / No sensibilizante
  - Laboratorio: [Completar]
  - Certificado Nº: [Completar]
  - Archivo: `Certificado-Irritacion-Dermal.pdf`

- [ ] **Informe de Compatibilidad de Materiales**
  - Lista de materiales en contacto con paciente/usuario
  - Certificados de biocompatibilidad de proveedores
  - Resumen de resultados
  - Archivo: `Compatibilidad-Materiales-Biomedicos.pdf`

### FASE 5: VALIDACIÓN CLÍNICA (SEMANA 5-8)

- [ ] **Protocolo de Estudio Clínico**
  - Objetivos y endpoints
  - Criterios de inclusión/exclusión
  - Metodología estadística
  - Análisis de datos planificado
  - Aprobación de comité ético
  - Archivo: `Protocolo-Estudio-Clinico-v1.0.pdf`

- [ ] **Informe de Resultados Clínicos**
  - N de pacientes evaluados
  - Datos demográficos
  - Sensibilidad de detección de arritmias: >90%
  - Especificidad: >95%
  - Eventos adversos reportados
  - Conclusiones de seguridad y eficacia
  - Archivo: `Resultados-Estudio-Clinico.pdf`

- [ ] **Análisis de Literatura Científica**
  - Estudios de validación de tecnología similar
  - Referencias a normas y guías clínicas
  - Justificación de predicados (si aplica)
  - Archivo: `Referencias-Cientificas-HM-H100.pdf`

- [ ] **Datos Post-Comercialización (si aplica)**
  - Registros de uso en mercados previos
  - Reportes de eventos adversos
  - Retroalimentación de usuarios
  - Archivo: `Vigilancia-Postcomercializacion.pdf`

### FASE 6: DOCUMENTACIÓN REGULATORIA GENERAL (SEMANA 2-3)

- [ ] **Carta de Responsabilidad del Titular**
  - Compromisos regulatorios
  - Firma notariada (opcional pero recomendado)
  - Archivo: `Carta-Responsabilidad-Titular.pdf`

- [ ] **Declaración de Conformidad**
  - Cumplimiento de normas técnicas
  - Certificaciones aplicables
  - Respaldo de pruebas
  - Archivo: `Declaracion-Conformidad-CE.pdf`

- [ ] **Certificado de Libre Venta (País Origen)**
  - Solicitud al fabricante/regulador original
  - Certificado expedido por autoridad
  - Confirma registro vigente en país origen
  - Archivo: `Certificado-Libre-Venta-[PAIS].pdf`

- [ ] **Poder Notariado (Representante Legal)**
  - Autoriza al representante en Colombia
  - Otorgado ante notario
  - Acompañado de copias de cédulas
  - Archivo: `Poder-Notariado-Representante.pdf`

### FASE 7: DOCUMENTACIÓN DE USO Y USUARIO (SEMANA 6-7)

- [ ] **Manual de Usuario Completo en Español**
  - Indicaciones de uso
  - Contraindicaciones
  - Advertencias y precauciones
  - Descripción detallada del dispositivo
  - Instrucciones paso a paso con diagramas
  - Colocación de electrodos (diagrama corporal)
  - Encendido y configuración
  - Conexión Bluetooth
  - Monitoreo y lectura
  - Mantenimiento y limpieza
  - Solución de problemas
  - Garantía y servicio técnico
  - Archivo: `Manual-Usuario-HM-H100-ESPANOL.pdf`

- [ ] **Instrucciones de Instalación/Configuración**
  - Guía de instalación de software (app móvil)
  - Requisitos mínimos de sistema
  - Procedimiento de emparejamiento Bluetooth
  - Primera configuración
  - Archivo: `Instrucciones-Instalacion.docx`

- [ ] **Guía Rápida/Tarjeta de Referencia**
  - 1-2 páginas con pasos críticos
  - Símbolos y advertencias
  - Números de emergencia
  - Archivo: `Guia-Rapida-HM-H100.pdf`

- [ ] **Material Educativo para Pacientes**
  - Brochure con indicaciones
  - Información sobre qué es una arritmia
  - Cuándo buscar atención médica
  - Preguntas frecuentes
  - Archivo: `Brochure-Paciente-HM-H100.pdf`

### FASE 8: DOCUMENTACIÓN DE EMPAQUES Y ETIQUETADO (SEMANA 7-8)

- [ ] **Diseño de Etiqueta Primaria (Dispositivo)**
  - Nombre comercial: Horizon Medical HM-H100
  - Nombre del fabricante
  - Número de modelo y versión
  - Código UDI (formato GS1, GTIN-14)
  - Símbolos obligatorios según ISO 15223-1:
    - Símbolo de Consultar instrucciones
    - Símbolo de Fecha de vencimiento
    - Símbolo de Número de lote
    - Símbolo de Fabricante
    - Símbolos de: Almacenamiento, Frágil, No invertir (si aplica)
  - Especificaciones técnicas resumidas
  - Instrucciones básicas
  - Línea de atención
  - Archivo: `Diseno-Etiqueta-Dispositivo.ai` (o PDF)

- [ ] **Diseño de Etiqueta Secundaria (Empaque)**
  - Información del producto
  - Indicaciones de uso
  - Contenido del empaque
  - Advertencias y precauciones
  - Símbolo de información en idioma español
  - Número de lote y fecha de vencimiento
  - Número de serie (si aplica)
  - Condiciones de almacenamiento
  - Información de contacto
  - Declaración regulatoria
  - Archivo: `Diseno-Etiqueta-Empaque.ai` (o PDF)

- [ ] **Diseño de Etiqueta del Estuche**
  - Información general del dispositivo
  - Accesorios incluidos
  - Diagrama de componentes
  - Especificaciones principales
  - Archivo: `Diseno-Etiqueta-Estuche.ai` (o PDF)

- [ ] **Especificación de Materiales de Empaque**
  - Tipo de material (cartón, plástico, etc.)
  - Especificaciones de durabilidad
  - Datos de protección del producto
  - Archivo: `Especificacion-Materiales-Empaque.docx`

- [ ] **Pruebas de Etiquetado e Impresión**
  - Pruebas de claridad de etiquetas
  - Resistencia a condiciones de almacenamiento
  - Legibilidad de códigos (UDI, códigos de barras)
  - Archivo: `Pruebas-Etiquetado.pdf`

### FASE 9: DOCUMENTACIÓN DE ACCESORIOS Y COMPLEMENTOS (SEMANA 8)

- [ ] **Lista de Accesorios Permitidos**
  - Cable USB-C
  - Batería de repuesto (si aplica)
  - Adaptador de corriente
  - Correa de transporte
  - Electrodo desechable (x6)
  - Archivo: `Lista-Accesorios-Permitidos.docx`

- [ ] **Información de Componentes Críticos**
  - Electrodos desechables: especificación y marca
  - Adhesivo de electrodos: biocompatibilidad validada
  - Documentación de proveedores confiables
  - Archivo: `Especificacion-Componentes-Criticos.docx`

### FASE 10: DOCUMENTACIÓN DE SERVICIO Y TRAZABILIDAD (SEMANA 9)

- [ ] **Plan de Servicio Técnico**
  - Centro de servicio autorizado
  - Procedimiento de reparación/mantenimiento
  - Piezas de repuesto disponibles
  - Garantía y cobertura
  - Archivo: `Plan-Servicio-Tecnico-HM-H100.docx`

- [ ] **Sistema de Trazabilidad (UDI)**
  - Asignación de código UDI-DI único
  - Código UDI-PI (número de serie)
  - Base de datos de lotes
  - Registro de distribuidores y ubicaciones
  - Archivo: `Sistema-Trazabilidad-UDI.xlsx`

- [ ] **Procedimiento de Rastreo y Retiro**
  - Plan de retiro en caso de incidente
  - Procedimiento de comunicación a usuarios
  - Registro de recuperación de dispositivos
  - Archivo: `Procedimiento-Retiro-Mercado.docx`

- [ ] **Base de Datos de Usuarios y Distribuidores**
  - Registro de compradores finales (hospitales, clínicas)
  - Contactos de distribuidores
  - Ubicaciones de instalación
  - Información para alertas de seguridad
  - Archivo: `Base-Datos-Usuarios-Distribuidores.xlsx`

### FASE 11: DOCUMENTACIÓN DE VIGILANCIA POST-COMERCIALIZACIÓN (SEMANA 9-10)

- [ ] **Plan de Vigilancia Post-Comercialización**
  - Objetivo de vigilancia
  - Métodos de recopilación de datos
  - Frecuencia de reportes
  - Canales de reporte de eventos adversos
  - Archivo: `Plan-Vigilancia-Postcomercializacion.pdf`

- [ ] **Procedimiento de Reporte de Incidentes/Eventos Adversos**
  - Definición de evento adverso serio
  - Plazo de reporte a INVIMA (15-30 días)
  - Formato de reporte
  - Base de datos de eventos
  - Archivo: `Procedimiento-Reporte-Eventos-Adversos.docx`

- [ ] **Protocolo de Comunicación de Cambios**
  - Cambios en fabricación
  - Cambios en etiquetado
  - Cambios en software
  - Procedimiento de notificación a INVIMA
  - Archivo: `Protocolo-Comunicacion-Cambios.docx`

- [ ] **Análisis Periódico de Seguridad y Eficacia**
  - Reporte anual de seguridad
  - Análisis de tendencias de eventos
  - Comparación con literatura
  - Archivo: `Reporte-Anual-Seguridad.pdf`

### FASE 12: DOCUMENTACIÓN ADMINISTRATIVA FINAL (SEMANA 10-11)

- [ ] **Solicitud de Registro Sanitario (Formulario INVIMA)**
  - Completado en todos sus campos
  - Firmado por representante legal
  - Archivo: `Solicitud-Registro-INVIMA-Completa.pdf`

- [ ] **Lista de Verificación de Completitud**
  - Confirmación de que todos los documentos están incluidos
  - Verificación de formato y firma
  - Archivo: `Lista-Verificacion-Documentos.xlsx`

- [ ] **Índice y Tabla de Contenidos Detallada**
  - Listado de todos los documentos
  - Referencias cruzadas
  - Número de páginas
  - Archivo: `Indice-Solicitud-Completa.docx`

- [ ] **Documento de Cobertura o Carta de Presentación**
  - Resumen de solicitud
  - Mención de cambios respecto a versiones previas
  - Solicitud de expedited review (si aplica)
  - Archivo: `Carta-Presentacion-INVIMA.pdf`

---

**ESTADO GENERAL DE CHECKLIST:**

| Fase | Descripción | Ítems | Completados | % |
|------|------------|-------|-------------|---|
| 1 | Documentación Técnica | 4 | 0 | 0% |
| 2 | Fabricación y Calidad | 5 | 0 | 0% |
| 3 | Seguridad y EMC | 3 | 0 | 0% |
| 4 | Biocompatibilidad | 4 | 0 | 0% |
| 5 | Validación Clínica | 4 | 0 | 0% |
| 6 | Regulatoria General | 4 | 0 | 0% |
| 7 | Usuario y Documentación | 4 | 0 | 0% |
| 8 | Empaques y Etiquetado | 5 | 0 | 0% |
| 9 | Accesorios | 2 | 0 | 0% |
| 10 | Servicio y Trazabilidad | 4 | 0 | 0% |
| 11 | Vigilancia Post-Comercialización | 4 | 0 | 0% |
| 12 | Administrativa Final | 4 | 0 | 0% |
| **TOTAL** | | **52 ÍTEMS** | **0** | **0%** |

---

## B) CRONOGRAMA DETALLADO CON DIAGRAMA GANTT

**Duración Total Estimada: 36 Semanas (9 Meses)**

### DIAGRAMA GANTT EN TEXTO

```
═══════════════════════════════════════════════════════════════════════════════════════════════
CRONOGRAMA DE REGISTRO INVIMA - HM-H100
Dispositivo Médico Clase IIa
Duración Total: 36 Semanas (9 Meses)
═══════════════════════════════════════════════════════════════════════════════════════════════

SEMANA:      1     5     10    15    20    25    30    35    36
             |     |     |     |     |     |     |     |     |

FASE 1: PREPARACIÓN Y DOCUMENTACIÓN TÉCNICA (SEMANAS 1-4)
├─ Especificaciones Técnicas ▓▓▓▓
├─ Análisis de Riesgos ISO14971 ▓▓▓▓
├─ Dossier Técnico    ▓▓▓▓
└─ Software IEC62304  ▓▓▓▓

FASE 2: CERTIFICACIONES Y CALIDAD (SEMANAS 2-8)
├─ ISO 13485 Audit/Certificación ▓▓▓▓▓▓▓
├─ Procedimientos Fabricación     ▓▓▓▓
├─ Plan Control Calidad           ▓▓▓
└─ Validación Procesos            ▓▓▓▓

FASE 3: PRUEBAS DE LABORATORIO (SEMANAS 3-8)
├─ Seguridad Eléctrica IEC60601   ▓▓▓▓
├─ EMC IEC60601-1-2               ▓▓▓▓
├─ Biocompatibilidad ISO10993     ▓▓▓▓
└─ Testing Laboratory  ▓▓▓▓▓▓

FASE 4: VALIDACIÓN CLÍNICA (SEMANAS 5-12)
├─ Protocolo Estudio  ▓▓▓
├─ Reclutamiento      ▓▓▓▓▓▓▓▓
├─ Recopilación Datos ▓▓▓▓▓▓
└─ Análisis Resultados ▓▓▓

FASE 5: DOCUMENTACIÓN DE USUARIO Y ETIQUETADO (SEMANAS 6-10)
├─ Manual Usuario (Traducción) ▓▓▓▓
├─ Diseño Etiquetas    ▓▓▓
├─ Diagramas Usuario   ▓▓▓
└─ Material Educativo  ▓▓

FASE 6: REGULATORIA Y ADMINISTRATIVA (SEMANAS 8-12)
├─ Certificado Libre Venta ▓▓▓▓
├─ Declaración Conformidad ▓▓▓
├─ Poder Notariado     ▓▓
└─ Carta Responsabilidad ▓▓

FASE 7: COMPILACIÓN Y REVISIÓN (SEMANAS 12-14)
├─ Compilación Dossier ▓▓▓
├─ Revisión Técnica    ▓▓▓
├─ Aseguramiento Calidad ▓▓
└─ Lista Verificación  ▓

FASE 8: PREPARACIÓN PARA SOMETIMIENTO (SEMANA 14-15)
├─ Formato Final       ▓▓▓
├─ Traducción Resúmenes ▓▓▓
└─ Empaquetado Para Envío ▓

FASE 9: SOMETIMIENTO A INVIMA (SEMANA 16)
├─ Radicación Online Portal ▓ (1 día)
├─ Pago de Tasas       ▓ (1 día)
└─ Confirmación Recibo ▓ (Inmediato)

FASE 10: REVISIÓN INICIAL INVIMA (SEMANAS 17-20)
├─ Acuse de Recibo     ▓ (5 días)
├─ Revisión Completitud ▓▓▓▓ (10-15 días)
└─ Primer Requerimiento (si aplica) ▓▓ (5-10 días)

FASE 11: REVISIÓN TÉCNICA SUSTANTIVA (SEMANAS 20-30)
├─ Análisis Técnico    ▓▓▓▓▓▓▓▓▓▓ (60-90 días)
├─ Requerimientos Adicionales ▓▓▓▓ (posible, 5-10 días)
├─ Respuesta a Requerimientos ▓▓▓ (10-15 días)
└─ Segunda Revisión    ▓▓▓▓▓ (30-40 días)

FASE 12: RESOLUCIÓN FINAL Y APROBACIÓN (SEMANAS 30-36)
├─ Decisión Preliminar ▓▓ (5-10 días)
├─ Respuesta Final Si Aplica ▓▓ (5 días)
├─ Expedición Resolución ▓ (3-5 días)
├─ Inscripción en Registros ▓ (2 días)
└─ Certificado de Registro ▓▓ (Entrega 3-5 días)

═══════════════════════════════════════════════════════════════════════════════════════════════
```

### HITOS CRÍTICOS Y FECHAS

| Semana | Hito | Fecha Estimada | Responsable | Estado |
|--------|------|----------------|-------------|--------|
| 1 | Inicio del Proyecto | [Semana 1] | Gerente de Regulatorio | [ ] |
| 4 | Documentación Técnica Completada | [Semana 4] | Ingeniero Jefe | [ ] |
| 8 | Certificaciones de Laboratorio Recibidas | [Semana 8] | Jefe QA | [ ] |
| 12 | Dossier Técnico Compilado | [Semana 12] | Especialista Regulatorio | [ ] |
| 12 | Validación Clínica Completada | [Semana 12] | Investigador Principal | [ ] |
| 15 | Solicitud Radicada en INVIMA | [Semana 15] | Representante Legal | [ ] |
| 20 | Revisión Completitud por INVIMA | [Semana 20] | INVIMA | [ ] |
| 25 | Revisión Técnica Completada | [Semana 25] | INVIMA | [ ] |
| 30 | Resolución Expedida | [Semana 30] | INVIMA | [ ] |
| 31 | Certificado Disponible | [Semana 31] | INVIMA/Solicitante | [ ] |
| 33 | Comercialización Autorizada | [Semana 33] | Empresa | [ ] |

### CAMINO CRÍTICO

**Secuencia Crítica (No puede retrasarse):**

1. Especificaciones Técnicas → 
2. Análisis Riesgos →
3. Pruebas Laboratorio →
4. Validación Clínica →
5. Compilación Dossier →
6. Sometimiento INVIMA →
7. Revisión INVIMA →
8. Aprobación

**Tiempo Crítico Total: 30 Semanas (mínimo)**  
**Tiempo de Holgura: ~6 Semanas (para contingencias)**

---

## C) PLAN DE ACCIÓN SEMANAL (SEMANAS 1-12)

### SEMANA 1: KICK-OFF Y FUNDACIÓN

**Tema:** Inicialización del Proyecto Regulatorio

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 1.1 | Contratar Consultor Regulatorio Especializado en Dispositivos Médicos | Director | 3 días | Contrato Firmado | [ ] |
| 1.2 | Constituir Equipo Interfuncional (Ingeniería, QA, Clínica, Legal, Regulatorio) | Director | 2 días | Equipo Confirmado | [ ] |
| 1.3 | Reunión de Alineación: Cronograma, Riesgos, Responsabilidades | Gerente Regulatorio | 1 día | Acta de Reunión | [ ] |
| 1.4 | Crear Matriz de Trazabilidad Requisitos INVIMA | Consultor Regulatorio | 3 días | Matriz Completa | [ ] |
| 1.5 | Identificar Brecha de Documentación Actual vs. Requerimientos | Especialista Regulatorio | 2 días | Reporte de Brechas | [ ] |
| 1.6 | Contactar Laboratorios Acreditados para Cotización | Jefe QA | 2 días | 3 Cotizaciones Recibidas | [ ] |
| 1.7 | Hacer Reserva de Citas en Laboratorios para Pruebas | Jefe QA | 1 día | Fechas Confirmadas | [ ] |
| 1.8 | Iniciar Documentación: Crear Carpeta del Proyecto | Admin | 1 día | Estructura de Carpetas | [ ] |

**Recursos Requeridos:** Consultor regulatorio, equipo multidisciplinario, laboratorios contactados

**Riesgos Semana 1:** Demora en contratación de consultor, indisponibilidad de laboratorios

---

### SEMANA 2: ESPECIFICACIONES Y ANÁLISIS TÉCNICO

**Tema:** Documentación Técnica Fundamental

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 2.1 | Compilar Especificación Técnica Completa (HW, SW, Funcional) | Ingeniero Jefe | 5 días | Especificación v1.0 | [ ] |
| 2.2 | Realizar Análisis de Riesgos Inicial (ISO 14971) | Ingeniero de Riesgos | 5 días | Risk Register v1.0 | [ ] |
| 2.3 | Identificar Normas Técnicas Aplicables | Consultor Regulatorio | 2 días | Lista de Normas | [ ] |
| 2.4 | Mapear Requisitos INVIMA vs. Dispositivo (Gap Analysis) | Especialista Regulatorio | 3 días | Gap Analysis Report | [ ] |
| 2.5 | Documentar Arquitectura de Software y Requisitos (IEC 62304) | Ingeniero Software | 5 días | SDS Documento | [ ] |
| 2.6 | Crear Plan de Calidad Preliminary | Jefe QA | 3 días | Quality Plan v1.0 | [ ] |
| 2.7 | Solicitar Protocolos de Prueba a Laboratorios | Jefe QA | 2 días | Protocolos Recibidos | [ ] |

**Recursos Requeridos:** Ingeniería completa, análisis técnico

**Riesgos Semana 2:** Falta de documentación histórica, cambios de especificación

---

### SEMANA 3: PREPARACIÓN PARA PRUEBAS

**Tema:** Alineación de Pruebas de Laboratorio

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 3.1 | Revisar y Aprobar Protocolos de Prueba Seguridad Eléctrica | Jefe QA + Consultor | 2 días | Protocolos Aprobados | [ ] |
| 3.2 | Revisar y Aprobar Protocolos de Prueba EMC | Jefe QA + Consultor | 2 días | Protocolos Aprobados | [ ] |
| 3.3 | Revisar y Aprobar Protocolos de Prueba Biocompatibilidad | Jefe QA + Consultor | 2 días | Protocolos Aprobados | [ ] |
| 3.4 | Preparar Muestras de Dispositivo para Laboratorio | Manufactura | 3 días | Muestras Listas | [ ] |
| 3.5 | Confirmación Final de Fechas de Pruebas | Jefe QA | 1 día | Calendario Confirmado | [ ] |
| 3.6 | Actualizar Análisis de Riesgos (V2.0) con Revisiones | Ingeniero Riesgos | 2 días | Risk Register v2.0 | [ ] |
| 3.7 | Documentar Validación de Software (Unit Tests, Integration) | Ingeniero Software | 3 días | Validation Report v1.0 | [ ] |

**Recursos Requeridos:** QA, Manufactura, Ingeniería de Software

**Riesgos Semana 3:** Problemas con muestras, cambios en protocolos

---

### SEMANA 4: CERTIFICACIÓN Y MEJORAS

**Tema:** Sistema de Gestión de Calidad ISO 13485

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 4.1 | Completar Manual de Calidad ISO 13485 | Jefe QA | 4 días | Manual de Calidad v1.0 | [ ] |
| 4.2 | Documentar Procedimientos de Fabricación Críticos | Jefe Manufactura | 4 días | Procedimientos v1.0 | [ ] |
| 4.3 | Implementar Sistema de Trazabilidad (UDI) | Admin + IT | 3 días | Sistema UDI Operacional | [ ] |
| 4.4 | Crear Base de Datos de Proveedores Críticos | Compras | 2 días | Base Datos Completa | [ ] |
| 4.5 | Revisar y Actualizar Documentación Técnica (v2.0) | Ingeniero Jefe | 2 días | Especificación v2.0 | [ ] |
| 4.6 | Iniciar Trámite de Certificación ISO 13485 (Auditoría Externa) | Director + Consultor | 1 día | Fecha Auditoría Agendada | [ ] |

**Recursos Requeridos:** QA, Manufactura, Dirección, Consultor

**Riesgos Semana 4:** No estar listo para auditoría, hallazgos mayores en auditoría

---

### SEMANA 5: PRUEBAS DE LABORATORIO - SEGURIDAD ELÉCTRICA

**Tema:** Ejecución de Pruebas de Seguridad

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 5.1 | Envío de Dispositivos a Laboratorio de Seguridad Eléctrica | Jefe QA | 1 día | Envío Confirmado | [ ] |
| 5.2 | Monitoreo de Pruebas de Seguridad (Visita Lab si posible) | Jefe QA + Ingeniero | 3 días | Seguimiento Completado | [ ] |
| 5.3 | Revisión Preliminar de Resultados (si aplica correcciones) | Ingeniero Jefe | 2 días | Resultados Preliminares | [ ] |
| 5.4 | Documentar Hallazgos y Acciones Correctivas (si necesario) | Ingeniero QA | 2 días | Reporte de Hallazgos | [ ] |
| 5.5 | Aplicar ISO 13485 Correcciones Menores (si necesario) | Manufact. + Ing. | 2 días | Dispositivo Mejorado | [ ] |
| 5.6 | Completar Protocolo de Estudio Clínico | Investigador Principal | 3 días | Protocolo v1.0 Finalizado | [ ] |
| 5.7 | Somete Protocolo a Comité de Ética | Investigador Principal | 1 día | Documento Enviado | [ ] |

**Recursos Requeridos:** Laboratorio acreditado, Ingeniería

**Riesgos Semana 5:** Fallas en pruebas, retraso en entrega de certificados

---

### SEMANA 6: PRUEBAS DE COMPATIBILIDAD ELECTROMAGNÉTICA (EMC)

**Tema:** Validación de EMC y Bioseguridad

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 6.1 | Envío de Dispositivos a Laboratorio de EMC | Jefe QA | 1 día | Envío Confirmado | [ ] |
| 6.2 | Ejecutar Pruebas de Emisiones Radiadas (CISPR 11) | Lab. EMC | 2 días | Informe de Emisiones | [ ] |
| 6.3 | Ejecutar Pruebas de Inmunidad (IEC 61000-4-x) | Lab. EMC | 3 días | Informe de Inmunidad | [ ] |
| 6.4 | Revisión de Resultados y Evaluación de Conformidad | Ingeniero Jefe | 1 día | Conformidad Evaluada | [ ] |
| 6.5 | Solicitar Certificado Final de EMC | Jefe QA | 1 día | Certificado Solicitado | [ ] |
| 6.6 | Seguimiento Comité Ética para Aprobación | Investigador Principal | 2 días | Aprobación Recibida o En Progreso | [ ] |
| 6.7 | Inicio de Reclutamiento de Pacientes (Estudio Clínico) | Equipo Clínico | 3 días | Primeros Pacientes Reclutados | [ ] |

**Recursos Requeridos:** Laboratorio EMC acreditado, Equipo clínico

**Riesgos Semana 6:** Fallas en EMC (requiere rediseño), atraso en comité ética

---

### SEMANA 7: PRUEBAS DE BIOCOMPATIBILIDAD

**Tema:** Validación de Biocompatibilidad

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 7.1 | Envío de Muestras para Prueba de Citotoxicidad | Jefe QA | 1 día | Envío Confirmado | [ ] |
| 7.2 | Envío de Muestras para Prueba de Irritación Dermal | Jefe QA | 1 día | Envío Confirmado | [ ] |
| 7.3 | Monitoreo de Pruebas de Biocompatibilidad (15-30 días de incubación) | Jefe QA | - | En Progreso | [ ] |
| 7.4 | Documento de Evaluación de Biocompatibilidad (ISO 10993-1) | Especialista Regulatorio | 3 días | Evaluación Completa | [ ] |
| 7.5 | Contacto con Distribuidores Potenciales para Post-Aprobación | Ventas | 3 días | Lista de Distribuidores | [ ] |
| 7.6 | Traducción del Manual de Usuario al Español | Traductor Especializado | 4 días | Manual en Español v1.0 | [ ] |
| 7.7 | Auditoría ISO 13485 (si está agendada) | Auditor Externo | 2-3 días | Reporte de Auditoría | [ ] |

**Recursos Requeridos:** Laboratorio biocompatibilidad, Especialista regulatorio, Traductor

**Riesgos Semana 7:** Resultados negativos de biocompatibilidad, falla de auditoría ISO

---

### SEMANA 8: COMPILACIÓN Y REVISIÓN

**Tema:** Integración de Resultados de Pruebas

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 8.1 | Recepción de Certificados de Seguridad Eléctrica | Jefe QA | - | Certificados Recibidos | [ ] |
| 8.2 | Recepción de Certificados de EMC | Jefe QA | - | Certificados Recibidos | [ ] |
| 8.3 | Recepción de Certificados de Biocompatibilidad | Jefe QA | - | Certificados Recibidos (o resultados en progreso) | [ ] |
| 8.4 | Compilación del Dossier Técnico Integrado | Especialista Regulatorio | 3 días | Dossier v1.0 Compilado | [ ] |
| 8.5 | Creación de Declaración de Conformidad | Especialista Regulatorio | 2 días | Declaración Firmada | [ ] |
| 8.6 | Solicitud de Certificado de Libre Venta (País Origen) | Director | 1 día | Solicitud Enviada | [ ] |
| 8.7 | Diseño de Etiquetas Primarias y Secundarias | Diseñador Gráfico | 3 días | Diseños v1.0 Completados | [ ] |
| 8.8 | Revisión de Resultados de Estudio Clínico (en progreso) | Investigador Principal | 2 días | Datos Preliminares Analizados | [ ] |

**Recursos Requeridos:** QA, Regulatorio, Diseño gráfico

**Riesgos Semana 8:** Retrasos en certificados de laboratorio, hallazgos en compilación

---

### SEMANA 9: VALIDACIÓN Y PREPARACIÓN FINAL

**Tema:** Revisión de Calidad e Integración Final

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 9.1 | Revisión Técnica Completa del Dossier | Equipo de Revisión (Ing + Consultor) | 2 días | Revisión Completada | [ ] |
| 9.2 | Correcciones Menores al Dossier Técnico | Especialista Regulatorio | 2 días | Dossier v2.0 Corregido | [ ] |
| 9.3 | Finalization de Etiquetas (con símbolos ISO 15223-1) | Diseñador + QA | 2 días | Etiquetas Aprobadas | [ ] |
| 9.4 | Actualización de Carta de Responsabilidad | Legal | 1 día | Carta Finalizada | [ ] |
| 9.5 | Revisión de Poder Notariado para Representante Legal | Legal | 1 día | Poder Listo para Firma | [ ] |
| 9.6 | Finalización Manual de Usuario en Español | Traductor + Editor Médico | 2 días | Manual v2.0 Final | [ ] |
| 9.7 | Creación de Guía Rápida (Quick Reference) | Escritor Técnico | 1 día | Guía Rápida Completada | [ ] |
| 9.8 | Recepción de Certificado de Libre Venta | Director | - | Certificado Recibido | [ ] |

**Recursos Requeridos:** Equipo multidisciplinario completo

**Riesgos Semana 9:** Retrasos en certificado de libre venta, cambios de última hora

---

### SEMANA 10: FINALIZACIÓN DE DOCUMENTACIÓN

**Tema:** Cierre de Todos los Documentos

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 10.1 | Compilación Final del Dossier Técnico Completo | Especialista Regulatorio | 2 días | Dossier FINAL v1.0 | [ ] |
| 10.2 | Creación de Tabla de Contenidos e Índice Detallado | Admin | 1 día | Índice Completo | [ ] |
| 10.3 | Revisión de Formato, Encuadernación y Presentación | QA + Admin | 2 días | Formato Aprobado | [ ] |
| 10.4 | Finalización de Protocolo de Vigilancia Post-Comercialización | Especialista Regulatorio | 2 días | Plan Vigilancia Completo | [ ] |
| 10.5 | Creación de Procedimiento de Reporte de Eventos Adversos | Especialista Regulatorio | 1 día | Procedimiento Documentado | [ ] |
| 10.6 | Documento de Presentación Ejecutiva para INVIMA | Especialista Regulatorio | 2 días | Documento Ejecutivo | [ ] |
| 10.7 | Firma de Documentos Finales por Representante Legal | Director + Legal | 1 día | Documentos Firmados | [ ] |
| 10.8 | Preparación de Archivos para Carga en Portal INVIMA | IT | 1 día | Archivos Listos en Formato Digital | [ ] |

**Recursos Requeridos:** Especialista regulatorio, QA, dirección

**Riesgos Semana 10:** Cambios de últimas revisiones, problemas técnicos digitales

---

### SEMANA 11: CAPACITACIÓN Y PREPARACIÓN FINAL

**Tema:** Preparación Operacional para Post-Aprobación

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 11.1 | Capacitación de Personal de Ventas | Capacitador | 2 días | Personal Capacitado | [ ] |
| 11.2 | Capacitación de Personal de Servicio Técnico | Capacitador + Ingeniero | 3 días | Personal Técnico Capacitado | [ ] |
| 11.3 | Desarrollar Materiales de Entrenamiento Interno | Escritor Técnico | 2 días | Materiales Completados | [ ] |
| 11.4 | Configuración del Sistema de Reporte de Eventos Adversos | IT + Regulatorio | 2 días | Sistema Operacional | [ ] |
| 11.5 | Entrenamiento de Equipo en Procedimiento de Retiro de Mercado | Especialista Regulatorio | 1 día | Equipo Entrenado | [ ] |
| 11.6 | Desarrollar Plan de Marketing Post-Aprobación | Marketing | 3 días | Plan Marketing Completado | [ ] |
| 11.7 | Revisión Final de Todos los Documentos ANTES de Radicación | Consultor + Equipo | 1 día | Revisión Completada "Go/No-Go" | [ ] |

**Recursos Requeridos:** Todos los departamentos

**Riesgos Semana 11:** Hallazgos menores que requieren correcciones, inciertos en radicación

---

### SEMANA 12: RADICACIÓN EN INVIMA

**Tema:** Sometimiento Oficial a INVIMA

**Tareas:**

| Nº | Tarea | Responsable | Duración | Entregable | Estado |
|----|-------|------------|----------|-----------|--------|
| 12.1 | Registro en Portal INVIMA (si no hecho previamente) | Director + IT | 1 día | Cuenta Portal INVIMA Activa | [ ] |
| 12.2 | Carga de Documentos en Portal INVIMA | IT | 2 días | Documentos Cargados | [ ] |
| 12.3 | Verificación de Carga (Completitud y Formato) | Admin + Especialista | 1 día | Verificación Completada | [ ] |
| 12.4 | Realización de Pago de Tasas INVIMA | Finanzas | 1 día | Comprobante de Pago Recibido | [ ] |
| 12.5 | Radicación Oficial de Solicitud | Director | 1 día | Número de Radicado Confirmado | [ ] |
| 12.6 | Seguimiento Inicial con INVIMA | Especialista Regulatorio | 2 días | Acuse de Recibo Obtenido | [ ] |
| 12.7 | Documentación de Cierre de Fase Pre-Radicación | Admin | 1 día | Acta de Cierre | [ ] |
| 12.8 | Plan de Seguimiento a INVIMA (Semanas 13-36) | Especialista Regulatorio | 1 día | Plan de Seguimiento Documentado | [ ] |

**Recursos Requeridos:** Dirección, IT, Finanzas, Especialista regulatorio

**Riesgos Semana 12:** Errores en carga, problemas de pago, rechazos por formato

---

## D) PRESUPUESTO DETALLADO

### DESGLOSE DE COSTOS

| Concepto | Descripción | Cantidad | Costo Unitario | Costo Total | Rango | Notas |
|----------|------------|----------|----------------|------------|-------|-------|
| **CERTIFICACIONES INTERNACIONALES** | | | | | | |
| ISO 13485:2016 | Auditoría de certificación externa | 1 | $8,000-12,000 | $10,000 | $8-12K | Varía por país, auditor |
| Auditoría de Vigilancia (Anual) | Auditoría de seguimiento 1x año | 1 | $3,000-5,000 | $4,000 | $3-5K | A partir de año 2 |
| **PRUEBAS DE LABORATORIO** | | | | | | |
| Seguridad Eléctrica (IEC 60601) | Certificado de laboratorio acreditado | 1 | $2,000-3,500 | $2,750 | $2-3.5K | Incluye muestras múltiples |
| Compatibilidad EMC (IEC 60601-1-2) | Certificado de laboratorio acreditado | 1 | $2,500-4,000 | $3,250 | $2.5-4K | Emisiones + Inmunidad |
| Biocompatibilidad (ISO 10993-5,10-11) | Citotoxicidad, irritación, sensibilización | 1 | $3,000-5,000 | $4,000 | $3-5K | Múltiples ensayos |
| Pruebas de Reiteractividad (si aplica) | Pruebas adicionales según resultados | 0-1 | $1,000-2,000 | $500 | $0-2K | Según necesidad |
| **VALIDACIÓN CLÍNICA** | | | | | | |
| Estudio Clínico - Coordinación | Director de estudio, personal de coordinación | 1 | $5,000-8,000 | $6,500 | $5-8K | 6-8 meses de actividades |
| Estudio Clínico - Reclutamiento Pacientes | Incentivos, seguimiento, datos clínicos | 30-50 pacientes | $200-500 | $3,000 | $3-5K | Varía con país, patología |
| Análisis Estadístico Estudio | Estadístico especializado en datos clínicos | 1 | $2,000-3,500 | $2,750 | $2-3.5K | Análisis confirmatorio |
| Aprobación Comité Ética | Trámite ante comité de ética en investigación | 1 | $1,000-2,000 | $1,500 | $1-2K | Varía por institución |
| **SERVICIOS DE CONSULTORÍA REGULATORIA** | | | | | | |
| Consultor Regulatorio Senior | Liderazgo de estrategia, revisiones técnicas | 36 semanas | $150-250/hora | $8,000-12,000 | $8-12K | 6-12 horas/semana |
| Especialista en Software Médico | Validación IEC 62304, documentación | 20 semanas | $120-200/hora | $3,000-4,000 | $3-4K | Según necesidad |
| Especialista en Análisis de Riesgos | ISO 14971, trazabilidad riesgos | 8 semanas | $120-180/hora | $1,500-2,000 | $1.5-2K | Revisiones periódicas |
| **SERVICIOS DE TRADUCCIÓN Y DOCUMENTACIÓN** | | | | | | |
| Traducción Manual de Usuario (Completo) | Traductor médico especializado español | 1 | $1,500-2,500 | $2,000 | $1.5-2.5K | ~50 páginas de documentación |
| Traducción Resúmenes Técnicos | Resúmenes ejecutivos, data sheets | 1 | $800-1,200 | $1,000 | $0.8-1.2K | Varios documentos |
| Edición Médica (Español) | Revisión de contenido técnico-médico | 1 | $1,000-1,500 | $1,250 | $1-1.5K | Asegura calidad regulatoria |
| Escritura Técnica | Procedimientos, protocolos, análisis | 150 horas | $50-100/hora | $3,000-4,000 | $3-4K | Documentación interna |
| **SERVICIOS LEGALES** | | | | | | |
| Abogado Especializado en Dispositivos Médicos | Asesoría legal regulatoria general | 12 horas | $200-300/hora | $2,500-3,500 | $2.5-3.5K | Contratos, cartas, poder |
| Poder Notariado y Trámites Legales | Notario, gestiones documentales | 1 | $500-1,000 | $750 | $0.5-1K | Poder ante INVIMA |
| Revisión de Documentos Legales | Conformidad con regulaciones | 10 horas | $150-250/hora | $1,500-2,000 | $1.5-2K | Revisor especializado |
| **TASAS Y DERECHOS REGULATORIOS** | | | | | | |
| Tasa de Solicitud INVIMA (Clase IIa) | Pago a INVIMA por registro sanitario | 1 | $800-1,500 | $1,150 | $0.8-1.5K | Tarifa oficial INVIMA 2025 |
| Certificado de Libre Venta (Solicitud) | Costos directos mínimos, puede tener arancel | 1 | $0-500 | $100 | $0-0.5K | Depende país origen |
| **COSTOS DE PRODUCCIÓN Y EMPAQUES** | | | | | | |
| Diseño de Etiquetas y Empaques | Diseñador gráfico especializado | 1 | $1,500-2,500 | $2,000 | $1.5-2.5K | Múltiples versiones |
| Pruebas de Etiquetado e Impresión | Validación de legibilidad, resistencia | 1 | $500-1,000 | $750 | $0.5-1K | Varios formatos y materiales |
| Impresión de Etiquetas Iniciales | Para lotes iniciales de producción | 1,000 unidades | $0.20-0.50 | $300-500 | $0.3-0.5K | Costo por unidad |
| **COSTOS ADMINISTRATIVOS Y GESTIÓN** | | | | | | |
| Gestión Administrativa del Proyecto | Asistente regulatorio, coordinación | 36 semanas | $30-50/hora | $1,500-2,500 | $1.5-2.5K | Documentación, seguimiento |
| Costos de Envío de Documentos y Muestras | Correo, courier, logística | - | - | $500-1,000 | $0.5-1K | A laboratorios, INVIMA |
| Software de Gestión de Calidad (QMS) | Suscripción plataforma de documentación | 12 meses | $100-300/mes | $1,500-3,600 | $1.5-3.6K | DocuWare, MasterControl, etc. |
| Capacitación Interna Personal | Entrenamiento ventas, servicio técnico | - | - | $1,000-2,000 | $1-2K | Materiales y horas |

### RESUMEN PRESUPUESTARIO

| Categoría | Monto Estimado | Rango |
|-----------|----------------|-------|
| **Certificaciones Internacionales** | $14,000 | $11-17K |
| **Pruebas de Laboratorio** | $10,000 | $7.5-12.5K |
| **Validación Clínica** | $13,750 | $10-19K |
| **Consultoría Regulatoria** | $14,500 | $12-18K |
| **Traducción y Documentación** | $7,250 | $5.3-9K |
| **Servicios Legales** | $4,750 | $4-6.5K |
| **Tasas Regulatorias** | $1,250 | $0.8-2K |
| **Producción y Empaques** | $3,550 | $2.3-4.5K |
| **Administración y Gestión** | $4,000 | $3-8K |
| | | |
| **TOTAL ESTIMADO** | **$73,050** | **$55,000-97,000 USD** |

### ANÁLISIS DE SENSIBILIDAD DE COSTOS

| Escenario | Monto Total | Variación |
|-----------|-------------|-----------|
| **Optimista (Baja Complejidad)** | $55,000 | -25% |
| **Base (Estimado)** | $73,050 | 0% |
| **Pesimista (Retrasos/Reiteración)** | $97,000 | +33% |

### NOTAS SOBRE PRESUPUESTO

1. **Valores en USD**: Conversión a COP (aprox. 4,200 COP/USD) para referencia colombiana
   - Base: $73,050 USD = **~$307 millones COP**
   - Rango: $55K-97K USD = **~$231-407 millones COP**

2. **Costos No Incluidos**:
   - Desarrollo del dispositivo (asumido completado)
   - Infraestructura de manufactura existente
   - Nómina permanente de personal

3. **Costos Potencialmente Mayores**:
   - Retrasos en aprobación INVIMA (> análisis adicional)
   - Requerimientos de nuevas pruebas clínicas
   - Cambios regulatorios inesperados
   - Necesidad de rediseño post-pruebas

4. **Ahorros Posibles**:
   - Reutilizar estudios clínicos previos (si existen)
   - Certificación ISO 13485 si ya se posee
   - Personal interno en lugar de consultores externos (menor costo, mayor tiempo)

5. **Financiamiento**:
   - Presupuestar inversión desde Mes 1
   - Distribuir gastos grandes (ISO, pruebas) entre semanas
   - Considerar financiamiento externo o subvenciones en innovación

---

**FIN DEL DOCUMENTO 2: CHECKLIST, CRONOGRAMA Y PLAN**

