// Repeat

// Problem:
// Implement a function repeat that repeats an intput string a given number of times
// Do not use the pre-defined string method String.prototype.repeat()
let theRepeat = '';


function repeat (times, toCopy) {
  for (let i = 0; i < times; i += 1) {
    theRepeat += toCopy;
  }
  return theRepeat;
}

console.log(repeat(3, 'ha'));