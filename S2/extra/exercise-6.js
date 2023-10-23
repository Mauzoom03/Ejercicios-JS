function swap (array,index1,index2 ) {
 let value1 = array[index1];
 let value2 = array[index2];
 array[index1] = array[index2];
 array[index2] = value1;
 return array;
}

// Ejemplo de uso de la función
const miArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
const indice1 = 1;
const indice2 = 3;

const arrayIntercambiado = swap(miArray, indice1, indice2);
console.log("Array después del intercambio:", arrayIntercambiado);