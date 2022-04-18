"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../db/models");
const PasswordHash_1 = __importDefault(require("../utils/PasswordHash"));
class AuthController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const hashedPassword = yield PasswordHash_1.default.passwordHash(password);
            const createdUser = yield db.user.create({
                username,
                password: hashedPassword,
            });
            return res.send({
                msg: "register success",
                user: { username: createdUser.username },
            });
        });
    }
    login(req, res) {
        return res.send("login");
    }
}
exports.default = new AuthController();
