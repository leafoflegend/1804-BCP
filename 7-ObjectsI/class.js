const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Feign an Array

// const objArray = {
//   '0': 'hi',
//   '1': 'eliot',
//   'length': 2,
// };

// Arrays are a great example javascript gives you of object usage,

// Lets do a more real world one

// I want to create a javascript database and system for logging in and out of a site, and signing up

// Logging In (to anything)
// First name, last name, email address, password
// username/password

// const fakeDB = {
//   'tim@tim.com': 'password',
// };

// Does this user even exist?
// You are the one helping a website figure out how to find you.
// Thats what a username is. Its not to give you a cool pseudonym like dankwarrior6754, its so that we can locate you in O(1) time.

// Objects are O(1) -> Regardless of size, objects take 1 unit of time. That doesnt mean a success, that means success/failure.
// const logIn = (username, password) => {
//   console.log('Running again!');

//   if (fakeDB[username]) {
//     console.log('Found user!');
//   } else {
//     console.log('Did not find user!');
//   }

//   console.log('Done!');
// }

// If i was a bad guy working for a company with access to a database, I can see all your passwords
// Even worse, someone hacks in or social engineers their way in
// Equifax
// const arrayFakeDB = [
//   {
//     username: 'miriam@miriam.com',
//     password: 'password',
//   },
//   {
//     username: 'chris@chris.com',
//     password: 'password',
//   },
//   {
//     username: 'tim@tim.com', 
//     password: 'password',
//   },
// ]

// Arrays took the number of elements inside of them * unit of time. Here it took O(n) where n was 3 so O(3)
// const arrayLogIn = (username, password) => {
//   let foundUser = null;

//   for (let i = 0; i < arrayFakeDB.length; ++i) {
//     const currentUser = arrayFakeDB[i];

//     console.log('Looking again!');

//     if (currentUser.username === username) {
//       console.log('Found user!');
//       foundUser = currentUser;
//     }
//   }

//   if (!foundUser) console.log('Did not find user!');

//   console.log('Done!');
// }

// logIn('eliot');

// Arrays are convenient, at the cost of performance
// Objects are inconvenient, at the benefit of performance

// Using the object to outperform the array, involved me utilizing something that has nothing to do with computers.
// YOU
// The trade i just made was that the computer does less work, because you a human are doing that work for it.

// Imagine facebook, I have 3 billion users. Am i about to loop over 3 billion items in an array?

// Hash Table - Data Structure
// When we build a data structure that does not exist natively in a language

const hashDB = {};

// A hash is when we take any input and we change it to some unknown to anyone except the implementer of the hash - key
// the only rule about the hash, is that given a it can always return b.
// That means when i give it eliot the first time, it must return the same thing the first time, as the second time.
const hash = (aStr) => {
  let newHash = '';
  const salt = 'pink';

  for (let i = 0; i < aStr.length; ++i) {
    const currentChar = aStr[i];

    let currentCharCode = currentChar.charCodeAt(0);

    currentCharCode += salt;

    newHash += currentCharCode;
  }

  return newHash;
};

const signUp = (username, password) => {
  username = hash(username);
  password = hash(password);

  if (hashDB[username]) {
    console.log('This user already exists!');
    return false;
  }

  hashDB[username] = password;

  console.log('Success!');
  return true;
};

const logIn = (username, password) => {
  username = hash(username);
  password = hash(password);

  if (!hashDB[username]) {
    console.log('This user does not exist! Please sign up.');
    return false;
  }

  if (hashDB[username] === password) {
    console.log('Success! You are logged in.');
    return true;
  }

  console.log('Wrong password! Please try again.');
  return false;
};

// signUp('eliot', 'password');
// signUp('miriam', 'password');
// signUp('grace', 'password');

// logIn('eliot', 'passwrd');

// c(hashDB);

// Objects can be really powerful when used the right way. (theres no such thing as right, but perhaps in interesting ways)

// typeof

// c(typeof {});

// An Object Literal

const newObj = {
  a: 1,
  b: 2,
};

// Create an Object through Assignment

const anotherObj = {};

anotherObj.chris = true;
anotherObj['ellen'] = true;

// console.log(anotherObj);

// General access of an object
// Prefer dot notation, and use bracket notation where neccessary

// anotherObj.chris;

// const someArr = [1, 2, 3, 4, 5];

// for (let i = 0; i < someArr.length; ++i) {
//   const curEl = someArr[i];

//   console.log(curEl);
// }

const aObj = {
  eliot: true,
}

const checkIfKeyExists = (key) => {
  if (aObj[key]) {
    return true;
  } else {
    return false;
  }
}

aObj.chris = true;
aObj['miriam'] = true;

// delete aObj.chris;

// console.log(aObj);

// the in operator checks for a key in an object

// for in
// for in allows us to look at every key inside an object

// for in is very traditional and can be found in a lot of languages in some capacity
// for (let key in aObj) {
//   const value = aObj[key];
//   console.log(`${key}: ${value}`);
// }

// A lot of javascript developers opt for some other tooling
// Object methods

// The object methods enable us to turn objects into array structures so that we can use all those handy dandy array methods that you all are becoming comfortorable with.

// Object.keys -> ES5: Take all keys in an object and put in an array.
// const objectKeys = Object.keys(aObj);
// console.log(objectKeys);

// for (let i = 0; i < objectKeys.length; ++i) {
//   const curKey = objectKeys[i];
//   const curValue = aObj[curKey];

//   console.log(`${curKey}: ${curValue}`);
// }

// ES6

// Object.values
// It takes all values in an object and puts them in an array.

const objValues = Object.values(aObj);
// console.log(objValues);

// If you need the keys for some reason, theres no backtracking a value to the key it came from.

// Object.entries
// Entries returns an array with the key value pair at each key value pair in an object.

const objEntries = Object.entries(aObj);
console.log(objEntries);

// Object.entries completely neuters an object and transforms it into an array of arrays. If you feel like a god of arrays (or goddess) then  this is the perfect function for you. AS you can tell, sometimes dealing with nested arrays can be difficult, this will often mean a nested for loop.

for (let i = 0; i < objEntries.length; ++i) {
  // Array spreading
  const [key, value] = ['eliot', true];
  // const currentEntry = objEntries[i];

  // const key = currentEntry[0];
  // const value = currentEntry[1];

  console.log(`${key}: ${value}`);
}
