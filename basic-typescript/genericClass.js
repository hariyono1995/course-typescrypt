var Data = /** @class */ (function () {
    function Data() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this._data = elements;
    }
    Data.prototype.addData = function (element) {
        this._data.push(element);
    };
    Data.prototype.addMultipleData = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this._data).push.apply(_a, elements);
    };
    Data.prototype.getData = function () {
        return this._data;
    };
    return Data;
}());
var data = new Data("a", "b", "c");
data.addData("d");
data.addMultipleData("e", "f");
console.log(data.getData());
var newData = new Data(1, 2, 3);
newData.addData(8);
newData.addMultipleData(9, 10);
console.log(newData.getData());
