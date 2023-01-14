// Example 1 - Mathematical operators
// Display the total number of apples and grapes on the screen. The difference between apples and grapes.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// console.log(total);

// const diff = grapes - apples;
// console.log(diff);

// Example 2 - Combined operators
// Replace the override expression with the combined operator +=.

// let students = 100;
// students += 50;
// console.log(students);

// Example 3 - Operators Priority
// Disassemble operators priority in the variable value assignment instruction result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Math class
// Write a script that prints to the console rounded up/down, etc. values of variable value. Use the methods Math.floor(), Math.ceil() and Math.round(). Check what happens in the console for the values "27.3" and "27.9".

// const value = 27.9;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// Example 5 - Template lines
// Compose a phrase using the template strings A has B bots in stock, where A, B - variables inserted into a line.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - String methods and chaining
// Write a script that calculates a person's body mass index. For this you need to divide the weight in kilograms by the square of the person's height in meters.
// The body mass index should be rounded to one decimal place;

// let weight = '88,3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));
// height = Number(height.replace(',', '.'));

// const bmi = weight / height ** 2;
// const roundedBmi = Math.round(bmi * 10) / 10;
// console.log(roundedBmi); // 28.8

// Example 7 - Comparison operators and type casting
// What will be the result of the expressions?

// console.log(5 > 4); //true

// console.log(10 >= '7'); //true

// console.log('2' > '12'); //true, strings are compared by char code
// console.log('2'.charCodeAt());
// console.log('1'.charCodeAt());

// console.log('2' < '12'); //false

// console.log('4' == 4); //true

// console.log('6' === 6); //false

// console.log('false' === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false); //true

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); //true
// console.log('P'.charCodeAt());
// console.log('p'.charCodeAt());

// console.log('Papaya' === 'papaya'); //false

// console.log(undefined == null); //true

// console.log(undefined === null); //false

// Example 8 - Logical operators
// What will be the result of the expressions?

// console.log(true && 3); //3

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); //'kiwi'

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3); //true

// console.log(true || 3 || 4); //true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); //false     (1 && null && 2) -> null, null > 0 -> false

// console.log(null || (2 && 3) || 4); //3     (2 && 3) -> 3

// Example 9 - Default value and null merge operator
// Refactor the code so that the value is assigned to the value variable variable incomingValue if it is not equal to undefined or null. Otherwise, defaultValue must be assigned. Check work script for the following values of the incomingValue variable: null, undefined, 0, false. Use operator ?? (nullish coalescing operator).

// const incomingValue = null;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

//scenario 1
// const totalMinutes = 1441;

// let hours = Math.floor(totalMinutes / 60);
// let minutes = totalMinutes % 60;

// if (hours < 10) {
//   hours = '0' + hours;
// }

// if (minutes < 10) {
//   minutes = '0' + minutes;
// }

// result = hours + ':' + minutes;
// console.log(result);

//scenario 2
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
