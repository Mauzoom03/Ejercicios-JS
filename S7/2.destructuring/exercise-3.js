const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const  { name : animalName , race } = animalFunction();
console.log ( animalName );
console.log( race );