// Arrow Functions (Part 1)

// Problem:
// Refactor the function using arrow syntax
// It should log the same sentence after being refactored

const template = 'I VERB NOUN.';

// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }


let sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);



console.log(sentence('like', 'birds'));
// logs: I like birds.