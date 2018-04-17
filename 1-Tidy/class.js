const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// DONT PAY ATTENTION TO THE ABOVE, THEY ARE FOR INSTRUCTOR USE


// 'This works'
// This is just flat out bad code.
// function someThing (  ){   console.log('bye')}; someThing();

// Fix it up:
// 1. the function parens shouldn't have spaces between them
// 2. We probably want a space between the function parens and the bracket
// 3. We DEFINITELY want a NEW LINE after the curly bracket
// 4. That new line should be INDENTED by 1 unit of indentation
// 5. We should add another new line before the closing curly bracket
// 6. We should also keep that curly closing bracket on its own line
// 7. We should pad the bottom and top of a function defintion (that means where i defined something should have empty lines around it)
// 8. We should use semicolons after every statement
// 9. We should always leave an extra line at the bottom of a file
// Linting - The stylization and formatting of code to best express code to multiple programmers in a clean, intelligible, and organized fashion.
// Linting is not OPTIONAL.
// It is VERY IMPORTANT THAT YOU WRITE CLEAN CODE.

// function someThing () {
//   console.log('bye');
// }

// someThing();

// Indentation:

// Indentation is a simple rule: Every time we open a code block (that means '{') - we make a new line, and we indent that line by 1 unit of indentation
// Whenever we close a code block (that means '}') - we make a new line and we de-indent by 1 unit of indentation

// function indentFunction () {
//   if (true) {
//     if (false) {
//       function anotherIndent () {

//       }
//     }
//   }
// }

// 'Unit of indentation'

// Tabs vs Spaces
// You have two ways on your computer that you know about to introduce 'whitespace'. You can hit the space bar, or you can hit the tab key. The common misconception is that the tab key is introducing a certain amount of spaces - it does not by default.
// console.log('\t\t\t\t\t\thello'); // => \t is the tab character

// What is the tab character?
// It is system/environment (environments mean text editors) customizable value.
// A tab really is kind of an imaginary unit. It is whatever the user of a computer likes.

// What is a space?
// A space is the maximum width of the current font at its worst width character.
// That means space is not really customizable. It is a very deterministic size.

// As a programmer when I indent should I use a number of spaces or should I use a tab?
// 1 vote for tab
// 1 for mixed tabs and spaces

// Im not here to tell you the right answer. I will give you the pros and cons of each, and where you should fall in your own philosophy on this:

// Tabs
// PRO: These are great for making sure someone elses code looks the way you like it to look on your computer. If it uses tabs, you get to choose the size of tabs, thus the size of indents on someone elses code when you load it.
// CON: You cannot ensure what your code will look like on someone elses computer. Because, they might interpret tabs in a weird way - or whatever way they want (e.g. a tab is now 45 spaces)
// TLDR: Customizable

// Spaces
// PRO: They look the same everywhere. A space is literally just a space.
// CON: No one can make your code look the way they want it to look.
// TLDR: Consistency

// Golden Rule for all Linting is: Consistency in YOUR CHOICE. I dont care if you use tabs or spaces, what I do care about is that you are consistent in whatever you choose to use.

// Its worth mention that people who choose spaces just configure their tab key to emit spaces, instead of emitting a tab character.

// I use 2 spaces per indent (i have my tab key configured to do 2 spaces)
/*
Most common:
 4 spaces
 2 spaces
 1 tab
 2 tabs
 3 spaces
*/

// It is entirely indiscernable why this function was written.
// Not only is it poorly named "d"??? but what purpose does it solve? Why wouldnt we just multiply the two numbers 'inline' without a function?
// 1. Name things well.
// 2. Dont write useless code.

function multiplyNums (numOne, numTwo) {
  return numOne * numTwo;
}

console.log(multiplyNums(2, 3));

// Rule 1 has a famous saying (the write well named functions rule)
// The saying is: Treat the next person to look at/use your code like a sociopathic serial killer who knows your address and schedule.

// If the next person who uses your code and has to maintain it - and figure out how it works, CANT FIGURE OUT WHAT IT DOES BECAUSE YOU NAMED YOUR FUNCTION 'D' they might kill you.
// They really might.

// Windows XP - The guys who wrote windows XP had functions like this:

/*
func d3987ytf(a, c, y, q) {
  dkjdasidbaf(c, a);
  return (ybasdjahsd(q));
}
// THIS IS BLACK MAGIC, DONT TOUCH IT WE DONT KNOW HOW IT WORKS.
*/

// Code like ^ lead to Windows 7.

// They ended up having to destroy the entire codebase and rewrite it from scratch (Windows 10).

// Name functions exactly what they do. Length is not a concern. Function names could be a sentence long if thats how much it took to describe it.
// If you really need - leave a comment describing what the function does.
