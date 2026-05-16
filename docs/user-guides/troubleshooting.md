# 🔧 Guía de Troubleshooting - Horizon Medical

**Versión:** 2.0  
**Última actualización:** Enero 2026  
**Público:** Médicos, técnicos, pacientes, personal clínico

---

## Tabla de Contenidos

1. [Problemas de Dispositivo](#problemas-de-dispositivo)
2. [Problemas de Bluetooth](#problemas-de-bluetooth)
3. [Problemas de Conectividad](#problemas-de-conectividad)
4. [Problemas de Datos y Sincronización](#problemas-de-datos-y-sincronización)
5. [Problemas de App Móvil](#problemas-de-app-móvil)
6. [Problemas de Batería](#problemas-de-batería)
7. [Problemas de Señal ECG](#problemas-de-señal-ecg)
8. [Problemas de Alertas](#problemas-de-alertas)
9. [Problemas del Dashboard Web](#problemas-del-dashboard-web)
10. [Tabla de Códigos de Error](#tabla-de-códigos-de-error)
11. [Cuándo Contactar Soporte](#cuándo-contactar-soporte)

---

## Problemas de Dispositivo

### El Dispositivo No Enciende

#### Diagnóstico Rápido

```
¿El LED rojo parpadea o emite luz?
├─ SÍ → Ir a "Pantalla LCD Negra"
└─ NO → Ir a "Batería Agotada"
```

#### Batería Agotada

**Síntomas:**
- No hay luz en ningún LED
- Pantalla completamente negra
- No responde a botones

**Solución Paso a Paso:**

1. **Conecte el cargador**
   ```
   Cable USB-C → Puerto trasero del dispositivo
   Adaptador 5V → Toma de corriente
   ```

2. **Espere indicación de carga**
   - Debería ver LED rojo parpadeante
   - Espere al menos 5 minutos
   - Si no hay cambio → Problema de puerto

3. **Cargue completamente**
   - Dejar cargar mínimo 60 minutos
   - Verificar que LED es rojo fijo (carga completa)

4. **Intente encender**
   - Deslice interruptor a ON
   - Espere 3-5 segundos
   - Si enciende → Éxito ✓

**Si no funciona:**
- Ir a "Puerto USB No Funciona"

---

#### Pantalla LCD Negra

**Síntomas:**
- LED rojo está encendido/parpadeante
- Pero pantalla no muestra nada

**Solución Paso a Paso:**

1. **Reinicio suave**
   ```
   Apagar → Esperar 20 segundos → Encender
   ```

2. **Si pantalla sigue negra → Reinicio duro**
   ```
   Presionar simultáneamente:
   [◀] + [HOME] + [►] durante 10 segundos
   Soltar y esperar 30 segundos
   Encender nuevamente
   ```

3. **Verificar conexiones**
   - Inspeccione LCD por daño físico
   - Verifique cable de LCD (si es accesible)
   - Reinicie nuevamente

4. **Último intento → Restablecimiento de fábrica**
   ```
   [MENU] → "Sistema" → "Mantenimiento"
   → "Restablecimiento" → Código: 2468
   ```

**Si persiste:**
- Contactar soporte: **Código: E001**

---

#### Dispositivo Se Reinicia Continuamente

**Síntomas:**
- Enciende, muestra pantalla
- Se apaga abruptamente
- Ciclo repetitivo

**Causas y Soluciones:**

| Causa | Síntoma | Solución |
|---|---|---|
| **Software corrupto** | Reinicio cada 10-20 seg | Restablecimiento de fábrica |
| **Temperatura alta** | Reinicio + LED rojo parpadeante | Enfriar a temperatura ambiente |
| **Batería inestable** | Reinicio aleatorio | Cargar y reintentar |
| **Hardware dañado** | Reinicio constante | Servicio técnico requerido |

**Procedimiento:**
1. Apague el dispositivo
2. Déjelo en lugar frío por 30 minutos
3. Cargue completamente
4. Intente reinicio duro (ver arriba)
5. Si no funciona → Contactar soporte

---

### Dispositivo Se Apaga Solo

#### Apagado Automático Normal
Algunos apagados son esperados:
- ✓ Después de 2 horas sin actividad
- ✓ Cuando batería < 3%
- ✓ Si se detecta mal funcionamiento

#### Apagado Anómalo

**Si se apaga mientras está en uso:**

1. **Verificar batería**
   - ¿LED verde está rojo intermitente? → Cargue
   - ¿Batería muestra < 10%? → Cargue

2. **Verificar temperatura**
   - ¿Dispositivo se siente muy caliente?
   - Aléjelo del calor, deje enfriar 30 minutos

3. **Verificar software**
   - Reinicio duro: [◀] + [HOME] + [►] × 10 seg
   - Restablecimiento de fábrica si persiste

4. **Si sigue apagándose**
   - Puede haber problema hardware
   - Contactar servicio técnico
   - Código: **E004** (temperatura) o **E005** (batería)

---

### Botones de Control No Responden

**Síntomas:**
- Presionar botones no tiene efecto
- LED parpadea pero interfaz no responde

**Solución Paso a Paso:**

1. **Límpieza de contactos**
   ```
   Apagar dispositivo
   Usar hisopo con alcohol 70%
   Limpiar alrededor de botones
   Dejar secar 5 minutos
   Encender y probar
   ```

2. **Reinicio de software**
   ```
   [◀] + [HOME] + [►] × 10 segundos
   (Reinicio duro)
   ```

3. **Restablecimiento de fábrica**
   ```
   Si reinicio no funciona
   [MENU] → "Sistema" → Restablecer → 2468
   ```

4. **Problema físico**
   - Si botones están dañados/pegados
   - Inspeccionar visualmente
   - Contactar servicio técnico

---

## Problemas de Bluetooth

### Dispositivo No Aparece en Búsqueda Bluetooth

#### Diagnóstico

```
¿El Holter tiene LED amarillo parpadeante?
├─ SÍ → Ir a "Modo de Emparejamiento No Activo"
└─ NO → Ir a "Dispositivo No en Modo de Emparejamiento"
```

#### Dispositivo No en Modo de Emparejamiento

**Solución:**

1. **En el Holter:**
   ```
   [MENU] → "Conectividad" → "Emparejamiento BLE"
   [HOME] para activar
   Esperar LED parpadeo azul/blanco
   (Válido por 3 minutos)
   ```

2. **En el teléfono:**
   ```
   Configuración → Bluetooth → "Buscar dispositivos"
   Debería aparecer: "HM-XXXXXX"
   (Donde XXXXXX es número de serie)
   ```

3. **Si no aparece → Reiniciar Bluetooth**
   ```
   Apagar Bluetooth en teléfono (10 segundos)
   Encender nuevamente
   Repetir búsqueda
   ```

---

#### Modo de Emparejamiento No Activo

**Solución:**

1. **Verificar que está en modo correcto**
   ```
   En el Holter: Pantalla debe mostrar
   "Modo de Emparejamiento Activo"
   LED parpadea alternadamente (azul ↔ blanco)
   ```

2. **Timeout de emparejamiento**
   - El modo dura solo 3 minutos
   - Si expiró, repita desde el inicio
   - Vea "Dispositivo No en Modo de Emparejamiento"

3. **Interferencia Bluetooth**
   - Aléjese de routers WiFi
   - Apague otros dispositivos Bluetooth cercanos
   - Reduzca distancia a menos de 1 metro

---

### Conexión Bluetooth Intermitente

**Síntomas:**
- Conecta y desconecta repetidamente
- LED parpadea verde/rojo alternativamente
- App muestra "Desconectado" frecuentemente

**Diagnóstico y Solución:**

#### Paso 1: Verificar Distancia
```
Distancia Recomendada: < 5 metros
Obstáculos a Evitar:
├─ Paredes de concreto/metal
├─ Espesores de pared > 30 cm
├─ Pisos de construcción densa
└─ Agua (cuerpos de agua)

Acción: Acérquese al dispositivo
```

#### Paso 2: Eliminar Interferencias
```
Interferencias Comunes (2.4 GHz):
├─ Routers WiFi
├─ Microondas
├─ Teléfonos inalámbricos
├─ Cámaras de seguridad inalámbricas
└─ Otros dispositivos BLE

Acción: Aléjese de estas fuentes
```

#### Paso 3: Reemparejamiento Completo
```
1. Olvide el dispositivo en teléfono
   Configuración → Bluetooth → HM-XXXX
   → Presionar "Olvidar"

2. Apague Bluetooth en teléfono (30 segundos)
3. Apague Holter (interruptor OFF, 30 segundos)
4. Encienda Holter (LED amarillo parpadeante)
5. Encienda Bluetooth en teléfono
6. Busque "HM-XXXX" nuevamente
7. Complete emparejamiento
```

#### Paso 4: Actualizar Software
```
Si el problema persiste:
• Verificar si hay actualización disponible
• App Horizon → Configuración → "Actualizar"
• Seguir instrucciones en pantalla
```

---

### Pérdida Frecuente de Conexión

**Síntomas:**
- Desconexión cada 5-15 minutos
- App muestra "Desconectado"
- LEDs intermitentes

**Causa Probable: Batería Baja**

1. **Verificar nivel de batería**
   - ¿LED verde es rojo intermitente?
   - ¿Pantalla muestra < 30%?

2. **Cargar dispositivo**
   ```
   Cable USB-C + Adaptador
   Cargar hasta 100%
   Esperar 10 minutos después de carga
   Reconectar
   ```

3. **Si no es batería**
   - Problemaestructural de hardware
   - Contactar soporte
   - Código: **E003**

---

## Problemas de Conectividad

### Dashboard Web No Se Carga

**Síntomas:**
- Página en blanco
- Error "No se puede conectar"
- Carga infinita

#### Verificación de Internet

1. **Probar conexión general**
   ```
   Abrir otra página (google.com)
   ¿Carga correctamente?
   ├─ SÍ → Ir a "Problema Específico de Horizon"
   └─ NO → Problema de Internet (resolver primero)
   ```

2. **Si es problema general de Internet**
   - Reiniciar router WiFi (30 segundos)
   - Reiniciar computadora
   - Contactar ISP si persiste

#### Problema Específico de Horizon

1. **Borrar caché del navegador**
   ```
   Chrome: Ctrl+Shift+Delete → Borrar historial
   Firefox: Ctrl+Shift+Delete → Seleccionar todo
   Safari: Menú → Historial → Borrar historial
   ```

2. **Probar navegador diferente**
   - ¿Funciona en Chrome pero no en Safari?
   - Problema de compatibilidad de navegador
   - Usar navegador recomendado

3. **Verificar credenciales**
   ```
   ¿Sesión expirada?
   → Cerrar sesión completamente
   → Limpiar cookies
   → Volver a iniciar sesión
   ```

4. **Status de Servidor**
   - Visitar: status.horizon-medical.com
   - ¿Hay problemas reportados?
   - Si hay mantenimiento, espere

---

### Carga de Datos Muy Lenta

**Síntomas:**
- Datos se sincronizan en minutos (debería ser segundos)
- Gráficos cargan lentamente
- Reportes tardan más de 5 minutos

**Diagnóstico:**

1. **Verificar conexión de Internet**
   ```
   Ejecutar speedtest: speedtest.net
   ¿Velocidad >= 5 Mbps?
   ├─ NO → Mejorar conexión de Internet
   └─ SÍ → Ir a "Problema de la App"
   ```

2. **Verificar carga del servidor**
   - Intentar durante horas de menor uso
   - Mañana temprano o madrugada
   - Si funciona mejor → Problema de congestión

3. **Limpiar caché local**
   ```
   App Móvil:
   Configuración → Almacenamiento → Limpiar caché
   
   Web:
   [F12] (Inspector) → Red → Borrar caché
   ```

---

## Problemas de Datos y Sincronización

### Datos No Se Sincronizan

**Síntomas:**
- App muestra "Sincronización fallida"
- Datos de horas atrás no aparecen
- Gráficos se quedan congelados

#### Verificación de Conexión

```
Árbol de decisión:
¿Holter está conectado por Bluetooth?
├─ NO → Reconectar (ver sección Bluetooth)
└─ SÍ ¿App tiene conectividad a Internet?
   ├─ NO → Conectar WiFi o datos móviles
   └─ SÍ ¿Batería del Holter > 10%?
      ├─ NO → Cargar dispositivo
      └─ SÍ → Ir a "Sincronización Bloqueada"
```

#### Sincronización Bloqueada

**Solución Paso a Paso:**

1. **Forzar sincronización manual**
   ```
   App Móvil: Deslizar hacia abajo en pantalla principal
   Web: Botón "Sincronizar Ahora"
   Esperar 30-60 segundos
   ```

2. **Reiniciar la app**
   ```
   Cerrar completamente la app
   Esperar 20 segundos
   Volver a abrir
   Intentar sincronización nuevamente
   ```

3. **Desconectar y reconectar**
   ```
   App: Configuración → "Desconectar Dispositivo"
   Esperar 30 segundos
   Volver a emparejar (ver sección Bluetooth)
   ```

4. **Reiniciar dispositivos**
   ```
   Apagar teléfono (30 segundos)
   Apagar Holter (30 segundos)
   Encender en orden: Holter primero, luego teléfono
   Esperar conexión automática
   ```

---

### Datos Duplicados o Corruptos

**Síntomas:**
- Gráfico muestra saltos o anomalías
- Mismos datos aparecen múltiples veces
- Reportes muestran inconsistencias

**Causa Probable: Error de sincronización**

1. **Verificar integridad de datos**
   ```
   Web Dashboard: "Sesiones" → Seleccionar sesión
   Presionar: "Verificar Integridad"
   Esperar resultado (puede tomar minutos)
   ```

2. **Si hay errores detectados**
   ```
   Opción A: Resincronizar desde dispositivo
   Opción B: Descargar datos crudos desde Holter
   Opción C: Contactar soporte con número de sesión
   ```

3. **Prevenir en futuro**
   - Sincronizar frecuentemente (cada 2 horas)
   - No apagar app mientras se sincroniza
   - Mantener batería > 20% siempre

---

## Problemas de App Móvil

### App Se Congela o Cierra de Repente

**Síntomas:**
- La app se detiene respondiendo
- Botones no responden
- App cierra sin advertencia

**Solución Inmediata:**

1. **Forzar cierre**
   ```
   iPhone: Deslice hacia arriba desde abajo de pantalla
           Encontre Horizon Medical
           Deslice hacia arriba
           
   Android: Presione botón "Recientes"
           Deslice Horizon Medical hacia arriba
   ```

2. **Reiniciar la app**
   - Espere 30 segundos
   - Toque el ícono nuevamente
   - Intente la acción que causó cierre

3. **Reiniciar teléfono**
   ```
   Apagar completamente
   Esperar 30 segundos
   Encender
   Abrir app nuevamente
   ```

#### Solución Permanente

1. **Actualizar app**
   ```
   App Store (iOS) o Google Play (Android)
   Presionar "Actualizar"
   Esperar descarga e instalación
   ```

2. **Desinstalar y reinstalar**
   ```
   iOS: Mantener presionado ícono → Desinstalar
   Android: Presionar ícono → Información → Desinstalar
   
   Esperar 5 minutos
   
   iOS: App Store → Buscar → Descargar
   Android: Google Play → Buscar → Instalar
   ```

3. **Liberar espacio en dispositivo**
   ```
   ¿Almacenamiento < 500 MB libre?
   → Borrar fotos/videos antiguos
   → Limpiar caché de otras apps
   → Reintentar Horizon Medical
   ```

---

### Notificaciones No Llegan

**Síntomas:**
- Alertas críticas no aparecen
- Sin sonido ni vibración
- No hay badge de contador

**Verificación de Permisos:**

1. **En teléfono (Configuración)**
   ```
   iOS:
   Configuración → Notificaciones
   Buscar Horizon Medical
   ✓ Permitir Notificaciones
   ✓ Sonidos
   ✓ Insignias
   ✓ Alertas en pantalla de bloqueo
   
   Android:
   Configuración → Aplicaciones → Horizon Medical
   Presionar "Permisos"
   ✓ Notificaciones
   ```

2. **Verificar "No Molestar"**
   ```
   ¿Está activado "No Molestar"?
   → Desactivar o adicionar excepciones
   → En excepciones, agregar Horizon Medical
   ```

3. **Verificar en app**
   ```
   Horizon Medical:
   Configuración → Notificaciones
   ✓ Habilitar notificaciones
   ✓ Alertas críticas
   ✓ Sonido habilitado
   ```

4. **Prueba de notificación**
   ```
   Configuración → Notificaciones → "Test"
   ¿Recibe notificación?
   ├─ SÍ → Problema de alertas específicas
   └─ NO → Problema de permisos, reintentar paso 1
   ```

---

### Login No Funciona

**Síntomas:**
- Pantalla de login se queda cargando
- Error "Credenciales inválidas"
- No se puede recuperar contraseña

**Solución Paso a Paso:**

1. **Verificar credenciales**
   ```
   ¿Está escribiendo bien el email?
   ¿Tiene mayúsculas/minúsculas correctas?
   
   Contraseña: ¿Tiene espacios accidentales?
   
   Usar: "Copiar/Pegar" si es posible
   ```

2. **Si olvidó contraseña**
   ```
   En login: "¿Olvidó su contraseña?"
   Ingresar email
   Revisar correo (incluir carpeta SPAM)
   Presionar enlace "Restablecer"
   Crear nueva contraseña
   ```

3. **Si email no llega**
   ```
   Esperar 5 minutos (puede ser lento)
   Revisar carpeta SPAM/Basura
   Presionar "Reenviar email"
   Si sigue sin llegar → Contactar soporte
   ```

4. **Borrar datos de login almacenados**
   ```
   iOS: Configuración → Contrasseñas → Horizon Medical
        Presionar X para eliminar
        
   Android: Configuración → Apps → Horizon Medical
           → Almacenamiento → Borrar datos
   ```

5. **Probar en web**
   ```
   Abrir navegador
   Ir a: dashboard.horizon-medical.com
   Intentar login
   ¿Funciona en web pero no en app?
   → Problema de app, reinstalar
   ```

---

## Problemas de Batería

### Batería No Carga

**Síntomas:**
- LED no muestra rojo parpadeante
- Pantalla sin cambios después de 10 minutos
- Dispositivo se apaga a los minutos

#### Diagnóstico

1. **Verificar adaptador**
   ```
   ¿El adaptador está en corriente?
   ¿LED de adaptador está encendido?
   ¿Cable está completamente insertado?
   ```

2. **Verificar puerto USB**
   ```
   Desconectar cable
   Usar linterna para inspeccionar puerto
   ¿Hay polvo o suciedad?
   → Limpiar con hisopo suave
   ```

3. **Probar cable diferente**
   ```
   ¿Tiene otro cable USB-C disponible?
   → Intentar con cable diferente
   ¿Carga con nuevo cable?
   ├─ SÍ → Cable original está dañado
   └─ NO → Puerto o batería dañados
   ```

#### Solución

**Si es cable dañado:**
- Contactar con kit de reemplazo
- Solicitar nuevos cables
- Código de referencia: **BATTERY**

**Si es puerto dañado:**
- No intentar reparar
- Contactar servicio técnico
- Envío para reparación

---

### Batería Se Descarga Muy Rápido

**Síntomas:**
- Batería cae 5-10% por hora (debería ser 1-2%)
- No llega ni a 24 horas
- LED verde parpadeante rápido

#### Diagnóstico

```
¿Qué está haciendo?
├─ Sincronización continua → Reducir frecuencia
├─ Pantalla siempre encendida → Reducir brillo
├─ Modo análisis activo → Desactivar si no necesario
└─ Nada especial → Problema de batería
```

#### Solución Según Causa

**Si es sincronización frecuente:**
```
App → Configuración → Sincronización
Cambiar de:
  Cada 30 segundos
A:
  Cada 5 minutos
Resultado: Batería dura 40% más
```

**Si es análisis en tiempo real:**
```
Dispositivo: [MENU] → Configuración
Cambiar:
  Análisis en tiempo real: ON
A:
  Análisis en tiempo real: OFF
Resultado: Batería dura 30% más
```

**Si nada ayuda:**
```
Batería posiblemente degradada
Vida útil típica de batería: 2-3 años
Contactar para reemplazo: Código **E005**
```

---

## Problemas de Señal ECG

### Señal ECG Muy Ruidosa

**Síntomas:**
- Gráfico se ve "dentado" o con mucho ruido
- Difícil de leer el ritmo
- Línea de base inestable

#### Causas Comunes

| Causa | Indicador | Solución |
|---|---|---|
| **Electrodo suelto** | Ruido en aumento | Verificar contacto electrodo |
| **Sudor excesivo** | Ruido con movimiento | Secar piel, cambiar electrodo |
| **Movimiento** | Ruido durante actividad | Permanecer quieto 1 minuto |
| **Interferencia EM** | Ruido en 50/60 Hz | Alejar de WiFi, microondas |
| **Contacto pobre** | Ruido constante | Colocar nuevo electrodo |

#### Pasos de Solución

1. **Verificar electrodos**
   ```
   Inspeccionar visualmente
   ¿Están pegados completamente?
   ¿Se ven levantados en los bordes?
   
   Solución: Presionar suavemente en bordes
            o colocar nuevo electrodo
   ```

2. **Limpiar piel**
   ```
   Haber sudado recientemente?
   → Secar con toalla
   → Esperar 5 minutos
   → Señal debe mejorar
   ```

3. **Reducir movimiento**
   ```
   Muy activo?
   → Permanezca quieto 1 minuto
   → Monitoree la señal
   → Debería volverse clara
   ```

4. **Alejar de interferencias**
   ```
   Cerca de WiFi, microondas, etc?
   → Moverse al menos 2 metros
   → Señal debe mejorar
   ```

---

### Falta de Señal en una Derivación

**Síntomas:**
- Una o más derivaciones muestran línea plana
- El resto de derivaciones ven bien
- Afecta a V1, V2, etc.

**Causa:** Electrodo desconectado

**Solución:**

1. **Localizar el electrodo**
   - Usar tabla de colores de derivaciones
   - V1 = Blanco, V2 = Gris, etc.
   - ¿Está completamente pegado?

2. **Verificar conexión**
   ```
   Seguir cable desde electrodo hasta dispositivo
   ¿Conector está firme en puerto?
   ¿Hay oxidación en el contacto?
   
   Solución: Presionar conector firme
   ```

3. **Reemplazar electrodo**
   ```
   Si electrodo está suelto:
   1. Remover electrodo completo
   2. Limpiar piel con alcohol
   3. Dejar secar
   4. Colocar nuevo electrodo
   5. Reconectar conector
   6. Esperar 1 minuto para lectura estable
   ```

---

### ECG Presenta Artefactos o Picos

**Síntomas:**
- Picos anormales aleatorios
- Señal distorsionada periódicamente
- Dificulta el análisis automático

#### Causas

| Tipo de Artefacto | Causa | Solución |
|---|---|---|
| **Picos aislados** | Movimiento muscular | Relajarse |
| **Patrón repetitivo** | Electrodo suelto | Reajustar electrodo |
| **Línea base inestable** | Respiración profunda | Respirar normalmente |
| **Ruido de frecuencia** | Interferencia de corriente | Alejar de líneas eléctricas |

**Solución General:**
1. Identificar tipo de artefacto
2. Buscar causa en tabla anterior
3. Aplicar solución correspondiente
4. Esperar 30 segundos a que se estabilice

---

## Problemas de Alertas

### Alertas Críticas Falsas

**Síntomas:**
- Alertas de "Fibrilación Auricular" pero ritmo normal
- Alarma de "Bradicardia" sin síntomas
- Múltiples alertas incorrectas

#### Verificación

1. **Ver grabación de ECG del momento**
   ```
   Web Dashboard → Alertas → Seleccionar alerta
   → "Ver en momento de alerta"
   ¿El ECG realmente muestra FA?
   ├─ SÍ → Alerta correcta
   └─ NO → Falsa alerta
   ```

2. **Revisar parámetros configurados**
   ```
   Configuración → Umbrales de Alertas
   ¿Son muy sensibles?
   ├─ FC Máxima: 130 (puede ser muy bajo)
   ├─ FC Mínima: 50 (puede ser muy alto)
   └─ Ajustar según clínica del paciente
   ```

3. **Revisar medicamentos**
   ```
   ¿Paciente tomó nuevo medicamento?
   ¿Cambió dosis de medicamento?
   
   Algunos medicamentos causan cambios en:
   • Frecuencia cardíaca
   • Conducción AV
   • Repolarización
   
   Considerar como cambio clínico, no falso positivo
   ```

#### Prevenir Falsas Alertas

1. **Ajustar umbrales** (si son muy sensitivos)
   ```
   Ir a Configuración → Alertas
   Aumentar ligeramente los umbrales
   Volver a probar sesión
   ```

2. **Desactivar alertas no necesarias**
   ```
   ¿Paciente tiene historia de extrasístoles?
   → Desactivar alerta de extrasístoles
   
   ¿Paciente taquicárdico conocido?
   → Aumentar umbral de taquicardia
   ```

3. **Revisar después de cada sesión**
   ```
   ¿Muchas falsas alarmas?
   → Solicitar ajuste de parámetros
   → Considerar que paciente no sea candidato
   ```

---

### No Recibe Alertas Importantes

**Síntoma:** Dispositivo detectó evento importante pero no recibió alerta

#### Verificación

1. **Confirmar que alerta fue generada**
   ```
   Web Dashboard → Alertas → Filtrar por fecha
   ¿Está el evento en la lista?
   ├─ SÍ → Problema de notificación
   └─ NO → Problema de detección
   ```

2. **Si es problema de detección**
   ```
   → Ver sección "Problemas de Señal ECG"
   → Verificar parámetros de detección
   ```

3. **Si es problema de notificación**
   ```
   → Ver sección "Notificaciones No Llegan"
   ```

---

## Problemas del Dashboard Web

### Gráficos No Cargan

**Síntomas:**
- Área de gráfico está vacía
- Spinner girando infinitamente
- Botones deshabilitados

**Solución Paso a Paso:**

1. **Refrescar página**
   ```
   F5 o Ctrl+R
   Esperar 10 segundos
   ¿Carga ahora?
   ```

2. **Borrar caché**
   ```
   F12 (Inspector) → Red → Checkbox "Deshabilitar caché"
   Refrescar página (Ctrl+R)
   Esperar carga completa
   ```

3. **Probar navegador diferente**
   ```
   ¿Chrome muestra problema?
   → Probar Firefox o Safari
   ¿Funciona en otro navegador?
   ├─ SÍ → Problema de compatibilidad
   └─ NO → Problema del servidor
   ```

4. **Verificar datos disponibles**
   ```
   ¿La sesión tiene datos?
   Ir a: Dashboard → Sesiones → Seleccionar
   
   "Tamaño de datos: 0 MB"?
   → Sesión puede estar vacía o corrupta
   ```

---

### Reportes No se Generan

**Síntomas:**
- Presiona "Generar" pero nada sucede
- Barra de progreso se queda congelada
- Mensaje de error "Timeout"

#### Solución

1. **Esperar más tiempo**
   ```
   Reportes grandes pueden tardar 2-5 minutos
   Espere al menos 2 minutos antes de asumir error
   ```

2. **Verificar datos de sesión**
   ```
   ¿Sesión tiene al menos 1 hora de datos?
   ¿Datos son de buen calidad (< 5% ruido)?
   
   Si no → Sesión puede ser insuficiente
   ```

3. **Intentar con parámetros mínimos**
   ```
   Tipo: Resumen (no Completo)
   Formato: PDF (no EDF)
   Presionar "Generar"
   Si funciona → Problema con parámetros complejos
   ```

4. **Si sigue sin funcionar**
   ```
   Número de sesión: [Anotar]
   Email: [Registrar]
   Hora: [Registrar]
   Contactar soporte con esta información
   Código: **E020**
   ```

---

### Dashboard Muestra Datos Incorrectos

**Síntomas:**
- FC muestra valores imposibles (1000 bpm)
- Fechas incorrectas
- Datos de otro paciente

**Verificación:**

1. **Refrescar datos**
   ```
   Botón "Sincronizar Ahora"
   Esperar 30 segundos
   ¿Se corrigen los datos?
   ```

2. **Verificar sesión correcta**
   ```
   ¿Está mirando la sesión correcta?
   Confirmar:
   • Nombre del paciente correcto
   • Fecha correcta
   • Hora de inicio correcta
   ```

3. **Borrar caché local**
   ```
   F12 → Aplicación → Almacenamiento local
   → Buscar "horizon_medical"
   → Eliminar
   Refrescar página
   ```

4. **Si persiste**
   ```
   Código de integridad: [Anotar]
   Contactar soporte
   Código: **E020** (Corrupción de datos)
   ```

---

## Tabla de Códigos de Error

### Códigos de Error del Dispositivo

```
┌─────────┬──────────────────────┬─────────────────────┐
│ CÓDIGO  │ SIGNIFICADO           │ ACCIÓN RECOMENDADA  │
├─────────┼──────────────────────┼─────────────────────┤
│ E001    │ Fallo de memoria      │ Reinicio duro       │
│ E002    │ Sensor ECG falla      │ Verificar electrodos│
│ E003    │ Fallo de Bluetooth    │ Reemparejar        │
│ E004    │ Temperatura crítica   │ Enfriar 30 minutos  │
│ E005    │ Batería crítica       │ Cargar ahora        │
│ E010    │ Fallo de reloj        │ Sincronizar        │
│ E020    │ Corrupción de datos   │ Contactar soporte   │
│ E098    │ Error desconocido     │ Reinicio duro       │
└─────────┴──────────────────────┴─────────────────────┘
```

---

## Cuándo Contactar Soporte

### Contacto Inmediato (Emergencia Médica)

**Si el paciente experimenta:**
- 💔 Dolor torácico severo
- 😤 Dificultad para respirar
- 🌀 Mareos severos o desmayos
- 💓 Palpitaciones incontrolables

**ACCIÓN:**
- ☎️ **Llamar 112 (Emergencias)**
- No espere asistencia técnica
- Problema médico, no técnico

---

### Contacto Urgente (< 2 horas)

**Problemastécnicos que impiden monitoreo:**
- Dispositivo completamente no funcional
- No puede conectar después de 30 minutos
- Electrodo completamente despegado
- Signos de fallo hardware

**CONTACTO:**
- 📞 +34-900-HORIZON (Línea urgencias)
- 💬 Chat urgente en app
- Proporcionar: Código sesión, modelo dispositivo

---

### Contacto Estándar (24-48 horas)

**Problemas operacionales:**
- Preguntas sobre cómo usar
- Problemas leves de conectividad
- Solicitudes de información
- Problemas del software

**CONTACTO:**
- 📧 soporte@horizon-medical.com
- 💬 Chat en horario laboral
- 🌐 help.horizon-medical.com

---

### Información a Proporcionar

**Siempre incluya:**
```
□ Código de sesión: [XXXX-XXXX]
□ Modelo del dispositivo: [HM-XXX]
□ Número de serie: [Ej: A1B2C3D4]
□ Tipo de problema: [Descripción breve]
□ Pasos tomados: [Lo que ya intentó]
□ Código de error: [Si aplica]
□ Captura de pantalla: [Si es visual]
□ Logs si tiene: [Archivo de diagnóstico]
```

---

**Versión:** 2.0  
**Última actualización:** Enero 2026  
**Próxima revisión:** Julio 2026

Para más soporte: support@horizon-medical.com
