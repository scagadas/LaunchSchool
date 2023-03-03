// Isn't it Odd?

// Problem:
// Write a function that:
// - Takes one interger argument (may be +, -, or 0)
// - returns true if the number's absolute value is odd
// - you may assume tat the argument is a valid integer value

function isOdd(number) {  
  return Math.abs(number) % 2 === 1;
  // Math.abs will converts number to an positive value
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true