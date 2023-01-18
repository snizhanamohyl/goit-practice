// Example 1 - Basic operations with an array
// const genres = ["Jazz", "Blues"];
// genres.push("Rock and Roll");
// console.log(genres[0]); //first el
// console.log(genres[genres.length - 1]); //last el
// console.log(genres.splice(0, 1)); //remove first el, shift()
// genres.splice(0, 0, "Country", "Reggae"); //insert elems at the beginning
// console.log("🚀 genres", genres);

// Example 2 - Arrays and Strings
// const values = "8 11";
// const valuesArray = values.split(" ");
// let area = 0;

// for (let i = 0; i < valuesArray.length; i += 1) {
//   valuesArray[i] = Number(valuesArray[i]);
// }

// area = valuesArray[0] * valuesArray[1];
// console.log("🚀area", area);

// Example 3 - Array iteration
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }

// Example 4 -Arrays and Loops
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]} : ${phonesArr[i]}`);
// }

// Example 5 - Arrays and Strings
// const string = "Welcome to the future";

// const words = string.split(" ");
// const result = words.splice(1, words.length - 2).join(" ");

// console.log("🚀RESULTING STRING:", result);

// Example 7 - Sorting an array with a loop
// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     if (langs[i] > langs[j]) {
//       temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }

// console.log("Sorted array: ", langs);

// Example 8 - Search for an element
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(min); // 1
