let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
// print the even numbers...

myArray.forEach(function (arrayElement){
 let insideArray = arrayElement;
 insideArray.forEach(function (value) {
   if ( value % 2 === 0) {
     console.log(value)
   }
   
 })

})