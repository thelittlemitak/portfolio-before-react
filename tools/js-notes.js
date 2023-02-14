//3. codepen.io to put the code there and then share the link
//10. min8. variables cannot start with numbers
//They can only contain num strings (not JS keywords; if you want one you need to use _ or & at first) _ or $
//also avoid name, even if it's allowed // real const with upper case (like PI)
//12. there are only two values: object or primitive // js is dynamic and vars can be reasigned to even another data type
//min.10:30 the typeof operator
//reassignements do not need let or var. only the name of the var.
//undefined is a type
//typeof null is an object because of a bug that won't change because of legacy reasons
//13. min4. you cannot craete empty const
//never create a new var without let/const
//Use const for Objects Arrays and functions and do changes but not reassignements
//14. console.log(var1, var2, var3)
//_** means power of, *= as += but with *, x-- as x++ but substracting
//min.16 vars in js file are available on the console
//15. operators' precedence (table below) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//min5. double undefined assignement: let x, y
//17. min5. template literals with `I'm ${firstName}` also this ticks can be usted for regular strings, so you basically use them always in the end
//min10. you can change line with \n\ on a string. either this or just using template literals and ENTER
let miTia =
  'this \n\
is a new line';
//18. if else statements (control structure)
const age = 19;
const isOldEnough = age >= 18;
//is old enough is a/the CONDITION
if (isOldEnough) {
  console.log('She is old enough');
} else {
  const yearsLeft = 18 - age;
  console.log(`She is not old enough. Wait another ${yearsLeft} years.`);
}
//YOU CAN PUT THEM IN ONE LINE IF THE ELSE IS MISSING
if (age === 18) console.log('you are 18!');
let passTest;
if (passTest) hasDriversLicense = true;
//20. Type conversion and coercion
//Number(string) to convert '999' to 999. The string var keeps benig the same '999'. So the Number only applies at that point
//NaN means not a number or invalid number (even if the typeof is a Number(...))
//String(number) to convert 999 to '999'
//Boolean(0) etc.
//type coercion. sometimes js do changes automatically, like "str" + 23 + "str", the result is "str" + "23" + "str"; or '23' - '10' - 3 is 23 - 10 - 3
//wierdly, the minus operators turn strings to numbers and backwards
//21. Falsy values: 0, '', undifined, null, NaN this means that they are false if they were a boolean. So you can use them for conditions
//22. Equality operators === strict: no type coersion; == does type coersion, so '18' == 18 is true
//try to avoid this last one and just do changes manually with === if needed
//min6. the prompt("What's your age?") function to get data from the user. so if you want a number for sure you can put the prompt inside the Number function
//const age = Number(prompt("what's your age")); by doing this, age is a number, otherwise it's a string
//_!== strict oppossito of ===, so it's a doesn't equal; != is the loose version
//23. Switch Statement
const day = 'monday';
switch (day) {
  case 'Monday': // day === 'monday' it's always strict
    console.log('today is monday');
    break;
  case 'tuesday':
  case 'wednesday':
    console.log("it's not monday but close");
    break;
  case 'thursday':
    console.log('what a nice day');
    break;
  default:
    console.log('not a valid day!'); // like the else
}
//27. An EXPRESSION is something that has a value. A STATEMENT is code that hasn't a value (it only makes actions, like the if else)
//* 28. Conditional/ternary operator (it's an expression; it has a value. And you can create conditioned vars)
let ageX = 20;
ageX >= 20 ? console.log('you drink wine') : console.log('you drink water');
//this first part is called the condition. It's the same thing you put in brackets after an if
//it's an expression; it has a value. And you can create conditioned vars; that's the real use actually
let myDrink = age >= 20 ? 'wine' : 'water';
//VS (to see the difference on how to assign a conditioned var) Still notice that you can still do reassignements in both
let drinkWithIfElse;
if (age >= 20) {
  drinkWithIfElse = 'wine';
} else {
  drinkWithIfElse = 'water';
}
//you can also put it in a template literal, like
console.log(`I like drinking ${age >= 20 ? 'wine' : 'water'}`);
//During development: use latest GChrome
//During production: Use Babel to transpile and polyfill code (converting back to ES5 to ensure browser compatibility for all users)
//ES5 works with all browsers down to IE 9 from 2011. ES2015 to 2020. It needs the above process
//http://kangax.github.io/compat-table
//32. Strict mode: you only need to put this in the fist line
('use strict');
//33. FUNCTIONS
function logger() {
  console.log('something logged');
}
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//the return 'stops' the reading of the function, so make sure it's at the end
//It can also be used on IF statements to choose different results depending on what happens inside.
//this runs the function but doesn't do anything since the function returns a value
fruitProcessor(5, 0);
//you can see it's value doing this
console.log(fruitProcessor(5, 0));
//or put it in a variable and then use it whenever you want
let appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//DRY CODE is clean code that 'never' repeats
//34. Function declarations vs expressions
//this is a declaration cause you are giving the function a name; even if you put it in a var. They CAN be invoqued BEFORE declaring it
//(parameter is birthYear (this can be repeated in the future) and argument is the number you put later when invoquing)
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const ageY = calcAge1(1992);
//this is a expression cause the function has no name. They CANNOT be invoqued BEFORE 'expressing' it
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const ageY2 = calcAge2(1992);
//35. ARROW function. It doesn't need a return if it has {}
birthYear => 2023 - birthYear;
const calcAge3 = birthYear => 2023 - birthYear;
const ageY3 = calcAge3(1992);
//you can also use {} and still without parentesis or with parentesis in case you need more than one argument
const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
let X = yearsUntilRetirement(1992);
//36. Functions can be called inside other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//39. Data structure: ARRAYS
const friends = ['Michael', 'Steven', 'Peter'];
const friendsB = new Array('Michael', 'Steven', 'Peter');
//only primitive values are unmutable. So you can change an array const like below, but not changing the complete var
friends[2] = 'newFriend';
//common methods or functions
friends.length;
friends.push('newFriend2 at the end');
friends.unshift('newFriend3 at the beginning');
friends.pop(); //removes the last
friends.shift(); //removes the first
friends.indexOf('Michael'); //returns the position of Michael
friends.includes('Bob'); //returns a boolean and says if that's inside. It checks with strict ===
//39. Data structure: OBJECTS
const joseArray = ['Jose', 30, ['Michael', 'Steven', 'Peter']];
//every line/assignement is called property. So here there are 3. Here the order doesn't matter. On the ARRAYS they matter a lot
const joseObject = {
  firstName: 'Jose',
  age: 30,
  friends: ['Michael', 'Steven', 'Peter'],
};
//to reference one
joseObject.age;
joseObject[age]; //here you can put an expression
//if you want to pass information to do a check, use [], not the .
//how to add new properties without methods
joseObject.location = 'Berlin';
joseObject['Instagram'] = 'totfosk';
//44. Object methods. Functions attached to objects. They are expressions and they always need a property (you cannot just put a function with a name)
const newObject = {
  birthYear: 1992,
  calcAge4: function (birthYear) {
    return 2023 - birthYear;
  },
  calcAge5: function () {
    return 2023 - this.birthYear;
  },
  //you can put it in a var so you don't need to call the whole function afterwards. This is afterwards a new property that you created with this function
  calcAge6: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};
