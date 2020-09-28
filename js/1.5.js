const readlineSync = require("readline-sync");

let decimalNmb1 = readlineSync.question ("Please enter one number with decimals.");
let decimalNmb2 = readlineSync.question ("Please enter a new number with decimals.");

console.log(Math.trunc(decimalNmb1) * decimalNmb2);