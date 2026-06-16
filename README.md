# ⚽ Trivia Mundialista — Sistema Multi-Dispositivo

Concurso interactivo de trivia en tiempo real para clases y eventos. Funciona en **3 dispositivos físicos simultáneos** (iPads, tablets, laptops) sincronizados vía **Firebase Realtime Database**.

---

## 🔗 URLs en Vivo

| Rol | URL |
|---|---|
| 🏠 **Inicio** | https://rufoiot.github.io/trivia-mundialista/ |
| 📺 **Dashboard — Profesor** | https://rufoiot.github.io/trivia-mundialista/dashboard.html |
| 🔴 **Jugador A** | https://rufoiot.github.io/trivia-mundialista/jugador.html?id=A |
| 🔵 **Jugador B** | https://rufoiot.github.io/trivia-mundialista/jugador.html?id=B |

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────────────┐
│           Firebase Realtime Database             │
│     trivia-mundialista-82f82-default-rtdb        │
│                                                  │
│  trivia/game/                                    │
│    currentQ     → pregunta activa (0-9)          │
│    timerValue   → segundos restantes (0-30)      │
│    timerRunning → bool                           │
│    buzzA / buzzB → tiempo al buzzear             │
│    winner       → "A" | "B" | null              │
│    ptsA / ptsB  → puntuación                    │
│    streakA/B    → racha                          │
│    revealed     → respuesta visible              │
│    judged       → pregunta calificada            │
└──────────────┬──────────────────────────────────┘
               │  onValue() en tiempo real
   ┌───────────┼───────────┐
   ▼           ▼           ▼
📺 dashboard  🔴 jugador?id=A  🔵 jugador?id=B
(Profesor)    (iPad A)         (iPad B)
```

---

## 📁 Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Pantalla de inicio con selector de modo + reset |
| `dashboard.html` | Panel del profesor: preguntas, timer, buzzer, puntaje, historial |
| `jugador.html` | iPad del jugador — buzzer + opción múltiple + puntaje en vivo |
| `config.js` | Configuración Firebase (proyecto: `trivia-mundialista-82f82`) |

---

## 🎮 Cómo Usar

### 1. Abrir en 3 dispositivos
Cada dispositivo abre su URL. El **punto verde** en la esquina confirma conexión a Firebase.

### 2. Flujo por pregunta

```
1. Profesor avanza la pregunta en el Dashboard
2. Profesor presiona ▶ Iniciar (cuenta regresiva 30s)
3. Equipos ven la pregunta en su iPad
4. El que sabe → toca ⚡ ¡YO SÉ! (buzzer)
5. Dashboard muestra quién buzzeó primero y con cuántos segundos
6. Profesor califica → ✅ Correcto / ❌ Incorrecto
7. Marcador se actualiza en todos los dispositivos
8. Profesor avanza a siguiente pregunta
```

---

## ⏱️ Timer

| Estado | Color |
|---|---|
| 20-30s | 🟡 Amarillo |
| 10-20s | 🟡 Dorado |
| 0-10s | 🔴 Rojo pulsante |

**Controles del profesor:** `▶ Iniciar` · `↺ Reset` · `■ Parar`

---

## 🏆 Puntuación

| Situación | Puntos |
|---|---|
| Respuesta correcta | **+10 pts** |
| Racha de 2 correctas | **+15 pts** |
| Racha de 3+ correctas | **+20 pts** |
| Respuesta incorrecta | 0 pts · rompe racha |

---

## 📋 Preguntas (10 en total)

### Ronda 1 — Preguntas Abiertas
El equipo que buzzea primero responde oralmente. El profesor califica.

| # | Pregunta | Respuesta |
|---|---|---|
| 1 | País con más Copas del Mundo | Brasil (5) |
| 2 | La Mano de Dios — México 1986 | Diego Maradona |
| 3 | Único tricampeón mundial | Pelé |
| 4 | Campeón Qatar 2022 | Argentina |
| 5 | Primer Mundial de Ecuador | Corea-Japón 2002 |

### Ronda 2 — Opción Múltiple
Los jugadores también pueden seleccionar la opción (A/B/C/D) en su iPad.

| # | Pregunta | Respuesta |
|---|---|---|
| 6 | Ciudad final Mundial 2014 | Río de Janeiro |
| 7 | Máximo goleador histórico | Miroslav Klose (16 goles) |
| 8 | Equipos Qatar 2022 | 32 |
| 9 | País sede primer Mundial 1930 | Uruguay |
| 10 | Nombre del trofeo desde 1974 | Trofeo FIFA Copa del Mundo |

---

## 🔄 Reset

Botón **"Resetear concurso"** en `index.html` → limpia todo el estado en Firebase. Útil entre partidas.

---

## 🛠️ Stack Técnico

- **Frontend:** HTML + Vanilla JS + CSS (sin frameworks)
- **Sync:** Firebase Realtime Database (SDK 10.12.0)
- **Hosting:** GitHub Pages (estático)
- **Comunicación:** `onValue()` listeners — push en tiempo real
- **Sin servidor:** 100% frontend, Firebase maneja todo el estado

---

## 🔥 Firebase

- **Proyecto:** `trivia-mundialista-82f82`
- **DB URL:** `https://trivia-mundialista-82f82-default-rtdb.firebaseio.com`
- **Reglas:** modo test (`.read: true`, `.write: true`) — apto para demos
- **Console:** https://console.firebase.google.com/project/trivia-mundialista-82f82

---

## 📱 Compatibilidad

| Dispositivo | Rol recomendado |
|---|---|
| Laptop / proyector | Dashboard (profesor) |
| iPad | Jugador A o B |
| Cualquier smartphone | Jugador A o B |

---

*⚽ Construido para el Hackathon Eight Academy · Junio 2026*
