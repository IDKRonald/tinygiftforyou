const submitBtn = document.getElementById("submit-btn");
const datePicker = document.getElementById("date-picker");
const messageDiv = document.getElementById("message");

submitBtn.addEventListener("click", async () => {
  const selectedDate = datePicker.value;

  if (!selectedDate) {
    alert("Por favor selecciona una fecha.");
    return;
  }

  try {
    await db.collection("citas").add({
      fecha: selectedDate,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    messageDiv.innerText = "Fecha registrada correctamente!";
    alert("¡Tu cita ha sido registrada!");
  } catch (error) {
    console.error("Error guardando la fecha:", error);
    alert("Ocurrió un error, revisa la consola.");
  }
});
