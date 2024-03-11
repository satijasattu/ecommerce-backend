import { Request, Response ,NextFunction} from "express";
import Ajv from "ajv";
import { orderSchema } from "../schemas/schemas";
const ajv = new Ajv();

export function orderSchemaValidator (req : Request, res : Response, next : NextFunction) {
    if(req.method === "POST") {
        const  isDataValid = ajv.validate(orderSchema, req.body);
        if(isDataValid)
        next();
        else {
            console.log("Order Schema Validation Failed" , ajv.errors)
        }
        res.status(400).json(ajv.errors)
    }
    else
    next();
  }