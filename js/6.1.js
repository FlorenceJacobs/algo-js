const readlineSync = require("readline-sync");

class Circle {
    constructor(xPos, yPos, radius){
        this.xPos = 6;
        this.yPos = 4;
        this.radius = 10;
    }

    move (xOffset, yOffset) {
        this.xPos = this.xPos-xOffset;
        this.yPos = this.yPos-yOffset;
    console.log("The new position is ["+this.xPos+","+this.yPos+"].");
    }

    get surface (){
        const pi = 3.14;
        return pi*Math.pow(this.radius);
    }
}

let test = new Circle (4,7,9);
console.log("The circle has a surface of "+test.surface());
test.move(6,4);
console.log(test);