//and in order to call it:
console.log(newObject.calcAge4(1992));
console.log(newObject['calcAge4'](1992));
console.log(newObject.calcAge5());
console.log(newObject.age);
//'this' is just like putting newObject; but then if you change the object name you would have to do lots of changes (to all references)
//CMND + D trick!!
//46. For loops
for (let rep = 0; rep <= 10; rep++) {
  // counter; condition (loop runs while it's true);
  console.log(`Lifting weights repetition ${rep}`);
}
//47. Filling arrays
let types = [];
for (let i = 0; i < joseObject.length; i++) {
  types[i] = typeof joseObject[i];
  types.push(typeof joseObject[i]);
}
console.log(types);
//it seems that whatever happens inside the loop, it works on the outside; otherwise types would be empty
const years = [1992, 1993, 1994, 1995];
const ages = [];
const ages2 = [];
for (let i = 0; i < years.length; i++) {
  //if you use CONTINUE, what's below will not be executed
  if (typeof joseObject[i] !== 'string') continue;
  //if you use BREAK, the loop stops
  if (typeof joseObject[i] !== 'number') break;
  ages[i] = 2023 - years[i];
  ages2.push(2023 - years[i]);
}
console.log(ages);
console.log(ages2);
//you can also remove the {} as with the if statment everytime that you only need one line (you just put what happens after the condition)
//48. Backwards loop
for (let i = joseObject.length - 1; i >= 0; i--);
//you can also put loops inside loops
//49. The WHILE loop
for (let rep = 0; rep <= 10; rep++) {
  console.log('i am repeating myself');
}
//this is a copy of the above but with the new method
let rep = 0;
while (rep <= 10) {
  console.log('i am repeating myself');
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('you did a 6');
}
//the WHILE is used when we don't know how many times is gonna itinerate; the for loops is used when we know that
//55. min11. You can use user SNIPPETS/SHORTCUTS
//56. Installing Node.js and use it as a live server
//58. 4 Steps to solve any PROBLEM: Understand, Divide, Research, Sketching
//61. console.warn/error/table if you want different formatting on the console
//BREAKPOINTS (so the code doesn't run until the end (easier to find bugs)): Sources on Dev Tools->js file->Set breakpoints. You can also use the debugger directly as
debugger;
//70. DOM Manipulation
//most of the times you assign these to a var.
// & THE DOT IS ONLY FOR THE SELECTOR!
document.querySelector('.class');
document.querySelector('#id');
document.querySelector('.class').textContent; //to see what's inside but formated
document.querySelector('.class').innerHTML; //to see what's inside as shown in the HTML; don't use this one for input! A user could mess around.
//but it works really well for changing many attributes at once.
document.querySelector('.class').innerText; //to see what text is inside, no matter who 'has' it
document.querySelector('.class').textContent = 'new text'; //to change what's inside
document.querySelector('.class').value; //to get the inserted value from an input. I don't know how it works for other elements
document.querySelector('.class').addEventListener('click', function () {
  console.log('');
}); //'listens to a click
document.querySelector('body').style.backgroundColor = '#ffffff'; //always the value is a string here and the property written in camel case
//this is called inline styling, so inside HTML
document.getElementById('only-an-ID'); //here you don't need a . or #, but you need it using the querySelector
document.getElementsByClassName('only-a-class-name'); //same as above
//78. Refactoring (cleaning the code)
//In order to avoid having all these (similar) lines from above, you can create a function. For example: instead of:
document.querySelector('.class').textContent = 'new text'; //everytime you want to do this to the same class, you can rather create this:
const displayMessage = function (message) {
  document.querySelector('.class').textContent = message;
};
//and then use it as
displayMessage('new-text1');
displayMessage('new-text2');
displayMessage('new-text3');
//Also, using vars for query selectors. So instead of having this:
document.querySelector('.classAC');
//you can have this
const classAC = document.querySelector('.class');
//if you want to add/remove classes to classAC:
classAC.classList.add('hidden');
classAC.classList.remove('hidden');
classAC.classList.toggle('hidden');
//very useful condition for if statements
classAC.classList.contains('hidden');
!classAC.classList.contains('hidden');
//IMPORTANT! If you use QUERY SELECTOR only the first element that has this class will be selected, not the others. In that case you have to use
document.querySelectorAll('.class-that-is-used-in-more-places');
document.querySelectorAll('[hereYouCanPutAnAtt]');
//then if you need to do a change in all you need a for loop since what's selected becomes an array of each element w that class (very annoying, but that's what it seems)
//webdevsim uses Array.from() when doing the selection
//81. Hear key pressing
document.addEventListener('keydown', function () {}); //there's also keypress and keyup; self-explanatory
//EVENTS are not explained on the course so we jump to youtube: https://www.youtube.com/watch?v=YiOlaiscqDY&ab_channel=dcode
//Events are actions potencially taken by the user (or by an API), like a click or a key press. HTML has them too as attributes but it's not recommended to use them.
//When you pass a function like the above, the argument is always the EVENT object. Normally they are repressented with an arrow f
document.addEventListener('keydown', e => {});
//in order to make things move when a specific key is pressed, you need to beware the key property, so e.key. For example:
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    console.log('do this or that');
  }
});
//82. min4. Flow chart (or everything that can happen). Is like a roadmap of all possibilities. http://diagrams.net
//When a var from a querySelector has an El at the end means you are referring to an element so you can later differeneciate between 'normal' vars and references
//How to change a HTML attribute:
classAC.src = `dice-${dice}.png`;
//so basically it's only dot . and the attribute you want to change and assign it a string
//also the above serve as example of a DYNAMIC SELECTOR. That's using a template literal to fill numbers and change what's selected depending on a var. Another e.g.:
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//86. Using functions only to set values from vars, like a reset button, and put them as a callback. Like: if this happens, all this values go as such

