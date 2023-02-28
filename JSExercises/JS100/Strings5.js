// Case-insensitive Equality

// Problem:
// Write a code that will check if the following strings are equal
// It should be irrespective of whether the characters are upper or lower case

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';


string1.toLowerCase() === string2.toLowerCase();
string1.toLowerCase() === string3.toLowerCase();
string2.toLowerCase() === string3.toLowerCase();
// convert all strings to a common format
// used toLowerCase which changes all letters of a string to lowercase
//note that the toLowerCase method does not mutate the existing string. just returns the new result