import BaseRoute from "./BaseRoute";
import AuthController from "../controllers/AuthController";

class AuthRoute extends BaseRoute {
  public routes(): void {
    this._router.route("/register").post(AuthController.register);
    this._router.route("/login").post(AuthController.login);
  }
}

export default new AuthRoute()._router;
