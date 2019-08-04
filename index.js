class Polygon {
    constructor(integers) {
        this.integers = integers;
    }

    get countSides() {
        return this.integers.length
    }

    get perimeter() {
        let perimeterTotal = 0
        for(let i = 0; i < this.integers.length; i++){
            perimeterTotal += parseInt(this.integers[i])           
        }
        return perimeterTotal
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.integers[0] === this.integers[1]) && (this.integers[1] === this.integers[2])) {
            return true;
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        return (this.integers[0] === this.integers[1]);
    }
    
    get area() {
        let side1 = this.integers[0]
        let side2 = this.integers[1]
        let area = side1 * side2
        return area  
    }
}