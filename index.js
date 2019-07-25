class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    let total = 0
    this.sides.forEach(function(side){
      total += side
    })
    return total
  }
}

class Triangle extends Polygon{

  get isValid() {
    let check1 = this.sides[0] + this.sides[1] > this.sides[2]
    let check2 = this.sides[2] + this.sides[1] > this.sides[0]
    let check3 = this.sides[0] + this.sides[2] > this.sides[1]
    return (check1 && check2 && check3)
  }
}

class Square extends Polygon{

  get isValid() {
    let check1 =  this.sides[0] === this.sides[1]
    let check2 =  this.sides[1] === this.sides[2]
    let check3 =  this.sides[2] === this.sides[3]
    return (check1 && check2 && check3)
  }

  get area() {
    return this.sides[0] ** 2
  }
}
