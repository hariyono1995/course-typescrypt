export {};

class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let user = new User("Jhon", 8);
console.log(user);

//  or
class Person {
  constructor(public name: string, public age: number) {}
}

let john = new Person("John", 8);
console.log(john);

//  class inheritence

//  public = hanya bisa di akses di semua class / dari luar class
//  private = hanya bisa di akses oleh kelas itu sendiri dan turunannya
//  private = hanya bisa di akses oleh kelas itu sendiri
