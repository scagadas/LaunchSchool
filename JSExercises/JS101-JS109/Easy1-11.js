// UTF-16 String Value

// Problem:
// Write a function that determines the UTF-16 string value of a string
// It should return the UTF-16 string value
// UTF-16 string value is the sum of the UTF-16 valuse of every character in the string
// You may use String.prototype.charCodeAt() to determine the values

function utf16Value(string) {
 let value = 0;

  for (let i = 0; i < string.length; i += 1) {
    value += string.charCodeAt(i);
  }
  return value;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811