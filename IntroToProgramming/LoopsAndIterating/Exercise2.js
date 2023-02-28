//create a factorial function

//this shit dont work...

let rlSync = require('readline-sync');
let number = rlSync.question("Please input factorial ");
number = parseInt(number)

factorial (number)
function factorial (number) {
  let result = 1
  
  for (let n = 0; n === number; n+= 1) {
  console.log(n);
 
  //result = number * factorial (number - 1);
  }
}
