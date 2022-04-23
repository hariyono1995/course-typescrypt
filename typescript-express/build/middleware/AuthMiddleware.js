"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_codes_1 = require("http-status-codes");
const auth = (req, res, next) => {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send("Unauthorized");
    }
    const secretKey = process.env.SECRET_KEY || "secret";
    const token = accessToken;
    try {
        const credential = jsonwebtoken_1.default.verify(token, secretKey);
        if (credential) {
            req.app.locals.credential = credential;
            return next();
        }
        else {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send("invalid token");
        }
    }
    catch (error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
};
exports.auth = auth;
