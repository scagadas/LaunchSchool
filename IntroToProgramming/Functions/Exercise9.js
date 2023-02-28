function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
Identify all variables:
multiply - global
left, right - local
product - local
getNumber - global
prompt - local
parseFloat, question - global
left, getNumber - global
right, getNumber - global
console - global

pretty much anything with the following cases are variables
- a function name
- a name being assigned a value with the = sign
a name with () next to it

*/
