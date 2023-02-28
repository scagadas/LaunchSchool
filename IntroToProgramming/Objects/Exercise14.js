function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/*
dentify the following:

variables:
- ello,
- greeting, 
- name
- xyzzy
- howdy
- foo

object property names(keys): 
- a, b, c, d 
- array indexes: 0, 1, 2

primitive values: 
- 1, 2, 3, 4, 5
- a, b, c, d
- ' ', 'Hi', 'Grace' 
- array indexes: 0, 1, 2

objects: 
- hello()
- xyzzy()
- { a: 1, b: 2, c: [3, 4, 5], d: {} }
- [3, 4, 5]
- {}
*/