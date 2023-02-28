let rlSync = require('readline-sync');
let age = rlSync.question("What's your age? ");
age = parseInt(age);

console.log('You are ' + age + ' years old.')
for (let index = 10; index <= 40; index += 10) {
  console.log(`In ${index} years, you will be ${age + index} years old.`);
}
