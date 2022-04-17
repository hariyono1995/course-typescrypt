import { Router, Request, Response } from "express";

import { IRoute } from "./RouteInterface";

class UserRoute implements IRoute {
  public _router: Router;

  constructor() {
    this._router = Router();
    this.routes();
  }

  public routes(): void {
    // this._router.route("/").get((req: Request, res: Response) => {
    //   res.send("ini adalah router user");
    // });
    this._router.get("/", (req: Request, res: Response) => {
      res.send("ini adalah router user");
    });
    this._router.route("/").post((req: Request, res: Response) => {
      res.send(req.body);
    });
  }
}

export default new UserRoute()._router;
