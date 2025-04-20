const calcularAreaCirculo = (radio) => {
    
    return   Math.PI*Math.pow (radio,2); // Área = π * r² Math.PI oara pi y math.pow para la potencia
};

const radio = 7.5;
const area = calcularAreaCirculo(radio);
console.log(`El área del círculo con radio ${radio} es: ${area.toFixed(2)}`);