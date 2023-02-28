// Greet 2

// Problem:
// Change the function from Functions12.js so that it takes two arguments
// a greeting with 'Hello' as the default value
// a recipient with 'world' as default value

function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ', ' + recipient + '!');
}


greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
