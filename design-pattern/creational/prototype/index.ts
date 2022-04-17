//  desain pattern prototype di gunakan untuk kloning dari class yang sudah ada sebelumnya

namespace Prototype {
  class User {
    public _name: string;
    public _username: string;
    public _email: string;

    constructor(name: string, username: string, email: string) {
      this._name = name;
      this._username = username;
      this._email = email;
    }

    getClone(): this {
      return Object.assign({}, this);
    }
  }

  const max = new User("Max", "max88", "max@gmail.com");
  const jhon = max.getClone();
  jhon._name = "jhon";
  jhon._username = "jhonwicki";
  jhon._email = "jhon@mail.com";

  console.log(max);
  console.log(jhon);
}
