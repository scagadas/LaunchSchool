let rlSync = require('readline-sync');

function multiply (first, second) {
  return first * second;
}

function multiplyTwo(prompt) {
  let askForNumber = rlSync.question(prompt)
  return parseFloat(askForNumber);
}

let firstNumber = multiplyTwo('Enter the first number: ');
let secondNumber = multiplyTwo('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);

//important to use parseFloat to coerse the value out of being a string. 
//parseFloat rather than Numbers is needed when dealing with numbers that may have decimal points
