import { Request, Response } from "express";
const db = require("../db/models");

class TodoServices {
  public _credential: {
    id: number;
    username: string;
  };
  public _body: Request["body"];

  public _params: Request["params"];

  constructor(req: Request) {
    this._credential = req.app.locals.credential;
    this._body = req.body;
    this._params = req.params;
  }

  getAll = async () => {
    const { id: user_id } = this._credential;

    const todos = await db.todo.findAll({
      where: { user_id: user_id },
      attributes: ["id", "description"],
    });

    return todos;
  };

  getOne = async () => {
    const { id: user_id } = this._credential;
    const id = parseInt(this._params.id, 10);

    const todo = await db.todo.findOne({ where: { id: id, user_id: user_id } });

    return todo;
  };

  store = async () => {
    const { id } = this._credential;

    const { description } = this._body;

    const todo = await db.todo.create({
      user_id: id,
      description: description,
    });

    return todo;
  };

  update = async () => {
    const { id: user_id } = this._credential;
    const id = parseInt(this._params.id);
    const { description } = this._body;

    const todo = await db.todo.update(
      { description: description },
      { where: { id: id, user_id: user_id } }
    );

    return todo;
  };

  delete = async (req: Request, res: Response) => {
    const { id: user_id } = this._credential;
    const id = parseInt(this._params.id);

    const isExist = await db.todo.findOne({ where: { id: id } });

    if (!isExist) {
      return res.send({ msg: `Todo id: ${id} not found.` });
    }

    const todo = await db.todo.destroy({ where: { id: id, user_id: user_id } });

    return todo;
  };
}

export default TodoServices;
