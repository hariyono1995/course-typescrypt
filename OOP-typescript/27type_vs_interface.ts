//  type bisa berbentuk obj dan type variabel
type name = string;
type umur = number;

type User = {
  name: string;
  email: string;
  password: string;
};

//  type tidak bisa di merge akan tetapi bisa di intersection
type Dino = { age: number };
// type Dino = { height : number}; // maka akan error duplicate identifier 'Dino'

type FamilyDino = { name: string };

type Dinosaurus = FamilyDino & Dino;
type Dinosaurus2 = FamilyDino | Dino;

const tyrex: Dinosaurus = {
  name: "Tyrex",
  age: 800,
};

//  interface hanya bisa dalam bentuk object

interface Admin {
  name: string;
  email: string;
  password: any;
}

//  interface bisa di merge / property nya akan di gabungkan jika ada 2 nama interface yang sama;

/**
 *  interface Rumah {
  width : number;
  height : number;
  typeTraditional : boolean;
}
 */

interface Rumah {
  width: number;
  height: number;
}

interface Rumah {
  typeTraditional: boolean;
}

class Joglo implements Rumah {
  width: number;
  height: number;
  typeTraditional: boolean;

  constructor(width: number, height: number, typeTraditional: boolean) {
    this.width = width;
    this.height = height;
    this.typeTraditional = typeTraditional;
  }
}

//  menggunakan interface ketika akan membuat class dan method yang berada di dalam class , memakai type ketika akan membuat variabel dan function
