"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = __importDefault(require("./BaseRoute"));
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const AuthValidator_1 = __importDefault(require("../middleware/AuthValidator"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
class AuthRoute extends BaseRoute_1.default {
    routes() {
        this._router.route("/register").post(AuthValidator_1.default, AuthController_1.default.register);
        this._router.route("/login").post(AuthValidator_1.default, AuthController_1.default.login);
        this._router.route("/profile").get(AuthMiddleware_1.auth, AuthController_1.default.profile);
    }
}
exports.default = new AuthRoute()._router;
