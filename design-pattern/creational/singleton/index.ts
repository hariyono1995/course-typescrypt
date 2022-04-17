//  singleton ini bertujuan agar object tidak di instansiasi lebih dari satu kali, seperti global variable biasanya di gunakan untuk connect ke db

namespace UserSingleton {
  class User {
    private _firstName: string = "";
    private _lastName: string = "";

    getFullName() {
      //  Akses db , select user ... untuk mendapatkan data profile user
      this._firstName = "first name";
      this._lastName = "last name";

      return `${this._firstName} ${this._lastName}`;
    }
  }

  const zoro = new User();
  const luffy = new User();

  console.log(zoro.getFullName());
  console.log(luffy.getFullName());
  console.log(zoro === luffy);
}
