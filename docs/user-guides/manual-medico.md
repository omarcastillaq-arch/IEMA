# 📋 Manual de Usuario para Médicos - Horizon Medical

**Versión:** 2.0  
**Última actualización:** Enero 2026  
**Público objetivo:** Médicos, cardiólogos y personal clínico

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Acceso y Login](#acceso-y-login)
3. [Navegación General](#navegación-general)
4. [Gestión de Pacientes](#gestión-de-pacientes)
5. [Gestión de Dispositivos Holter](#gestión-de-dispositivos-holter)
6. [Monitoreo en Tiempo Real](#monitoreo-en-tiempo-real)
7. [Análisis de Reportes](#análisis-de-reportes)
8. [Sistema de Notificaciones](#sistema-de-notificaciones)
9. [Generación de Reportes](#generación-de-reportes)
10. [Configuración y Preferencias](#configuración-y-preferencias)
11. [Mejores Prácticas Clínicas](#mejores-prácticas-clínicas)
12. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## Introducción

### ¿Qué es Horizon Medical?

Horizon Medical es una plataforma integral de monitoreo cardíaco continuo que integra:

- 🏥 **Sistema de gestión de pacientes** basado en web
- 📱 **Dispositivo Holter inteligente** con registro de 12 derivaciones ECG
- 📡 **Sincronización en tiempo real** vía Bluetooth y red
- 🤖 **Inteligencia artificial** para detección automática de arritmias
- 📊 **Dashboard analítico** con visualización avanzada de datos
- ⚠️ **Sistema de alertas inteligentes** para eventos críticos

### Principales Características

| Característica | Descripción |
|---|---|
| **Monitoreo Continuo** | Hasta 48 horas de registro ECG ininterrumpido |
| **12 Derivaciones** | Análisis cardíaco completo y detallado |
| **IA Integrada** | Detección automática de FA, arritmias ventriculares y anomalías |
| **Sincronización en Tiempo Real** | Acceso instantáneo a datos a través de Bluetooth y red |
| **Reportes Automatizados** | Generación de informes clínicos en segundos |
| **Múltiples Formatos** | Exportación en PDF, EDF, HL7 y formatos de intercambio |
| **Historial Completo** | Seguimiento longitudinal de pacientes |

---

## Acceso y Login

### Requisitos Previos

- ✅ Cuenta de usuario activa
- ✅ Navegador moderno (Chrome, Safari, Firefox, Edge)
- ✅ Conexión a Internet estable
- ✅ Resolución mínima de pantalla: 1024x768px

### Procedimiento de Login

1. **Abrir la plataforma**
   - Navegue a: `https://horizon-medical.com`
   - O utilice el acceso directo en su navegador

2. **Ingrese sus credenciales**
   ```
   Email: su.email@hospital.com
   Contraseña: [Su contraseña segura]
   ```

3. **Autenticación de dos factores (si está habilitada)**
   - Revise su correo o aplicación de autenticación
   - Ingrese el código de 6 dígitos
   - Haga clic en "Verificar"

4. **Pantalla de bienvenida**
   - Verá un resumen de su dashboard personal
   - Número de pacientes activos
   - Alertas pendientes
   - Sesiones en monitoreo

> ⚠️ **Importante:** Nunca comparta sus credenciales. Si olvida su contraseña, haga clic en "¿Olvidó su contraseña?" en la pantalla de login.

---

## Navegación General

### Estructura del Dashboard

```
┌─────────────────────────────────────────────┐
│          HORIZON MEDICAL DASHBOARD           │
├──────────┬──────────────────────────────────┤
│  Logo    │  Paciente: Dr. López | Cerrar    │
│          │                                   │
├──────────┼──────────────────────────────────┤
│ MENÚ     │                                   │
│ -----    │       CONTENIDO PRINCIPAL        │
│ Dashboard│                                   │
│ Pacientes│                                   │
│ Monitor  │                                   │
│ Reportes │                                   │
│ Alertas  │                                   │
│ Configur.│                                   │
│          │                                   │
└──────────┴──────────────────────────────────┘
```

### Opciones del Menú Principal

#### 📊 **Dashboard**
- Vista general de pacientes
- Estadísticas del día
- Últimas alertas
- Sesiones activas

#### 👥 **Pacientes**
- Lista completa de pacientes
- Búsqueda y filtrado avanzado
- Crear nuevo paciente
- Editar información de pacientes

#### 🔍 **Monitor**
- Monitoreo en tiempo real
- Sesiones activas
- Gráficos de ECG en vivo
- Cambio de derivaciones

#### 📄 **Reportes**
- Generar nuevos reportes
- Historial de reportes
- Descargar en múltiples formatos
- Compartir con colegas

#### ⚠️ **Alertas**
- Centro de notificaciones
- Historial de alertas
- Configurar reglas de alertas
- Marcar como revisadas

#### ⚙️ **Configuración**
- Preferencias de usuario
- Integraciones
- Seguridad y privacidad
- Soporte técnico

---

## Gestión de Pacientes

### Crear un Nuevo Paciente

#### Paso 1: Acceder a Gestión de Pacientes
1. En el menú lateral, haga clic en **"Pacientes"**
2. Presione el botón **"+ Nuevo Paciente"** (esquina superior derecha)
3. Se abrirá un formulario de registro

#### Paso 2: Información Básica
Rellene los campos obligatorios:

```
Nombre Completo:          [                    ]
Apellido:                 [                    ]
Número de Identidad:      [                    ]
Fecha de Nacimiento:      [DD/MM/YYYY          ]
Sexo:                     [ M ] [ F ] [ Otro ]
```

#### Paso 3: Información de Contacto
```
Email:                    [                    ]
Teléfono Principal:       [                    ]
Teléfono Alternativo:     [                    ]
Dirección:                [                    ]
```

#### Paso 4: Información Clínica
```
Historial Médico:         [                    ]
Medicamentos Actuales:    [                    ]
Alergias:                 [                    ]
Médico Responsable:       [Dropdown           ]
```

#### Paso 5: Guardar
- Revise toda la información
- Haga clic en **"Guardar Paciente"**
- El paciente recibirá un email con instrucciones

> 💡 **Consejo:** Asegúrese de que el email sea correcto para que el paciente reciba las instrucciones de la app móvil.

### Editar Información de Paciente

1. En la lista de pacientes, haga clic en el nombre del paciente
2. Presione el botón **"Editar"** en la esquina superior derecha
3. Modifique los campos necesarios
4. Haga clic en **"Guardar Cambios"**

### Buscar y Filtrar Pacientes

#### Búsqueda Rápida
- Use la barra de búsqueda en la parte superior
- Escriba nombre, email o número de identidad
- Los resultados aparecen en tiempo real

#### Filtrado Avanzado
1. Haga clic en **"Filtros"** junto a la barra de búsqueda
2. Seleccione criterios:
   - **Estado:** Activo, Inactivo, En Monitoreo
   - **Fecha de Alta:** Desde/Hasta
   - **Médico Responsable:** Seleccionar médico
   - **Prioridad:** Alta, Media, Baja

3. Haga clic en **"Aplicar Filtros"**

---

## Gestión de Dispositivos Holter

### Asignar un Dispositivo a un Paciente

#### Paso 1: Acceder al Perfil del Paciente
1. En **Pacientes**, seleccione el paciente
2. Vaya a la pestaña **"Dispositivos"**
3. Presione **"+ Asignar Dispositivo"**

#### Paso 2: Seleccionar Dispositivo Disponible
```
Dispositivos Disponibles:
┌────────────────────────────────────┐
│ ☑ HM-001 (Batería: 95%)           │
│ ☑ HM-003 (Batería: 87%)           │
│ ☐ HM-005 (En mantenimiento)       │
│ ☑ HM-007 (Batería: 92%)           │
└────────────────────────────────────┘
```

#### Paso 3: Configurar Parámetros
```
Duración del Monitoreo:     [ 24 horas ] [ 48 horas ]
Frecuencia de Sincronización: [ 30s ] [ 60s ] [ 5min ]
Alertas Críticas:            [ Habilitadas ]
Registro de Eventos:         [ Habilitado ]
```

#### Paso 4: Confirmar Asignación
- Revise la información
- Haga clic en **"Confirmar Asignación"**
- El dispositivo se sincronizará con la cuenta del paciente

> 📌 **Nota:** El paciente recibirá instrucciones por email para emparejar el dispositivo con su app móvil.

### Monitoreo de Estado del Dispositivo

En la sección **Dispositivos**, verá el estado de cada uno:

```
Estado del Dispositivo
├── Nombre: HM-001
├── Paciente: Juan García López
├── Estado: Emparejado ✓
├── Carga de Batería: ▓▓▓▓▓▓░░░░ (65%)
├── Última Sincronización: Hace 2 minutos
├── Calidad de Señal: Excelente (95%)
└── Tiempo de Monitoreo Restante: 18h 32m
```

### Reasignar o Retirar un Dispositivo

1. Seleccione el dispositivo en la lista
2. Presione **"Acciones"** → **"Reasignar"** o **"Retirar"**
3. Confirme la acción
4. Si es reasignación, seleccione el nuevo paciente
5. El dispositivo se reiniciará automáticamente

---

## Monitoreo en Tiempo Real

### Acceder a Sesión de Monitoreo

#### Opción 1: Desde Dashboard
1. En **Dashboard**, busque **"Sesiones Activas"**
2. Haga clic en el paciente que desea monitorear
3. Se abrirá la vista de monitoreo en tiempo real

#### Opción 2: Desde Lista de Pacientes
1. En **Pacientes**, seleccione un paciente
2. Presione **"Monitorear Ahora"**
3. La sesión se abrirá en una nueva ventana

### Interfaz de Monitoreo

```
┌────────────────────────────────────────────────┐
│ MONITOREO EN TIEMPO REAL                        │
│ Paciente: Ana Rodríguez | Sesión: 2h 15m       │
├────────────────────────────────────────────────┤
│                                                 │
│  ╔═══════════════════════════════════════════╗ │
│  ║     ▁▂▃▄▅▆▇█▆▅▄▃▂▁  DERIVACIÓN II       ║ │
│  ║ FC: 72 bpm │ QT: 380ms │ ST: Normal      ║ │
│  ╚═══════════════════════════════════════════╝ │
│                                                 │
│  [◄◄] [◄] [Play] [►] [►►]  [Zoom] [Escala]  │
│                                                 │
│  Derivaciones Disponibles:                     │
│  ├─ I, II, III, aVR, aVL, aVF                │
│  ├─ V1, V2, V3, V4, V5, V6                   │
│  └─ Ritmo                                     │
│                                                 │
└────────────────────────────────────────────────┘
```

### Funcionalidades de Monitoreo

#### Selección de Derivaciones
- Haga clic en cualquier derivación de la lista
- El gráfico se actualiza instantáneamente
- Compare múltiples derivaciones deslizando horizontalmente

#### Velocidad de Reproducción
- **1x:** Velocidad normal
- **2x:** Doble velocidad
- **0.5x:** Media velocidad
- Útil para revisar eventos rápidamente

#### Anotaciones y Eventos
Para marcar eventos importantes:
1. Pausa el monitoreo en el momento del evento
2. Presione **"Marcar Evento"**
3. Seleccione tipo de evento:
   - Síncope/Presíncope
   - Palpitaciones
   - Dolor torácico
   - Disnea
   - Evento personalizado

4. Agregue notas si es necesario
5. Haga clic en **"Guardar Evento"**

#### Análisis Automático
La IA analiza continuamente y muestra:
- ⚠️ **Arritmias detectadas:** FA, PSVT, etc.
- 📊 **Estadísticas:** FC media, máxima, mínima
- 🔴 **Eventos anómalos:** Cambios de segmento ST
- 📈 **Tendencias:** Variabilidad de FC

---

## Análisis de Reportes

### Estructura de un Reporte

Cada reporte automático contiene:

```
1. INFORMACIÓN DEL PACIENTE
   • Nombre, edad, sexo
   • Fecha y hora de monitoreo
   • Dispositivo utilizado

2. RESUMEN EJECUTIVO
   • Hallazgos principales
   • Conclusiones clínicas
   • Recomendaciones

3. ESTADÍSTICAS GENERALES
   • Duración total del monitoreo
   • FC media, máxima, mínima
   • Variabilidad de FC
   • Índice de carga ectópica

4. ANÁLISIS DE RITMO
   • Ritmo predominante
   • Cambios de ritmo
   • Arritmias detectadas
   • Duración y frecuencia

5. ANÁLISIS DE SEGMENTO
   • Cambios de ST
   • Cambios de onda T
   • Intervalos (PR, QRS, QT)

6. EVENTOS DOCUMENTADOS
   • Eventos marcados por paciente
   • Eventos detectados por IA
   • Correlación con síntomas

7. ANEXOS
   • Tiras de ECG de eventos
   • Tablas de frecuencia cardíaca
   • Gráficos de análisis
```

### Generar un Reporte

1. En **Reportes**, presione **"+ Nuevo Reporte"**
2. Seleccione el paciente y sesión de monitoreo
3. Elija tipo de reporte:
   - **Completo:** Análisis exhaustivo de 48 horas
   - **Resumen:** Hallazgos principales
   - **Eventos:** Solo eventos críticos
   - **Comparativo:** Compara múltiples sesiones

4. Presione **"Generar Reporte"** (30-60 segundos)
5. El reporte se abrirá automáticamente

### Revisar Hallazgos

En la vista de reporte:

```
HALLAZGOS PRINCIPALES
─────────────────────────────────────────

✓ NORMAL
  • Ritmo sinusal normal durante el 95% del monitoreo
  • Frecuencia cardíaca dentro de los límites normales

⚠ LEVE
  • 47 extrasístoles supraventriculares aisladas
  • Pausas sinusales máximas de 2.1 segundos

🔴 SIGNIFICATIVO
  • Episodios de fibrilación auricular paroxística
  • Duración: 12 minutos (máximo)
  • Respuesta ventricular: 120-145 bpm

📋 RECOMENDACIONES
  • Considerar anticoagulación según CHA₂DS₂-VASc
  • Seguimiento en 4-6 semanas
  • Valorar control de síntomas
```

---

## Sistema de Notificaciones

### Tipos de Alertas

#### 🔴 **Críticas** (Acción Inmediata)
- Fibrilación auricular sostenida
- Taquicardia ventricular
- Bradicardia severa (< 40 bpm)
- Episodios sincopales

#### 🟠 **Altas** (Revisar Pronto)
- Episodios de taquicardia (> 130 bpm)
- Cambios significativos de ST
- Arritmias frecuentes

#### 🟡 **Medias** (Revisar Hoy)
- Extrasístoles múltiples
- Variabilidad anormal de FC
- Cambios menores de segmento

#### 🔵 **Informativas**
- Fin de sesión de monitoreo
- Reporte completado
- Dispositivo necesita sincronización

### Configurar Notificaciones

1. En **Configuración** → **Notificaciones**
2. Establezca preferencias por tipo de alerta:

```
☑ Email (inmediato para críticas)
☑ SMS (críticas y altas)
☑ Push (todas las alertas)
☑ Resumen diario (7:00 AM)

Horario de Silencio:
  Desde: 22:00  Hasta: 08:00
  (Solo alertas críticas se permiten)
```

3. Haga clic en **"Guardar Preferencias"**

### Gestionar Centro de Alertas

En **Alertas**:
- **Ver todas:** Listado completo de alertas
- **Filtrar por:** Paciente, tipo, fecha, estado
- **Marcar revisadas:** Indique que ha visto las alertas
- **Archivar:** Mueva alertas antiguas
- **Buscar:** Localice alertas específicas

---

## Generación de Reportes

### Formatos Disponibles

#### 📄 **PDF**
- Formato profesional listo para impresión
- Incluye gráficos y tablas
- Firma digital
- Ideal para archivo clínico

#### 🔄 **EDF (European Data Format)**
- Formato estándar de datos biosignales
- Compatible con software de análisis
- Datos sin procesar incluidos
- Para análisis secundarios

#### 📊 **HL7**
- Estándar de intercambio sanitario
- Integración con HIS/EHR
- Formato estructurado XML
- Interoperabilidad hospitalaria

#### 📈 **JSON**
- Datos estructurados legibles
- Para integración con APIs externas
- Incluye metadatos completos

### Procedimiento de Generación

1. **Seleccione la sesión de monitoreo**
   - En Reportes o desde el panel del paciente
   - Verifique fecha y hora correctas

2. **Elija parámetros**
   ```
   Tipo de Reporte:     [ Completo ▼ ]
   Formato de Salida:   [ PDF ▼ ]
   Incluir Gráficos:    [ ✓ ]
   Incluir Estadísticas: [ ✓ ]
   Firma Digital:       [ ✓ ]
   ```

3. **Agregue notas personales** (opcional)
   - Comentarios clínicos adicionales
   - Diagnósticos presuntos
   - Recomendaciones de seguimiento

4. **Genere el reporte**
   - Presione **"Generar"**
   - Espere procesamiento (30-90 segundos)

5. **Descargue o comparta**
   - Botón **"Descargar"** para obtener el archivo
   - Botón **"Compartir"** para enviar vía email

### Compartir Reportes

Para enviar a colegas:
1. Abierto el reporte, presione **"Compartir"**
2. Ingrese emails de los destinatarios
3. Elija permiso: Ver / Ver y Comentar
4. Agregue mensaje personalizado
5. Haga clic en **"Enviar"**

> 📌 **RGPD/HIPAA:** Todos los reportes compartidos se cifran en tránsito y se auditan.

---

## Configuración y Preferencias

### Perfil de Usuario

En **Configuración** → **Perfil**:

```
Nombre Completo:              [                    ]
Email Profesional:            [                    ]
Número de Colegiado:          [                    ]
Especialidad:                 [ Cardiología ▼ ]
Centro Hospitalario:          [                    ]
Teléfono Profesional:         [                    ]
```

### Preferencias Clínicas

```
Umbrales de Alertas
├── FC Mínima: 50 bpm
├── FC Máxima: 130 bpm
├── Límite de Extrasístoles: 200 por hora
├── Duración mínima de FA: 5 minutos
└── Sensibilidad de ST: 1 mm

Integraciones
├── Sistema de Historia Clínica
├── Laboratorio
├── Farmacias
└── Centros de Referencia
```

### Seguridad

1. **Cambio de Contraseña**
   - Contraseña actual: [               ]
   - Nueva contraseña: [               ]
   - Confirmar: [               ]

2. **Autenticación de Dos Factores**
   - Estado: Habilitada ✓
   - Método: Aplicación (Google Authenticator)
   - Hacer backup de códigos de recuperación

3. **Sesiones Activas**
   - Ver todos los dispositivos con acceso
   - Cerrar sesiones remotas

---

## Mejores Prácticas Clínicas

### Protocolo de Interpretación

#### 1. **Antes de Asignar el Monitor**
- ✓ Verificar indicación clínica clara
- ✓ Exclusiones: Alergia a electrodos, irritación cutánea severa
- ✓ Educar al paciente sobre el procedimiento
- ✓ Obtener consentimiento informado
- ✓ Verificar medicamentos que afecten FC/ritmo

#### 2. **Durante la Colocación**
- ✓ Preparar la piel (limpiar, secar)
- ✓ Aplicar electrodos en posición correcta
- ✓ Verificar buen contacto (impedancia < 5 kΩ)
- ✓ Realizar ECG de 12 derivaciones de referencia
- ✓ Documentar cualquier anomalía cutánea

#### 3. **Durante el Monitoreo**
- ✓ Paciente mantiene diario de síntomas
- ✓ Monitoreo de sincronización de dispositivo
- ✓ Responder a alertas críticas en < 15 minutos
- ✓ Documento de medicamentos cambiados durante monitoreo

#### 4. **Análisis de Reportes**
- ✓ Leer resumen ejecutivo completamente
- ✓ Revisar todas las tiras de eventos
- ✓ Correlacionar con síntomas documentados
- ✓ Considerar contexto clínico completo
- ✓ No depender únicamente de detección automática

#### 5. **Comunicación con el Paciente**
- ✓ Explicar hallazgos en términos comprensibles
- ✓ Proporcionar copia del reporte
- ✓ Discutir plan de seguimiento
- ✓ Agendar cita de seguimiento si necesario

### Criterios para Alertas Críticas

Las siguientes condiciones generan alertas inmediatas:

| Condición | Acción Recomendada |
|---|---|
| **FA Sostenida** (> 30 min) | Contactar paciente inmediatamente |
| **TV No Sostenida** (3+ latidos) | Revisar traza, evaluar síntomas |
| **Bradicardia** (< 40 bpm) | Verificar si corresponde al paciente |
| **Pausa > 3 seg** | Descartar artefacto, contactar paciente |
| **Cambios ST** (> 2 mm) | Evaluar síntomas, considerar troponina |

### Seguimiento de Pacientes

**Semana 1:** Revisión de hallazgos preliminares
**Semana 2:** Resultados finales y plan
**Mes 1:** Evaluación clínica de respuesta al tratamiento
**Mes 3:** Consideración de monitoreos adicionales

---

## Preguntas Frecuentes

### **P: ¿Con qué frecuencia debo revisar las alertas?**
A: Las alertas críticas requieren revisión dentro de 15 minutos. Las alertas de nivel alto dentro de 2 horas. Las medias se pueden revisar diariamente.

### **P: ¿Puedo cambiar los umbrales de alerta?**
A: Sí, en Configuración → Preferencias Clínicas. Se recomienda consultar con tu equipo antes de cambios significativos.

### **P: ¿Qué significa "Calidad de Señal Pobre"?**
A: Indica problemas de contacto del electrodo, movimiento excesivo o interferencia electromagnética. Pedirle al paciente que revise la posición del dispositivo.

### **P: ¿Puedo monitorear múltiples pacientes simultáneamente?**
A: Sí, puedes abrir múltiples ventanas o pestañas del navegador para cada sesión de monitoreo.

### **P: ¿Cómo se integra con nuestro sistema EHR?**
A: Horizon Medical soporta HL7 e integración FHIR. Contacte a soporte técnico para configuración.

### **P: ¿Cuál es la política de retención de datos?**
A: Los datos se mantienen indefinidamente según normativa HIPAA/RGPD. Puede solicitar eliminación de datos en Configuración → Privacidad.

### **P: ¿Puedo exportar histórico completo de un paciente?**
A: Sí, en Pacientes → Acciones → "Exportar Histórico" en múltiples formatos.

---

## Soporte y Recursos

📧 **Email:** soporte@horizon-medical.com  
📞 **Teléfono:** +34-900-HORIZON  
💬 **Chat en Vivo:** Disponible en la plataforma (L-V 8:00-20:00)  
📚 **Centro de Ayuda:** help.horizon-medical.com  
🎓 **Capacitación:** Webinars mensuales, disponibles bajo demanda

---

**Última revisión:** Enero 2026  
**Próxima revisión programada:** Julio 2026
