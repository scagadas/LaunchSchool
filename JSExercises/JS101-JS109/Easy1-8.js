// Leap Years (Part 1)

// Problem:
// Write a function that checks if an year greater than 0 is a leap year
//  A leap year is defined as follows:
//  - is divisible by 4 unless it is also divisible by 100
//  - it is divisible by 100 unless it is also divisible by 400

function isLeapYear (year) {
if (year % 400 === 0) { 
  return true;
} else if (year % 100 === 0) {
  return false;
} else {
  return year % 4 === 0;
}
}
// The first solution takes this one step at a time 
// testing for the least common cases 
// first: years divisible by 400, and years divisible by 100. 
// If the year is anything else, 
// then it is a leap year if it is divisible by 4.


console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true