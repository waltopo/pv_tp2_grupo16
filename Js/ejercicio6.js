const edades = [22, 30, 18, 25, 40, 35, 28, 33];

const calcularPromedioEdades = (array) => {
    const suma = array.reduce((acumulador, edad) => acumulador + edad, 0);
    return suma / array.length; // Promedio
};

const promedio = calcularPromedioEdades(edades);
console.log(`El promedio de las edades es: ${promedio.toFixed(2)}`);