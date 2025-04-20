// muestra los datos
const mostrarDatos = (event) => {
    event.preventDefault(); // Evitar el envío del formulario

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const libreta = document.querySelector('#libreta').value;

    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
};

const init = () => {
    const form = document.querySelector('#datosForm');
    form.addEventListener('submit', mostrarDatos);
};

window.onload = init;