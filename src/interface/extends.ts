interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

//
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square2 = <Square>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
console.log(square, square2);