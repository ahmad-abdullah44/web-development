var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
        console.log("The engine is running")    
    }
    car.lightsOn = function(a) {
        if(a == true) {
        console.log("The Lights are on")
        }
        else {
        console.log("The Lights are off")
        }
    }
    console.log(car);
    car.turnTheKey(true);
    car.lightsOn();