function name(someString) {
  if (someString.length > 10){
    console.log(someString.toUpperCase());
  } else {
    console.log(someString);
  }
}

name('Hello world')
name('goodbye')
name('Sue Smith')
name('Sue Robertson')