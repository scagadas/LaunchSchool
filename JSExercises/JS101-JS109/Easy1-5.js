// Tip Calculator

// Problem:
// Write a program to calculate tip
// It should prompt for a bill amount and tip rate
// Must log both the tip and the total amount of the bill
// Ignore input validation & assume numbers will be inputted

let readlineSync = require('readline-sync')

let bill = readlineSync.question(`Please enter the bill amount:`)
bill = parseFloat(bill);


let tip = readlineSync.question("Enter the amount you would like to tip:");
tip = bill * parseFloat(tip)/100;

let total = tip + bill

console.log(`The tip is $${tip.toFixed(2)}`)
console.log(`The total is $${total.toFixed(2)}`)