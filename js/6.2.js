/*Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases.*/

const readlineSync = require("readline-sync");

class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos= topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle) {
        if ((otherRectangle.topLeftXPos>=this.topLeftXPos+this.width)
        || (otherRectangle.topLeftXPos+otherRectangle.width<=this.width)
        || (otherRectangle.topLeftYPos>=this.topLeftYPos+this.length)
        || (otherRectangle.topLeftYPos+otherRectangle.length<=this.topLeftYPos)){
            console.log("The rectangles don't collide.");
            return;
        }
        else {
            console.log("The reclangles collide.")
        }
    }
}
let test1=new Rectangle(6,7,8,9);
let test2=new Rectangle(9,8,7,6);
test1.collides(test2);

/*
if(
    (box2.x >= box1.x + box1.w) // trop à droite
    || (box2.x + box2.w <= box1.x) // trop à gauche
    || (box2.y >= box1.y + box1.h) // trop en bas
    || (box2.y + box2.h <= box1.y))  // trop en haut
        return false; 
else
        return true;
*/