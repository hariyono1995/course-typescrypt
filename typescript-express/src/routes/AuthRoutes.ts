import BaseRoute from "./BaseRoute";
import AuthController from "../controllers/AuthController";
import validate from "../middleware/AuthValidator";
import { auth } from "../middleware/AuthMiddleware";

class AuthRoute extends BaseRoute {
  public routes(): void {
    this._router.route("/register").post(validate, AuthController.register);
    this._router.route("/login").post(validate, AuthController.login);
    this._router.route("/profile").get(auth, AuthController.profile);
  }
}

export default new AuthRoute()._router;
