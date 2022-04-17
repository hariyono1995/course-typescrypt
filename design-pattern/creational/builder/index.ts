class User {
  private _name: string;
  private _username: string;
  private _email: string;

  constructor(name: string, username: string, email: string) {
    this._name = name;
    this._username = username;
    this._email = email;
  }
}

//  jika ada perubahan pada property class maka akan error maka untuk mengatasi ini perlu di buat  builder class;

const jhon = new User("Jhon", "jhon123", "jhon@mail.com");
