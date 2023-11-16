
async function getCharacters() {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        
        const characters = await response.json();
        console.log(characters);
  
}
getCharacters(); 