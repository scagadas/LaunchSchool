let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);

myObj.qux = 3;

//for/in iterates over the objects prototypes aswell
for (let key in myObj) {
  console.log(key);
}

//object.keys does not include keys from prototype objects
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});