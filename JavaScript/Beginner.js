// Basics of JavaScript

/* Basic Operators in Js
Operator	    Description
+	            Addition
-	            Subtraction
*	            Multiplication
**	            Exponentiation (ES2016)
/	            Division
%	            Modulus (Division Remainder)
++	            Increment
--	            Decrement */

consol.log('Hello World!');

/* To write long word you cannot use hyphen (-) in Js. 
 * Instead use "Camel Notation" eg- firstName. */

// PRIMITIVES TYPES or VALUE TYPES
let name = 'Akhilesh'; //string
let age = 30; // Number
let isApproved = true; // or false. Boolean
let firstName = undefined; // We can say that it's undefined.
let lastName = null; // If we want to clear the var value.

/* Here it'll display 1 (latest value) but will 
 * give error for constant because you can reassign it. */
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

/* Dynamic Typing (Js is dynamic language)
 * The type of the variable will be determined by the "runtime".
 * eg- typeof name "string" initially, but if i say name = 1; it'll change to "number".
 * In Js we dont have float and int, both are "numbers". */


// REFERENCE TYPES
// OBJECTS
let person = {
    name: 'Akhilesh',
    age: '20'
};
console.log(person);
// Dot Notation
person.name = 'Steve';

// Bracket Notation
person['name'] = 'John';

console.log(person.name);


// ARRAYS
let selectionColors = ['red', 'blue'];
console.log(selectionColors[0]);

// Add an element dynamically.
selectionColors[2] = 'green';
console.log(selectionColors);

// Note: In Js, type of Arrays is an Object.

// FUNCTIONS
function message(firstName, lastName) {
    console.log("Hello " + firstName + lastName);
} // we don't need (;) to declare it, because it's not a variable.

// Calling the function.
message('Akhilesh ', 'Thite');

/* Diff between parameter and argument.
 * At the time of declaring the function we pass "parameters" like firstName.
 * At the time of calling the function we pass an "argument" like Akhilesh. */

// Calculating with function.
function square(number){
    return number * number;
}

console.log(square(2));