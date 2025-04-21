// Función para mostrar los datos ingresados
export const mostrarDatos = () => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#libreta").value;

    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
};

// Capturando el evento clic del botón
const boton = document.querySelector("#enviar");
boton.addEventListener("click", mostrarDatos);