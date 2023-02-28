function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718); //returns the first two arguments passed. Ignores the third argument

/*
The function only has 2 parameters: bar, qux
The invocation with 3 arguments will run and just ignore the 3rd argument

*/