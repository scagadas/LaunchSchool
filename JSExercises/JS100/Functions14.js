// Greet 3

// Problem:
// Change the function greet from Functions13.js
// Make the function have no arguments
// instead have it call the functions greeting() and recipient()

function greet() {
  console.log(greeting() + ', ' + recipient() + '!');
}

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

greet()