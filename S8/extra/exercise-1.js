
const main$$ = document.querySelector("main");
//console.log(main$$)
//fetch ('https://breakingbadapi.com/')
//.then ((response) => response.json)
//.then((res)=>console.log(res))


const getCharacters = async () => {
    const response = await fetch('https://breakingbadapi.com/api/characters');

    const res = await response.json();
    return res.data.characters;
}; 

