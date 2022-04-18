"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res, next) => {
    console.log("masuk ke auth middleware");
    let auth = false;
    if (auth) {
        next();
    }
    else {
        res.send("user unauthenticated");
    }
};
exports.auth = auth;
