let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
note:
  - The let command is a block scope, meaning it's limited to the block it's in.
  - The variable foo in the block would be accessable if it was inside an if statement that was true.

*/