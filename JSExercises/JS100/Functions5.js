//Display Division

//Determine the output that the following code will log to the console:

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree();

// It will log: 
// 3 / 1 = 3
// 6 / 2 = 3
// 9 / 3 = 3
// ... 
// 30 / 10 = 3