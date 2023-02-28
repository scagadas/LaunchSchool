//write a function that returns true if the value passed to it is NaN, pass false if not


// NaN has a special characteristic
// NaN === NaN returns false


function isNotANumber (value) {
 return value !== value;
}


console.log(isNotANumber(NaN)) // => true
console.log(isNotANumber(5))   // => false
console.log(isNotANumber('word')) // => false