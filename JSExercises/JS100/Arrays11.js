// Checking items off the grocery list

// Problem:
// Write a code that removed items from the array grocery list
// each item should be removed one at a time

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let shoppingCart = groceryList.shift();
  console.log(shoppingCart)
}


// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []