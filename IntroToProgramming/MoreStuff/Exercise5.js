function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}



/*
determine what it does...

split method: splits a string where the arguments are located.
            - returns an array of the strings.
reverse method: reverses the order of the elements in an array
              - returns the reversed array
map method: calls a function on each element of an array
          - returns a new array with the function calling on each element of the original array

the result:
- an array which is the length of each word of the orignal string in backwards order

*/