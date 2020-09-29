/* not clear : the min and the max value or indice? */

/* for the min and max indice

const readlineSync = require("readline-sync");

let array1 = [6, 3, 9, 2, 1];
let i = parseInt(array1.length)-2

array1.splice(1,i);

console.log("The the minimum and maximum elements of a given array are : "+array1);
*/

/* for the min and max value*/

const readlineSync = require("readline-sync");

let array1 = [6, 3, 9, 2, 1];
let min = Math.min(...array1);
let max = Math.max(...array1);

console.log("The min and the max value of the array are : "+min+" and "+max);
