import BaseRoute from "./BaseRoute";

//  Controller
import TodoController from "../controllers/TodoController";

import validate from "../middleware/TodoValidator";

//  Middleware
import { auth } from "../middleware/AuthMiddleware";

class TodoRoute extends BaseRoute {
  public routes(): void {
    this._router
      .route("/")
      .get(auth, TodoController.index)
      .post(auth, validate, TodoController.create);
    this._router
      .route("/:id")
      .get(auth, TodoController.show)
      .put(auth, validate, TodoController.update)
      .delete(auth, TodoController.delete);
  }
}

export default new TodoRoute()._router;
