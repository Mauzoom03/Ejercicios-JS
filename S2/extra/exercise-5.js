function rollDice(faces) {
let random = Math.floor(Math.random() * (faces)) + 1 ;
return random;
}

console.log(rollDice(6));