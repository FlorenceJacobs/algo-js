const readlineSync = require("readline-sync");

let IntegerA = new Number(readlineSync.question ("Please enter one integer :"));
let IntegerB = new Number(readlineSync.question ("Please enter a new integer :"));

console.log("Rest of the integers division: " + (IntegerA % IntegerB));