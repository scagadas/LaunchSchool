//write a function that takes an array argument and returns an array that
//contains only the integerrs from the input array
//use the filter method in your function

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);

console.log(integers); // => [1, 3, -4]
 