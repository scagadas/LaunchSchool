let array1 = [1, 2, undefined, 4];
// => [1, 2, undefined, 4] 
// length: 4
lenght: 4
let array2 = [1];
array2.length = 5;
// => [undefined, undefined, undefined, undefined, undefined]
// length: 5
let array3 = [];
array3[-1] = [1];
// => [-1: 1]
// length: 0
let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
// => [1, 2, 3]
//length: 3
let array5 = [];
array5[100] = 3;
// => [undefined x 100, 3]
// length: 101