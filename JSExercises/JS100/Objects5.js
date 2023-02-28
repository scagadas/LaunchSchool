// Dot Notation vs Bracket Notation

// Problem:
// Determine what difference there will be in the output


let ocean1 = {};
let prefix1 = 'Indian';

ocean1.prefix1 = 'Pacific';


console.log(ocean1); // {prefix: 'Pacific'}
// this case, dot notation ignores the variable prefix1

let ocean2 = {};
let prefix2 = 'Indian';

ocean2[prefix2] = 'Pacific';

console.log(ocean2); // {Indian: 'Pacific'}
// this time the variable value for prefix2 is assigned as the key for the property
