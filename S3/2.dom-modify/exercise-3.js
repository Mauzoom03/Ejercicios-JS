const container$$ = document.getElementById("container");
const nuevoDiv$$= document.createElement("div");

for(let i = 1; i <= 6; i++){
    const nuevoParrafo$$ = document.createElement("p");
    nuevoParrafo$$.textContent = "parrafo" + i;
    nuevoDiv$$.appendChild(nuevoParrafo$$);
}
container.appendChild(nuevoDiv$$);