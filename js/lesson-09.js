// Example 1 - Jewelry workshop
// Write a calcTotalPrice(stoneName) method that takes the name of a stone, calculates and returns the total cost of stones with that name, price, and quantity from the stones property.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const selectedStone = this.stones.find((stone) => stone.name === stoneName);
//     return selectedStone.price * selectedStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// Example 2 - Phone book
// Make methods' refactoring of the phonebook object to make the code work.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: phonebook.generateId(),
//       createdAt: phonebook.getDate(),
//     };

//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Example 3 -Calculator
// Create a calculator object with three methods:
// read(a, b)- takes two values and stores them as object properties.
// add() - returns the sum of the stored values.
// mult() - multiplies the stored values and returns the result.

// const calculator = {
//   a: 0,
//   b: 0,
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(3, 4);
// console.log("🚀 ~ file: lesson-09.js:76 ~ calculator", calculator);
// console.log(calculator.add());
// console.log(calculator.mult());
