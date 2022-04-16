// interface : contract yang harus di penuhi semua jika tidak maka akan

interface AndroidPhone {
  _name: string;
  menu(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  public _name: string;

  constructor(name: string) {
    this._name = name;
  }

  menu(): void {
    console.log("Masuk ke halaman menu");
  }

  back(): void {
    console.log("Masuk ke  halaman utama/ home");
  }
}

class Game {
  private androit: AndroidPhone;

  constructor(android: AndroidPhone) {
    this.androit = android;
  }
}

const samsung = new Samsung("Star");

console.log(samsung._name);
console.log(samsung.back());
console.log(samsung.menu());

const game_ML = new Game(samsung);

console.log(game_ML);
