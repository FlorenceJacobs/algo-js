const readlineSync = require("readline-sync");

console.log("Question 1/5")
let animal = readlineSync.question ("Please enter your favorite animal: ");
console.log("Question 2/5")
let color = readlineSync.question ("Please enter your favorite color :");
console.log("Question 3/5")
let birthYear = readlineSync.question ("Please enter your birth year :");
console.log("Question 4/5")
let food = readlineSync.question ("Please enter your favorite food :");
console.log("Question 5/5")
let country = readlineSync.question ("Please enter your favorite country :");

console.log("Once uppon a time, a " + color + " " + animal + " fell ill eating " + birthYear + " " + food +"s in " + country +"...");