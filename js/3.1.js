const readlineSync = require("readline-sync");
let array1 = [1, 2, 3, 4, 5];
let i=0;
let sum=0;

for (let i=0; i<array1.length; i++) {
    sum+=array1[i];
}
console.log("The sum of the elements of the array is "+sum)

/* ARRAY2
let array2 = [100, 101, 102];
let i=0;
let sum=0;

for (let i=0; i<array2.length; i++) {
    sum+=array2[i];
}
console.log("The sum of the elements of the array is "+sum)
*/

/* FOR ... OF
let array2 = [100, 101, 102];
let sum=0;

for (let num2 of array2) {
    sum+=num2;
}
console.log("The sum of the elements of the array is "+sum)
*/

/* FOR... OF
let array1 = [1, 2, 3, 4, 5];
let sum=0;

for (let num1 of array1) {
    sum+=num1;
}
console.log("The sum of the elements of the array is "+sum)
*/
