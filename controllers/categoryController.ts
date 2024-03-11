import { Request, Response } from "express";
import { categoryList } from "../mockData/mockdata";
import { Category } from "../models/category";

export const getAllCategories = (req:Request,res:Response)=>{
    res.status(200).json(categoryList)
};

export const postCategory = (req:Request,res:Response)=>{
    categoryList.push(req.body);
    res.status(201).json(categoryList);
}

export const getCategoryById = (req:Request,res:Response)=>{
    let requestCategoryId:String = req.params.id;
    if(requestCategoryId){
        let category = categoryList.find((category:Category)=>category.categoryId === requestCategoryId);
        if(category)
        res.status(200).json(category);
        else
        res.status(404).json({"message" : "Requested category not found"});
    }
    else{
        res.status(400).json({"message" : "Server error"});;
    }
}

export const updateCategoryById = (req:Request,res:Response)=>{
    let requestCategoryBody:Category = req.body;
    if(requestCategoryBody){
        let selectedCategory = categoryList.find((category:Category)=>category.categoryId === requestCategoryBody.categoryId);
        if(selectedCategory){
          selectedCategory.categoryDescription = requestCategoryBody.categoryDescription;
          selectedCategory.categoryName = requestCategoryBody.categoryName;
          res.status(200).json(categoryList)
        }
        else
        res.status(404).json({"message" : "Requested category not found"})
       
    }
    else{
        res.status(400).json({"message" : "server error"});
    }
}

export const deleteCategoryById =(req:Request,res:Response)=>{
    let requestCategoryId:String = req.params.id;
    let index = categoryList.findIndex((category:Category)=> category.categoryId ===  requestCategoryId)
    if (index!= -1) 
    {
        categoryList.splice(index,1)
        res.status(200).json(categoryList)
    }
    else
    res.status(404).json({"message" : "Requested category not found"});
      
}

