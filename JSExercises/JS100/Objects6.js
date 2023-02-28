// Is it true?

// Problem:
// Explain why 'It's true!' is never output

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) { // replace with 'true'
    console.log("It's true!");
  }
}

// true in the if statement is a booleon value
// the true in obj is a string
// to fix the for statement, put true in ''