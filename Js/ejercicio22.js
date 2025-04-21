// Referencias a los elementos del DOM
const input = document.querySelector("#entrada");
const resultado = document.querySelector("#resultado");

// Función para manejar el evento input
const actualizarTexto = () => {
    const texto = input.value;
    resultado.textContent = texto;

    // Cambiar el fondo si el texto supera los 20 caracteres
    if (texto.length > 20) {
        resultado.style.backgroundColor = "lightcoral";
    } else {
        resultado.style.backgroundColor = "white";
    }
};

// Agregar el evento input al campo de texto
input.addEventListener("input", actualizarTexto);