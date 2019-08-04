// Your code here
// Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
// Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
// Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. 
// This method will become accessible to its child classes.

// Define a Triangle class that inherits from Polygon.

// It will automatically have access to count and perimeter inherited from Polygon.

// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.

class Polygon {
    constructor(arrayOfNumbers){
        this.sideLengths = arrayOfNumbers
    }

    get countSides(){
        return this.sideLengths.length
    }

    get perimeter(){
        const toSum = (accumulator, currentValue) => accumulator +currentValue
        return this.sideLengths.reduce(toSum)
    }
}

class Triangle extends Polygon {
//     The sum of the lengths of any two sides of a triangle is greater than the length of the third side. 
//      [2,3,4] 2+3 > 4, 3+4 > 2, 2+4 > 3 
//     If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side.
//        [2,3,4] 
//      If that is not true, then it is not possible to construct a triangle with the given side lengths.

     get isValid (){
        //  if (this.countSides() === 3)
        let side1 = this.sideLengths[0]
        let side2 = this.sideLengths[1]
        let side3 = this.sideLengths[2]
        
        let sideCheck = (side1+ side2 > side3) && (side1+side3 > side2) && (side2+side3 > side1)
        
        if (sideCheck){
            return true
         } else {
             return false
         }
     }
}

class Square extends Polygon {
    // Define a Square class that inherits from Polygon.
    // It will automatically have access to count and perimeter inherited from Polygon.
    // Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. 
    //A square is valid when the lengths of all sides are equal.
    // Use the get keyword to make a getter method area that calculates the area of the square.

    get isValid(){
        //is the sum of all sides / 4 = to the first side length of the square (remember all sides are actually equal in square)
        return this.perimeter / 4 == this.sideLengths[0]
    }

    get area(){
        return this.sideLengths[1]*this.sideLengths[0]
    }
}