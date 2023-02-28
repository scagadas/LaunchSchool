// What's my value? (Part 4)

// Problem:
// What will the following code log to the console?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// the variable a value of 1 will be logged to the console
// variables declared in an outer scope are accessable to the inside of the body of the if statement
