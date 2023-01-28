//3. codepen.io to put the code there and then share the link
//10. min8. variables cannot start with numbers
//They can only contain num strings (not JS keywords; if you want one you need to use _ or & at first) _ or $
//also avoid name, even if it's allowed // real const with upper case (like PI)
//12. there are only two values: object or primitive // js is dynamic and vars can be reasigned to even another data type
//min.10:30 the typeof operator
//reassignements do not need let or var. only the name of the var
//undefined is a type
//typeof null is an object because of a bug that won't change because of legacy reasons
//13. min4. you cannot craete empty const
//never create a new var without let/const
//14. console.log(var1, var2, var3)
//_** means power of, *= as += but with *, x-- as x++ but substracting
//min.16 vars in js file are available on the console
//15. operators' precedence (table below) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//min5. double undefined assignement: let x, y
//17. min5. template literals with `I'm ${firstName}` also this ticks can be usted for regular strings, so you basically use them always in the end
//min10. you can change line with \n\ on a string. either this or just using template literals and ENTER
let miTia =
  "this \n\
is a new line";
//18. if else statements (control structure)
const age = 19;
const isOldEnough = age >= 18;
//is old enough is a/the CONDITION
if (isOldEnough) {
  console.log("She is old enough");
} else {
  const yearsLeft = 18 - age;
  console.log(`She is not old enough. Wait another ${yearsLeft} years.`);
}
//YOU CAN PUT THEM IN ONE LINE IF THE ELSE IS MISSING
if (age === 18) console.log("you are 18!");
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
const day = "monday";
switch (day) {
  case "Monday": // day === 'monday' it's always strict
    console.log("today is monday");
    break;
  case "tuesday":
  case "wednesday":
    console.log("it's not monday but close");
    break;
  case "thursday":
    console.log("what a nice day");
    break;
  default:
    console.log("not a valid day!"); // like the else
}
//27. An EXPRESSION is something that has a value. A STATEMENT is code that hasn't a value (it only makes actions, like the if else)
//28. Conditional/ternary operator (it's an expression; it has a value. And you can create conditioned vars)
let ageX = 20;
ageX >= 20 ? console.log("you drink wine") : console.log("you drink water");
//this first part is called the condition. It's the same thing you put in brackets after an if
//it's an expression; it has a value. And you can create conditioned vars; that's the real use actually
let myDrink = age >= 20 ? "wine" : "water";
//VS (to see the difference on how to assign a conditioned var) Still notice that you can still do reassignements in both
let drinkWithIfElse;
if (age >= 20) {
  drinkWithIfElse = "wine";
} else {
  drinkWithIfElse = "water";
}
//you can also put it in a template literal, like
console.log(`I like drinking ${age >= 20 ? "wine" : "water"}`);
//During development: use latest GChrome
//During production: Use Babel to transpile and polyfill code (converting back to ES5 to ensure browser compatibility for all users)
//ES5 works with all browsers down to IE 9 from 2011. ES2015 to 2020. It needs the above process
//http://kangax.github.io/compat-table
//32. Strict mode: you only need to put this in the fist line
("use strict");
//33. FUNCTIONS
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
(birthYear) => 2023 - birthYear;
const calcAge3 = (birthYear) => 2023 - birthYear;
const ageY3 = calcAge3(1992);
//you can also use {} and still without parentesis or with parentesis in case you need more than one argument
const yearsUntilRetirement = (birthYear) => {
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
const friends = ["Michael", "Steven", "Peter"];
const friendsB = new Array("Michael", "Steven", "Peter");
//only primitive values are unmutable. So you can change an array const like below, but not changing the complete var
friends[2] = "newFriend";
//common methods or functions
friends.length;
friends.push("newFriend2 at the end");
friends.unshift("newFriend3 at the beginning");
friends.pop(); //removes the last
friends.shift(); //removes the first
friends.indexOf("Michael"); //returns the position of Michael
friends.includes("Bob"); //returns a boolean and says if that's inside. It checks with strict ===
//39. Data structure: OBJECTS
const joseArray = ["Jose", 30, ["Michael", "Steven", "Peter"]];
//every line/assignement is called property. So here there are 3. Here the order doesn't matter. On the ARRAYS they matter a lot
const joseObject = {
  firstName: "Jose",
  age: 30,
  friends: ["Michael", "Steven", "Peter"],
};
//to reference one
joseObject.age;
joseObject[age]; //here you can put an expression
//if you want to pass information to do a check, use [], not the .
//how to add new properties without methods
joseObject.location = "Berlin";
joseObject["Instagram"] = "totfosk";
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
console.log(newObject["calcAge4"](1992));
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
  if (typeof joseObject[i] !== "string") continue;
  //if you use BREAK, the loop stops
  if (typeof joseObject[i] !== "number") break;
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
  console.log("i am repeating myself");
}
//this is a copy of the above but with the new method
let rep = 0;
while (rep <= 10) {
  console.log("i am repeating myself");
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("you did a 6");
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
document.querySelector(".class");
document.querySelector("#id");
document.querySelector(".class").textContent; //to see what's inside
document.querySelector(".class").textContent = "new text"; //to change what's inside
document.querySelector(".class").value; //to get the inserted value from an input. I don't know how it works for other elements
document.querySelector(".class").addEventListener("click", function () {
  console.log("");
}); //'listens to a click
document.querySelector("body").style.backgroundColor = "#ffffff"; //always the value is a string here
document.getElementById("only-an-ID"); //here you don't need a . or #, but you need it using the querySelector
//78. Refactoring (cleaning the code)
//In order to avoid having all these (similar) lines from above, you can create a function. For example: instead of:
document.querySelector(".class").textContent = "new text"; //everytime you want to do this to the same class, you can rather create this:
const displayMessage = function (message) {
  document.querySelector(".class").textContent = message;
};
//and then use it as
displayMessage("new-text1");
displayMessage("new-text2");
displayMessage("new-text3");
//Also, using vars for query selectors. So instead of having this:
document.querySelector(".classAC");
//you can have this
const classAC = document.querySelector(".class");
//if you want to add/remove classes to classAC:
classAC.classList.add("hidden");
classAC.classList.remove("hidden");
classAC.classList.toggle("hidden");
//very useful condition for if statements
classAC.classList.contains("hidden");
!classAC.classList.contains("hidden");
//IMPORTANT! If you use QUERY SELECTOR only the first element that has this class will be selected, not the others. In that case you have to use
document.querySelectorAll(".class-that-is-used-in-more-places");
//then if you need to do a change in all you need a for loop since what's selected becomes an array of each element w that class (very annoying, but that's what it seems)
//81. Hear key pressing
document.addEventListener("keydown", function () {}); //there's also keypress and keyup; self-explanatory
//EVENTS are not explained on the course so we jump to youtube: https://www.youtube.com/watch?v=YiOlaiscqDY&ab_channel=dcode
//Events are actions potencially taken by the user (or by an API), like a click or a key press. HTML has them too as attributes but it's not recommended to use them.
//When you pass a function like the above, the argument is always the EVENT object. Normally they are repressented with an arrow f
document.addEventListener("keydown", (e) => {});
//in order to make things move when a specific key is pressed, you need to beware the key property, so e.key. For example:
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("do this or that");
  }
});
//82. min4. Flow chart (or everything that can happen). Is like a roadmap of all possibilities. http://diagrams.net
//When a var from a querySelector has an El at the end means you are referring to an element so you can later differeneciate between 'normal' vars and references
//How to change a HTML attribute:
classAC.src = `dice-${dice}.png`;
//so basically it's only dot . and the attribute you want to change and assign it a string
//also the above serve as example of a DYNAMIC SELECTOR. That's using a template literal to fill numbers and change what's selected depending on a var. Another e.g.:
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//86. Using functions only to set values from vars, like a reset button