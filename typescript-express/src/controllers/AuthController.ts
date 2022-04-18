import { Request, Response } from "express";

class AuthController {
  public register(req: Request, res: Response): Response {
    return res.send("register");
  }
  public login(req: Request, res: Response): Response {
    return res.send("login");
  }
}

export default new AuthController();
