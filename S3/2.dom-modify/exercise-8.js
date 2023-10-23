const p$$ = document.createElement('p');
p$$.textContent = 'Voy en medio';
const secondDiv$$ = document.querySelector('div:nth-child(2)');
document.body.insertBefore(p$$,secondDiv$$);