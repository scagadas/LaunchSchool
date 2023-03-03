// Sum or Product of Consecutive Intergers

// Problem:
// Write a program that:
// Asks the user for an interget greater than 0
// Asks the user if to choose one of two options
// 1. wants the sum of all numbers between 1 and the interget
// 2. the product of all numbers between 1 and the interget


let readlineSync = require('readline-sync');


let integer = readlineSync.question(`Please enter the integer great than 0:`)
integer = parseFloat(integer);

let choice = readlineSync.question(`Enter "s" to compute the sum, or "p" to compute the product:`)

if (choice === "s") {
let sum = 0

for (let i = 1; i <= integer; i += 1) {
  sum += i;
}
  console.log(sum);
};

if (choice === "p") {
let product = 1

for (let i = 1; i <= integer; i += 1) {
product *= i;
}
  console.log(product)
};
