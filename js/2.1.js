const readlineSync = require("readline-sync");

let age = new Number(readlineSync.question ("Please enter your age :"));
    if (age>=18)
        console.log("You are an adult.");
    else 
        console.log("You probably are a child. Is somebody watching at what you're doing on this device?");