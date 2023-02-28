// What's my value? (part 9)

// Problem:
// What will the following code log to the console? Why?

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
// An error will occur
// the variable a is declared with const. This makes it so that the value cannot be modified/changed
// In the block of myFunction, the attempt to reassign it causes an error
//note that myFunction doesn't have a parameter, passing a as an argument is ignoered by the code