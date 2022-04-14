"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User("Jhon", 8);
console.log(user);
//  or
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var john = new Person("John", 8);
console.log(john);
//  class inheritence
//  public = hanya bisa di akses di semua class / dari luar class
//  private = hanya bisa di akses oleh kelas itu sendiri dan turunannya
//  private = hanya bisa di akses oleh kelas itu sendiri
