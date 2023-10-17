function swap (array,index1,index2 ) {
    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length ) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;   
    } else {
console.log("Índices inválidos. No se puede realizar el intercambio.");
    }
    return array;
}

// Ejemplo de uso de la función
const miArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
const indice1 = 1;
const indice2 = 3;

const arrayIntercambiado = swap(miArray, indice1, indice2);
console.log("Array después del intercambio:", arrayIntercambiado);