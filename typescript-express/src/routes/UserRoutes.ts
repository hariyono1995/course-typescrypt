import BaseRoute from "./BaseRoute";

//  Controller
import UserController from "../controllers/UserController";

class UserRoute extends BaseRoute {
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
