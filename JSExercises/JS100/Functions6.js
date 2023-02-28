// Three-way comparison

//Problem:
//Write a function that compares the length of two strings
//It should return -1 if the first string is shorter
//It should return 1 if the second string is shorter
//It should return 0 if they're equal length

function compareByLength (first, second) {
  if (first.length < second.length) {
    return -1;
  } else if (first.length > second.length) {
      return 1;
  } else if (first.length === second.length) {
      return 0;
  }
}



console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0