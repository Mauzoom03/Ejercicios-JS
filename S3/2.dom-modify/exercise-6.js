const createUl$$ = document.createElement("ul");
const listItems = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (const item of listItems) {
    const createLi$$ = document.createElement("li");
    const liContent$$ = document.createTextNode("item");
    liContent$$.textContent= item ;
    createLi$$.appendChild(liContent$$);
    createUl$$.appendChild(createLi$$);
};

document.body.appendChild(listItems);


