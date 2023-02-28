//Are we moving?

//Determine what the following code snippet logs
//First solve it in your head
//Then run it in your javaScript console to check the result

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
//                 19       <      24      && (  0   >   ||    24        > 0)
//                        true             && (  false   ||   true          )
//                        true             &&        true                
console.log(isMoving); //=> true