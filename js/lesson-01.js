// Example 1 - Object Basics
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// // adds a mood field with value 'happy'
// user.mood = "happy";
// console.log("🚀user", user);

// // replaces the value hobby to 'skydiving'
// user.hobby = "skydiving";
// console.log("🚀user", user);

// // replaces premium to false
// user.premium = false;
// console.log("🚀user", user);

// // prints the contents of the user object in key:value format using Object.keys() and for...of
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// Example 2 - Object.values() method
// We have an object that stores our team salaries. Write code for summing all salaries and store the result in the sum variable. Should get 390. If the salaries object is empty, then the result should be 0.
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (const value of Object.values(salaries)) {
//   sum += value;
// }

// console.log("🚀sum", sum);

// Example 3 - Array of objects
// Write a function calcTotalPrice(stones, stoneName) that takes an array of objects and a string with the name of the stone. The function calculates and returns the total cost of stones with the same name, price and quantity from the object

// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 3 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let totalPrice = 0;

//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       totalPrice = stone.price * stone.quantity;
//     }
//   }

//   return totalPrice;
// }

// console.log(calcTotalPrice(stones, "Diamond"));

// Example 4 - Complex tasks
// Write a script for managing a personal account of an Internet bank. There is an account object in which it is necessary to implement methods for working with balance and transaction history.

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

/*
 * Each transaction is an object with properties: id, type and amount
 */

// const account = {
//   // Current account balance
//   balance: 0,

//   // Transaction History
//   transactions: [],

//   /*
//    * Method creates and returns a transaction object.
//    * Accepts amount and type of transaction.
//    */
//   createTransaction(amount, type) {
//     const id = this.transactions.length;
//     const newTransaction = { id, type, amount };
//     this.transactions.push(newTransaction);
//   },

//   /*
//    * The method responsible for adding the amount to the balance..
//    * Accepts the amount of the transaction.
//    * Calls createTransaction to create a transaction object
//    * then adds it to the transaction history
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.createTransaction(amount, Transaction.DEPOSIT);
//   },

//   /*
//    *The method responsible for withdrawing the amount from the balance.
//    * Принимает сумму танзакции.
//    * Calls createTransaction to create a transaction object
//    * then adds it to the transaction history.
//    *
//    * If amount is greater than the current balance, display a message
//    * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       alert(
//         "the withdrawal of such an amount is not possible, there are not enough funds"
//       );

//       return;
//     }

//     this.balance -= amount;
//     this.createTransaction(amount, Transaction.WITHDRAW);
//   },

//   /*
//    * The method returns the current balance
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * The method searches and returns the transaction object by id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * The method returns the amount of funds
//    *a specific type of transaction from the entire history of transactions
//    */
//   getTransactionTotal(type) {
//     const transactionsByType = [];

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         transactionsByType.push(transaction);
//       }
//     }

//     return transactionsByType.length;
//   },
// };

// account.createTransaction(200, Transaction.WITHDRAW);
// account.deposit(700);
// account.withdraw(400);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal("withdraw"));
