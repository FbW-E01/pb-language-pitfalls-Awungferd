// 1. NaN

// What does NaN stand for?
// Answer: It means "Not a Number". It is an error message returned when a mathematical function or parsing  fails to perform an operation
//________________________

// Check if "hello" is NaN.
let greetMe = "Hello";
console.log(isNaN(parseInt(greetMe)));

//__________
//Check if 3 is NaN.

console.log(isNaN(3));

//____________________
//What is the type of NaN?
// It is a parsing NAN

//_____________________
// 2. Rounding
//console.log(0.1 * 0.2); will print: 0.020000000000000004.
//Make sure that only 0.02 is printed.
console.log((0.1 * 0.2).toFixed(2));

//_____________
// 3 INFINITY

// Divide Infinity by 0.
console.log(Infinity / 0);

//Divide Infinity by Infinity.
console.log(Infinity / Infinity);

// Divide 1 by 0.
console.log(1 / 0);
