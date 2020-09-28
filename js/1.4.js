const readlineSync = require("readline-sync");

let userName = readlineSync.question ("Please enter your name.");
let userFirstName = readlineSync.question ("Please enter your first name.");
let userCity = readlineSync.question ("Please enter your city.");

console.log("Hello " + userName);
console.log("Your name is " + userName + " " + userFirstName + " and you live in " + userCity);