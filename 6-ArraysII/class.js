const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Splice
// Splice is an array method that takes 3 arguments (the 3rd is infinite)
// 1st arg: startIdx -> where do I start doing my operation?
// 2nd arg: deleteCount -> How many elements should I remove?
// 3rd, 4th, ...args -> Insert these elements starting at the startIdx after deleting elements
// Splice returns the deleted elements -> returns the deleted elements inside a new array
// Splice is like a surgical knife on an array - we can add, delete, and look at what we've deleted.
// Mutative -> We are in fact modifying the array that we are working on.

const sampleArray = ['Chris', 'Miriam', 'Tim', 'Grace', 'Ellen'];

// Going to remove miriam from the array
// const Miriam = sampleArray.splice(1, 1);
// c(Miriam);
// c(sampleArray);
// c('End of first splice.');

// To add elements to the array.
// sampleArray.splice(1, 0, 'Miriam', 'Eliot');
// c(sampleArray);
// c('End of second splice');

// Remove and add elements simultaneously
// const oldValues = sampleArray.splice(0, 3, 'Oh hi mark');
// c('Array now: ', sampleArray);
// c('values captured during delete: ', oldValues);
// c('End of third splice');

// Anytime you mutate something, you should be cautious -> you never really know the implications of changing a piece of data across a larger codebase.
// Most of the time we do problems in class, we write 20 or less lines of code, so your generally pretty safe.

// Join combines elements by a passed in seperator
const classString = sampleArray.join(', ');
// c(classString);
// c(typeof classString);
// c(sampleArray);

// Join is frequently found in the company of its inverse
// .split -> split runs on a string, and breaks a string up by a seperator
const classArr = classString.split(', ');
// c(classArr);

const someRandomString = 'I want $100 for allowance';

// Regex - Pattern matching in strings
// Regex enables credit card verification -> matching the exact series of numbers allowed for different card types
const newString = someRandomString.split('$').join('#foreignCurrencySymbol#');

// c(newString);


// Concat
// It concatenates two arrays into one array. The array returned is a new array.

const newClassArr = classArr.concat(['Eliot']);
// c(newClassArr);

// Concat can be enormously useful in solving some problems.
// A great generalized use case is adding an array onto an element

const newerClassArr = ['Eliot'].concat(classArr);
// c(newerClassArr);

// Depth
// Depth is more complex then im about to explain it, but we're going to simplify for today.
// Depth means anytime we have an object within an object. We think of this as depth, because the iteration structures we have to use to traverse deep data structures involve multiple for loops, or multiple layers of the call stack. If we think of a for loop as traversing across an array from left -> right or right -> left. Then we can think about introducing depth as going top -> bottom. We have introduced a new axis.

// Grids
// Grids are any time we need an X/Y axis.
// Your screen. Screens actually have an x/y/z axis, because of window depth
// Your mouse.
// Camera.

let placedTreasure = false;

const makeRow = (width) => {
  const nextRow = [];

  for (let i = 0; i < width; ++i) {
    let didPlace = false;

    if (!placedTreasure) {
      if (Math.random() * 70 > 69) {
        nextRow.push('X');
        didPlace = true;
        placedTreasure = true;
      }
    }

    if (!didPlace) nextRow.push(i + 1);
  }

  return nextRow;
};

const makeGrid = (height, width) => {
  const nextGrid = [];

  for (let i = 0; i < height; ++i) {
    nextGrid.push(makeRow(width));
  }

  return nextGrid;
};

const ourGrid = makeGrid(10, 10);

// c(ourGrid);

// A grid is really just arrays inside of an array.

// Treasure Hunter
// I put an X in the grid. How do we find the X given the grid?
// Your school taught you x, y

const treasureHunter = (grid) => {
  for (let y = 0; y < grid.length; ++y) {
    const aRow = grid[y];

    for (let x = 0; x < aRow.length; ++x) {
      const aCell = aRow[x];

      // Template Literal -> It uses backticks, and in one we can use ${anyJavascriptWeWant} -> that javascript WILL BE COERCED TO A STRING
      // console.log(`X: ${x}, Y: ${y} || Value: ${aCell}`);

      if (aCell === 'X') {
        return `Treasure Found! Its @ X: ${x}, Y: ${y}`;
      }
    }
  }

  return 'No Treasure Found!';
};

// c(treasureHunter(ourGrid));

// In the case of not a grid and you need a nested loop, the standard is to use 'i' for the first loop, 'j' for the second, and 'q' for the third. After the third, good f'in luck. Dont end up there.
// Take my advice, and name each layer of a for loops element that its trying to inspect. EVEN if all you're doing is naming it in that for loop and then moving onto another for loop. I say this for two reasons:
// 1. Forcing yourself to think of an appropriate name for the current layer of depth, will help you keep in your mind what it is youre coding against.
// 2. Because any syntax that looks like thing[i][j][q] is freaking terrifying.

// There is a situation that we can now combine our tools for. Lets solve deepSummer

// deepSummer
// Sum all elements in an array, and its nested arrays.

const deepNums = [
  1,
  2,
  3,
  [
    4,
    5,
  ],
  6,
  [
    7,
    8,
  ],
  9
];

const deepSummer = (deepArr) => {
  let sum = 0;

  for (let i = 0; i < deepArr.length; ++i) {
    const aNumOrAnArray = deepArr[i];

    if (Array.isArray(aNumOrAnArray)) {
      for (let j = 0; j < aNumOrAnArray.length; ++j) {
        const innerNum = aNumOrAnArray[j];

        sum += innerNum;
      }
    } else {
      sum += aNumOrAnArray;
    }
  }

  return sum;
};

c(deepSummer(deepNums));
