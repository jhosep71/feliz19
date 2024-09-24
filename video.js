// Volver al menú
function volverAlHome() {
    window.location.href = 'home.html'; // Cambia 'home.html' al nombre de tu archivo principal
}

// Al cargar la página, el video estará pausado
window.onload = function() {
    const video = document.getElementById('miVideo');
    video.pause(); // Asegúrate de que el video esté pausado al cargar
};

// Reproducir video
function reproducirVideo() {
    const video = document.getElementById('miVideo');
    video.play(); // Reproduce el video
}

// Pausar video
function pausarVideo() {
    const video = document.getElementById('miVideo');
    video.pause(); // Pausa el video
}
