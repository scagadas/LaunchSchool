// Greeting a user

// Problem:
// create a program that will:
// ask for a users name
// Greet the user
// if the user writes 'name!' then the computer yells back to the user
//
// examples:
// What is your name? Bob
// Hello Bob.
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

const readLine = require('readline-sync');

console.log(`question`);
let name = readLine.question();

