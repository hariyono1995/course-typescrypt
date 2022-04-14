export {};

let user: {
  name: string;
  email: string;
  password: string;
} = {
  name: "Jhon",
  email: "Jhon@gmail.com",
  password: "222",
};

console.log(user.name);

//  or
type User = {
  name: string;
  email: string;
  password: string;
};

let admin: User = {
  name: "Jhon",
  email: "Jhon@gmail.com",
  password: "222",
};

console.log(admin.name);
