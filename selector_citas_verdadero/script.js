const datePicker = document.getElementById('date-picker');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');

// Función para enviar la selección
submitBtn.addEventListener('click', () => {
    const selectedDate = datePicker.value;
    if (!selectedDate) {
        alert("Por favor selecciona una fecha válida.");
        return;
    }

    message.textContent = `¡Fecha seleccionada! ${selectedDate}`;

    // Guardar o enviar fecha a Firebase (opcional)
    if (typeof db !== 'undefined') { // si existe Firebase
        db.collection("citas").add({
            fecha: selectedDate,
            timestamp: new Date()
        })
        .then(() => alert("Tu cita ha sido registrada correctamente."))
        .catch(err => console.error("Error al registrar cita:", err));
    } else {
        console.log("Fecha seleccionada:", selectedDate);
    }
});
