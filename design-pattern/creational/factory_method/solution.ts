namespace SolutionLogistic {
  interface Logistic {
    _name: string;
    _qty: number;
    _delivery(): void;
  }

  class Truck implements Logistic {
    public _name: string;
    public _qty: number;

    constructor(name: string, qty: number) {
      this._name = name;
      this._qty = qty;
    }

    _delivery(): void {
      console.log(
        `Antar barang dengan truck : ${this._name}, sebanyak ${this._qty}`
      );
    }
  }

  class Ship implements Logistic {
    public _name: string;
    public _qty: number;

    constructor(name: string, qty: number) {
      this._name = name;
      this._qty = qty;
    }

    _delivery(): void {
      console.log(
        `Antar barang dengan kapal : ${this._name}, sebanyak ${this._qty}`
      );
    }
  }

  class Aircraft implements Logistic {
    public _name: string;
    public _qty: number;

    constructor(name: string, qty: number) {
      this._name = name;
      this._qty = qty;
    }

    _delivery(): void {
      console.log(
        `Antar barang dengan pesawat : ${this._name} sebanyak ${this._qty}`
      );
    }
  }

  type LogisticType = {
    name: string;
    type: string;
    qty: number;
  };

  interface Factory {
    create(options: LogisticType): Logistic;
  }

  class LogisticFactory implements Factory {
    public create(option: LogisticType): Logistic {
      switch (option.type.toLowerCase()) {
        case "air":
          return new Aircraft(option.name, option.qty);
        case "sea":
          return new Ship(option.name, option.qty);
        case "land":
          return new Truck(option.name, option.qty);
        default:
          throw new Error("Invalid Logistic");
      }
    }
  }

  const logistic = new LogisticFactory();

  const byLand = logistic.create({ name: "Tronton", type: "LAND", qty: 100 });

  console.log(byLand._delivery());
}
