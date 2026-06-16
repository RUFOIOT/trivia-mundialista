# ⚽ Trivia Mundialista — Concurso Interactivo

Sistema de trivia en tiempo real para clases y eventos. Diseñado para funcionar en **3 dispositivos simultáneos** usando `localStorage` como canal de comunicación (sin servidor).

---

## 🖥️ Archivos del Sistema

| Archivo | Rol | Dispositivo |
|---|---|---|
| `index.html` | Pantalla de inicio / selector de modo | Cualquiera |
| `dashboard.html` | Control del profesor | PC / proyector |
| `jugador.html?id=A` | iPad Equipo A (rojo) | iPad / tablet |
| `jugador.html?id=B` | iPad Equipo B (azul) | iPad / tablet |

---

## 🚀 Cómo Usar

### 1. Abrir en 3 dispositivos (misma red WiFi)

> **IMPORTANTE:** Los 3 dispositivos deben abrir las URLs desde el **mismo navegador / mismo dominio** para compartir `localStorage`.  
> Si estás en GitHub Pages, todos abren `https://rufoiot.github.io/trivia-mundialista/`.

| Quién | URL |
|---|---|
| 📺 Profesor (proyector) | `/dashboard.html` |
| 🔴 Equipo A | `/jugador.html?id=A` |
| 🔵 Equipo B | `/jugador.html?id=B` |

### 2. Flujo por pregunta

```
Profesor → avanza a la pregunta en Dashboard
         → presiona ▶ Iniciar (cronómetro 30s)

Equipos  → ven la pregunta en su iPad
         → tocan ⚡ ¡YO SÉ! para buzzear

Dashboard → muestra quién buzzeó primero y en qué segundo
          → Profesor califica ✅ Correcto / ❌ Incorrecto

Marcador  → actualiza automáticamente con puntos y racha
```

---

## 🎮 Sistema de Puntuación

| Situación | Puntos |
|---|---|
| Respuesta correcta | +10 pts |
| Racha de 2 correctas seguidas | +15 pts |
| Racha de 3+ correctas seguidas | +20 pts |
| Respuesta incorrecta | 0 pts (rompe racha) |

---

## ⏱️ Timer

- **30 segundos** por pregunta
- Barra visual: verde → amarillo (≤20s) → rojo (≤10s)
- Controles del profesor: **▶ Iniciar** · **↺ Reset** · **■ Parar**
- Los iPads ven el tiempo restante en tiempo real

---

## 📋 Preguntas Incluidas (10 en total)

### Ronda 1 — Preguntas Abiertas (5 preguntas)
El equipo que buzzea primero da su respuesta oralmente. El profesor califica.

1. País con más Copas del Mundo
2. La Mano de Dios — Mundial México 1986
3. Único tricampeón del mundo
4. Campeón Qatar 2022
5. Primer Mundial de Ecuador

### Ronda 2 — Opción Múltiple (5 preguntas)
Los jugadores también pueden seleccionar la opción en su iPad (A/B/C/D).

6. Ciudad final Mundial 2014
7. Máximo goleador histórico de Mundiales
8. Equipos en Qatar 2022
9. País sede del primer Mundial (1930)
10. Nombre oficial del trofeo desde 1974

---

## 🔄 Reset

- Botón **"Resetear concurso"** en `index.html` → limpia todo el `localStorage`
- O desde el navegador: `localStorage.clear()` en la consola

---

## 🛠️ Stack Técnico

- **100% frontend** — HTML + Vanilla JS + CSS
- **Sin servidor** — comunicación vía `localStorage` (mismo origen)
- **Sin dependencias** — solo Google Fonts
- **Responsive** — optimizado para iPad (jugadores) y desktop (dashboard)

---

## 📱 URLs en Vivo

- **Inicio:** https://rufoiot.github.io/trivia-mundialista/
- **Dashboard (Profesor):** https://rufoiot.github.io/trivia-mundialista/dashboard.html
- **Jugador A (Rojo):** https://rufoiot.github.io/trivia-mundialista/jugador.html?id=A
- **Jugador B (Azul):** https://rufoiot.github.io/trivia-mundialista/jugador.html?id=B

---

*Construido con ⚽ para el Hackathon Eight Academy · 2026*
