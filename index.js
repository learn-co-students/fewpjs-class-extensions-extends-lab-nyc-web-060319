// Your code here

class Polygon{

    constructor(sidesArray){
        this.sidesArray = sidesArray;
    }

    get countSides(){
        let returnVal = 0;
        for (let i=this.sidesArray.length; i>0; i-- ){
            console.log("i is: ", i)
            returnVal++;
        }
        // sidesArray.forEach(element => {    //Didnt work for some reason
        //     returnVal++;
        // }
    return returnVal;
    }


    get perimeter(){
        let returnVal = 0;
        for (let i=this.sidesArray.length-1; i>=0; i-- ){
            console.log("i is: ", i)
            returnVal = returnVal + this.sidesArray[i];
            console.log("This.sidesArray[i] is : ", this.sidesArray[i]);
        }
        // sidesArray.forEach(element => {
        //     returnVal++;
        // }
    return returnVal;
    }
}


class Triangle extends Polygon{
    constructor(sidesArray){
        super(sidesArray);

        // this.isValid = function(){   // DOESNT LIKE THIS.
        //     console.log("this.sideArray[0]zero is : ", this.sideArray[0]);
        //     if ( (this.sidesArray[0] + this.sidesArray[1] <= this.sidesArray[2]) || (this.sidesArray[1] + this.sidesArray[2] <= this.sidesArray[0])){
        //         console.log ((this.sidesArray[0] + this.sidesArray[1] <= this.sidesArray[2]))
        //         return false; // Error("bad side lengths!");   
        //     } else {
        //         return true;
        //     }      
        // }
    }

        get isValid(){                  //Tests never called.
            console.log("this.sideArray[0]zero is : ", this.sidesArray[0]);
            if ( (this.sidesArray[0] + this.sidesArray[1] <= this.sidesArray[2]) || (this.sidesArray[1] + this.sidesArray[2] <= this.sidesArray[0])){
    
                return false; // Error("bad side lengths!");   
            } else {
                return true;
            }
        }
    

}

// Triangle.prototype.isValid = function(){            //Tests never called.
//     console.log("this.sideArray[0]zero is : ", this.sideArray[0]);
//     if ( (this.sidesArray[0] + this.sidesArray[1] <= this.sidesArray[2]) || (this.sidesArray[1] + this.sidesArray[2] <= this.sidesArray[0])){

//         return false; // Error("bad side lengths!");   
//     } else {
//         return true;
//     }
// }


class Square extends Polygon{
    constructor(sidesArray){
        super(sidesArray);

    }
  
    get isValid(){                  //Tests never called.
        console.log(this.sidesArray)
        if ( (this.sidesArray[0] = this.sidesArray[1])  && (this.sidesArray[1] == this.sidesArray[2]) && (this.sidesArray[2] == this.sidesArray[3]) && (this.sidesArray[3] == this.sidesArray[0]) ){
            return true; // Error("bad side lengths!");   
        } else {
            return false;
        }
    }

    get area(){
        return ((this.sidesArray[0]) ** 2)
    }

}
