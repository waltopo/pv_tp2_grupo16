// ejercicio19.js

export function mostrarDatos() {
    const nombre = document.querySelector("#nombre").value.trim();
    const apellido = document.querySelector("#apellido").value.trim();
    const libreta = document.querySelector("#libreta").value.trim();

    const mensaje = `Los datos ingresados son:
Nombre: ${nombre}
Apellido: ${apellido}
Libreta Universitaria: ${libreta}`;

    alert(mensaje);
}

// Agregar el evento al botón cuando el DOM esté completamente cargado
window.onload = () => {
    const btnMostrar = document.querySelector("#btnMostrar");
    btnMostrar.addEventListener("click", mostrarDatos);
};
