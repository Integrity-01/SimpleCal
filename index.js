let display = document.getElementById('display');
 display.value = "0";
let currentInput = '';
let firstValue = '';
let operator = '';
let secondValue = '';
let result = '';

function valueToDisplay (value) {
  currentInput += value;
  display.value = currentInput;
}


function clearDisplay(){
   currentInput = '';
   firstValue = '';
   operator = '';
   display.value = "0";
}

function calculate() {
  if (operator === '' && currentInput === '') {
    display.value = "0"
  } else {
    const str = display.value
    const separatorRegEX = /(?<!^)[-+*\/R^]/;
    const parts = str.split(separatorRegEX);
    operator = str.match(separatorRegEX);

    firstValue = parts[0];
    secondValue = parts[1];

   if (operator == '+'){
    const result = parseFloat(firstValue) + parseFloat(secondValue);
    display.value = result; 
    currentInput = display.value;
   } 
   if (operator == '-'){
    const result = parseFloat(firstValue) - parseFloat(secondValue);
    display.value = result; 
    currentInput = display.value;
   } 
   if (operator == '*'){
    const result = parseFloat(firstValue) * parseFloat(secondValue);
    display.value = result; 
    currentInput = display.value;
   } 
   if (operator == '/'){
    const result = parseFloat(firstValue) / parseFloat(secondValue);
    display.value = result; 
    currentInput = display.value;
   } 
   if (operator == 'R'){
    const result = parseFloat(firstValue) % parseFloat(secondValue);
    display.value = result; 
    currentInput = display.value;
   } 
    if (operator == '^'){
    const result = parseFloat(firstValue) ** parseFloat(secondValue);
    display.value = result; 
    currentInput = display.value;
   }   
 
  }


}

