"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRoute {
    constructor() {
        this._router = (0, express_1.Router)();
        this.routes();
    }
}
exports.default = BaseRoute;
