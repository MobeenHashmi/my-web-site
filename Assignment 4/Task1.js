class Shape{
    name;
    sides;
    side_length;

    constructor(name,sides,side_length){
        this.name = name;
        this.sides = sides;
        this.side_length = side_length;
    }

    calcPerimeter = () =>{
        let pri = this.sides * this.side_length;
        console.log(pri);
    }
}

let square = new Shape("square",5,5);
square.calcPerimeter();
let triangle = new Shape("square",5,3);
triangle.calcPerimeter();