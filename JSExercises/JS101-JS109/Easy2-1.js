// Welcome Stranger

// Problem:
// A function that takes two arguments:
// an Array and an object
// The array will contain 2 or more elements that will be a first and last name
// the object will contain two keys: "title" and "occupation"
// The function will return a greeting that:
// uses the persons full name, and mentions their title

function greetings (array, object) {
  let name = array.join(' ');

  let jobTitle = `${Object.values(object)[0]} ${Object.values(object)[1]}`;

  return `Hello, ${name}! Nice to have a ${jobTitle} around.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.