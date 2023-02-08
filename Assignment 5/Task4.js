// Create a class “Car” with method setName , setMake, setColor, setSpeed and print. Create an object for Class Car and use
// method Channing to set all the values and display the value with print methods. js
class Car {
    constructor(name, make, color, speed) {
        this.name = name;
        this.make = make;
        this.color = color;
        this.speed = speed;
    }
    setName(name) {
        this.name = name;
    }
    setMake(make) {
        this.make = make;
    }
    setColor(color) {
        this.color = color;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    print() {
        console.log(this.name);
        console.log(this.make);
        console.log(this.color);
        console.log(this.speed);    
    }
}
let car = new Car();
car.setName("Mustang");
car.setMake("Ford");
car.setColor("Red");
car.setSpeed(180);
car.print();