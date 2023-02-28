// Calculate Cat Age

// Problem:
// Implement a function catAge that takes one input
// - the number of human years
// it should convert the input to cat years
// cat years are calculated as follows
// - the first human year corresponds to 15 cat years
// - the second human year corresponds to 9 cat years
// - every subsequent human year corresponds to 4 cat years


function catAge(humanYears) {
let catsAge = 0
if (humanYears >=  1 ) {
  catsAge += 15;
}
if  (humanYears >= 2 ) {
  catsAge += 9;
}
if (humanYears > 2 ) {
  catsAge += (humanYears-2) * 4
}
return catsAge
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32