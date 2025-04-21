// Mapa de países y sus capitales
const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "México": "Ciudad de México",
    "Perú": "Lima"
};

// Referencias a los elementos del DOM
const selectPais = document.querySelector("#pais");
const selectCapital = document.querySelector("#capital");

// Función para manejar el cambio en la lista de países
const manejarCambioPais = () => {
    const paisSeleccionado = selectPais.value;
    const capitalCorrespondiente = paisesCapitales[paisSeleccionado];

    // Seleccionar la capital correspondiente
    selectCapital.value = capitalCorrespondiente;

    // Mostrar en consola el país y capital seleccionados
    console.log(`País seleccionado: ${paisSeleccionado}`);
    console.log(`Capital seleccionada: ${capitalCorrespondiente}`);
};

// Agregar evento change al select de países
selectPais.addEventListener("change", manejarCambioPais);