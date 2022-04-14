"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var john = new Person("John", 8);
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
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, phone) {
        var _this = _super.call(this, name, age) || this;
        _this.write = true;
        _this.read = true;
        _this._email = ""; // tidak bisa di akses dari luar harus melalui getter
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            write: this.write,
            read: this.read,
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(Person));
var admin = new Admin("Jhon", 28, "088296798");
console.log(admin.getName());
console.log(admin.phone);
admin.email = "admin@gmail.com";
console.log(admin.email);
