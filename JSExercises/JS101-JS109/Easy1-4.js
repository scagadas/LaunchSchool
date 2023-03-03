// How big is the room?

// Problem:
// Write a program that asks the user these questions:
// - the length of a room in meters
// - the width of a room in meters
// the problem should log the area of the room
// have it log the area in meters and square feet
// note: 1 square meter == 10.7639 square feet
// use readlineSync.promt method to collect user input

let readlineSync = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639
// Wait for user's response.
let roomLength = readlineSync.question(`We're builing a house! How long would you like the room (in feet)?`);
 
// Wait for user's response.
let roomWidth = readlineSync.question(`Great! Now how wide would you like the room (in feet)?`);

console.log(`The room will be ${roomLength * roomWidth} square feet!`)
console.log(`That will be ${(roomLength * roomWidth / SQMETERS_TO_SQFEET).toFixed(2)} in square meters!`)