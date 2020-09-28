const readlineSync = require("readline-sync");

let IntegerA = new Number(Math.trunc(readlineSync.question ("Please enter one integer :")));
let IntegerB = new Number(readlineSync.question ("Please enter a new integer :"));

console.log("Returns: " + (IntegerA % IntegerB));