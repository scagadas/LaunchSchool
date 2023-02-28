// Calculate BMI

// Problem:
// Create a function that
// Calculates a persons body mass index (BMI)
// It should take two parameters
// - their height (in cm)
// - their weight (in kg)
// use the given bmi formula bmi = weightInKilograms / heightInMeters**2;
// Return the result as a string rounded to two decimals



function calculateBMI (heightInCM, weightInKG) {
let heightInM = heightInCM /100 ;
let bmi = weightInKG / heightInM ** 2;
  
return bmi.toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"