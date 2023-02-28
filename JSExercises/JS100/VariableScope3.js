// What's my value? (Part 3)

// Problem:
// What will the following code log to the console?

if (true) {
  let myValue = 20;
}

console.log(myValue);

// The code will raise an error
// myValue is defined in a local scope inside the if statement
// The console is attemping to log a global variable however there is none
