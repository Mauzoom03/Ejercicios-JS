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
      countryList.appendChild(div);

      const h4$$ = document.createElement("h4") ;
      h4$$.textContent = country.title;
      div$$.appendChild(h4);

      const img$$ = document.createElement("img");
      img$$.src = country.imgUrl;
      div$$.appendChild(img$$);
  
  
    });


    const $$btnCreator = document.querySelector("button");
    $$btnCreator.textContent = "Delete Last";
    $$btnCreator.addEventListener("click", removeLastElement);
   
    function removeLastElement(){
    const lastElement$$ = document.querySelector('div[data-element="true"]:lastChild');
    lastElement$$.remove();
    }