//206. OOP A class is like a model or template (it's not an object)
//An instance is an object and a filled (with data) 'copy' of this original class
//Principles: Abstraction (hiding what's not needed). Encapsulation (deciding what's private and what's public (API))
//Inheritance (so the code is not repeated; using parent/child classes). Polymorphism (child overwritting a parent property/functionality)
//207. In JS, there are prototypes (objects contained in all objects), which contain methods, that are actually delegated upwards (so the prototype does the behaviour
//and they are always linked). In traditional OOP, an instance copies this functionality from the class but it doesn't go upwards
//208. Constructor functions (class/type creators) start with capital letter
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.secondArgument = birthYear;
  // * to create a method, never do this! Otherwise every instance will run this
  //Instead we have to do what's explained above. So delegate this f to the parent class or prototype
  // * this.calcAge = function () {
  // *  console.log(2037 - this.birthYear);
  // * };
};
const instance1 = new Person('This is my name', 1992);
const instance2 = new Person('This is my other name', 1995);
const jose = new Person('Jose', 1992);
const matilda = new Person('Matilda', 1995);
console.log(instance1, instance2, jose, matilda);
//to check if something is an instance of
console.log(jose instanceof Person);
//209. Prototypes (this are properties that will be inherited by all objects created with the Person constructor)
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jose.calcAge();
//__proto__ is the prototype of the object, but prototype (of Person) is not the prototype of anything;
//but the prototype that the objects created with the constructor will have
console.log(jose.__proto__) === Person.prototype; //this is true
// 210. Protoype chain
console.log(Person.prototype);
console.log(Person.__proto__);
console.log(jose.__proto__); // this is the same as above
console.log('-----------------------------------------');
console.log(jose.__proto__.__proto__);
console.log(Object.prototype);
console.log(objectVar.__proto__);
// 211. Prototype inheritance in biult-in Objects. All functions have a prototype
const arr = [1, 2, 3, 4, 1, 2, 3]; // this is the same as new Array
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
// When you do arr.filter() for example, you are actually doing arr.prototype.filter() but it shows as the first
// This is because the method lives in the prototype object of Array
// Same as you do with Person.prototype, you can add methods to all objects or arrays just by doing Array.prototype, but it's not recommended!
// All DOM elements are objects too
// 213. There are actually classes. Expressions and Declaration. This is is the same as above but nicer
// const PersonCl = class {}
class PersonC1 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to the prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const jessica = new PersonC1('Jessica', 1996);
console.log(jessica.__proto__ === PersonC1.prototype);
// Check this out: classes are never hoisted and never executed in strict mode. They are first class citizens too
// If any programming language has the ability to treat functions as values, to pass them as arguments and to return a function from another function
// then it is said that  programming language has First Class Functions and the functions are called as First Class Citizens in that programming language
// PERSONAL PREFERENCE You can use both classes or the old process. Jonas approved class better (cleaner)
// Object literal is when you create an object from a var as you did at first
// 214. Setters and Getters (a way to avoid creating methods that have to be called just to get data/property from simple logic)
class PersonC12 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name}" is not a full name!`); // alerts block the code from keep running
  }
  get fullName() {
    return this._fullName;
  }
  //Static method (this won't be added to the prototype property)
  static hey() {
    console.log('hey there');
  }
}
const account = {
  owner: 'Jonas',
  movements: [213, 12313, 123, 12313, 123],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set newMove(mov) {
    this.movements.push(mov);
  },
};
// by setting a getter you can get the value as a property without calling the function, so:
account.latest; // will equal to 300 without having to do:
account.latest();
// by setting a setter, you can add arguments as assignements, so
account.newMove = 50; // without having to do:
account.newMove(50);
// 215. Static Methods (like Array.from()) they are functions/functions that are only available on the constructor. In order to add it to a class (check above)
// 216. Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
const steven = Object.create(PersonProto);
// 246. Asynchronous JS, AJAX and APIs
// Asynchronous means controlling the timing of operations by the use of pulses sent when the previous operation is completed rather than at regular intervals
// or not existing or occurring at the same time.
// Fetch means go for and then bring back (someone or something) for someone
// AJAX stands for Asynchronous JavaScript And XML but XML is not used anymore but json (most popular data format). The name AJAX still stands
// 248. How to do an AJAX call (you can check http://github.com/public-apis) CORS should always be in Yes or Unknown
// CORS Cross Origin Resource Sharing; so if it doesn't have this, you won't have access
// When in the resourse page, look for the API ENDPOINT, which is basically the URL needed
const request = new XMLHttpRequest(); // old school
request.open('GET', 'urlFromThePublicApi');
request.send();
request.addEventListener('load', function () {
  console.log(this.responseText); // not useful cause JSON is just a string of text. To pass it as an object you need to
  const [newData] = JSON.parse(this.responseText);
  // now you have an object called newData that you can have access to like any other
  const html = // `here you can put all the HTML needed like <p>`This is ${newData.population} or that`</p>`;
  whateverDivPreviouslySelected.insertAdjacentHTML('beforeend', html);
})
// 249. How the web works
// When you search a domain, it's the DNS (through the internet provider) who searches for the exact IP address
// 270. Overview about modern JS (About npm, bundling and transpiling/polyfilling)
// 271. Modules and ex im overview (they run in strict by default)
// 272. Creating modules, ex and im (they are live connections (they point to the same place in memory); not a copy)
// * script.js (im)
import './shoppingCart'; //.js at the end is not 100% necessary
// ? this above
import { variableNameFromTheOtherFile, oneThingFromTheOtherFile as aNewName } from './shoppingCart';
//you also need to add the att type="module" in HTML to this script from above
import * as ShoppingCart from './shoppingCart'; //this create an object with everything from the other file; so what's exporting is a public API
// & default im and ex. For this file, we use this
import varName from './shoppingCart'; // this will automatically assign this var to what has been sent below
// * shoppingCart.js (ex)
// if you add something here (vars, fs) it will be like in a top level scoped, so not accessible from im file. Unless you export it as
export // and whatever you want to ex. Above you also need to do // ? this, otherwise it will not pick it up
// Also what you export (in this file) has to be in top level scope, so not between curly brackets or in a if statement
// If it's more than one thing, you need to put it between curly brackets as with the im. You can also change the name with as
// & default im and ex. For this file, we use this
export default // and a value or whatever

