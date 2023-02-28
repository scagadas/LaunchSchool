// Arrow Functions (Part 2)

// Problem:
// Refactor the given function using arrow syntax


// let initGame = function () {
//   return {
//     level: 1,
//     score: 0
//   }
// };

let initGame = () =>  ({
    level: 1,
    score: 0
  });
// need to place the object in ().
// Javascript assums in the statement that the {} is a function block
// To force javascript to interprect it as an object, need to ()


let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);



