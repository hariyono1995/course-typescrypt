import { Request, Response } from "express";

import IController from "./ControllerInterface";

const db = require("../db/models");

class TodoController implements IController {
  public index = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;

    const todos = await db.todo.findAll({
      where: { user_id: id },
      attributes: ["id", "description"],
    });

    return res.send({
      msg: "",
      length: todos.length,
      data: todos,
    });
  };

  public show = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const id = parseInt(req.params.id);

    const todo = await db.todo.findOne({
      where: { id: id, user_id: user_id },
    });

    return res.send({ msg: "", data: todo });
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;

    const { description } = req.body;

    const todo = await db.todo.create({
      user_id: id,
      description: description,
    });

    return res.send({ msg: "todo created successfully", data: todo });
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const id = parseInt(req.params.id);
    const { description } = req.body;

    await db.todo.update(
      { description: description },
      { where: { id: id, user_id: user_id } }
    );

    return res.send({ msg: "todo updated", data: "" });
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const id = parseInt(req.params.id);

    const isExixt = await db.todo.findOne({ where: { id: id } });

    if (!isExixt) {
      return res.send({ msg: `todo id: ${id} not founds` });
    }

    await db.todo.destroy({
      where: { id: id, user_id: user_id },
    });

    return res.send({ msg: `todo id: ${id} deleted.`, data: "" });
  };
}

export default new TodoController();
