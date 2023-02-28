false || (true && false);
// => false
true || (1 + 2);
// => true
(1 + 2) || true;
// => 3
true && (1 + 2);
// => 3
false && (1 + 2);
// => false
(1 + 2) && true;
// => true
(32 * 4) >= 129;
// => false
false !== !true;
// => false
true === 4;
// => false
false === (847 === '847');
// => true
false === (847 == '847');
// => false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// => false || (false) || true || false
// => false || true || false
// => true || false
// => true

/*
notes:
- || and && operators use short circuit evaluation.
- short circuit evalution returns the last truthiness value evaluated
- this means that if a string or number data type is being evaluated last, that is what will be returned
- using the ! operator on a non-booleon, transorms it into an oposite booleon of the truthiness value of that non-booleon

*/