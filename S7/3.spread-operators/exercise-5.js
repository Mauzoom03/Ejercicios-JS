const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
const copyOfColors = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(copyOfColors);