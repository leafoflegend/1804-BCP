const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

const anArray = [1, 2, 3, 4, 5];

// When we talk about methods on an array
// Were talking about all that 'built in functionality'
// length (property), slice (method that clones), indexOf (method that finds), push, pop (modify the contents)
// They all affect the thing we say '.' on.

anArray.push(6);

// console.log(anArray);

// Methods have the ability to look at the value they are called on.

function myIndexOf (anArr, searchTerm) {
  for (let i = 0; i < anArr.length; ++i) {
    const currentEl = anArr[i];

    if (currentEl === searchTerm) return i;
  }

  return -1;
}

// anArr

// anArray.indexOf(3)
// -> .indexOf does take a startIdx
// -> comes with javascript, on every array
// vs 
// myIndexOf(anArray, 3)
// -> did not build that here

// indexOf is a method, myIndexOf is not
// methods get called with dot notation
// methods understand how to operate on the data they are supposed too

// whereas in functions, we tell the function what it is operating on?

// const classroom = {
//   miriam: 'frank',
//   christopher: 'underwood',
//   grace: 'hopper',
//   ellen: 'bacerra',
//   tim: 'a',
// };

// At this point the object is comprised solely of data.
// What we havent done, is teach it behaviors.

// How might we teach classroom to tell us the start time of class?
// Further, how might we teach classroom, to tell us if we are late or not?

// Our first method

const classroom = {
  miriam: 'frank',
  christopher: 'underwood',
  grace: 'hopper',
  ellen: 'bacerra',
  tim: 'a',
  classSize: 5,
  sayClasstime: function () {
    console.log('Class starts at 6:40 PM EST.');
  },
  lateOrNot: function (time) {
    if (time > 1840) {
      console.log(`You are late!`);
    } else {
      console.log('You are not late!');
    }
  },
  sayClassSize: function () {
    console.log('The classes size is', this.classSize);
  },
  getThis: function () {
    console.log(this);
  },
  getNames: function () {
    const myKeys = Object.keys(this);
    const studentArr = [];

    for (let i = 0; i < myKeys.length; ++i) {
      const curKey = myKeys[i];
      const curValue = this[curKey];

      if (typeof curValue === 'string') {
        studentArr.push(`${curKey} ${curValue}`);
      }
    }

    return studentArr;
  },
};

classroom.sayClasstime();
classroom.lateOrNot(1900);

// Can we add a method that says the classSize?

classroom.sayClassSize();
// classroom.getThis();

// I want to log all students names.

c(classroom.getNames());

// This in our case is easiest understood as 'if i say this, i am referring to the object that i belong to as a method'. In this case, getNames is a property of classroom. Because classroom owns getNames, this refers to classroom.