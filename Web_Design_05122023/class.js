class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("turbo is on!")
    }
}

//this keyword is associated with constructor

const car1 = new Car("red", 120);

car1.turboOn();
console.log(car1.color);
console.log(car1.speed);
