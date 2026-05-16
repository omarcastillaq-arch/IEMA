# ⚙️ Manual de Configuración - Dispositivo Holter Horizon Medical

**Versión:** 1.5  
**Última actualización:** Enero 2026  
**Audiencia:** Personal clínico, técnicos de instalación

---

## Tabla de Contenidos

1. [Especificaciones Técnicas](#especificaciones-técnicas)
2. [Componentes del Dispositivo](#componentes-del-dispositivo)
3. [Encendido y Apagado](#encendido-y-apagado)
4. [Sistema de Batería](#sistema-de-batería)
5. [Emparejamiento Bluetooth](#emparejamiento-bluetooth)
6. [Configuración de Parámetros](#configuración-de-parámetros)
7. [Sistema de Indicadores LED](#sistema-de-indicadores-led)
8. [Mantenimiento y Limpieza](#mantenimiento-y-limpieza)
9. [Troubleshooting Técnico](#troubleshooting-técnico)
10. [Diagramas y Esquemas](#diagramas-y-esquemas)

---

## Especificaciones Técnicas

### Dimensiones y Peso

```
Dimensiones Físicas
└── Largo: 95 mm
└── Ancho: 68 mm
└── Profundidad: 28 mm
└── Peso Total: 195 ± 5 gramos (sin carcasa)
    
Pantalla
└── Tipo: LCD OLED
└── Tamaño: 2.4 pulgadas (6.1 cm diagonal)
└── Resolución: 320 x 240 píxeles
└── Área visible: 53.6 x 40.2 mm
```

### Especificaciones Electrónicas

| Parámetro | Valor |
|---|---|
| **Canales de ECG** | 12 derivaciones simultáneas |
| **Frecuencia de Muestreo** | 500 Hz por canal |
| **Resolución ADC** | 16 bits |
| **Rango de Entrada** | ±10 mV |
| **Rechazo de Modo Común** | > 100 dB @ 50/60 Hz |
| **Impedancia de Entrada** | > 10 MΩ |
| **Procesador Principal** | ARM Cortex-M4 @ 120 MHz |
| **Memoria Flash** | 2 GB (almacenamiento de datos) |
| **Memoria RAM** | 512 MB |
| **Almacenamiento** | eMMC, 2 GB |

### Conectividad

| Tecnología | Especificación |
|---|---|
| **Bluetooth** | 5.0 LE con LESC |
| **Rango BLE** | 10 metros (línea de vista) |
| **Frecuencia** | 2.4 GHz ISM Band |
| **Potencia TX** | 0 dBm (-3 dBm a +4 dBm configurable) |
| **Velocidad de Datos** | 1 Mbps |
| **Encriptación** | AES-128-CCM |

### Especificaciones de Batería

```
Tipo de Batería:      Li-Po 3.7V, 2500 mAh
Carga Total:          9.25 Wh (Watios-hora)
Duración Típica:      48 horas grabación continua
                      (con sincronización cada 2 minutos)
                      
Duración Mínima:      32 horas (sincronización cada 30 seg)
Duración Máxima:      72 horas (sin sincronización)

Tiempo de Carga:      ~60 minutos (0-100%)
                      ~45 minutos (10-90%)
Corriente de Carga:   500 mA

Temperatura Operación: 10-45°C
Temperatura Almacén:  -10 a 50°C
```

### Grado de Protección

| Aspecto | Especificación |
|---|---|
| **Protección Acuosa** | IPX4 (salpicaduras desde cualquier ángulo) |
| **Resistencia Mecánica** | IK06 (golpe de 1 joule) |
| **Esterilización** | Clínicamente compatible con desinfección |
| **Certificación EMC** | CE, FCC, ISED |
| **Cumplimiento Médico** | Directiva 93/42/CEE (Clase II a) |

---

## Componentes del Dispositivo

### Vista Frontal

```
┌─────────────────────────────────────┐
│                                     │
│      ╔═════════════════════╗        │
│      ║                     ║        │
│      ║    PANTALLA LCD     ║        │
│      ║   [Resolución]      ║        │
│      ║                     ║        │
│      ╚═════════════════════╝        │
│                                     │
│    [◀] [HOME]  [MENU]  [►]         │
│                                     │
│          BOTONES DE CONTROL         │
│                                     │
└─────────────────────────────────────┘
```

**Botones de Control:**

| Botón | Función |
|---|---|
| **◀ (Izquierda)** | Navegar hacia atrás / Disminuir |
| **HOME** | Volver a pantalla principal / Apagar pantalla |
| **MENU** | Acceder a menú de configuración |
| **► (Derecha)** | Navegar hacia adelante / Aumentar |

### Vista Posterior

```
┌─────────────────────────────────────┐
│                                     │
│           RANURA DE USB-C           │
│        (Carga y sincronización)     │
│          ╔──────────────╗           │
│          │ ░ ░░░ ░░ ░░ │           │
│          ╚──────────────╝           │
│                                     │
│           CONECTOR LED              │
│        (Indicadores de estado)      │
│          [🔴] [🟢] [🟡]            │
│                                     │
└─────────────────────────────────────┘
```

### Vista Lateral - Conectores de Electrodos

```
Lado Izquierdo              Lado Derecho
┌──────────────┐            ┌──────────────┐
│ 1: RA (Rojo) │            │ 7:  V1 (Blanc)│
│ 2: LA (Amar) │            │ 8:  V2 (Gris) │
│ 3: LL (Verde)│            │ 9:  V3 (Púrp) │
│ 4: RL (Negro)│            │ 10: V4 (Rosa) │
│ 5: aVR(Azul) │            │ 11: V5 (Cian) │
│ 6: aVL(Naranja│            │ 12: V6 (Marrón│
└──────────────┘            └──────────────┘

Codificación de Colores:
• RA (Brazo Derecho): ROJO
• LA (Brazo Izquierdo): AMARILLO
• RL (Pierna Derecha): NEGRO
• LL (Pierna Izquierda): VERDE
• V1-V6: 6 derivaciones precordiales
```

### Cubierta Protectora

```
Material:        Silicona médica hipoalergénica
Color:           Blanco/Transparente
Espesor:         3 mm
Función:         Protección contra golpes y agua
Desmontable:     Sí (para limpieza y reparación)
Instalación:     Encaja sobre el cuerpo principal
```

---

## Encendido y Apagado

### Procedimiento de Encendido

#### Paso 1: Localizar Interruptor
```
Ubicación: Lado izquierdo del dispositivo
Tipo: Interruptor deslizante
Posiciones: OFF | ON | TEST
```

#### Paso 2: Deslizar a Posición ON
```
┌─────────────────────────────────────┐
│   INTERRUPTOR LATERAL IZQUIERDO     │
│                                     │
│  [OFF] ←── SLIDE ──→ [ON]           │
│                        ●            │
│                     (Aquí ahora)    │
└─────────────────────────────────────┘
```

#### Paso 3: Esperar Inicialización
- ⏳ Espere 3-5 segundos
- 🔴 LED rojo parpadeará (Auto-diagnóstico)
- 🟢 LED verde parpadeará (Dispositivo listo)
- 📺 Pantalla LCD se encenderá

#### Paso 4: Verificar Pantalla

```
┌─────────────────────────────────────┐
│   HORIZON MEDICAL                   │
│   Sistema Iniciando...              │
│                                     │
│   ▓▓▓▓▓░░░░░░░░ 35%                │
│                                     │
│   Pruebas de Auto-diagnóstico:      │
│   ✓ Procesador: OK                  │
│   ✓ Memoria: OK                     │
│   ✓ Batería: 92%                    │
│   ✓ Sensores: OK                    │
│                                     │
│   Esperando emparejamiento...       │
│                                     │
└─────────────────────────────────────┘
```

#### Paso 5: Listo para Usar
- El dispositivo está listo cuando ve LED verde fijo
- Ahora puede emparejar con teléfono o web

---

### Procedimiento de Apagado

#### Método 1: Apagado Normal
1. Deslice el interruptor a posición **OFF**
2. Pantalla se oscurecerá en 2-3 segundos
3. LEDs se apagarán
4. Dispositivo entra en modo de bajo consumo

#### Método 2: Apagado por Pantalla (Menú)
1. Presione **[MENU]**
2. Navegue a **"Sistema"**
3. Seleccione **"Apagar Dispositivo"**
4. Presione **[HOME]** para confirmar
5. Espere confirmación visual

#### Método 3: Apagado Automático
- El dispositivo se apaga automáticamente si:
  - Está inactivo por > 2 horas
  - Batería cae por debajo de 3% (emergencia)
  - Se detecta actividad anormal en sensores

> ⚠️ **Nota:** Apagar con interruptor detiene la grabación. Use la app para pausar sin apagar.

---

## Sistema de Batería

### Indicadores de Carga

```
PANTALLA PRINCIPAL
┌────────────────────────────┐
│ Batería: ▓▓▓▓▓▓░░░░        │
│ Carga: 65%                 │
│ Tiempo Restante: 34 horas  │
│ Estado: Excelente          │
└────────────────────────────┘

LED POSTERIOR (Color)
├─ 🟢 Verde Fijo: 80-100% (Excelente)
├─ 🟢 Verde Parpadeante: 60-80% (Bueno)
├─ 🟡 Amarillo Fijo: 40-60% (Aceptable)
├─ 🟡 Amarillo Parpadeante: 20-40% (Bajo)
├─ 🔴 Rojo Fijo: 10-20% (Muy Bajo)
└─ 🔴 Rojo Intermitente: < 10% (Crítico)
```

### Proceso de Carga

#### Paso 1: Preparación
- Localice cable USB-C (incluido en kit)
- Asegúrese de que el adaptador de corriente está disponible (5V, 1A)
- Apague el dispositivo (opcional pero recomendado)

#### Paso 2: Conectar Cable
```
Cable USB-C
    ↓
  ╔════╗
  ║ HM │  ← Puerto USB-C trasero
  ╚════╝
    ↓
Adaptador de Corriente
    ↓
  Toma de Corriente
```

1. Alinee conector USB-C con puerto trasero
2. Inserte suavemente hasta oír "clic"
3. Conecte adaptador a toma de corriente
4. LED rojo parpadeante indica carga en proceso

#### Paso 3: Monitoreo de Carga

| LED | Significado |
|---|---|
| 🔴 Intermitente | Cargando (0-99%) |
| 🔴 Fijo | Carga completa |
| 🟠 Parpadeante | Error de carga (temperatura) |
| ⚫ Apagado | Sin corriente o desconectado |

#### Paso 4: Carga Completa

- **Indicador:** LED rojo fijo
- **Tiempo:** Típicamente 45-60 minutos desde 0%
- **Confirmación:** "Carga 100%" en pantalla
- **Próximo paso:** Desconecte el cable

### Curva de Carga Típica

```
Porcentaje
    100% ├─────────────────────  ●
         │                      /
     80% ├────────────────────●
         │                /
     60% ├──────────────●
         │            /
     40% ├────────────●
         │          /
     20% ├────────●
         │      /
      0% ├────●──────────────────────
         └──┴──┴──┴──┴──┴──┴──┴──┴──┴──
           0  10 20 30 40 50 60 70 80 90
                  Tiempo (minutos)

• Fase de Carga Rápida: 0-10 minutos (0-40%)
• Fase de Carga Normal: 10-50 minutos (40-90%)
• Fase de Carga Lenta: 50-60 minutos (90-100%)
```

### Optimización de Batería

#### Para Maximizar Duración
| Acción | Efecto |
|---|---|
| Reducir brillo LED | +15% autonomía |
| Reducir frecuencia sincronización | +20% autonomía |
| Modo de bajo consumo | +25% autonomía |
| Desactivar análisis en tiempo real | +10% autonomía |

#### Configuración de Bajo Consumo
1. Presione **[MENU]**
2. Seleccione **"Configuración"**
3. Vaya a **"Batería"**
4. Seleccione **"Modo Bajo Consumo"**
5. Confirme con **[HOME]**

> 📌 **Nota:** En modo bajo consumo, la app puede sincronizar menos frecuentemente. Asegúrese de sincronizar al menos cada 4 horas.

---

## Emparejamiento Bluetooth

### Preparación para Emparejamiento

**Requisitos:**
- ✓ Dispositivo encendido (LED verde parpadeante)
- ✓ Teléfono/tablet con Bluetooth habilitado
- ✓ App Horizon Medical instalada
- ✓ Ambos dispositivos a menos de 1 metro
- ✓ Código de emparejamiento del Holter a mano

**Código de Emparejamiento:**
```
Ubicación: Etiqueta posterior del dispositivo
Formato: XXXXXX (6 dígitos)
Ejemplo: 523847
```

### Modo de Emparejamiento

#### Paso 1: Activar Modo de Emparejamiento
1. Presione **[MENU]**
2. Navegue a **"Conectividad"**
3. Seleccione **"Emparejamiento Bluetooth"**
4. Presione **[HOME]** para activar

```
Resultado: LED parpadea alternativamente
          (Azul ↔ Blanco)
          
Duración: 3 minutos (después vuelve a modo normal)
```

#### Paso 2: Escaneado desde Teléfono
En la app o configuración de Bluetooth del teléfono:
1. Abra Configuración → Bluetooth (o app Horizon)
2. Presione "Buscar dispositivos"
3. Espere a que aparezca "HM-XXXXXX" en la lista
4. Toque el nombre del dispositivo

#### Paso 3: Confirmación de Código
```
Teléfono:
┌─────────────────────────────┐
│ Código de Emparejamiento    │
│                             │
│ Código mostrado en el       │
│ dispositivo:                │
│                             │
│ [  ] [  ] [  ]              │
│ [  ] [  ] [  ]              │
│                             │
│ ¿Confirma que los códigos   │
│ coinciden?                  │
│                             │
│ [Sí, Emparejar] [No]       │
│                             │
└─────────────────────────────┘

Dispositivo Holter:
Mostrará el código de 6 dígitos:
┌──────────────────────┐
│ CÓDIGO DE VERIFICACIÓN│
│                      │
│   5 2 3 8 4 7        │
│                      │
│ Confirme en el       │
│ teléfono             │
│                      │
└──────────────────────┘
```

#### Paso 4: Completar Emparejamiento
1. Verifique que ambos códigos coinciden
2. Presione **"Sí, Emparejar"** en el teléfono
3. Presione **[HOME]** en el Holter
4. Espere confirmación (10-15 segundos)

```
Confirmación Visual:
├─ Pantalla del Holter: "Emparejado ✓"
├─ LED: Verde fijo
├─ Teléfono: "Conectado"
└─ App: Muestra "Estado: Conectado"
```

### Resolución de Problemas de Emparejamiento

| Problema | Causa | Solución |
|---|---|---|
| Códigos no coinciden | Sincronización de tiempo | Reinicie ambos dispositivos |
| Timeout (3 min) | Lentitud | Repita el proceso |
| Falla de seguridad | Código incorrecto | Tente nuevamente, verifique código |
| Desconexión después | Interferencia Bluetooth | Reduce distancia, aleja de WiFi |

---

## Configuración de Parámetros

### Acceso al Menú de Configuración

1. Presione **[MENU]** en el dispositivo
2. Navegue con **[◀]** y **[►]**
3. Seleccione **"Configuración"** con **[HOME]**

```
MENÚ PRINCIPAL
├─ Sistema
├─ Configuración ← Está aquí
├─ Conectividad
├─ Sensores
├─ Diagnóstico
└─ Acerca de
```

### Submenú de Configuración

```
CONFIGURACIÓN
├─ Frecuencia de Muestreo
│  └─ 500 Hz (Recomendado)
│  └─ 250 Hz (Bajo consumo)
│
├─ Filtro de Línea
│  └─ 50 Hz (Europa)
│  └─ 60 Hz (Américas)
│
├─ Sensibilidad de Electrodos
│  └─ Automática (Recomendado)
│  └─ Manual (1-100)
│
├─ Sincronización
│  └─ Cada 30 segundos
│  └─ Cada 60 segundos
│  └─ Cada 5 minutos
│
├─ Alertas Críticas
│  └─ Habilitadas
│  └─ Solo críticas
│  └─ Deshabilitadas
│
├─ Idioma
│  └─ Español
│  └─ English
│  └─ Français
│  └─ Deutsch
│
└─ Fábrica (Reset)
   └─ Restablecer valores de fábrica
```

### Configuración Recomendada

```
CONFIGURACIÓN CLÍNICA ESTÁNDAR
┌────────────────────────────────┐
│ Frecuencia de Muestreo: 500 Hz │
│ Filtro de Línea: 50 Hz         │
│ Sensibilidad: Automática       │
│ Sincronización: Cada 30 seg    │
│ Alertas: Habilitadas           │
│ Tiempo de Sesión: 48 horas     │
│ Idioma: Español                │
└────────────────────────────────┘
```

---

## Sistema de Indicadores LED

### Ubicación de LEDs

```
VISTA POSTERIOR DEL DISPOSITIVO
┌─────────────────────────────────┐
│                                 │
│         LED INDICADOR           │
│      [🔴] [🟢] [🟡]            │
│                                 │
└─────────────────────────────────┘

SIGNIFICADOS:
• Izquierda: Estado de Sistema (Rojo)
• Centro: Estado de Batería (Verde)
• Derecha: Estado de Conectividad (Amarillo)
```

### Patrones LED

#### LED Rojo (Sistema)

| Patrón | Significado | Acción |
|---|---|---|
| Fijo | Sistema normal operativo | Ninguna |
| Parpadeante lento (1 Hz) | Auto-diagnóstico en progreso | Espere completar |
| Parpadeante rápido (2 Hz) | Error detectado | Reinicie dispositivo |
| Alternado | Emparejamiento Bluetooth activo | Proceda con emparejamiento |

#### LED Verde (Batería)

| Patrón | Carga | Acción |
|---|---|---|
| Fijo | 80-100% | Normal |
| Parpadeante 0.5 Hz | 60-80% | Normal |
| Parpadeante 1 Hz | 40-60% | Monitorear |
| Parpadeante 2 Hz | 20-40% | Considerar carga |
| Apagado | 0-20% | CARGAR INMEDIATAMENTE |

#### LED Amarillo (Conectividad)

| Patrón | Estado | Significado |
|---|---|---|
| Fijo | Conectado | Emparejado con dispositivo |
| Parpadeante lento | Búsqueda | Buscando dispositivo Bluetooth |
| Parpadeante rápido | Error | Problema de conexión |
| Apagado | Desconectado | Sin emparejamiento |

### Secuencia Típica de Encendido

```
Tiempo (seg)  |  🔴 Rojo  |  🟢 Verde  |  🟡 Amarillo
─────────────┼───────────┼────────────┼───────────
     0        | Fijo      | Apagado    | Apagado
     1        | Parp.R    | Parp.R     | Apagado
     2        | Parp.R    | Parp.R     | Apagado
     3        | Parp.R    | Parp.R     | Apagado
     4        | Fijo      | Fijo/Parp  | Apagado
     5        | Fijo      | Fijo/Parp  | Parp.L
    10+       | Fijo      | Fijo/Parp  | Fijo/Apagado
   (Normal)   | (OK)      | (Batería) | (Conexión)
```

---

## Mantenimiento y Limpieza

### Limpieza Regular

#### Limpieza Diaria
```
Frecuencia: Después de cada sesión
Duración: 5 minutos

Procedimiento:
1. Apagar dispositivo
2. Remover cubierta de silicona (si es extraíble)
3. Limpiar con paño suave y seco
4. Usar hisopo con alcohol 70% en conectores
5. Dejar secar 5 minutos antes de usar
6. Colocar cubierta nuevamente
```

#### Limpieza Profunda (Semanal)
```
Frecuencia: Una vez por semana
Duración: 15 minutos

Procedimiento:
1. Desconectar todos los cables
2. Remover cubierta de silicona
3. Limpiar cuerpo con paño húmedo (agua destilada)
4. Secar completamente con paño suave
5. Usar swab con alcohol isopropílico 70% en:
   ├─ Conectores de electrodos
   ├─ Puerto USB-C
   └─ Botones de control
6. Permitir que los conectores se sequen al aire
7. Reasamblar y volver a colocar cubierta
8. Almacenar en lugar seco
```

### Desinfección

**Métodos Aprobados:**

| Método | Procedimiento |
|---|---|
| **Alcohol 70%** | Aplicar con paño, secar |
| **Solución Clorada** | 0.5% hipoclorito, aplicar 1 min, enjuagar |
| **Toallitas Desinfectantes** | Tipo hospital, seguir instrucciones |
| **Luz UV** | 30 minutos bajo luz UV-C |

**NO USAR:**
- ❌ Bleach puro o sin diluir
- ❌ Acetona o disolventes fuertes
- ❌ Esterilizador de vapor (dañará electrónica)
- ❌ Autoclave (destruirá componentes)

### Almacenamiento

```
Condiciones Ideales:
├─ Temperatura: 15-25°C
├─ Humedad: 30-70% HR
├─ Luz: Almacenar en lugar oscuro
├─ Presión: Presión atmosférica normal
└─ Vibración: Minimizar

Disposición:
├─ En estuche rígido incluido
├─ Separado de fuentes de calor
├─ Alejado de campos magnéticos fuertes
├─ En posición horizontal
└─ Con batería parcialmente cargada (50%)

Duración Almacenaje:
├─ Corto plazo (< 3 meses): Sin problema
├─ Largo plazo (3-12 meses): Cargar cada 3 meses
└─ Muy largo plazo (> 1 año): Consultar servicio técnico
```

---

## Troubleshooting Técnico

### Tabla de Diagnóstico Rápido

| Síntoma | Causa Probable | Solución |
|---|---|---|
| **No enciende** | Batería agotada | Cargar durante 60 min |
| **Apaga de repente** | Temperatura extrema | Dejar en temp. ambiente 30 min |
| **Pantalla no responde** | Software congelado | Reinicio duro (apagar 20s) |
| **LEDs sin funcionar** | LEDs dañados | Contactar servicio técnico |
| **Conectores flojos** | Conexión pobre | Limpiar conectores |
| **Señal ECG débil** | Electrodo despegado | Verificar contacto de electrodo |
| **No sincroniza datos** | Bluetooth no conectado | Reemparejar dispositivo |
| **Batería no carga** | Puerto USB obstruido | Limpiar puerto con hisopo |
| **Error en pantalla** | Fallo de software | Reinicio / Restablecimiento |

### Reinicio del Dispositivo

#### Reinicio Suave (Soft Reset)
```
Paso 1: Deslizar interruptor a OFF
Paso 2: Esperar 20 segundos
Paso 3: Deslizar interruptor a ON
Paso 4: Esperar inicialización (5 segundos)
Resultado: Dispositivo reinicia sin perder datos
```

#### Reinicio Duro (Hard Reset)
```
Paso 1: Desconectar cualquier cable USB
Paso 2: Deslizar interruptor a OFF
Paso 3: Presionar simultáneamente:
        [◀] + [HOME] + [►]
        (Mantener 10 segundos)
Paso 4: Soltar los botones
Paso 5: Esperar 30 segundos
Paso 6: Deslizar interruptor a ON
Resultado: Dispositivo se reinicia
          (Datos se preservan si están almacenados)
```

#### Restablecimiento de Fábrica
```
⚠️ ADVERTENCIA: Esto borra todos los datos locales

Paso 1: Presionar [MENU]
Paso 2: Ir a "Sistema" → "Mantenimiento"
Paso 3: Seleccionar "Restablecimiento de Fábrica"
Paso 4: Ingresar código: 2468
Paso 5: Confirmar con [HOME]
Paso 6: Esperar reinicio (2 minutos)
Resultado: Dispositivo reinicia con configuración por defecto
```

### Códigos de Error

#### Pantalla de Error
```
ERROR: [Código Error]
Descripción: [Problema detectado]
Acción: [Recomendación]
Contactar Soporte: +34-900-HORIZON
Código de Sesión: [XXXX-XXXX]
```

#### Tabla de Códigos

| Código | Significado | Acción |
|---|---|---|
| **E001** | Fallo de memoria | Reinicio duro, si persiste: servicio técnico |
| **E002** | Sensor ECG desconectado | Verificar electrodos |
| **E003** | Fallo de Bluetooth | Reemparejar dispositivo |
| **E004** | Temperatura crítica | Enfriar a temperatura ambiente |
| **E005** | Batería crítica | Cargar inmediatamente |
| **E010** | Fallo de reloj | Sincronizar con app |
| **E020** | Corrupción de datos | Contactar servicio técnico |
| **E098** | Error desconocido | Reinicio duro, reportar a soporte |

---

## Diagramas y Esquemas

### Diagrama de Bloques del Sistema

```
┌──────────────────────────────────────────────────┐
│            HORIZOM MEDICAL HOLTER                │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────────┐  ┌──────────────┐             │
│  │  SENSORES    │  │   PROCESADOR │             │
│  │              │  │   ARM M4     │             │
│  │ • 12 canales │  │   @ 120 MHz  │             │
│  │   ECG        │──│              │             │
│  │ • Temperatura│  │ • ADC 16-bit │             │
│  │ • Aceleró-  │  │ • Algoritmos │             │
│  │   metro      │  │   de detección│           │
│  └──────────────┘  └──────────────┘             │
│                           │                      │
│                           ▼                      │
│        ┌──────────────────────────────┐          │
│        │   MEMORIA                    │          │
│        │ • Flash: 2 GB (datos)       │          │
│        │ • RAM: 512 MB               │          │
│        │ • eMMC: 2 GB (OS)           │          │
│        └──────────────────────────────┘          │
│                           │                      │
│        ┌──────────────────────────────┐          │
│        │   BATERÍA Li-Po              │          │
│        │ • 3.7V, 2500 mAh            │          │
│        │ • Controlador de carga      │          │
│        │ • Monitor de batería        │          │
│        └──────────────────────────────┘          │
│                           │                      │
│        ┌──────────────────────────────┐          │
│        │   CONECTIVIDAD              │          │
│        │ • Bluetooth 5.0 LE          │          │
│        │ • Rango: 10m                │          │
│        │ • LESC (Encriptación)       │          │
│        └──────────────────────────────┘          │
│                           │                      │
│        ┌──────────────────────────────┐          │
│        │   INTERFAZ                  │          │
│        │ • Pantalla LCD              │          │
│        │ • Botones de control        │          │
│        │ • LEDs indicadores          │          │
│        │ • Puerto USB-C              │          │
│        └──────────────────────────────┘          │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Distribución de Electrodos (12 Derivaciones)

```
                    Clavícula
                        ↓
        Esternón ←─┐  ┌──┐  Línea media
                  ┌─────────┐ Hombro Derecho
                  │    1    │ (RA - Rojo)
                  ├─────────┤
                  │    7-12 │ Derivaciones Precordiales
                  │  (V1-V6) │
                  ├─────────┤
                  │    2    │ Hombro Izquierdo
                  └─────────┘ (LA - Amarillo)
                      │
                    Axila
                      │
                  ┌─────────┐
                  │    3    │ Pierna Izquierda
                  │         │ (LL - Verde)
                  │    4    │ Pierna Derecha
                  │ (RL-Neg) │ (Tierra)
                  └─────────┘

DERIVACIONES ESTÁNDAR:

Bipolares (Extremidades):
├─ I:   RA → LA
├─ II:  RA → LL
└─ III: LA → LL

Unipolares Aumentadas:
├─ aVR: Potencial amplificado RA
├─ aVL: Potencial amplificado LA
└─ aVF: Potencial amplificado LL

Precordiales (V1-V6):
├─ V1: 4° espacio intercostal línea esternal derecha
├─ V2: 4° espacio intercostal línea esternal izquierda
├─ V3: A mitad camino entre V2 y V4
├─ V4: 5° espacio intercostal línea medioclavicular
├─ V5: 5° espacio intercostal línea axilar anterior
└─ V6: 5° espacio intercostal línea axilar media
```

### Arquitectura de Software

```
┌────────────────────────────────────────┐
│         APLICACIÓN USUARIO             │
│  (Dashboard / App Móvil)               │
└───────────────────┬────────────────────┘
                    │
┌───────────────────▼────────────────────┐
│      CAPA DE CONECTIVIDAD              │
│  • Bluetooth LE                        │
│  • REST API                            │
│  • WebSocket                           │
└───────────────────┬────────────────────┘
                    │
┌───────────────────▼────────────────────┐
│      CAPA DE GESTIÓN DE DATOS          │
│  • Buffer de datos                     │
│  • Compresión                          │
│  • Encriptación                        │
└───────────────────┬────────────────────┘
                    │
┌───────────────────▼────────────────────┐
│    CAPA DE PROCESAMIENTO               │
│  • Detección de arritmias              │
│  • Análisis de segmentos               │
│  • Cálculos de parámetros              │
└───────────────────┬────────────────────┘
                    │
┌───────────────────▼────────────────────┐
│      CAPA DE ADQUISICIÓN               │
│  • Driver ECG                          │
│  • Filtrado analógico                  │
│  • Conversión ADC                      │
└───────────────────┬────────────────────┘
                    │
┌───────────────────▼────────────────────┐
│      HARDWARE (SENSORES)               │
│  • Amplificador ECG                    │
│  • Convertidor A/D                     │
│  • Circuito de protección              │
└────────────────────────────────────────┘
```

---

## Especificaciones de Seguridad

### Cumplimiento Normativo

```
CERTIFICACIONES
├─ CE (Europa)
│  └─ Directiva 93/42/CEE (Clase II a)
│
├─ FCC (EE.UU.)
│  └─ Parte 15 (Dispositivos de bajo poder)
│
├─ ISED (Canadá)
│  └─ Equipos de radiofrecuencia
│
├─ HIPAA (EE.UU.)
│  └─ Privacidad y seguridad de datos médicos
│
├─ RGPD (Europa)
│  └─ Protección de datos personales
│
└─ IEC 60601-1 (Seguridad Eléctrica)
   └─ Equipos médicos eléctricos
```

---

**Versión:** 1.5  
**Última actualización:** Enero 2026  
**Próxima revisión:** Julio 2026

Para soporte técnico contacte: soporte@horizon-medical.com
