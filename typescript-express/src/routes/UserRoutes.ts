import { Router, Request, Response } from "express";

import IRoute from "./RouteInterface";

//  Controller
import UserController from "../controllers/UserController";

class UserRoute implements IRoute {
  public _router: Router;

  constructor() {
    this._router = Router();
    this.routes();
  }

  public routes(): void {
    this._router
      .route("/")
      .get(UserController.index)
      .post(UserController.create);
    this._router
      .route("/:id")
      .get(UserController.show)
      .put(UserController.update)
      .delete(UserController.delete);
  }
}

export default new UserRoute()._router;
