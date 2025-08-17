const startBtn = document.getElementById('start-btn');
const staticVideo = document.getElementById('static-video');
const tvVideo = document.getElementById('tv-video');
const codeInput = document.getElementById('code-input');

// Mostrar la estática al inicio
staticVideo.style.display = 'block';
tvVideo.style.display = 'none';
tvVideo.playsInline = true;

startBtn.addEventListener('click', () => {
    const code = codeInput.value.trim();

    if (code === "1234") {
        // Contraseña correcta: reproducir video secreto
        staticVideo.style.display = 'none';
        tvVideo.style.display = 'block';
        const playPromise = tvVideo.play();
        if (playPromise !== undefined) playPromise.catch(err => console.log(err));

    } else if (code === "12345") {
        // Animación antes de redirigir al cuestionario
        const tvContainer = document.querySelector('.tv-container');
        const controls = document.querySelectorAll('#start-btn, #code-input');

        // Aplicar animación a televisor
        tvContainer.classList.add('zoom-fade');

        // Ocultar botones y input durante la animación
        controls.forEach(el => el.style.display = 'none');

        // Esperar a que termine la animación antes de redirigir
        setTimeout(() => {
            window.location.href = "cuestionario.html";
        }, 1000); // coincide con la duración de la animación

    } else {
        alert("Contraseña incorrecta, inténtalo de nuevo.");
        codeInput.value = "";
    }
});
