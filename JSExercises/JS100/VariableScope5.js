// What's my value? (Part 5)

// What will the following code log to the console?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  let  a = 2;
    console.log(a);
  }
}

myFunction();

// The code will return a reference error
// because the variable a is being initiated both with an inside scope and outside scope they conflict
// to fix the code, you can remove the let declaration the a in the inner scope. just set a = 2
