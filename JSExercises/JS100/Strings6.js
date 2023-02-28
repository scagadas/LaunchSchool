// Contains Character

// Problem:
// Write code that checks where the string byteSequence containrs the character x

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// function checkforLetter (string, letter) {
// for (let i = 0; i < byteSequence.length; i += 1)
// if (byteSequence[i] === letter) {
//   return `The string contains the letter ${letter}`)
// } return `The string does not contain ${letter}`

// }

// checkforLetter(byteSequence, 'x')
// There is a string method that does this....


console.log(byteSequence.includes('x'));