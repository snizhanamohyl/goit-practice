// Example 1 - Body mass index
// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

//1 way
// function calcBMI(weight, height) {
//   weight = Number(weight.replace(",", "."));
//   height = Number(height.replace(",", "."));

//   return Math.round((weight / height ** 2) * 10) / 10;
// }

//2 way
// function replaceCommaToDot(string) {
//   return (string = string.replace(",", "."));
// }

// function getRoundedNumber(number, decimals) {
//   return number.toFixed(decimals);
// }

// function calcBMI(weight, height) {
//   weight = replaceCommaToDot(weight);
//   height = replaceCommaToDot(height);

//   return getRoundedNumber(weight / height ** 2, 1);
// }

// Example 2 - Smaller of numbers
// const min = function (a, b) {
//   if (a < b) {
//     return a;
//   }

//   return b;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// Example 3 - Area of a rectangle
// function getRectArea(dimensions) {
//   const dimensionsValues = dimensions.split(" ");

//   return dimensionsValues[0] * dimensionsValues[1];
// }

// console.log(getRectArea("8 11"));

// Example 4 - Element logging
// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// Example 5 - Contact logging
// function printContactsInfo(names, phones) {
//   const namesValues = names.split(",");
//   const phonesValues = phones.split(",");

//   for (let i = 0; i < namesValues.length; i += 1) {
//     console.log(`${namesValues[i]} : ${phonesValues[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// Example 6 - Finding the largest element
// const findLargestNumber = function (numbers) {
//   let largestNumber = numbers[0];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > largestNumber) {
//       largestNumber = numbers[i];
//     }
//   }

//   return largestNumber;
// };

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// Example 7 - Average value
// function calAverage(...args) {
//   let sum = 0;

//   for (arg of args) {
//     sum += arg;
//   }

//   return sum / args.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Example 8 - Time Formatting
// function formatTime(minutes) {
//   const hoursValue = Math.floor(minutes / 60);
//   const minutesValue = minutes % 60;

//   const doubleDigitHours = String(hoursValue).padStart(2, 0);
//   const doubleDigitMinutes = String(minutesValue).padStart(2, 0);

//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// Example 9 -Collection of courses (includes, indexOf, push, etc.)
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse('CSS'); // ' You already have this course'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // removeCourse('Vue'); // 'Course with this name was not found'

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// function addCourse(courseName) {
//   courses.push(courseName);
// }

// function removeCourse(courseName) {
//   const indexOfCourse = courses.indexOf(courseName);

//   courses.splice(indexOfCourse, 1);
// }

// function updateCourse(courseName, newCourseName) {
//   const indexOfCourse = courses.indexOf(courseName);

//   courses.splice(indexOfCourse, 1, newCourseName);
// }
