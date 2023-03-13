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

console.log(`Hi user, what's your name?`);
let name = readLine.question();

if (name.charAt(name.length - 1) === '!') {
  name = name.slice(0, -1);
  console.log(`HI ${name}, WHATS WITH THE YELLING?`);
} else {
  console.log(`Hi ${name}`);
}