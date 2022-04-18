import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  const accessToken: string | undefined = req.headers.authorization;

  if (!accessToken) {
    return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized");
  }

  const secretKey = process.env.SECRET_KEY || "secret";
  const token: string = accessToken;

  try {
    const credential: string | object = jwt.verify(
      JSON.parse(token),
      secretKey
    );

    if (credential) {
      next();
    } else {
      return res.status(StatusCodes.BAD_REQUEST).send("invalid token");
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};
