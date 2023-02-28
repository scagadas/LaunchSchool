//write a for loop that loops over the elements of the array cities
//It should log the length of each string to the console
//If the element is null, skip forward to the next iteration without logging anything to the console

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];


for (let i = 0; i < cities.length; i+= 1) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i].length);
}
