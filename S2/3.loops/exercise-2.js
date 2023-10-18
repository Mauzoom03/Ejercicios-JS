const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const property in alien) {
    console.log(property +  ": " + alien[property]);
}