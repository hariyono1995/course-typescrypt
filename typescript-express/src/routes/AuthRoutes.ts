import BaseRoute from "./BaseRoute";
import AuthController from "../controllers/AuthController";
import validate from "../middleware/AuthValidator";

class AuthRoute extends BaseRoute {
  public routes(): void {
    this._router.route("/register").post(validate, AuthController.register);
    this._router.route("/login").post(validate, AuthController.login);
  }
}

export default new AuthRoute()._router;
