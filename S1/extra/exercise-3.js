const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225},
    {name: "Origen", durationInMinutes: 165},
    {name: "El señor de los anillos", durationInMinutes: 967},
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}]; 
    
for (const movie of movies) {
if(movie.durationInMinutes < 100){
    console.log("Pelicula pequeña : "+ movie.name);
}
else if(movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    console.log("Pelicula Mediana : "+ movie.name);
}
else {
    console.log("Pelicula Grande : "+ movie.name);
}
}

    