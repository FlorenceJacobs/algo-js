const readlineSync = require("readline-sync");

let sizeShoe = new Number(readlineSync.question ("Please enter your shoe size :"));
let birthYear = new Number(readlineSync.question ("Please enter your birth year :"));
let result = ((sizeShoe * 2 + 5) * 50) - birthYear + 1766;
console.log("You win: " + result);