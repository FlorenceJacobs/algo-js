const readlineSync = require("readline-sync");
let a = [5, 13];
let b = [9, 19];

function calcDistance(a,b) {
    return Math.sqrt(Math.pow((a[0]-b[0]),2)+ Math.pow((a[1]-b[1]),2));
}
console.log("The distance between the two points is: "+calcDistance(a,b)+".")

/*DISTANCE = Théorême de Pythagore, soit :
(x)exp2 + (y)exp2 = (z)exp2, SOIT
√((x)exp2 + (y)exp2)= z, SOIT
distance(z) = √((x1-x2)exp2+(y1-y2)exp2), SOIT en JS :
Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2))
*/