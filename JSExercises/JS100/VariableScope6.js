// What's my value? (Part 6)

// Problem:
// What will the following code log to the system?

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// this will return false
// The variable b has both an inner and global scope decleration
// They are seperate variables
// the log is being called to the global scope variable a which equals false