"use strict";
// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }
    
    get perimeter() {
        return this.sides.reduce((l,r) => {return l+r}, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.sides[0] === this.sides[1]) &&(this.sides[1] === this.sides[2])) {
            return true;
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        return (this.sides[0] === this.sides[1]);
    }

    get area() {
        return this.sides[0] * this.sides[1];
    }
}
