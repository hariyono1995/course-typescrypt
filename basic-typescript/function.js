"use strict";
exports.__esModule = true;
//  function dengan tipe data yang di return
//  string
function getName() {
    return "Jhon";
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
//  default parameters/argument
var fullName = function (first, last) {
    if (last === void 0) { last = "Doe"; }
    return first + " " + last;
};
console.log(fullName(getName(), "jaw"));
//  opsional parameter
//  opsional parameter
var getUmur = function (val1, val2) {
    return val1 + "" + val2;
};
console.log(getUmur(8, 8));
