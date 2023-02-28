// Blank? Version 2

// Problem:
// change the isBlank function from Strings7.js
// to return true if the string is empty or only contains whitespace


function isBlank(string) {
  return string.trim().length === 0;
}


//.trim() method removes whitespaces from both ends of the string.
// this will remove all the spaces in a string with no characters
// this does not remove spaces between characters

// ex.:
isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true