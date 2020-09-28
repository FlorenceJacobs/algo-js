const readlineSync = require("readline-sync");

/*
let bestNbr = new Number(readlineSync.question ("Please, enter your favorite number : "));
let i = 42
if (bestNbr == i) {
    console.log("You're the best. I'm proud of you!")
}
else {
    console.log("You're wrong. Think better. Think universe. And try again.")
    let bestNbr = new Number(readlineSync.question ("Please, enter your favorite number : "));
}
*/

let bestNbr = new Number(readlineSync.question ("Please, enter your favorite number : "));
let i = 42;
while (bestNbr != i) {
    bestNbr = new Number(readlineSync.question ("Please, enter your favorite number : "));
    if (bestNbr != i) {
    console.log("You're wrong. Think better. Think universe. And try again.");
    }
    else {
    console.log("You're the best. I'm proud of you!")
    }
}
