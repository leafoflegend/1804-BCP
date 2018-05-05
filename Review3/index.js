// Group Sum (bonus)
// This is a bonus problem that is more challenging than the problems you will encounter as an applicant to a competitive bootcamp. Apply help tickets liberally!

// Given an array of numbers and a non-zero target number, is it possible to choose a group of some of the numbers, such that the group sums to the given target?

// groupSum([2, 4, 8], 10); // => true, because 2 + 8 = 10
// groupSum([2, 4, 8], 9); // => false, because no combination of 2, 4, and 8 equals 9

// Deep Searching - How do I traverse a deep object looking for something?
// Linear Aggregation - How do I accumulate values recursively?
// Falsification - How do I disprove something given an unknown size and/or shape of data to disprove it with?

// Logical Branching - We traverse possibilities.
// MiniMax -> When you look some amount of time ahead and point which moment in time leads to the most optimal moment.
const groupSum = (anArr, target) => {
  // It adds up to the target
  if (target === 0) return true;
  if (!anArr.length) return false;

  // Brute -> Lets go search down the array linearly
  const currentNum = anArr[0];
  const restOfNums = anArr.slice(1);

  // I am subtracting the first number from the target, and passing the rest in.
  const bruteResult = groupSum(restOfNums, target - currentNum);

  if (bruteResult) return true;
  
  // Escape -> Some path failed, how do I ensure we go down an alternate path as I reverse my history?
  const escapeResult = groupSum(restOfNums, target);
  
  return escapeResult;
};

// groupSum([2, 4, 8], 10); // => true, because 2 + 8 = 10
// groupSum([2, 4, 8], 9); // => false, because no combination of 2, 4, and 8 equals 9

// ^ Is not a pattern you recognize

// Linear -> Sum an array.

const numberArray = [1, 2, 3, 4, 5];

// This pattern will also include concatenation.
const recursiveSum = (anArr) => {
  if (anArr.length === 1) return anArr[0];

  return anArr[0] + recursiveSum(anArr.slice(1));
};

// console.log(recursiveSum(numberArray));

// Deep Searching -> Find a string in an object : Return true or false if you found the string.

const someObj = {
  someOtherObj: {
    anotherObj: {
      deepString: 'treasure',
    },
  },
  aString: 'hi',
  anArray: [1, 2, 3, 4, { hi: 'bye' }],
};

const findString = (anObj, aStr) => {
  // Just because were using recursion does not eliminate for loops. We use iteration to move horizontally, and well use recursion to move vertically.
  // Arrays
  if (Array.isArray(anObj)) {
    // Iterate through the array doing one task: checking if its object or primitive
    for (let i = 0; i < anObj.length; ++i) {
      const currentElem = anObj[i];

      // If its an object, its time for recursion
      if (typeof currentElem === 'object') {
        const arrayFind = findString(currentElem, aStr);

        // This is probably the only somewhat confusing line, we cant return false if this fails, but if its true, we are done.
        // Simply not finding the thing in a subobject doesnt mean a full search failure. A search failure means all sub objects could not find it. We dont know that yet here.
        if (arrayFind) return true;
      // If its a primitive, its a boring comparison
      } else if (aStr === currentElem) return true;
    }
  // Objects
  } else {
    // Grab the keys if its not an array.
    const objKeys = Object.keys(anObj);

    // Using the keys, iterate over the key:value pairs
    for (let i = 0; i < objKeys.length; ++i) {
      // Grab the keys and values
      const curKey = objKeys[i];
      const curValue = anObj[curKey];

      // Same process: If it is an object, search the sub object.
      if (typeof curValue === 'object') {
        const objFind = findString(curValue, aStr);

        if (objFind) return true;
      // if its a primitive, just do a comparison
      } else if (aStr === curValue) return true;
    }
  }

  // If weve made it to this point - nothing has return true, meaning we found nothing, meaning we can assume to return false.
  return false;
};

console.log(findString(someObj, 'treasure'));
