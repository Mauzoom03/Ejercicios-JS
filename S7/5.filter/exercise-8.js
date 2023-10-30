const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const btn$$ = document.querySelector('[data-function = "toShowFilterStreamers"]')
btn$$.addEventListener('click',showStreams);

input$$.addEventListener('input',showStreams);
function showStreams(){
    const input$$ = document.querySelector('[data-function = "toFilterStreamers"]');
    const inputValue = this.value;
const filteredStreamers= streamers.filter(function(streamers){
    return streamers.name.includes(inputValue);
});
}