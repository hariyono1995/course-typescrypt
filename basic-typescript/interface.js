"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lenovo = /** @class */ (function () {
    function Lenovo(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Lenovo.prototype.on = function () {
        console.log("Menyala");
    };
    Lenovo.prototype.off = function () {
        console.log("Mati");
    };
    return Lenovo;
}());
var lenovo = new Lenovo("Lenovo type 888 core-7", false);
console.log(lenovo.name);
console.log(lenovo.on());
console.log(lenovo.off());
