// Example 1 - User Input and Branching

// const userAnswer = prompt('What is the official name of JavaScript?').trim();
// const rightAnswer = 'ECMAScript';

// if (userAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
//   alert('Correct!');
// } else {
//   alert('Do not know? ECMAScript!');
// }

// Example 2 - Time display (if...else)

// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes) {
//   timestring = `${hours} hours ${minutes} minutes.`;
// } else {
//   timestring = `${hours} o'clock`;
// }

// console.log(timestring);

// Example 3 - Branching

// const userInput = Number(prompt('Enter the number'));

// if (userInput > 0) {
//   console.log('This is a positive number');
// } else if (userInput === 0) {
//   console.log('This is zero');
// } else if (userInput < 0) {
//   console.log('This is a negative number');
// }

// Example 4 - Nested branches

// const a = 120;
// const b = 180;
// const NUM = 512;

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + NUM);
// }

// Example 5 - Link Formatting (endsWith)

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//   link += '/';
// }

// console.log(link);

// Example 6 - Link formatting (includes and logical "AND")

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

// Example 7 - Link formatting (ternary operator)

// let link = 'https://my-site.com/about';

// link = !link.endsWith('/') && link.includes('my-site') ? (link += '/') : link;

// console.log(link);

// Example 8 - if...else and logical operators

// const hours = 26;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// Example 9 - Project submission deadline (if...else)

// const daysUntilDeadline = 3;
// let outputStr;

// if (daysUntilDeadline === 0) {
//   outputStr = 'Today';
// } else if (daysUntilDeadline === 1) {
//   outputStr = 'Tomorrow';
// } else if (daysUntilDeadline === 2) {
//   outputStr = 'The day after tomorrow';
// } else {
//   outputStr = 'Date in the future';
// }

// outputStr = "Project deadline: " + outputStr;

// console.log(outputStr);

//Example 10 - Project submission deadline (switch)

// const daysUntilDeadline = 5;
// let outputStr;

// switch (daysUntilDeadline) {
//   case 0:
//     outputStr = 'Today';
//     break;

//   case 1:
//     outputStr = 'Tomorrow';
//     break;

//   case 2:
//     outputStr = 'The day after tomorrow';
//     break;

//   default:
//     outputStr = 'Date in the future';
// }

// console.log(outputStr);

// Example 11 - The for loop

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5 === 0)) {
//     continue;
//   }

//   console.log(i);
// }

// Example 12 - User Input and Branching
// const loginValueForAccess = 'Admin';
// const passwordValueForAccess = "I'm an admin";
// const userLogin = prompt('Please enter your login');
// let userPassword;

// console.log('userLogin', userLogin);

// if (userLogin === loginValueForAccess) {
//   userPassword = prompt('Please enter your password');

//   console.log('userPassword', userPassword);

//   msg = userPassword === passwordValueForAccess ? 'Hello!' : 'Wrong password';
//   console.log(msg);
// } else if (!userLogin) {
//   console.log('Canceled');
// } else {
//   console.log("I don't know you");
// }
