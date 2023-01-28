// Example 1 - Blogger

// class User {
//   constructor({ name, age, numberOfPosts, topics }={}) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new User({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });

// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// Example 2 - Storagе

// class Storage {
//   constructor(items=[]) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     if (this.items.indexOf(newItem) === -1) {
//       this.items.push(newItem);
//     }
//   }

//   removeItem(itemToRemove) {
//     const itemToRemoveIndex = this.items.indexOf(itemToRemove);
//     this.items.splice(itemToRemoveIndex, 1);
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Write a class User which creates an object with properties login and email. Declare private properties #login and #email, which can be accessed via getter and setter of login and email.

// class User {
//   #login;

//   #email;

//   constructor({ login, email } = {}) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// console.log(poly.login); // Poly
// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

// Example 4 - Notes

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };

//   static findNoteIndexByText(items, text) {
//     return items.findIndex((note) => note.text === text);
//   }

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     // const itemToRemove = this.items.find((item) => item.text === text);
//     // this.items.splice(this.items.indexOf(itemToRemove), 1);

//     const index = Notes.findNoteIndexByText(this.items, text);
//     this.items.splice(index, 1);
//   }

//   updatePriority(text, newPriority) {
//     // const itemToUpdate = this.items.find((item) => item.text === text);
//     // this.items[this.items.indexOf(itemToUpdate)].priority = newPriority;

//     const index = Notes.findNoteIndexByText(this.items, text);
//     this.items[index].priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: "My second note",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote("My first note");
// console.log(myNotes.items);

// myNotes.updatePriority("My second note", Notes.Priority.HIGH);
// console.log(myNotes.items);

// Example 5 - Toggle
// Write a Toggle class that takes a settings object {isOpen: boolean} and declares one property on - state on/off (true/false). By default the value of the on property should be false.
// class Toggle {
//   constructor({ isOpen } = { isOpen: false }) {  //{ isOpen = false} = { }
//     this.on = isOpen; //this.on = isOpen || false    //settings?.isOpen || false     //settings ? settings.isOpen : false
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");
