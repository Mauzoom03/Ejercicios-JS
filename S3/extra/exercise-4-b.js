const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const countryList = document.createElement("div");
document.body.appendChild(countryList);

    countries.forEach(country => {
      const div$$ = document.createElement("div");
      const h4$$ = document.createElement("h4") ;
      const img$$ = document.createElement("img");
      
      h4$$.textContent = country.title;
      img$$.src = country.imgUrl;

      div$$.appendChild(h4);
      div$$.appendChild(img$$);
      countryList.appendChild(div);

    
    });

function btnFunctions(){
    const $$btnCreator = document.createElement("button");
    $$btnCreator.textContent = "Delete Last";
    $$btnCreator.addEventListener("click",function(){
       if(countries.length > 0){
        countries.pop();

        const divs = countryList.querySelectorAll("div");
        if(divs.length > 0){
            divs[divs.length - 1].remove();
        }
       }
    });
    document.body.appendChild($$btnCreator);
}
btnFunctions();