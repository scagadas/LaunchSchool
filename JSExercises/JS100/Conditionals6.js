//Check the Weather, Part 2

//Take code from Conditionals4.js and rewrite it as a switch statement
//Feel free to add more cases besides 'sunny' and 'rainy'

let weather = "poopy";

//conditional4.js code:
// if (weather === "sunny") {
//   console.log("It's a beautiful day!");
// } else if (weather === "rainy") {
//     console.log("Grab your umbrella"); 
// } else {
//     console.log("Let's stay inside.");
// }

switch (weather) {
  case 'sunny':
    console.log("It's beautiful day!");
    break;
  case 'rainy':
    console.log("Grab your umrella");
    break;
  default: 
    console.log("Let's stay inside.");
}