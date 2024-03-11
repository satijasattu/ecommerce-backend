import { Request, Response ,NextFunction} from "express";
import Ajv from "ajv";
import { categorySchema } from "../schemas/schemas";
const ajv = new Ajv();

export function categorySchemaValidator (req : Request, res : Response, next : NextFunction) {
    if(req.method === "POST") {
        const  isDataValid = ajv.validate(categorySchema, req.body);
        if(isDataValid)
        next();
        else {
            console.log("category Schema Validation Failed" , ajv.errors)
        }
        res.status(400).json(ajv.errors)
    }
    else
    next();
  }