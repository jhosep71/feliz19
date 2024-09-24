 // Animación de corazones aleatorios
 const contenedorCorazones = document.body;
 setInterval(() => {
     const corazon = document.createElement('div');
     corazon.classList.add('corazon');
     corazon.innerHTML = '💖';
     corazon.style.left = Math.random() * 100 + 'vw';
     corazon.style.animationDuration = Math.random() * 5 + 5 + 's';
     contenedorCorazones.appendChild(corazon);

     setTimeout(() => corazon.remove(), 10000);
 }, 500);




 document.addEventListener("DOMContentLoaded", () => {
    // Muestra las líneas de texto secuencialmente
    const lineas = document.querySelectorAll('.linea');
    lineas.forEach((linea, index) => {
        setTimeout(() => {
            linea.style.display = 'block'; // Muestra la línea
            linea.style.animationDelay = '0s'; // Reinicia la animación
        }, index * 2000); // Retraso de 3 segundos entre cada línea
    });
});
