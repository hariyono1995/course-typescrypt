class Animal4 {
  public _name: string;
  public _foot: number;

  constructor(name: string, foot: number) {
    this._name = name;
    this._foot = foot;
  }
}

const hewan4 = new Animal4("Kucing", 4);

console.log(hewan4);

//  -------------- cara 2 --------------------

class Animal41 {
  constructor(public _name: string, public _foot: number) {}
}

const hewan41 = new Animal41("Kucing", 4);

console.log(hewan41);
