"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//  Controller
const UserController_1 = __importDefault(require("../controllers/UserController"));
class UserRoute {
    constructor() {
        this._router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this._router
            .route("/")
            .get(UserController_1.default.index)
            .post(UserController_1.default.create);
        this._router
            .route("/:id")
            .get(UserController_1.default.show)
            .put(UserController_1.default.update)
            .delete(UserController_1.default.delete);
    }
}
exports.default = new UserRoute()._router;
