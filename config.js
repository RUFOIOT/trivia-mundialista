// ═══════════════════════════════════════════════════════════
//  TRIVIA MUNDIALISTA — Firebase Config
//
//  SETUP (2 minutos):
//  1. Ve a https://console.firebase.google.com
//  2. "Crear proyecto" → desactiva Analytics → Crear
//  3. En el menú izq: Build → Realtime Database → Create Database
//     → Elige región us-central1 → "Start in test mode" → Enable
//  4. Ve a Project Settings (⚙️) → General → Your apps
//     → Web (</>)  → Registra la app → Copia la config
//  5. Pega los valores abajo, guarda y re-despliega al repo
// ═══════════════════════════════════════════════════════════

window.FIREBASE_CONFIG = {
  apiKey:            "TU_API_KEY",
  authDomain:        "TU-PROYECTO.firebaseapp.com",
  databaseURL:       "https://TU-PROYECTO-default-rtdb.firebaseio.com",
  projectId:         "TU-PROYECTO",
  storageBucket:     "TU-PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId:             "TU_APP_ID"
};
