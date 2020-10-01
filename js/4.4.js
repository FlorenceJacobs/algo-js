/*Exercise 4.4
Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

Write a documentation for all the functions you created.*/

const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question ("Please, enter the length of an array: "));
let arr = [];

function rand10() {
    return Math.floor(Math.random()*11);
    }

function multiRand(n) {
    for (let i=0; i<n; i++) {
        arr.push(rand10())
    }
    return arr;
}

/*AVERAGE
const reducer = (accumulator, currentValue) => accumulator + currentValue;
OU var total = [0, 1, 2, 3].reduce((a, b)=> a + b,0);
console.log(array.reduce(reducer))
*/

function average(arr) {
    let sum=arr.reduce((a,b)=>a+b, 0)
    return sum/arr.length;
}

function max(arr) {
    return Math.max(...arr);
}

function min(arr) {
    return Math.min(...arr);
}

console.log("This is an array of "+n+" random numbers : ["+multiRand(n)+"], the max is "+max(arr)+", the min is "+min(arr)+" and the average is "+average(arr)+".");