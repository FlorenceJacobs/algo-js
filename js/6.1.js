/*Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.*/

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