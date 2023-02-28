//write a function that searches an array of strings for every element that mathces the given argument.
//function should return all matching elements in an array

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches (array, regex) {
let newArray = []

array.forEach(function (element) {if(regex.test(element))
newArray.push(element)
})
return newArray
}



console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']