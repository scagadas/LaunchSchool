let array1 = [1, 6, 3, 2];
let array2 = [-1, -6, -3, -2];
let array3 = [2, 2];


//Return thh largest numeric value in the list

let greatestNum = function (array) {
  let highestNum = array[0]
  array.forEach(function (num) {
  
  if (num > highestNum) {
    highestNum = num}
    
    })
  return highestNum
  }
  
  console.log(greatestNum(array1)); // => 6
  console.log(greatestNum(array2)); // => -1
  console.log(greatestNum(array3)); // => 2
  
  //shortcut using the math method max
  console.log(Math.max(1, 6, 3, 2))
  console.log(Math.max(-1, -6, -3, -2))
  console.log(Math.max(2, 2))