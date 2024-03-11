import { Request, Response ,NextFunction} from "express";
import Ajv from "ajv";
import { productSchema } from "../schemas/schemas";
const ajv = new Ajv();

export function productSchemaValidator (req : Request, res : Response, next : NextFunction) {
    if(req.method === "POST") {
        const  isDataValid = ajv.validate(productSchema, req.body);
        if(isDataValid)
        next();
        else {
            console.log("product Schema Validation Failed" , ajv.errors)
        }
        res.status(400).json(ajv.errors)
    }
    else
    next();
  }