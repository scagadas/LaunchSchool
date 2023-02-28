// Travel

// Problem:
// Write a function that check whether or not a particular destination is in the array destinations
// don't use the built-in method Array.prototype.includes()

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
function contains(city, array) {
  for (let i = 1; i <= array.length; i += 1) {
    if (city === array[i]) {
      return true
    }
  }
  return false
}


console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false