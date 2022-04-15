class Animal {
  public _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

let kucing = new Animal("Kucing");
let kodok = new Animal("Kodok");

console.log(kucing);
console.log(kodok);
