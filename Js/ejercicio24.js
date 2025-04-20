document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("cambiarColor");
  
    const colores = ["#f7b267", "#70c1b3", "#f25f5c", "#247ba0", "#ffe066", "#d9ed92"];
  
    const cambiarColorFondo = () => {
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      document.body.style.backgroundColor = colorAleatorio;
      console.log("Color de fondo cambiado a:", colorAleatorio);
    };
  
    boton.addEventListener("click", cambiarColorFondo);
  });
  