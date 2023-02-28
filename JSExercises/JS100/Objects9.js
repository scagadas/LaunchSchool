// ... and vice versa

// Problem:
// Write code that takes a nested array and turns it into an object

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
let person = {}

for (let i = 0; i < nestedArray.length; i += 1) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);

// fromEntries() method that does the same:
// let person = Object.fromEntries(nestedArray);