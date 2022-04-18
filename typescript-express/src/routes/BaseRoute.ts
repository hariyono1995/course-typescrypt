import { Router } from "express";
import IRoute from "./RouteInterface";

abstract class BaseRoute implements IRoute {
  public _router: Router;

  constructor() {
    this._router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRoute;
