const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false},
    {name: "Tofu", isVegan: true},
    {name: "Burger", isVegan: false},
    {name: "Rice", isVegan: true},
    {name: "Pasta", isVegan: true}
    ];
    for(let i = 0; i < foodSchedule.length; i++) {

        if(!foodSchedule[i].isVegan){
            let fruitToAdd = fruits.find(fruit => !foodSchedule.some(food => food.name === fruit));

            if (fruitToAdd) {
                foodSchedule[i].name = fruitToAdd;
                fruits.splice(fruits.indexOf(fruitToAdd), 1);
            }
        } 
    }