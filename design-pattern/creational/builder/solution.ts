namespace BuilderSolution {
  //  Cara 1
  class User {
    public _name: string;
    public _username: string;
    public _email: string;
    public _password: string;

    constructor({ name = "", username = "", email = "", password = "" } = {}) {
      this._name = name;
      this._username = username;
      this._email = email;
      this._password = password;
    }

    getDetail(): string {
      return `Name : ${this._name}, Username : ${this._username}`;
    }
  }

  const jamal = new User({ name: "Jamal", username: "jamal889" });

  console.log("jamal :>> ", jamal);

  //  Cara 2 -> lebih direkomendasikan

  class Admin {
    public _name: string = "";
    public _username: string = "";
    public _email: string = "";
    public _password: string = "";
    public _age: number = 0;

    getDetail() {
      return `Name : ${this._name}, Username : ${this._username},`;
    }
  }

  class AdminBuilder {
    private _admin: Admin;

    constructor() {
      this._admin = new Admin();
    }

    setName(value: string) {
      this._admin._name = value;
      return this;
    }

    setUsername(value: string) {
      this._admin._username = value;
      return this;
    }

    setEmail(value: string) {
      this._admin._email = value;
      return this;
    }

    setPassword(value: string) {
      this._admin._password = value;
      return this;
    }

    setAge(value: number) {
      this._admin._age = value;
      return this;
    }

    getBuild(): any {
      return `Name : ${this._admin._name}, Username : ${this._admin._username}`;
    }
  }

  const admin = new AdminBuilder();
  const jhon = admin
    .setName("Jhon")
    .setUsername("Jhon228")
    .setEmail("jhon2890")
    .setPassword("jhon123")
    .getBuild();

  console.log(jhon);
}
