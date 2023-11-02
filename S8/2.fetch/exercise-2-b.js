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
            result$$.innerHTML ='';
            data.country.forEach(nationality => {
                const p = document.createElement('p');
                p.textContent=`El nombre ${name}tiene un ${nationality.probability * 100}% de ser de ${nationality.country_id}.`;
                result$$.appendChild(p);
            });
        });
    } else {
        result$$.innerHTML = 'Ingrese un Nombre valido.';
    }

});  