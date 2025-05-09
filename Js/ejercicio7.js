const nombres = ["mariano","pedro","lionel","kevin","matias","erick"];

let maxLength = nombres[0].length;
let nombreMaxLength = nombres[0];

nombres.forEach( (x) => {
    if(maxLength < x.length){
        maxLength = x.length;
        nombreMaxLength = x;
    }
});

console.log("El nombre mas largo es: "+ nombreMaxLength);