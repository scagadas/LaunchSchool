// three variables:
// - loan amount
// - annual percentage rate (APR)
// - loan duration (in years?)
// calculate:
// - monthly interest rate
// - loan duration in months

const readLine = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}

// variables:
// - monthlyPayment = monthly payment
// - loanAmt = loan amount
// - monthlyIR = monthly interest rate
// - loanDM = loan duration in months

prompt('Hello, lets calculate the loan Amount');

while (true) {
  prompt('What is the loan amount?');
  let loanAmt = readLine.question('$');

  prompt('What is the Annual percentage rate (APR)?');
  let APR = readLine.question();

  prompt('What is the loan duration (in years)?');
  let loanYears = readLine.question();

  let annualIR = Number(APR) / 100;
  let monthlyIR =  annualIR / 12;
  let months = Number(loanYears) * 12;

  let monthlyPay = loanAmt * (monthlyIR / (1 - Math.pow((1 + monthlyIR), (-months))));

  prompt(`The monthly payment is $${monthlyPay.toFixed(2)}.`);

  prompt('Would you like to calculate another monthly payment?')
  let answer = readLine.question();

  if (answer[0].toLowerCase === 'y') {
    break;
  }

}
