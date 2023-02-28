// Blank? Version 1

// Problem:
// Write a function that checks whether a string is empty or not.

function isBlank(string) {
  return string.length === 0;
}





// ex: 
console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
console.log('    '.length)