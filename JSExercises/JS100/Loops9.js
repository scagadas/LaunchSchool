//Finding Nemo
//Loop over the elements of the arra fish, logging each one
//terminate the loop immediately after logging the string 'Nemo'


let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let index = 0; index < fish.length; index ++) {
  console.log(fish[index]);
  if (fish[index] === 'Nemo') {
    break;
  }
 
}


