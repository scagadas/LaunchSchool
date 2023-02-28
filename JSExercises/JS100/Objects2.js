// Retrieve the value (Part 2)

// Problem:
// Given the below object,
// write code to retrieve the country in which Jane is located

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country);