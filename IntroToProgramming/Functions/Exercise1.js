let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar); // ==> 1

// Note even though foo is called, it doesn't change the global foo value
// inside the function body of foo, the let bar call creates a new local variable, not affecting the gloval foo variable.
// To change the global bar value from 1 to 2, remove the let call from the function body
