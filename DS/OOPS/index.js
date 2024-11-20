//we can define object by literals, factoreis and constructors:---


//1. Through literals:---
const circle =  {
    radius : 1,
    location : {
        x : 10,
        y : 10
    },
    draw: function(){
        console.log("draw the location points and radius from earth circle", this.location.x , this.location.y , this.radius)
    }
}

circle.draw();

//2. Through Factories:---

function createCircle(radius){
    return {
        radius,
        draw : function(){
            console.log("draw")
        }
    }
}
console.log(createCircle(1))

//3. Through constructors:--- 

function Circle(radius){
    this.radius = radius,
    this.draw  = function(){
        console.log("draw")
    }
}

const result =  new Circle(1)
console.log(result.radius)



