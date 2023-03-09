// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal
require('./calculator_messages.json');
const readLine = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES[`welcome`]);


while (true) {
  prompt(MESSAGES[`first`]);
  let number1 = readLine.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[`nValid`]);
    number1 = readLine.question();
  }

  prompt(MESSAGES[`second`]);
  let number2 = readLine.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[`nValid`]);
    number2 = readLine.question();
  }

  prompt(`${number1} ${number2}`);

  prompt(MESSAGES[`operations`]);
  let operation = readLine.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES["1234"]);
    operation = readLine.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number (number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4' :
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}.`);

  prompt(MESSAGES["again"]);
  let answer = readLine.question();

  if (answer[0].toLowerCase() !== 'y') {
    break;
  }

}
