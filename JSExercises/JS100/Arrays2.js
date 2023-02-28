// Last Element

// Problem:
// Write a function that returns the last element of an input array

function last (string) {
  return string[string.length-1]
}
//ex.:
last(['Earth', 'Moon', 'Mars']); // 'Mars'


// note:
// arrays are zero based index
// the length method is not. To account for the difference, need to subtract 1