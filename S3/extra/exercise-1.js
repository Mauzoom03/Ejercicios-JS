const countries = 
[
    'Japón',
    'Nicaragua',
    'Suiza',
    'Australia',
    'Venezuela'
 ];
 function arrayPrint(){
    const ul$$ = document.createElement("ul");
    for(const country of countries){
        const li$$ = document.createElement("li");
        li$$.textContent = country;
        ul$$.appendChild(li$$);
    }
    document.body.appendChild(ul$$);
    console.log(countries);
 }
 arrayPrint();

 