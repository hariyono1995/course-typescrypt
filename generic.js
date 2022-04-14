"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("generic");
function getData(value) {
    return value;
}
console.log(getData("Jhon").length); // 4
console.log(getData(123).length); // undefined (untuk mengatasi ini bisa menggunakan generic)
function myData(value) {
    return value;
}
console.log(myData("Jhon").length); //4
// console.log(myData(123).length); // error karena number tidak bisa  di gunakan untuk type number
//  penulisan untuk arrow function
var Data = function (value) {
    return value;
};
