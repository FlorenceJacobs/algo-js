const readlineSync = require("readline-sync");

let array1 = [1, 2, 3, 4, 5];
let sum=0;
let average = 0;

for (let i=0; i<array1.length; i++) {
    sum+=array1[i];
}
average = sum/array1.length;
console.log("The average of the the elements of the array is "+average);

/*
let array2 = [100, 101, 102];
let i=0;
let sum=0;
let average = 0;

for (let i=0; i<array2.length; i++) {
    sum+=array2[i];
}
let average = sum/array2.length;
console.log("The average of the sum of the elements of the array is "+average);
*/