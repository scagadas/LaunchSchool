// Remove Last Char

// Problem:
// Creata a function removeLastChar that
// takes a string as an argument
// returns a string without the last character

function removeLastChar (string) {
  string.substring(0, string.length-1);
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'