export {};

//  interface seperti contract yang harus di penuhi jika tidak maka akan error

interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Lenovo implements Laptop {
  public name: string;
  public isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log("Menyala");
  }
  off(): void {
    console.log("Mati");
  }
}

let lenovo = new Lenovo("Lenovo type 888 core-7", false);

console.log(lenovo.name);
console.log(lenovo.on());
console.log(lenovo.off());
