/*By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.*/

const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question ("Please, enter the length of an array: "));
let array = [];

function multiRand(n) {
    for (let i=0; i<n; i++) {
        element = rand10 ()
        array.push(element)
    }
}

function rand10() {
    return Math.floor(Math.random()*11);
    }

multiRand(n);
console.log("This is an array of "+n+" random numbers : ["+array+"]");