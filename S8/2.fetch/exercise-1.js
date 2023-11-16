fetch('https://api.agify.io?name=michael')
.then(response => {
    if(!response.ok){
        throw new Error('Problema en el servidor');
    }
   return response.json();
})
.then(data => {
    console.log(data);
})
.catch (error => {
console.error('error: ' ,error);
});
