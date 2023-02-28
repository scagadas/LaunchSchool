// Vocabulary

// Problem:
// Given the nested array, log each string to the console

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(subArray =>
  subArray.forEach(element => console.log(element))
)




// Expected output:
// happy
// cheerful
// merry
// etc...