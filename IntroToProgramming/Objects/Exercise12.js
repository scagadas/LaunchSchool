function foo(bar) {
  console.log(bar, bar, bar);
}
//write a code such that bar() will return something 
let bar = foo;


foo("hello"); // should print "hello hello hello"
//bar() here was originally returning an eror
bar("hi");    // should print "hi hi hi"