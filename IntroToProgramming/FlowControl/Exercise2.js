function evenOrOdd(aNumber) {
  if (!Number.isInteger(aNumber) === false) {
    console.log('The value passed is not an integer.')
    return;
  }
  
  
  if (aNumber % 2 === 0 ) {
    console.log('even');
  } else {
  console.log('odd');
  }
    
}

/*
notes:
- The return command will stop the code and the rest of the program will not run
- 
*/