const createUl$$ = document.createElement("ul");
const listItems = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (const items of listItems) {
    const createLi$$ = document.createElement("li");
    const liContent$$ = document.createTextNode(item);
    createLi$$.appendChild(liContent$$);
    createUl$$.appendChild(createLi$$);
};

document.body.appendChild(createUl$$);


//Code with Problem