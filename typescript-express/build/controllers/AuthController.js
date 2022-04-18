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
const Authentication_1 = __importDefault(require("../utils/Authentication"));
class AuthController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const hashedPassword = yield Authentication_1.default.passwordHash(password);
            const createdUser = yield db.user.create({
                username,
                password: hashedPassword,
            });
            return res.send({
                msg: "register success",
                user: { username: createdUser.username },
            });
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const user = yield db.user.findOne({ where: { username: username } });
            if (user) {
                const isCorrectPassword = yield Authentication_1.default.passwordCompare(password, user.password);
                if (isCorrectPassword) {
                    const token = yield Authentication_1.default.tokenGenerator(user.id, user.username);
                    return res.send({ token: token });
                }
                else {
                    return res.send("password incorrect");
                }
            }
            return res.send("auth failed");
        });
        this.profile = (req, res) => {
            return res.send("ini adalah route profile setelah ada authentication");
        };
    }
}
exports.default = new AuthController();
