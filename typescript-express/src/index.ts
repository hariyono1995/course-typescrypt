import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";

//  Router
import userRoute from "./routes/UserRoutes";
import authRoute from "./routes/AuthRoutes";
import todoRoute from "./routes/TodoRoutes";

class App {
  public _app: Application;

  constructor() {
    this._app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this._app.use(bodyParser.json());
    this._app.use(morgan("dev"));
    this._app.use(compression());
    this._app.use(helmet());
    this._app.use(cors());
    dotenv();
  }

  protected routes(): void {
    this._app.get("/", (req: Request, res: Response) => {
      res.send(
        "hii, dunia ini adalah pertama saya belajar express dengan typescript"
      );
    });

    this._app.use("/api/v1/users", userRoute);
    this._app.use("/api/v1/auth", authRoute);
    this._app.use("/api/v1/todo", todoRoute);
  }
}

const port: string | number = process.env.PORT || 8000;
const app = new App()._app;

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
