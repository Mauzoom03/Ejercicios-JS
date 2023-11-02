
async function getCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const characters = await response.json();
        console.log(characters);
    } catch (error) {
        console.error('Hubo un error:', error);
    }
}

getCharacters(); 