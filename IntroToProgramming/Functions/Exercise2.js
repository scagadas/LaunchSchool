let rlSync = require('readline-sync');
function getName (prompt) {
  let askName = rlSync.question(prompt);
  return askName;
}

let firstName = getName('Whats is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);



/*
notes:
- To create an input request, need to require the readline-sync library
- The readline-sync library is an object that allows us to access many methods, in this case the question method.
- By setting them to variables, you can access the typed response to "whats you'r name? "
- Note that there is a space after the ? in the question. This gives you space when you type in a response. Nice feature
*/