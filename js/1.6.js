const readlineSync = require("readline-sync");

let decimalNmb1 = new Number(Math.trunc(readlineSync.question ("Please enter one integer :")));
let decimalNmb2 = new Number(readlineSync.question ("Please enter a new integer :"));

console.log("Returns: " + (decimalNmb1 * decimalNmb2);