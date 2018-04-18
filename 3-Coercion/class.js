const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

let someBoolean = true;
// its a boolean and its true

// if (the test expression) - means that if whatever we put in the parenthesis is TRUE then we do the thing in the brackets following.
// if (someBoolean) {
//   console.log('Hi!');
// }

// 'eliot' is true
// Why is 'eliot' true?
// Theres a list of false things - and 'eliot' isnt on it
// if ('eliot') {
//   console.log('Hi!');
// }

// If there was nothing put in the if statement, it would be false
// if (null) {
//   console.log('hi');
// }

// What exactly is an if statement doing?
// To create logic gates - that point us down different paths of executing code based on whether what is in their TEST EXPRESSION evaluates to TRUE or FALSE.
// 'evaluates to true or false'
// if statements, NEED to evaluate to true or false.
// if either runs or does not run - there is no in between.
// Yesterday we learned there are three kinds of errors: Reference, Type, and Syntax - and none of the three of these are If errors. Thats because If can't error. The only thing we cant do with an if statement is give it absolutely nothing.

// if (function () {}) {
//   console.log('hi!');
// }

// if (new Date()) {
//   console.log('bye');
// }

// Because Javascript NEEDS if statements to run, it does everything in its power to COERCE the data we give an if statement into TRUE OR FALSE.

// All values in Javascript are either true or false. Period.
// Were not going to learn all of the true values in Javascript. Heres why: there are like 8 trillion. I cant teach you them.

// But, there are only 6 false values. And anything that isnt false, is true. So if we memorize the following list, we know every single true and false value.

// null
// undefined
// 0
// false
// ''
// NaN

// These are the only things that will ever evaluate to false should we force them too.
// That means every other value ever is truthy.

// Where does evaluation occur?
// Anywhere we make a test expression - a test expression is anytime we use parenthesis and we are trying to return true or false out of them.

// for (first; Test Expression; next)

// while (Test Expression)

// if (Test Expression)

// We can force test expressions other places... but those are a bit rarer.

// Lastly, there is a very fun famous hack in javascript to discover the coerced true/false value of any value.

// !false -> anytime we use an exclamation mark, we are reversing the truthiness of a value.

// if (!false) {
//   console.log('hi');
// }

// if !false === true, then !!false === false.
// if !0 === true, then !!0 === false.

// So in short, we can add two bangs to any value to discover its coerced value.

// console.log(!!0);

// Explicit Typing
// if (someBoolean === true) {
//   console.log('hi!');
// }

// // Implicit Typing
// if (someBoolean) {
//   console.log('bye!');
// }

// Primitive Types
/*
  ES5
  number
  string
  boolean
  undefined
  null
  ES6
  symbol
*/

// What is a number?
// Anything we can perform mathematical operations on

const aNum = 5;

// In other languages, numbers arent this simple

// int
// double
// float

// In most programming languages we want to be able to conserve memory. That means using up as little space as possible. In computers we use something called binary 'under the hood' im not going to teach you binary dont worry, but i can give a quick example of how this scales

// 0: 0
// 1: 1
// 2: 00
// 3: 10
// 4: 01
// 5: 11
// 6: 000

// The fact that numbers take up more space the larger they get is important, it means that when we declare a variable to store a number, the computer needs to reserve a set amount of space for it.

// Javascript cant do any number. Thats because Javascript ALWAYS makes a tradeoff that Im going to admit to you for the first time:
// Anytime javascript has to choose performance or convenience, Javascript chooses convenience. Thats why its the number 1 language.

// You dont have to think about what kind of number you want to store. Decimal, negative,, integer, big number, blah, doesnt care. The tradeoff is it caps out.

// This is the largest possible number in javascript, because thats the max amount of space a variable has available to discuss numbers.
// console.log(Number.MAX_SAFE_INTEGER);

// 99.9999% of numbers are below that for our daily use cases.

// Numbers are dealt with by operations, the following operations exist:
/*

 *
 /
 +
 -
 **
 Theres more on the Math object

*/

// console.log(Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER);

// Strings
// Collection of characters

// A string is the only primitive comprised of smaller pieces.

// Strings are comprised of something called characters - characters dont exist in Javascript, they exist on your operating system. Characters come in many formats, the old way was ASCII, the new way is Unicode because we love our smiley faces.

const copCar = '🚓';

console.log(copCar);

// Javscript will take a collection of 'codes' and put them together into a thing. that thing is called a string.

// console.log(copCar.charCodeAt(0));

// So the fact that strings are comprised of smaller entities opens up some interesting questions: 'how do we deal with the smaller units?' and 'how do we modify units of a larger collection?'

// Strings have something called bracket notation which comes from objects
const aString = 'hi miriam';

// console.log(aString[2]);

// Strings also come with a large bevy of methods:
/*
 toUpperCase
 toLowerCase
 slice
 substr
 substring
 charAt
 charCodeAt
 ... literally 30 more
*/

// Strings also have operations but we cant confuse them with maths operations
// You can use the + symbol to concatenate a string
// console.log('hi ' + 'miriam');

// Booleans
// Not a lot to say, booleans are true and false. They are self explanatory.

// Undefined
// undefined IS NOT NULL. Undefined is a value placeheld by Javascript to refer to memory addresses that we have declared that do not have a value.

// var somePlace;

// console.log(somePlace);

// Things that we create, that we give no value to, are undefined. DO NOT USE UNDEFINED FOR ANY OTHER PURPOSE AT ALL. LET JAVASCRIPT KEEP IT TO ITSELF.

// null
// null is a placeholder for things that should receive a value in the future. This is often a great replacement for the use of undefined. null is something we can also use to keep our code clean and free of the need to debug further then we need to. If we see null in an error, we know we made it. If we see undefined in an error, we know the system made it. Seperating these two is very very very important for your sanity.

// let future = null;

// if (true) {
//   future = 'good';
// }

// Those are all the primitives.

// Now for the killer question after learning about primitives and coercion:

// What happens below:
// console.log(4 + '4'); // => 44

// This isnt good.

// this ^ is called implicit coercion. Its when we dont explicitly define what type of thing we want at the end. This is a big no no, and is one of the most frowned upon parts of javascript, is anytime coercion results in something hard to predict.

// 58 pages written in the ECMAScript specification about how implicit coercion is meant to operate. You could... read all that, try to memorize, and write code like this...

// Or you could be very explicit with your code and get expected results all the time.

// This below while lengthier is absolutely the BEST PRACTICE. This makes clear to every single programmer who ever looks at your code (including yourself) what your code is doing. It is either concatenating, or it is adding. There is no doubt.
// console.log((4).toString() + '4')
// console.log(4 + parseInt('4'));

// Dont use implicit coercion.

// Implicit Coercion
// After coercion are these the same?
// ==

// Explicit Coercion
// Without coercion are these the same type and value?
// ===

// console.log(0 == '');

// Dont use double equals.

// As a programmer your job is to be as specific as possible in solving problems. You define specific results given specific conditions, and there is no room for variadics when it comes to peoples money. Do NOT USE THINGS YOU DO NOT UNDERSTAND.
// No implicit coercion is something that will save you.


// Logical Operators
// Logical Operators are going to combine the results of the many different test expression evaluations. These will follow their mathematical principles

// && -> all must be true
// || -> one must be true


