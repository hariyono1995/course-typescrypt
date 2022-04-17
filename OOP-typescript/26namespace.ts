namespace NameSpaceExample {
  export class Hewan {
    public _name: string;

    constructor(name: string) {
      this._name = name;
    }
  }

  export const kodok = new Hewan("Kodok Betina");
}

const belalang = new NameSpaceExample.Hewan("Belalang");
const kodok = NameSpaceExample.kodok;

console.log(belalang);
console.log(kodok);
