class Cow {
  public _name: string;

  constructor(name: string) {
    this._name = name;
  }

  eat(): void {
    console.log("Eating grass");
  }
}

interface IBrama extends Cow {
  _color: string;
}

class Brama implements IBrama {
  public _name: string;
  public _color: string;

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
  }

  eat(): void {
    console.log("Eating grass");
  }
}
