function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
dentify the following:

variables:
- bar
- arg1, arg2
- qux
- result
- foo

object property names(keys): 
- abc, def, ghi, jkl, mno, pqr
- array indexes: 0, 1, 2, 3, 0, 1, 2

primitive values: 
- 'Hello'
- 1, 2, 3, 4, 5, 6
- null
- NaN
- array indexes: 0, 1, 2, 3, 0, 1, 2
- 'Victor'
- 'Antonina'
- 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqr'

objects: 
- [1, 2, 3, [4, 5, 6]]
- [4, 5, 6]
- qux
*/