let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// Use the map and filter methods to:
//1. Detertmine the lengths of each element in the array of string values
//2. Discard the even values (keep the odd)

function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

console.log(oddLengths(arr)); // => [1, 5, 3]