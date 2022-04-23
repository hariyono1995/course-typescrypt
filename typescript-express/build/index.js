"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
//  Router
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const TodoRoutes_1 = __importDefault(require("./routes/TodoRoutes"));
class App {
    constructor() {
        this._app = (0, express_1.default)();
        this.plugins();
        this.routes();
    }
    plugins() {
        this._app.use(body_parser_1.default.json());
        this._app.use((0, morgan_1.default)("dev"));
        this._app.use((0, compression_1.default)());
        this._app.use((0, helmet_1.default)());
        this._app.use((0, cors_1.default)());
        (0, dotenv_1.config)();
    }
    routes() {
        this._app.get("/", (req, res) => {
            res.send("hii, dunia ini adalah pertama saya belajar express dengan typescript");
        });
        this._app.use("/api/v1/users", UserRoutes_1.default);
        this._app.use("/api/v1/auth", AuthRoutes_1.default);
        this._app.use("/api/v1/todo", TodoRoutes_1.default);
    }
}
const port = process.env.PORT || 8000;
const app = new App()._app;
app.listen(port, () => {
    console.log(`server berjalan di port ${port}`);
});
