'use strict';

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