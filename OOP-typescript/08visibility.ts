//  public
//  private = hanya bisa di akses oleh kelas itu sendiri
//  protected = hanya bisa di akses oleh kelas dan turunannya

class Animal8 {
  private _id: number;
  public _nama: string;
  protected _deskripsi: string;

  constructor(id: number, nama: string, deskripsi: string) {
    this._id = id;
    this._nama = nama;
    this._deskripsi = deskripsi;
  }
}

class Frog extends Animal8 {
  private _umurTelur: number = 0;
  private _umurKecebong: number = 8;
  private _umurKatak: number = 200;

  getUmur(): void {
    console.log(this._umurTelur + this._umurKecebong + this._umurKatak);
  }
}

const frog = new Frog(
  1,
  "Kodok",
  "Kodok adalah hewan yang bisa hidup di air maupun di darat atau di sebut amfibi"
);

console.log(frog);

frog.getUmur();
