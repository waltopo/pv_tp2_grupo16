const calcularMayor = (numero1, numero2) => {//calcula el numero mayor
    if (numero1 > numero2) {
        alert(`El número mayor es: ${numero1}`);
    } else if (numero2 > numero1) {
        alert(`El número mayor es: ${numero2}`);
    } else {
        alert("Los números son iguales.");
    }
};

// Invocar la función con diferentes números
calcularMayor(10, 20); // Cambia estos valores para probar