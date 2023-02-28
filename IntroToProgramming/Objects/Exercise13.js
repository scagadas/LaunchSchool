function foo(bar) {
  console.log(bar());
}
//add code so that the desired text will print
//


foo(function() { return 'Welcome'});    // Should print 'Welcome'
foo(function() {return 3.11415});    // Should print 3.1415
foo(function () {return [1, 2, 3]});    // Should print [1, 2, 3]