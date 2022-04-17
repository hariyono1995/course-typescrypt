namespace SingletonSolution {
  class User {
    private static instance: User;

    private _firstName: string = "";
    private _lastName: string = "";

    public static getInstance(): User {
      if (!User.instance) {
        User.instance = new User();
      }
      return User.instance;
    }

    getFullName(): string {
      //  akses db untuk mendapatkan profile user
      this._firstName = "first name";
      this._lastName = "last name";
      return `${this._firstName} ${this._lastName}`;
    }
  }

  // const profile = User.getInstance();
  // console.log(profile.getFullName());

  const zoro = User.getInstance();
  const luffy = User.getInstance();

  console.log(zoro.getFullName());
  console.log(luffy.getFullName());
  console.log(zoro === luffy);
}
