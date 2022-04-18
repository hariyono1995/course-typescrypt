"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    register(req, res) {
        return res.send("register");
    }
    login(req, res) {
        return res.send("login");
    }
}
exports.default = new AuthController();
