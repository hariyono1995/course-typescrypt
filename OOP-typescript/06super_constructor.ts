class Animal5 {
  public _name: string;
  public _color: string;

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
  }
}

class Cow extends Animal5 {
  public _foot: number;

  constructor(name: string, color: string, foot: number) {
    super(name, color);
    this._foot = foot;
  }
}

const cow = new Cow("Brama", "Maroon", 4);

console.log(cow);
