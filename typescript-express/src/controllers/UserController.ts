import { Request, Response } from "express";

import IController from "./ControllerInterface";

const data: any[] = [
  { id: 1, name: "budi" },
  { id: 2, name: "andi" },
  { id: 3, name: "susi" },
  { id: 4, name: "siti" },
  { id: 5, name: "sri" },
  { id: 6, name: "sriyanti" },
];

class UserController implements IController {
  public index(req: Request, res: Response): Response {
    return res.send(data);
  }

  public show(req: Request, res: Response): Response {
    const id: number = parseInt(req.params.id);

    const users = data.find((user) => user.id === id);

    return res.send(users);
  }

  public create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    const user = data.push({ id, name });

    return res.send({
      msg: "success",
      user: { id: id, name: name },
      data: user,
    });
  }

  public update(req: Request, res: Response): Response {
    const id: number = parseInt(req.params.id);
    const { name } = req.body;

    const user = data.find((user) => user.id === id);
    user.name = name;

    return res.send({ msg: "success", data: user });
  }

  public delete(req: Request, res: Response): Response {
    const id: number = parseInt(req.params.id);

    const user = data.filter((user) => user.id !== id);
    return res.send({ msg: "user id: " + id + "deleted", data: user });
  }
}

export default new UserController();
