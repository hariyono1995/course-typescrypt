import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

const validate = [
  check("username").isString(),
  check("password").isLength({ min: 5 }),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .send({ errors: errors.array() });
    }
    next();
  },
];

export default validate;
