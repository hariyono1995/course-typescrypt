class Ayam {
  static kaki: number = 2;

  static berjalan() {
    console.log("Ayam berjalan dengan" + Ayam.kaki + "kaki");
  }
  getKaki() {
    console.log(Ayam.kaki);
  }
}

Ayam.kaki = 8;

const ayamKate = new Ayam();
ayamKate.getKaki();

console.log(ayamKate);
