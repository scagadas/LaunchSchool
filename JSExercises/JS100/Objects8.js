// Convert an object to a nested array

// Problem:
// Convert the person object into an nested arry nestedPerson
// It should contain value pairs as arrays in each element

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = [];
for (let property in person) {
  nestedPerson.push([property, person[property]]);
}

console.log(nestedPerson)
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

//Object.entries() does this directly