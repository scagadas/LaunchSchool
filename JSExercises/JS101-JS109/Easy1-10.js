// Multiplies of 3 and 5

// Problem:
// Write a function that computers the sum of numbers
// they are all numbers between 1 and the input number that are multiples of 3 or 5
// You may assume that the number passed in is an integer greater than 1

function multisum(number) {
let n = 0
  for (let i = 1; i <= number; i += 1) {
    if (i % 5 === 0 || i % 3 === 0)
    n += i
    }
  return n
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168