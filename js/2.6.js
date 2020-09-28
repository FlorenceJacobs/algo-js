const readlineSync = require("readline-sync");
/*
let daysArray = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"];
let i = new Number(readlineSync.question ("Please, enter a number from 1 to 7: "));
console.log("The day you've choose is " + daysArray[i-=1]);
*/

let daysArray = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"];
let i = 0

i = new Number(readlineSync.question ("Please, enter a number from 1 to 7: "));

switch (new Number) {
    case 1:
    console.log("Monday" + " is the first day of the week.");
    break;
    case 2:
    console.log(daysArray[1]);
    break;
    case 3 :
    console.log(daysArray[2]);
    break;
    case 4:
    console.log(daysArray[3]);
    break;
    case 5:
    console.log(daysArray[4]);
    break;
    case 6:
    console.log(daysArray[5]);
    break;
    case 7:
    console.log(daysArray[6]);
    break;
  default:
    console.log("Sorry, you don't understand anything");
}
