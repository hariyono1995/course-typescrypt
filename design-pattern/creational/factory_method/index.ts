class Truck {
  private _name: string;
  private _qty: number;

  constructor(name: string, qty: number) {
    this._name = name;
    this._qty = qty;
  }

  delivery(): void {
    console.log(
      `Antar barang dengan truck : ${this._name}, sebanyak ${this._qty}`
    );
  }
}

class Ship {
  private _name: string;
  private _qty: number;

  constructor(name: string, qty: number) {
    this._name = name;
    this._qty = qty;
  }

  delivery(): void {
    console.log(
      `Antar barang dengan kapal : ${this._name}, sebanyak ${this._qty}`
    );
  }
}

class Aircraft {
  private _name: string;
  private _qty: number;

  constructor(name: string, qty: number) {
    this._name = name;
    this._qty = qty;
  }

  delivery(): void {
    console.log(
      `Antar barang dengan pesawat : ${this._name} sebanyak ${this._qty}`
    );
  }
}

const siba = new Truck("Siba", 80);
const tetanic = new Ship("Tetanic", 90);
const adamAir = new Aircraft("Adam Air", 70);

let landType = "land";

if (landType === "air") {
  adamAir.delivery();
} else if (landType === "sea") {
  tetanic.delivery();
} else if (landType === "land") {
  siba.delivery();
}
