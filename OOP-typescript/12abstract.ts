abstract class Human {
  public _nama: string;
  public _umur: number;

  constructor(nama: string, umur: number) {
    this._nama = nama;
    this._umur = umur;
  }

  abstract berjalan(): void;
}

class Male extends Human {
  public _menikah: boolean;

  constructor(nama: string, umur: number, menikah: boolean) {
    super(nama, umur);
    this._menikah = menikah;
  }

  berjalan(): void {
    console.log("berjalan");
  }
}

const jhon = new Male("Jhon", 28, false);

jhon.berjalan();

console.log(jhon);
