class Hewan {
  public _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

let kucing = new Hewan("Kucing");
let kodok = new Hewan("Kodok");

console.log(kucing);
console.log(kodok);
