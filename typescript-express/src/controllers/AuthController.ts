import { Request, Response } from "express";

const db = require("../db/models");

import Authentication from "../utils/Authentication";

class AuthController {
  public register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    const hashedPassword: string = await Authentication.passwordHash(password);

    const createdUser = await db.user.create({
      username,
      password: hashedPassword,
    });

    return res.send({
      msg: "register success",
      user: { username: createdUser.username },
    });
  };
  public login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    const user = await db.user.findOne({ where: { username: username } });

    if (user) {
      const isCorrectPassword = await Authentication.passwordCompare(
        password,
        user.password
      );

      if (isCorrectPassword) {
        const token = await Authentication.tokenGenerator(
          user.id,
          user.username
        );
        return res.send({ token: token });
      } else {
        return res.send("password incorrect");
      }
    }

    return res.send("auth failed");
  };

  public profile = (req: Request, res: Response): Response => {
    return res.send("ini adalah route profile setelah ada authentication");
  };
}

export default new AuthController();
