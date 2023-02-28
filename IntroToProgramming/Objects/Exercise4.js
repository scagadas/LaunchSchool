let obj = {
  b: 2,
  a: 1,
  c: 3,
};
//create an array with all the keys in the object coverted to uppercase.
//must not mutate the orignal obj

let objKeys = Object.keys(obj);
let capKeys = objKeys.map((key) => key.toUpperCase());

console.log(capKeys);