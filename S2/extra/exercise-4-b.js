function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}
function removeItem(array , text){
    const index = findArrayIndex(array, text);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

const array = ["apple", "banana", "cherry", "date", "elderberry"];
const itemToRemove = "cherry";
const newArray = removeItem(array, itemToRemove);

console.log("Array original:", array);
console.log("Array después de eliminar el elemento:", newArray);