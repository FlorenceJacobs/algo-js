const readlineSync = require("readline-sync");

console.log("Please, enter two numbers below: a minimum number and a maximum number.")
let nbrMin = new Number(readlineSync.question ("Your min number:"));
let nbrMax = new Number(readlineSync.question ("Your max number:"));
    if (nbrMin<nbrMax) {
        console.log("Go ahead. You're on the right way.");
        let nbrCurrent = new Number(readlineSync.question ("Your current number, between min and max:"));
        if ((nbrMin<nbrCurrent<nbrMax)) {
            console.log("Good job.");
         }
        else {
        console.log("You probably are tired. Take a cup of coffee and try again.");
        }
    }
    else {
        console.log("You're wrong. Max is bigger that min.");
    }        