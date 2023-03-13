// Squaring an Argument

// Use the function from Easy2-3.js
// Write a function that computes the square of its argument

function multiply(num1, num2) {
  return num1 * num2;
}

function square(number) {
  return multiply(number, number);
}

//ex.:
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true