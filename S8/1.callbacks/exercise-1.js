const numbersList = [];

function sum(a , b ){
return a + b;
}

function substract(a , b ){
return a - b;
}

function father(a ,b ,callback){
const result = callback(a,b);
numbersList.push(result);
}
father(2 ,6 , sum);
father (14 , 4 , substract);
console.log(numbersList);