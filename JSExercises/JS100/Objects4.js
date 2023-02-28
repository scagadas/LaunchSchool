// Greetings From Jane

// Problem:
// Add a property to the below object jane
// It's value should be 'Hej Bobby!'

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // added code here
  greet: function (name) {
    console.log(`Hej, ${name}!`); 
  }
};

jane.greet('Bobby'); // Hej, Bobby!
