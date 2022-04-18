import { Request, Response } from "express";

const db = require("../db/models");

import PasswordHash from "../utils/PasswordHash";

class AuthController {
  public register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    const hashedPassword: string = await PasswordHash.passwordHash(password);

    const createdUser = await db.user.create({
      username,
      password: hashedPassword,
    });

    return res.send({
      msg: "register success",
      user: { username: createdUser.username },
    });
  };
  public login(req: Request, res: Response): Response {
    return res.send("login");
  }
}

export default new AuthController();
