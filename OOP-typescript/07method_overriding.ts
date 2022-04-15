//  method overriding berfungsi untuk mengganti method yang ada di parent class

class Animal6 {
  bernafas(): void {
    console.log("sedang bernafas dengan paru-paru");
  }
}

class Bird6 extends Animal6 {
  bernafas(): void {
    console.log("sedang bernafas menggunakan pundi-pundi udara");
  }
}

const bird6 = new Bird6();
bird6.bernafas();
