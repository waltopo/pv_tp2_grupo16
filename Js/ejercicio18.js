// función para cambiar el texto del párrafo
export const cambiarTexto = () => {
    const parrafo = document.getElementById("texto");
    parrafo.textContent = "El texto ha sido cambiado.";
};

// Capturando el evento clic del botón
const boton = document.getElementById("boton");
boton.addEventListener("click", cambiarTexto);