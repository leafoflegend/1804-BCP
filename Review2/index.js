const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Why ++i and not i++?

// const addOne = (aNum) => {
//   // returning is an operation. We return 1 before we add 1 to 1.
//   // If we do ++aNum, then we add one, then we return.
//   return aNum++;
// };

// c(addOne(1));

// i++ - is Post-Incrementation, that means that we add one after all other operations have completed.
// ++i - is Pre-Incrementation, that means taht we add one before any other operation has begun.
// Best practice is use things that behave a way we can consistently understand, so I pre-increment because i dont want ot think about operation order.

// i++, is because every other language this means literally just add one.

let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

const callEmAll = (anObj, arg) => {
  const results = [];

  for (let key in anObj) {
    const value = anObj[key];

    if (typeof value === 'function') {
      const funcVal = value;

      const funcResult = funcVal(arg);

      results.push(funcResult);
    }
  }

  return results;
};

// c(callEmAll(addsNums, 100));

// Higher Order Functions
// Functions are actually just objects. That means we can pass them into functions, return them out of functions, store them in arrays, and objects, and even rename them, clone them, anything you can do with an object.

const addOne = aNum => aNum + 1;
const timesTwo = aNum => aNum * 2;
const stringifyNum = aNum => aNum.toString();
const modifyString = aStr => `The final result is: ${aStr}`;

const funcArray = [addOne, timesTwo, stringifyNum, modifyString];

const composeFuncs = (anArg, funcs) => {
  let curResult = anArg;

  for (let i = 0; i < funcs.length; ++i) {
    console.log(curResult);

    curResult = funcs[i](curResult);
  }

  return curResult;
};

// c(composeFuncs(1, funcArray));

// Composition is enormously powerful and is something most OOP languages cant do. This is something that makes Javascript very strong.
// Its also a fundamental concept in a pattern of programming called FP: Functional Programming.
// Functional programming tends to be loved by more mathematical people.

// Sudoku

// Part 1

/*
To start, using an empty CodePen or repl.it, write the following functions:

getRow: This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function should return an array containing the numbers in the specified row.

getColumn: This function should accept a sudoku grid and a column index. The function should return an array containing the numbers in the specified column.

getGrid: This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function should return an array with all the numbers in the specified subgrid.
*/

const getRow = (aGrid, rowIndex) => {
  return aGrid[rowIndex];
};
