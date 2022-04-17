"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRoute {
    constructor() {
        this._router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // this._router.route("/").get((req: Request, res: Response) => {
        //   res.send("ini adalah router user");
        // });
        this._router.get("/", (req, res) => {
            res.send("ini adalah router user");
        });
        this._router.route("/").post((req, res) => {
            res.send(req.body);
        });
    }
}
exports.default = new UserRoute()._router;
