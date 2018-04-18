const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// DONT LOOK ABOVE HERE DOESNT MATTER

// goto statement -> if you lived in the pre 80's and were a programmer
// goto doesnt exist in most languages anymore

// let counter = 0;

// I want to go up to 10, and i want to log every number until 10
// console.log(counter);
// counter += 1;
// if (counter < 10) goto 23;

// The above is highly deprecated - meaning unused modern day
// Because we invented 'Structured Programming'
// Structured programming says that all programs should be made of conditions (if, else), loops (for, while), and subsequences (function).
// The first ever loop was a while loop

// While Loops
// Go from 0 -> 10 and log every number

// let is allowed to change
// const stands for constant - meaning we cant change it
// var can be fully replaced by let

// The first odd thing about a while loop, is that we have to initialize its starting value, OUTSIDE OF IT e.g. counter
// counter is a seperate entity from the loop itself
// let counter = 0;

// you give a condition to end on - when the condition evaluates to false, this loop ends
// while (counter <= 10) {
//   // BODY
//   console.log(counter);
//   // We update the thing that makes the condition eventually evaluate to false
//   counter += 1;
// }

// In my comments ive said a while loop has: a initial state, a condition to end on, and an update getting it closer to the condition every time the body runs.
// Initialization
// Condition
// Update

// If i try to write a while without initialization
// undefined === non existent -> ReferenceError
// undefined === it exists, but we cant determine its value -> Garbage noise that doesnt make sense

// We needed the below line, the initialization
// let counter = 0;

// while (counter <= 10) {
//   console.log(counter);  
//   ++counter;
// }

// Condition

// let counter = 0;

// while (true) {
//   console.log(counter);
//   ++counter;
// }

// If we dont have a condition that we can get closer to, nothing works

// Update

// let counter = 0;

// while (counter <= 10) {
//   console.log(counter);
// }

// We need an update, or else, we cant convince the computer to end the loop

// All computer systems in all languages need the same three things to perform whats called:
// Iteration
// All iteration is comprised of initialization, condition, and an update.
// Is true of loops, recursion, and even more complex machine learning type self learning.

// While loops are fine, but we obviously use something more modern.

// For loop.
// They took the while loops capabilities but they did something interesting with how we FORMAT it.

// 0 -> 10, log em

//   init     ; cond   ; update
// for (let i = 0; i <= 10; ++i) {
//   console.log(i);
// }

// Should I ever use a while loop?
// 95% of the time a for loop will be superior, but while loops have their days

// do while
// im a while loop, but ill make you an extra promise: I promise to run atleast once

// do {
//   console.log('Hello!');
// } while (false);

// Some people prefer while loops when performing mutation

// const anArray = [1, 2, 3, 4, 5];

// // I want to log each number then remove it from the array

// while (anArray.length > 0) {
//   console.log(anArray[0]);
//   anArray.shift();
// }

// Something to point out about for loops

// There is no real rules to what you can put in each argument of a for loop
// I said: 'a for loop is a really well structured while loop'
// Best practices in coding are so profound around for loops youve never considered using them another way.
// You probably use 'i'
// A for loop is only as good as the practices you apply to it.
// You need to remember, to intialize at a reasonable starting instance, to end at the proper moment, and to make sure your update gets you closer.
// logging hello again, does not get us closer
// saying hi, is not a starting point,
// and relying on random numbers is a terrifying condition
// for (console.log('hi'); Math.random() * 1000 > 200; console.log('Hello again')) {}

// Generally, we follow the i, j, q law for for loops which is the first loop is 'i', the second 'j', and the third 'q'
// We always increment the variable we initialized.
// The only thing that really changes, is the condition

// The reason for this is that start and end are kind of philosophically meaningless, as long as we do the proper amount of times

// for (var i = 0;  ; ++i) {

// }

// Continue vs Break vs Return

// I am going to debunk the need for anything except return

// Continue: continue is a word we can use inside a for loop to say "I want to skip this iteration"
// for (let i = 0; i <= 10; ++i) {
//   // i want to not log every odd number
//   let isEven = i % 2 === 0;
//   if (isEven) continue;
  
//   console.log(i);
// }

// I and others have a term for continue and things like it: an antipattern
// The whole promise of a for loop is to run a certain amount of times, continue breaks that promise

// Break: break is like... hardcore continue. When we say break we are saying 'Exit this for loop entirely'

// Lets write a function that logs every number between 0 and something we pass to it.

// const logAllNums = (maxNum) => {
//   for (let i = 0; i <= maxNum; ++i) {
//     console.log(i);
//   }
// };

// logAllNums(5);

// Break is an anti-pattern because the whole promise of a for loop is to run till conditions end, not to break out of some condition by some arbitrary ruling

// Return - return is magical and your best friend in the world
// return: return is meant to end a function immediately, and to bring some value out of the function with it

// const logAllNums = (maxNum) => {
//   var sum = 0;

//   for (let i = 0; i <= Infinity; ++i) {
//     console.log(i);
//     sum += i;

//     if (i >= maxNum) return 'Done! Sum of all nums logged is ' + sum;
//   }
// };

// console.log(logAllNums(5));

// TLDR: Try to use for loops generally - use i - start at 0, and increment by 1 regardless of problem (for the most part) - and change the condition as neccessary.
// Return is a really good tool to start using for two big reasons: It helps us code in a DRY way (Dont Repeat Yourself (stupid)), and it will help us start writing our code as composable functions.

// Anti-Patterns
// Yesterday we spoke about linting: linting is a pattern - we try to code a way others can read using specific rules because, well, people like reading clean code.
// An anti-pattern in that regard would be disregarding the many agreed upon conventions - doing things like mixing spaces and tabs, and refusing to indent some parts of your code and not others, and mixing and matching semi-colon usage
// But at a more meta-level anti-patterns are anything that break an established foundation for WHY WE DO THINGS A CERTAIN WAY.

// I called break and continue anti-patterns because they disrupt the entire premise of using a for loop. They enable us to break the condition that we wrote.
// Return seems like it does - but in truth it does not. Return is not ending the loop - its ending the function. Ending a function is returns job, the fact that a for loop gets killed in the process is just collateral.


// What is the difference between an arrow function and a function declaration
// e.g. function someName () {} vs const someName = () -> {}

// This is an astonishingly difficult question to dive deep on
// Function Declarations do a very weird thing:

// We want code to be like a book, we read it top down left to right. Period.
// This phenemenon is called 'hoisting' were gonna talk about it
// someName();

// function someName () {
//   console.log('hi');
// }

// Wont work below for GOOD reasons

// someName();

// const someName = () => {
//   console.log('hi');
// }

// this

// this does not behave differently inside of an arrow function, it behaves massively different inside of the functions youre used to writing
// I am saving you months of pain right now by saying start writing arrow functions
// Lexical binding
// this is a magic word that has all sorts of behaviors based on where we say it

// The big one sentence thing for most of ES6's changes: We're protecting new developers from highly complex problems if they stick to ES6.

// function someName () {
//   console.log('I do a really important thing.');
// }

// // 1000 lines of code later

// someName = 'pancakes';

// someName();

