import { NextFunction, Request, Response } from "express";

const { validationResult } = require("express-validator");
const { NextFunction, Request, Response } = require("express");

const validate = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400).json({ errors: result.array() });
        return
    }
    next();
};

export { validate };
