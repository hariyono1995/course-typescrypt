class Animal3 {
  public _name: string = "";
  public _foot: number = 0;

  breath() {
    console.log(`${this._name} sedang bernafas`);
  }
}

class Bird extends Animal3 {
  public _color: string = "Red";
}

const bird = new Bird();

bird._name = "Dara";
bird._foot = 2;
bird._color = "Black";

console.log(bird);
