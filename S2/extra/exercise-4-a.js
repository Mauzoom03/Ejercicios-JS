function findArrayIndex(array , text) {
    for (let i = 0 ; i < array.length, i++) {
        if ( array[i] === text) {
            return i ;
        }
    }
    return -1;
}
const array = ["apple", "banana", "cherry", "date", "elderberry"];
const searchText = "cherry";
const index = findArrayIndex(array, searchText);
if (index !== -1) {
    console.log(`El texto '${searchText}' se encuentra en la posición ${index} del array.`);
} else {
    console.log(`El texto '${searchText}' no fue encontrado en el array.`);