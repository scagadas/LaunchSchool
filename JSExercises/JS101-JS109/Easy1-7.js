// Short Long Short

// Problem:
// Write a function that takes two strings as arguments
// determine the lenght of the two string
// return the result of concatenating the shorter string, the longer string and shorter string once again
// You may assume that the string are of different lengths

function shortLongShort(string1, string2) {
let short = 0
let long = 0
    if (string1.length > string2.length) {   
    short = string2
    long = string1
} else {
    short = string1
    long = string2
}
return short + long + short

}
console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"