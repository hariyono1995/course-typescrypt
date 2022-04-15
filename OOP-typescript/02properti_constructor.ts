class Animal2 {
  public nama: string = "";
  public kaki: number = 0;
  public mamalia: boolean = false;

  bernafas(): void {
    console.log(`${this.nama} sedang bernafas`);
  }
}

const hewan2 = new Animal2();

hewan2.nama = "Nyamuk";
hewan2.kaki = 8;
hewan2.bernafas();

console.log(hewan2);
