// Establecer la fecha de la boda
const fechaBoda = new Date("May 11, 2024 00:00:00").getTime();

// Actualizar el contador cada segundo
let intervalo = setInterval(function() {

    // Obtener la fecha y hora actuales
    let ahora = new Date().getTime();

    // Encontrar la distancia entre ahora y la fecha de la boda
    let distancia = fechaBoda - ahora;

    // Cálculos de tiempo para días, horas, minutos y segundos
    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostrar resultado en los elementos respectivos
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    // Si la cuenta regresiva termina, escribir algún texto 
    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "¡Ya nos casamos!";
    }
}, 1000);
