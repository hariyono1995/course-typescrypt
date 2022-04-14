"use strict";
exports.__esModule = true;
//  function dengan tipe data yang di return
//  string
function getName() {
    return "Jhon Dow";
    // return 888; //error harus string
}
console.log(getName());
//  number
function getNumber() {
    return 888;
}
console.log(getNumber());
//  function yang tidak mereturn apapun dan tidak boleh ada return di dalam function
function printName() {
    console.log(getName());
}
printName();
//  argument type di dalam function
function multiple(num1, num2) {
    return num1 * num2;
}
var age = 80;
var Add = function (val1, val2) { return val1 + val2; };
console.log(Add(2, 3));
