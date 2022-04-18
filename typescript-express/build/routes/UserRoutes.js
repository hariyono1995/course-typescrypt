"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = __importDefault(require("./BaseRoute"));
//  Controller
const UserController_1 = __importDefault(require("../controllers/UserController"));
//  Middleware
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
class UserRoute extends BaseRoute_1.default {
    routes() {
        this._router
            .route("/")
            .get(AuthMiddleware_1.auth, UserController_1.default.index)
            .post(UserController_1.default.create);
        this._router
            .route("/:id")
            .get(UserController_1.default.show)
            .put(UserController_1.default.update)
            .delete(UserController_1.default.delete);
    }
}
exports.default = new UserRoute()._router;
