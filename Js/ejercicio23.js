// ejercicio18.js

const buttons = document.querySelectorAll('.button-container button');
const messageDiv = document.getElementById('message');

// Objeto con los mensajes según el botón
const mensajes = {
    'btn-html': 'Lenguajes de marcado',
    'btn-css': 'Lenguajes de estilo',
    'btn-js': 'Lenguajes de programación'
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const msg = mensajes[button.id] || '';
        messageDiv.textContent = msg;
        console.log(`Botón seleccionado: ${button.textContent} - Mensaje: ${msg}`);
    });
});
