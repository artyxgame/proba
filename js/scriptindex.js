// Función para cambiar el color de fondo de la página
document.getElementById('cambiarColor').addEventListener('click', function() {
    document.querySelector('.container').style.backgroundColor = getRandomColor();
  });
  
  // Función para obtener un color aleatorio
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  