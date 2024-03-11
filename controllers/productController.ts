import { Request, Response } from "express";
import { productList } from "../mockData/mockdata";
import { Product } from "../models/product";

export const getAllProducts = (req:Request,res:Response)=>{
    res.status(200).json(productList)
};

export const postProduct = (req:Request,res:Response)=>{
    productList.push(req.body);
    res.status(201).json(productList);
}

export const getProductById = (req:Request,res:Response)=>{
    let requestProductId:String = req.params.id;
    if(requestProductId){
        let product = productList.find((product:Product)=>product.productId === requestProductId);
        if (product)
        res.status(200).json(product);
        else
        res.status(404).json({"message" : "Requested product not found"});
    }
    else{
        res.status(400).json({"message" : "Server Error"});
    }
}

export const updateProductById = (req:Request,res:Response)=>{
    let requestProductBody:Product = req.body;
    if(requestProductBody){
        let selectedProduct = productList.find((product:Product)=>product.productId === requestProductBody.productId);
        if(selectedProduct){
           selectedProduct.productCategory = requestProductBody.productCategory;
           selectedProduct.productDescription = requestProductBody.productDescription;
           selectedProduct.productName = requestProductBody.productName;
           selectedProduct.productPrice = requestProductBody.productPrice
           res.status(200).json(productList)
        }
       else
       res.status(404).json({"message" : "Requested product not found"});
    }
    else{
        res.status(400).json({"message" : "Server Error"});
    }
}

export const deleteProductById =(req:Request,res:Response)=>{
    let requestProductId:String = req.params.id;
    let index = productList.findIndex((product:Product)=> product.productId ===  requestProductId)
    if (index!= -1) {
        
        productList.splice(index,1)
        res.status(200).json(productList)
    }
    else
    res.status(404).json({"message" : "Requested product not found"});
      
}

