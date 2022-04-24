import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoServices";

class TodoController implements IController {
  public index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);

    const todos = await service.getAll();
    return res.send({
      msg: "",
      length: todos.length,
      data: todos,
    });
  };

  public show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);

    const todo = await service.getOne();

    return res.send({ msg: "", data: todo });
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);

    const todo = await service.store();

    return res.send({ msg: "todo created successfully", data: todo });
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.update();
    return res.send({ msg: "todo updated", data: todo });
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);

    const todo = await service.delete(req, res);

    if (todo === 1) {
      return res.send({ msg: "todo deleted" });
    } else {
      return res.send({ msg: "todo not found" });
    }
  };
}

export default new TodoController();
