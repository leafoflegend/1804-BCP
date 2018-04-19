const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Scope Introduction

// First: Does log
// function myName () {
//   let aName = 'Eliot';
//   console.log(aName);
// }

// myName();

// Second: Does log
// let aName = 'Eliot';
// // Universe

// function myName () {
//   console.log(aName);
//   // Earth
// }

// myName();

// Third: Doesnt log
// function myName () {
//   let aName = 'Eliot';
// }

// myName();

// // aName doesnt exist when i call console.log
// console.log(aName);

// In the third one, console.log is not in the brackets - Im going to call this the 'function body'

// Functions arent neccesarily needed to see this concept in action
// let aName = 'Eliot';
// console.log(aName);

// The creation of different scopes

// The only thing that can create a new scope, is a function

// let globalVar = 'global';
// // Global

// function outerFunc () {
//   let outerVar = 'outer';

//   console.log('globalVar: ', globalVar);

//   function middleFunc () {
//     let middleVar = 'middle';

//     console.log('outerVar: ', outerVar);

//     function innerFunc () {
//       let innerVar = 'inner';

//       console.log('middleVar: ', middleVar);

//       function finalFunc () {
//         console.log('innerVar: ', innerVar);
//       }

//       finalFunc();
//     }

//     innerFunc();
//   }

//   middleFunc();
// }

// outerFunc();

// The rule seems to be that its safe to access any variable that is in a scope containing us.
// We cannot access a more specific scope.
// I said that 'return' was magical. Now... what seems to be the solution to getting data from one scope to another? Its return.

function earthScope () {
  function statesScope () {
    let numOfStates = 50;

    // Return enables us to return data from one scope to another
    return numOfStates;
  }

  // But we still have to store that data.
  let numOfStates = statesScope();

  console.log(numOfStates);
}

// earthScope();

// let globalScope = 'HERE';

let someNum = 5;

// let stringNum = String(5);

// Where did String come from?

// There are things that are 'injected' into our scope the moment our program starts

// These are some globals
// Array
// String
// Number
// Boolean
// function

// Global scope is the highest possible level of scope enabled in the current environment

// This whole scenario was about asking for already created data, but the scarier scenario, is when we try to set data.
// Does the root scope now about a person?
// No, im really sorry, and thats the last place it could be.
// ReferenceError
let person = 'Jillian';

// If we get here, and we are trying to set data, and we havent found it - we do a very scary thing.

// Was it passed as an arg into proxFunc?
function proxFunc (/* Nope! */) {
  // Hey memory! Do you know about a person inside of proxFunc?
  // It thinks it might be right here.
  // Memory: 'Nah bruh.'
  // let person = 'Bill';

  // Is it an arg of innerFunc?
  function innerFunc (/* Nah */) {
    // Hey memory! Do you know about a person inside of innerFunc?
    // It thinks it might be right here.
    // Memory: 'Nah bruh.'
    // let person = 'Bob';

    // Hey! Memory, did you get passed an argument named person?
    // Nope!
    function finalFunc (/* person */) {
      // Hey memory! Do you know about a person inside of finalFunc?
      // It thinks it might be right here.
      // Memory: 'Nah bruh.'
      // Scenario 1: Ask for data.
      // console.log(`Help me ${person}!`);
      // Scenario 2: Set data
      // Im suggesting to javascript that 'person' already ecists in an upper scope.
      person = 'Jenna';
      // console.log(person);
    }

    finalFunc();
  }

  innerFunc();
}

proxFunc();

// Anxiety Attack
// When we deal with scope, its all about proximity
// Im having an anxiety attack because i think i lost my asthma inhaler
// i look on the desk, not there
// i go to the living room, and look, not there
// i go in the car in the driveway, not there
// i call my parents and ask them, they say no idea
// i call my best friends, they dont pick up
// -> Everything above this, is kind of the scope of our lives

// Emergency room - You call the police

// What are the police in javascript?

// The police are your operating system.
// When we tell javascript to go set data, and it doesnt know about that data, it takes that data to the OS, and says - 'deal with it'.
// Yes, we do all the worst things you can imagine in this situation, but dont take my word for it

// DONT EVER FORGET TO DECLARE YOUR VARIABLES
// There are times you'll need to use this syntax (its called Global Search Syntax - which is when we go looking for a thing somewhere in the scope)
// You need to be extremely cautious and be sure, that that variable exists in some upper scope.

// The whole point of variable declarations e.g.

// const
// let
// var
// function

// Their only purpose in the world, is us saying to the computer 'I need new memory to store something at'
// 'new'
// They actually arent anything on their own, except for a memory address

// var somePlace;

// console.log(somePlace);

// The only thing that creates new scope is a function
// The thing that changed that is one thing: 'let'

// The difference between let and var is something called block scoping which can be exemplified quite quickly

// This isnt a function. We did not just create scope.
// if (true) {
//   var thing = 'found me!';
// }

// console.log(thing);

// Let says: "I am a variable, but whatever my closing brackets around me are - thats a new scope."
// This wasnt a lightly made decision, we decided on this, because sometimes we want things like a for loop to have their own scope.
// In an everyday kind of way - this should have little to no impact on you. Use let for everything, the benefits far outweigh the cons.
// if (true) {
//   let thing = 'found me!';
// }

// console.log(thing);

// Closure
// Closure is the process of creating isolated, private scopes that cannot be accessed by anything except their original creator.

function createCounter () {
  let counter = 0;

  function increment () {
    ++counter;
    console.log(counter);
  }

  // If i was ever allowed to access a scope, i always am.
  return increment;
}

// I return that function out here to the outer scope, and it maintains access to that old scope
// We call this process: 'closing over the scope'
const ourCounter = createCounter();

// Private method
ourCounter();
ourCounter();
ourCounter();
