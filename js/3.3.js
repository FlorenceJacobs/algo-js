const readlineSync = require("readline-sync");

/*
let array1 = [1, 2, 3, 4, 5];
let array2 =[];

for (let element of array1) {
    array2.push(element);
}
console.log("The duplicate array is : "+array2);
*/

/*
let array1 = [1, 2, 3, 4, 5];
let array2 =[];

array2=array1.slice();
console.log("The duplicate array is : "+array2);
*/

let array1 = [1, 2, 3, 4, 5];
let array2 =[];

array2 = [...array1];
console.log("The duplicate array is : "+array2);