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

  setName(value: string): void {
    this.name = value;
  }

  getName() {
    return this.name;
  }
}

let john = new Person("John", 8);
console.log(john);

//  class inheritence

//  public = hanya bisa di akses di semua class / dari luar class
//  private = hanya bisa di akses oleh kelas itu sendiri dan turunannya
//  private = hanya bisa di akses oleh kelas itu sendiri

// class Admin extends Person {
//   write: boolean = true;
//   read: boolean = true;

//   getRole(): { write: boolean; read: boolean } {
//     return {
//       write: this.write,
//       read: this.read,
//     };
//   }
// }

// let admin = new Admin("Jhon", 28);

// console.log(admin.getName());

//  menambahkan properti super dari parent

//  setter dan getter email
class Admin extends Person {
  write: boolean = true;
  read: boolean = true;
  phone: number | string;
  private _email: string = ""; // tidak bisa di akses dari luar harus melalui getter

  constructor(name: string, age: number, phone: number | string) {
    super(name, age);
    this.phone = phone;
  }
  getRole(): { write: boolean; read: boolean } {
    return {
      write: this.write,
      read: this.read,
    };
  }

  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

let admin = new Admin("Jhon", 28, "088296798");

console.log(admin.getName());
console.log(admin.phone);

admin.email = "admin@gmail.com";
console.log(admin.email);
