function saveHandler() {
  debugger;
  // write me!
let inputValue = document.getElementById("input").Value;
const numero = Number(parseInt(inputValue));
var numbers = /^[0-9]+$/;
if(!inputValue.match(numbers)){

  strings.NaNy.push(inputValue);
}else if (numero %2 ==0 )
{
  strings.evens.push(inputValue);
}else{
  strings.odds.push(inputValue);
}

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save',
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  })
}
