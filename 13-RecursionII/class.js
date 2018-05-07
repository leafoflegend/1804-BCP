const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// The Best Way to Test Recursion against deep structures is to ensure that the recursive function also works on a flat structure.

const crazyArray = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]];
// Log everything in this array
const flatArray = [1, 2, 3, 4, 5];

const logAll = (anArr) => {
  // Base Case is: I have traversed left to right and top to bottom over everything
  for (let i = 0; i < anArr.length; ++i) {
    const currentElem = anArr[i];

    // Recursive Case
    // When do I need to call this function again?
    // The currentElem is another array.
    if (Array.isArray(currentElem)) {
      logAll(currentElem);
    } else {
      console.log(currentElem);      
    }
  }
};

// logAll(crazyArray);

// Concat Els : Any and all strings should be concatenated regardless of depth in an array.

const crazyStrCollection = [
  'a',
  'b',
  ['c', 'd'],
  ['e', ['f']],
];

const flatStrCollection = ['a', 'b', 'c'];

const concatEls = (aCollection) => {
  let concatString = '';

  for (let i = 0; i < aCollection.length; ++i) {
    const currentElem = aCollection[i];

    if (Array.isArray(currentElem)) {
      concatString += concatEls(currentElem);
    } else {
      concatString += currentElem;
    }
  }

  return concatString;
};

c(concatEls(crazyStrCollection));

// Sum Vals : Take an object and sum all number values within it.

const flatNumObj = { a: 1, b: 2 };
const crazyNumObj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: {
      g: 5,
    },
    h: 6,
  },
  i: 7,
};

const sumVals = (anObj) => {
  let sum = 0;

  const objValues = Object.values(anObj);

  for (let i = 0; i < objValues.length; ++i) {
    const curVal = objValues[i];

    if (typeof curVal === 'object') {
      sum += sumVals(curVal);
    } else {
      sum += curVal;
    }
  }

  return sum;
};

console.log(sumVals(crazyNumObj));
