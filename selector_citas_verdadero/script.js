// script.js
import { initializeApp } from "./firebase-config.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Inicializar Firestore
const db = getFirestore(initializeApp);

// Elementos del DOM
const datePicker = document.getElementById("date-picker");
const submitBtn = document.getElementById("submit-btn");
const messageDiv = document.getElementById("message");
const calmAudio = document.getElementById("calm-audio");

// Reproducir audio al entrar
calmAudio.play().catch(err => console.log("Error al reproducir audio:", err));

// Limitar fechas
const minDate = new Date("2025-08-21");
datePicker.min = minDate.toISOString().split("T")[0];

// Función para guardar la fecha
async function guardarFecha(fecha) {
  try {
    const docRef = await addDoc(collection(db, "citas"), {
      fecha: fecha,
      timestamp: new Date()
    });
    console.log("Fecha registrada con ID:", docRef.id);
    messageDiv.innerText = `¡Fecha registrada! ID: ${docRef.id}`;
  } catch (e) {
    console.error("Error guardando la fecha:", e);
    messageDiv.innerText = "Error al registrar la fecha. Intenta de nuevo.";
  }
}

// Función para validar y enviar la fecha
submitBtn.addEventListener("click", () => {
  const fechaSeleccionada = datePicker.value;
  if (!fechaSeleccionada) {
    alert("Por favor selecciona una fecha válida.");
    return;
  }

  const fechaDate = new Date(fechaSeleccionada);
  if (fechaDate < minDate) {
    alert("La fecha debe ser posterior al miércoles 20 de agosto de 2025.");
    return;
  }

  guardarFecha(fechaSeleccionada);
});

// Escuchar cambios en la colección de citas (para recibir notificación)
const citasCol = collection(db, "citas");
onSnapshot(citasCol, (snapshot) => {
  snapshot.docChanges().forEach(change => {
    if (change.type === "added") {
      console.log("Nueva cita registrada:", change.doc.data());
      // Aquí puedes agregar notificaciones o alert para ti
    }
  });
});
