// Leap Years (Part 2)

// Problem:
// This is a continuation of Easy1-8.js
// For years before 1752, use the Julian Calender
// 1752 is a leap year
//  Julian Calender leap years are defined as:
//   - any year divisibile by 4
// Update the function from the previous exercise to include this

function isLeapYear (year) {
if (year > 1752)  {  
    if (year % 400 === 0) { 
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
} else {
    if(year % 4 === 0) {
        return true
    } else {
        return false
    }
}
}


console.log(isLeapYear(1752));      // true
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true