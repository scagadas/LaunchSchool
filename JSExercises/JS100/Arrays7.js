// Equality

// Problem:
// Predict the output of the given code

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// expected output:
// false 
// the === operator acts differently when comparing objects
// for objects, it only returns true if it's the same object
// the same meaning they have the same reference
// in this case the arrays have the same elements, but they are both unique objects
// array1 === array1 => true
// array2 === array2 => true
// '2, 6, 4' === '2, 6, 4' => true
// array1 === array2 => false