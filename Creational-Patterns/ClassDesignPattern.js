// Class Design Pattern:
// First a class is defined then code
// is reused by creating an object from that class.

// First the Class is desginated properties...
class Bike {
    //  constructor is used to design the attributes 
    constructor(wheels, frame, color) {
        this.wheels = wheels;
        this.frame = frame;
        this.color = color;
    }
}

// a bike is created from the class design
const surlyLongHaulTrucker = new Bike(26, "Long Haul Trucker", "green");

