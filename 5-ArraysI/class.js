const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Arrays
// Arrays are an ordered collection of values
// - What about all those functions they have? Like slice, and splice, and push, and pop...
// Yes... but those have nothing to do with WHAT an array is

// What are the ways we know in Javascript to store a collection of values?
// An Array
// A string
// An object

// Were always going to need the ability to group values together
// 1. How our brains think: we like to group things
// 2. Sometimes we want to perform operations that involve groups
let student = {
  name: 'Eliot',
  id: '10927309123',
  age: 37,
  classes: [],
};

// In most languages, this is the only sort of structure you would be given for collections - some sort of OBJECT
// Different languages call it different things, in OOP - we might call this a class, in FP - an object, and in some older languages, just a memory pointer

// I want to store multiple student objects, and i want you to find out the oldest and youngest person in the class.
// This is pretty hard using a normal object

let students = {
  eliot: student,
  miriam: student,
};

// Its very difficult to iterate over that
// The whole way we iterate relies on a very important assumption

// We 1: assume were given a length representing the SIZE of a collection
// 2: We use the number to access a certain key

// Arrays make two promises to us:
// They promise us an order, and that insertion will be concurrent
// They update an internal value representing their length every time we use an array method
// 'Under the hood' arrays are just POJO's (plain ol javascript objects) like the one i made below.
// let someCollection = {
//   // key: value,
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
// };

// for (let i = 0; i < someCollection.length; ++i) {
//   let currentThing = someCollection[i];

//   console.log(currentThing);
// };

// Arrays build objects with keys that we know beforehand. We know when we make an array the keys are ordered 0 -> N where n is the number of elements in the array
// Using this single assumption of order, we have built massive for loops, and methods, and structures around it that enable us to easily deal with and move over collections.

/*
// ourFirstArray = {
//   // key: value,
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   ...methods
// };

// These are available in almost all languages
push - pushes an element into the array at its end. Adds one to the length, and uses length - 1 as the key.
pop - removes the element at the end of the array, removes one from the length, and returns the element back.
length - is an API exposing the internal length of any array, javascript does its best to keep this updated.
shift - shift removes the first element in the array, it then reorders the rest of the array down 1.
unshift - inserts an element as the first element in the array, it then pushes out every other elements key.

*/

// const ourFirstArray = ['a', 'b', 'c'];

// ourFirstArray.push('d');
// c('After push: ', ourFirstArray);

// c('Return from pop: ', ourFirstArray.pop());
// c('After pop: ', ourFirstArray);

// c('Return from shift: ', ourFirstArray.shift());
// c('After shift: ', ourFirstArray);

// ourFirstArray.unshift('z');
// c('After unshift: ', ourFirstArray);

// typeof is supposed to return the type of data that you place after it
// The return value of typeof will always be a string
// typeof does not always give us the best answers
// c(typeof []);

// const isThisAnArray = (maybeArr) => {
//   return typeof maybeArr === 'object' && typeof maybeArr.length === 'number';
// }

// c(isThisAnArray({}))

// The way you can use this utility function is by:

// c(Array.isArray({}));

// Bracket Notation
// anArray[i] -> This is just us passing a string

// There are two ways to access data in ANY OBJECT IN JAVASCRIPT
// Dot and Bracket Notation

// const someObj = { name: 'Grace', 1: 'Chris' };
// c(someObj.name);
// c(someObj.1); => doesnt work javascript interprets as a bad number
// Anytime we run into a situation where we cant use DOT notation due to the character we need to use, we have to use bracket notation
// BRACKET notation is a way to force javascript to interpret its contents as a string. All keys in all objects are strings.
// c(someObj['1']);
// c(anArray[i]);
// Bracket notation allows us to pass variables into it so that it can be interpreted in runtime.

// Anytime we use a key inside brackets we have the ability to both read and write to the array. So we can overwrite whatever data was at that key using this.

const ourFirstArray = ['a', 'b', 'c'];

// ourFirstArray[1] = 'Tim';
// c(ourFirstArray);
// This is fine, but we need to be cautious about directly accessing arrays.
// Remember when I said Javascript does its best to update length and the keys in an array... this is one way to break that.
// ourFirstArray[10] = 'Eliot';
// c(ourFirstArray);
// c(ourFirstArray.length);
// BAD ^

// Generally what we want to do is use an arrays methods so that we dont accidentally break the array

// ourFirstArray.push('Eliot');
// c(ourFirstArray);
// c(ourFirstArray.length);
// The short lesson is just be careful about directly accessing indexes in an array, and try to use the methods arrays supply to you to do it.

// indexOf
// A function that tries to find the index that contains a value you passed in, will return -1 if it does not find anything
// indexOf is a very powerful function, and it works across strings and arrays so you can use it to search many kinds of collection.
c(ourFirstArray.indexOf('d'));

// The reason for -1 is that you expect a number as a return value, and 0 is taken by the 0th index of the array so it couldnt return that as false

// Slice
// slice creates a shallow copy of an array, dont worry about shallow right now, well come back to that
// But slice is really useful if you want to avoid changing an array -> just make a copy first then change the copy

// Take an array of letters and return an array of every a being a z

const changeAToZ = (anArr) => {
  const copyArr = anArr.slice();

  for (let i = 0; i < copyArr.length; ++i) {
    const currentElem = copyArr[i];

    if (currentElem === 'a' || currentElem === 'A') {
      copyArr[i] = 'z';
    }
  }

  return copyArr;
};

const noAArray = changeAToZ(ourFirstArray);

// ourFirstArray.reverse();
delete ourFirstArray[1];

c(ourFirstArray);
c(noAArray);
