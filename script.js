const startBtn = document.getElementById('start-btn');
const staticVideo = document.getElementById('static-video');
const tvVideo = document.getElementById('tv-video');
const codeInput = document.getElementById('code-input');

// Mostrar la estática al inicio
staticVideo.style.display = 'block';
tvVideo.style.display = 'none';
tvVideo.playsInline = true;

startBtn.addEventListener('click', () => {
    const code = codeInput.value.trim(); // tomo lo que escribió la persona
    if (code === "1234") { // <-- aquí tu contraseña
        // Contraseña correcta, reproducir video
        staticVideo.style.display = 'none';
        tvVideo.style.display = 'block';
        const playPromise = tvVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("No se pudo reproducir automáticamente:", error);
            });
        }
    } else {
        // Contraseña incorrecta
        alert("Contraseña incorrecta, inténtalo de nuevo.");
        codeInput.value = ""; // opcional, para limpiar el input
    }
});
