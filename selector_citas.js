const dialogueText = document.getElementById('dialogue-text');
const nextBtn = document.getElementById('next-btn');
const windAudio = document.getElementById('wind-audio');

// Lista de líneas del diálogo
const dialogueLines = [
    "Felicidades :)",
    "Has superado la prueba",
    "Finalmente podrás reclamar tu recompensa",
    "Para llegar al selector de citas tendrás que aceptar los términos y condiciones",
    "¿Aceptas los términos y condiciones?",
    "¿Segura?",
    "*Descarga automáticamente un PDF super largo con términos y condiciones que hablan sobre vender el alma a Gerard Way*",
    "¿Última palabra?",
    "Muy bien, que así sea..."
];

let index = 0;

// Función para mostrar siguiente línea
function showNextLine() {
    if (index < dialogueLines.length) {
        dialogueText.textContent = dialogueLines[index];

        // Descargar PDF automáticamente en la línea correspondiente
        if (dialogueLines[index].includes("Descarga automáticamente")) {
            const link = document.createElement('a');
            link.href = 'assets/terminos_y_condiciones.pdf'; // tu PDF
            link.download = 'terminos_y_condiciones.pdf';
            link.click();
        }

        index++;
    } else {
        // Redirección al selector de citas verdadero
        window.location.href = "selector_citas_verdadero/index.html";
    }
}

// Primer click en continuar inicia también el audio si el autoplay fue bloqueado
nextBtn.addEventListener('click', () => {
    if (windAudio.paused) {
        windAudio.play().catch(err => console.log(err));
    }
    showNextLine();
});

// Mostrar primera línea automáticamente al cargar
showNextLine();
