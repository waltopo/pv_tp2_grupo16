const edades = [10, 5, 18, 25, 40, 35, 28, 33]; //cambiar estos numeros para probar si esque sirve

const calcularPromedioEdades = (array) => {
    const suma = array.reduce((acumulador, edad) => acumulador + edad, 0);
    return suma / array.length; // Promedio
};

const promedio = calcularPromedioEdades(edades);
console.log(`El promedio de las edades es: ${promedio.toFixed(2)}`);