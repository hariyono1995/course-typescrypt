class Animal1 {
  constructor() {
    console.log(
      "Constructor ini akan selalu di jalan kan terlebih dahulu ketika intance di buat"
    );
  }
}

const hewan = new Animal1();

console.log(hewan);
