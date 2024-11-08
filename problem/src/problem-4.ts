{
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape : "circle";
        radius : number; 
    };

    type Rectangle = {
        shape : "rectangle";
        width : number;
        height : number;
    }
     
    type Shape = Circle | Rectangle;

    function calculateShapeArea(input: Shape): number {
        if(input.shape === "circle"){
            return parseFloat((Math.PI * Math.pow(input.radius, 2)).toFixed(2))
        }
       else if(input.shape === "rectangle"){
            return input.width * input.height;
        }
        else{
         throw new Error("unknown")
        }
    }
    // const circleArea = calculateShapeArea({shape:"circle",radius:5})
    // console.log(circleArea)
    // const rectangleArea = calculateShapeArea({shape:"rectangle",width:4,height:4})
    // console.log(rectangleArea)
}

