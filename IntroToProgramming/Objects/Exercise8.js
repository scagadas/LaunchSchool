let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};
//create a function that returns a copy of an object.
//function should take two arguments:
//-the object to copy
//-an array of the keys that you want to copy

//.push method
//-if array element matches key, push to new object
function copyObj (sourceObj, keys) {
  let pushedObject = {};
  if (keys) {
    keys.forEach(function(key) {
      pushedObject[key] = sourceObj[key];
    })
    
  } else {
    Object.assign(pushedObject, sourceObj);
  }
return pushedObject
  }
  

  



let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

console.log(objToCopy)