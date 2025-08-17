import { db, collection, addDoc } from "./firebase-config.js";

const datePicker = document.getElementById('date-picker');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');

submitBtn.addEventListener('click', async () => {
    const selectedDate = datePicker.value;

    if (!selectedDate) {
        alert("Por favor selecciona una fecha válida.");
        return;
    }

    message.textContent = `¡Fecha seleccionada! ${selectedDate}`;

    try {
        // Guardar la fecha en Firestore
        await addDoc(collection(db, "citas"), {
            fecha: selectedDate,
            timestamp: new Date()
        });
        alert("Tu cita ha sido registrada correctamente.");
    } catch (err) {
        console.error("Error al registrar cita:", err);
        alert("Hubo un error al registrar tu cita.");
    }
});
