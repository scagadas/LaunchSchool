function numberRange(theNumber) {
  if (theNumber <= 50 && theNumber >= 0){
    console.log(theNumber + ' is between 0 and 50');
  } else if (theNumber <= 100 && theNumber > 50) {
    console.log(theNumber + ' is between 51 and 100');
  } else if (theNumber > 100){
    console.log(theNumber + ' is greater than 100');
  } else if (theNumber < 0) {
    console.log(theNumber + ' is less than 0');
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
numberRange(50);
numberRange(0);
numberRange(100);