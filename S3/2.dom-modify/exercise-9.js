const div$$=document.querySelectorAll(".fn-insert-here")
div$$.forEach(div => {
    const createP$$ = document.createElement("p");
    createP$$.textContent="Voy dentro";
    div.appendChild(createP$$);
});
