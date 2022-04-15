class Hewan {
  constructor() {
    console.log(
      "Constructor ini akan selalu di jalan kan terlebih dahulu ketika intance di buat"
    );
  }
}

const hewan = new Hewan();

console.log(hewan);
