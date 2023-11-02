const submitBtn$$ = document.querySelector("button");
const inputName$$ = document.querySelector("input");
const result$$ = document.querySelector("#result");
const baseUrl = 'https://api.nationalize.io?name=';



submitBtn$$.addEventListener('click',() => {
    const name = inputName$$.value;

    if(name) {
        const url = baseUrl + name ; 

        fetch (url)
        .then(response => {
            if(!response.ok){
                throw new Error ('Hemos tenido un problema');
            }
            return response.json();
        })
        .then(data => {
            result$$.innerHTML = JSON.stringify(data,null,2);
        });
    } else {
        result$$.innerHTML = 'Ingrese un Nombre valido.';
    }

});  
