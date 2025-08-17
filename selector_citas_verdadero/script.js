// Inicializas Firestore
const db = firebase.firestore();

// Cuando el usuario confirma la fecha:
submitBtn.addEventListener('click', () => {
    const selectedDate = datePicker.value;

    // Guardar en Firestore
    db.collection('citas').add({
        fecha: selectedDate,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("Fecha registrada!");
    })
    .catch((error) => {
        console.error("Error al guardar fecha: ", error);
    });
});
