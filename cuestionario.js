const form = document.getElementById('quiz-form');

// Aquí defines las respuestas correctas
const respuestas = {
    q1: "rojo",
    q2: "medellin",
    q3: "lobo"
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let todasCorrectas = true;

    for (let [key, value] of formData.entries()) {
        if (value.trim().toLowerCase() !== respuestas[key]) {
            todasCorrectas = false;
            break;
        }
    }

    if (todasCorrectas) {
        alert("¡Correcto! Serás llevado al selector de citas...");
        window.location.href = "selector_citas.html"; // Página del premio
    } else {
        alert("¡Algo está mal! Intenta de nuevo.");
    }
});
