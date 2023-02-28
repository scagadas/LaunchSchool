// What's my value? (Part 10)

// Problem:
// What will the following code log to the console? Why?

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// the object property for firstName is reassigned by myFunction when it is called
// the console logs the new property to the key firstName: 'Jane'