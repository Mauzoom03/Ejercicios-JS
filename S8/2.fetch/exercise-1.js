fetch('https://api.agify.io?name=michael')
.then(response => {
    if(!response.ok){
        throw new Error('Hemos tenido un problema');
    }
   return response.json();
})
.then(data => {
    console.log(data);
})
.catch (error => {
console.error('Hubo un error: ' ,error);
});
