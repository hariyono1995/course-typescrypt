// class abstract  tidak bisa di instansiasi langsung akan tetapi harus melalui class inheritence nya

abstract class Vehicle {
  abstract wheels: number;
  start(): void {
    console.log("Machine is starting ....");
  }
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let motor = new Motorcycle();

console.log(motor.wheels);
motor.start();
