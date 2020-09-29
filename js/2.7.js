const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question ("Please, enter a number of operations: "));
let x = 0
let newNumber = 0
for (let i=0; i<n; i++){
    newNumber = new Number(readlineSync.question ("["+(i+1)+"/"+n+"] Please, enter a number to sum: "));
    x += newNumber;
}
console.log("The sum of your numbers is +" + x)