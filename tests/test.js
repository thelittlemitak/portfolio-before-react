'use strict';
/*
let test;
if (3 == 3) test = "hola";

let test2;
if (3 == 22) {
   test2 = "hola2"
} else test2 = "hola3";


// console.log(test)
console.log(test2)

function logger() {
  console.log("something logged");
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);
let appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const years = [1992, 1993, 1994, 1995];
const ages = [];
const ages2 = [];


for (let i = 0; i < years.length; i++) {
  ages[i] = 2023 - years[i];
  ages2.push(2023 - years[i]);
}
console.log(ages);
console.log(ages2)
*/

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("you did a 6");
// }
// let veryNewArray = [1, 'two', true, { firstName: 'Jonas' }];
// console.log(veryNewArray);
// let veryNewObject = {
//   0: 1,
//   1: 'two',
//   2: true,
//   3: { firstName: 'Jonas' },
// };
// console.log(veryNewObject);

// document.querySelector('#header').addEventListener('click', function(e) {
//   e.target.classList.toggle('transition');
// })

// console.log("k paza");

// const Person = function (firstName, birthYear) {
//   //instance properties
//   this.firstName = firstName;
//   this.secondArgument = birthYear;
//   // * to create a method, never do this! Otherwise every instance will run this
//   //Instead we have to do what's explained above. So delegate this f to the parent class or prototype
//   // * this.calcAge = function () {
//   // *  console.log(2037 - this.birthYear);
//   // * };
// };
// const instance1 = new Person('This is my name', 1992);
// const instance2 = new Person('This is my other name', 1995);
// const jose = new Person('Jose', 1992);
// const matilda = new Person('Matilda', 1995);
// console.log(instance1, instance2, jose, matilda);
// //to check if something is an instance of
// console.log(jose instanceof Person);
// //209. Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.secondArgument);
// };
// jose.calcAge();
// console.log(Person.prototype);

// let newV = "casado";
// console.log(newV.__proto__)

// let objectVar = new Object();
// let Person = function (firstName) {
//   this.firstName = firstName;
//   this.myMethod = function () {
//     console.log('hi');
//   };
// };

// Person.prototype.mySecondMethod = function () {
//   console.log('hi again');
// };

// let jose = new Person('jose'); // * 1

// console.log(jose); // * 1

// console.log(jose.prototype); // * undefined since there is nothing and jose is not a constructor
// console.log(Person.prototype);

// So the chain goes as
// 1. Jose object (jose.__proto__ === Person.prototype). This doesn't have methods. Only that one you put called myMethod
// 2. Person constructor. This has the constructor function
// 3. Object; empty object. This doesn't have methods.

// const Car = function (model, speed) {
//   this.model = model;
//   this.speed = speed;
// };

// const seat = new Car("seat", 120)

// console.log("---")
// console.log(seat.__proto__); // this is the Protoype of Car
// console.log(Car.prototype)
// console.log("---")
// console.log(seat.__proto__.__proto__); // this is the Prototype of Object
// console.log(Object.prototype)
// console.log("---")
// console.dir(Car); // this is a function
// console.dir(Object); // this is a function

// function printName (first, last) {
//   console.log(`${first} ${last}`);
//   console.log(this);
// }
// printName.call("something", "jose", "riera");

const ManualProto = { // important: it has to be an object
  calcAge(a, b) {
    return a + b;
  },
};
const steven = Object.create(ManualProto); // now you have an object that has calcAge in it's Protoype, but nothing else
console.log(steven); // actually the prototype of steven IS ManualProto; and ManualProto already includes the prototype of object
console.log(steven.__proto__ === ManualProto); // this is key to understand what's what. The result is true
// The way he explains how to do add properties, is by having a 'constructor' inside the proto, so
const ManualProto2 = { // important: it has to be an object
  calcAge(a, b) {
    return a + b;
  },
  init(vname, nname) {
    this.vname = vname;
    this.nname = nname;
  }
};
const steven2 = Object.create(ManualProto2);
ManualProto2.init('jose', 'riera');
console.log(steven2);

// const Grandfather = function (vname, nname) {
//   (this.vname = vname), (this.nname = nname);
//   console.log();
// };
// Grandfather.prototype = Object.create(ManualProto);

// const grandfather1 = new Grandfather('jose', 'riera');
// console.log(grandfather1);

// const Father = function (vname, nname, job) {
//   Grandfather.call(this, vname, nname);
//   this.job = job;
// };
// const father1 = new Father('juan', 'calvo', 'poli');
// console.log(father1);
