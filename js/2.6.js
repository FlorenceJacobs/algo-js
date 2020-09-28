const readlineSync = require("readline-sync");

let daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let i = new Number(readlineSync.question ("Please, enter a number from 1 to 7: "));
console.log("The day you've choose is " + daysArray[i-1]);

/*
let daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let i = 0

while (i<1 || 7<i) {
    i = new Number(readlineSync.question ("Please, enter a number from 1 to 7: "));
    if (i<1 || 7<i) {
        console.log("Did you really undertood? Read once more the instructions");
    }
    else {break;}
}
switch (i) {
    case 1:
    console.log(daysArray[0]);
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
*/