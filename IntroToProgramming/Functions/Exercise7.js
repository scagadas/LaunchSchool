function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');
/* 
result logged:
Hello
undefined

notes:
A function with multiply parameters will still run even if only one argument is inputted
The program will automaticaly initilize an undefined value for the absent argument
*/