// & YOUTUBE-YOUTUBE-YOUTUBE-YOUTUBE-YOUTUBE-YOUTUBE-YOUTUBE-YOUTUBE
// * I will learn this as a support: https://www.youtube.com/watch?v=5fb2aPlgoys&ab_channel=freeCodeCamp.org
//Window object is the top one; the DOM is inside there.
//min17. how to create elements:
const ul = document.querySelector('ul');
const li = document.querySelector('li');
ul.append('li'); //this creates one inside; otherwise you can just use createElement // * this doesn't work since it adds a text node
li.getAttribute(); //returns the value of a specified att if this one exist
li.setAttribute('id', 'newId');
li.id = 'newID'; //it's supposed to do the same as above
li.removeAttribute('id', 'newId');
let theParentElement = ul.parentElement;
let theParentNode = ul.parentNode;
ul.childNodes; //these select nodes!
ul.firstChild; //these select nodes!
ul.lastChild; //these select nodes!
ul.previousSibling;
ul.nextSibling;
//If you want Elements:
ul.children;
ul.firstElementChild;
ul.lastElementChild;
ul.previousElementSibling;
ul.nextElementSibling;
//There is also childElement and childNodes
//Nodes are every little part of the DOM. Like in Godot. Every node has a parent except the root. Siblings are nodes with the same parent.
//Also text and attributes are nodes.
document.documentElement; // selects the HTML
//min37. Event listeners
//it can be an attribute (onlick="alert('I love JS')") on HTML (on event method; it can only be applied once) or in JS
//CLICK:
const newVarBtn = document.querySelector('.someClass');
function alertBtn() {
  alert('I also like JS');
}
newVarBtn.addEventListener('click', alertBtn);
// * there's actually a third parametter, which is a boolean. This one will dictate if the event will work bubbling or capturing (false (bubbling) by default)
//you can also set up this value to {once: true} to take action only once
//MOUSEOVER (without a new class):
const box = document.querySelector('box');
function changeColor() {
  box.style.backgroundColor = 'blue';
}
newVarBtn.addEventListener('mouseover', changeColor);
//for some reason they do not use toggle but:
if (hiddenContent.classList.contains('reveal-btn')) {
  hiddenContent.classList.remove('reveal-btn');
} else {
  hiddenContent.classList.add('reveal-btn');
}
//use classes for hidding and revealing elements
//you can console.log(e) to see all the properties of the event object
//e.target is like having a query selector var since you are pointing out what you clicked
//e.stopPropagation(), stops the bubbling/capturing
//e.preventDefault() to have anchors working as buttons (more on that later)
//event delegation. There's a trick in which you can take the parent and create a function in which the tarjet is referred. In that case you can add the same
//function to each child since e.target points out what you clicked (more on that in 01:08:00)
document.createElement('div'); //rumors say that if you don't append this to the body, it doesn't just appear where you want to
// * I will learn this as a support too: https://www.youtube.com/watch?v=y17RuWkWdn8&ab_channel=WebDevSimplified
//to remove an element: first select it; put it on a var. Then:
varY.remove();
// * Parsing is the process in which the DOM is created
// * Data (to create custom atts) in order to get the data to JS we have to first select the element
<div class="something" data-name="Jose" data-started-coding="old"></div>;
const something = document.querySelector('.something');
console.log(something.dataset); // Here you get DOMStringMap, which is an object (not a map), of those atts + keys. So to get the info of one of those is easy:
something.dataset.dataStartedCoding;
something.dataset.name;
// Set and the use of it 1. In order to 'clean' an array by eliminating the duplicates. You create it by
const myArray = [1, 2, 3, 4, 5];
const mySet = new Set(myArray);
const newArray = [...mySet];
// Getting a little bit to the future via YT to understand some core concepts now
// Objs vs Maps https://www.youtube.com/watch?v=Z_2rpuPQmC0&ab_channel=LeighHalliday
//When to use what. Incl. all the others https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b
// A Key is the name of property names of a Object or Map. In the Object they are always strings. In Maps they an be anything.
//Set a new value
const map = new Map([
  [1, 'one'],
  [2, 'two'],
]);
const obj = {
  1: 'one',
  2: 'two',
};
// Set new values
map.set(3, 'three');
obj[3] = 'three';
// Get new values
map.get(3);
obj[3];
// Deleting
map.delete(3);
delete obj[3];
// Keys
map.keys(); //you get a map itinerator
Object.keys(obj); //you get a string
// Has
map.has(2);
2 in obj;
obj.hasOwnProperty(2);
// Values
map.values();
Object.values(obj);
// Entries
map.entries();
Object.entries(obj);
//AND && OR || NOT !
// * About prototypes and OOP
// https://www.youtube.com/watch?v=GhJTy5-X3kA
let newO = new Object(); // here you reference the ultimate constructor, the one whos proto is null

// & OTHER-RESOURCES-OTHER-RESOURCES-OTHER-RESOURCES-OTHER-RESOURCES-OTHER-RESOURCES-OTHER-RESOURCES-

// https://ux.stackexchange.com/questions/90336/whats-the-difference-between-a-modal-popup-popover-and-lightbox
// https://www.spiceworks.com/tech/cloud/articles/stateful-vs-stateless/#:~:text=A%20stateless%20system%20sends%20a,if%20no%20response%20is%20received.
// https://www.w3schools.com/jquery/jquery_get_started.asp
// https://haseebq.com/how-to-break-into-tech-job-hunting-and-interviews/
// Informational Interviewing (tbc)
