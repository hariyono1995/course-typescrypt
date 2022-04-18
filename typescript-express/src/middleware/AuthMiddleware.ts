import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  console.log("masuk ke auth middleware");
  let auth: boolean = false;

  if (auth) {
    next();
  } else {
    res.send("user unauthenticated");
  }
};
