import { Request, Response ,NextFunction} from "express";
import Ajv from "ajv";
import { userSchema } from "../schemas/schemas";
const ajv = new Ajv();

export function userSchemaValidator (req : Request, res : Response, next : NextFunction) {
    if(req.method === "POST") {
        const  isDataValid = ajv.validate(userSchema, req.body);
        if(isDataValid)
        next();
        else {
            console.log("user Schema Validation Failed" , ajv.errors)
        }
        res.status(400).json(ajv.errors)
    }
    else
    next();
  }