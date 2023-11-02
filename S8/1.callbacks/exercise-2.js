const userAnwsers = [];

function confirmExample(description){
    const result = confirm(description);
    return result;
    
}

function promptExample(description){
    const result = prompt(description);
    return result;
   
}

function father(description,callback){
const result = callback(description);
userAnwsers.push(result);
}


father("¿Aceptas los términos y condiciones?", confirmExample);
father("Ingresa tu nombre:", promptExample);
father("¿Estás seguro?", confirmExample);

console.log(userAnwsers);


// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');