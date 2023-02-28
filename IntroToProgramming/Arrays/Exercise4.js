// use map function to create a new array that contains one
// element for each element in the orignal array
// if the original array element is 

// evaluate each element in an array, create a new array that
// identifies either 'even' or 'odd' for each element in the original array

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
  ];
  
 let oddOrEven = myArray.map(function (value) {
    if (value % 2 === 0) {
      return "even"
    } else {
      return "odd"
    }
  })
  
  //using the ternary operator
  let oddOrEven = myArray.map(function (value) {
  return value % 2 === 0 ? 'true' : 'false'
  })
  
  console.log(oddOrEven)