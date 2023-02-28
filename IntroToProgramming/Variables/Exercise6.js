const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
notes:
- This code will NOT raise an error.
- When attempting to redefine a const variable, you will typically receive an error.
- In this case, the two FOO constants have seperate scopes, so there is no conflict between the two.

*/