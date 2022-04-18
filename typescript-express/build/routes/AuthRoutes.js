"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = __importDefault(require("./BaseRoute"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
class AuthRoute extends BaseRoute_1.default {
    routes() {
        this._router.route("/register").post(AuthController_1.default.register);
        this._router.route("/login").post(AuthController_1.default.login);
    }
}
exports.default = new AuthRoute()._router;
