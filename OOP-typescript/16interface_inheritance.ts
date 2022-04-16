interface Human {
  _nama: string;
  _umur: number;
}

interface Female extends Human {
  _gender: string;
}

class Child implements Female {
  _nama: string;
  _umur: number;
  _gender: string;

  constructor(nama: string, umur: number, gender: string) {
    this._nama = nama;
    this._umur = umur;
    this._gender = gender;
  }
}

let ani = new Child("Ani", 8, "female");
console.log(ani);
