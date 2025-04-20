// ejercicio21.js
//actualisa el texto escripto
const actualizarTexto = (event) => {
    const textoSalida = document.querySelector('#textoSalida');
    textoSalida.textContent = event.target.value;
};

const init = () => {
    const textoInput = document.querySelector('#textoInput');
    textoInput.addEventListener('input', actualizarTexto);
};

window.onload = init;