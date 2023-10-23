const input$$ = document.querySelector('input');
for (input$$ of inputs$$) {
    input$$.addEventListener('focus',checkValue);
}
function checkValue(e){
    this.value = 'autoguardado';
}