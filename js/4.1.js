/* DOES'NT WORK !!

const readlineSync = require("readline-sync");
let userLenght = new Number(readlineSync.question ("Please, enter the length of a rectangle: "));
let userWidth = new Number(readlineSync.question ("Please, enter the width of a rectangle: "));

var rectangle = {
    length : parseInt(userLenght),
    width : parseInt(userWidth),
    surface : function calculeSurface(length, width) {
        return this.length*this.width;
    }
}
console.log("The surface of the reclangle is "+rectangle.calculeSurface);
*/

const readlineSync = require("readline-sync");
let userLenght = new Number(readlineSync.question ("Please, enter the length of a rectangle: "));
let userWidth = new Number(readlineSync.question ("Please, enter the width of a rectangle: "));

let calcSurface = (userLenght, userWidth) => {
    return userLenght*userWidth;
}
console.log("The surface of the reclangle is "+calcSurface(userLenght, userWidth))