function findArrayIndex(array , text) {
    return array.IndexOf(text);
  }

  function removeItem(array,text) {
    const index = findArrayIndex(array,text);
    if(index > -1){
        array.splice(index,1);
        
    }
    return array;
  }
  let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
  array = removeItem(array, "Mosquio");
  console.log(array);
  array = removeItem(array,"Mosquitoooooos");
  console.log(array);