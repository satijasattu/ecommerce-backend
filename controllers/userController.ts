import { Request, Response } from "express";
import { userList } from "../mockData/mockdata";
import { User } from "../models/user";

export const getAllUsers = (req:Request,res:Response)=>{
    res.status(200).json(userList)
};

export const postUser = (req:Request,res:Response)=>{
    userList.push(req.body);
    res.status(201).json(userList);
}

export const getUserById = (req:Request,res:Response)=>{
    let requestUserId:String = req.params.id;
    if(requestUserId){
        let user = userList.find((user:User)=>user.userId === requestUserId);
        if(user)
        res.status(200).json(user);
        else
        res.status(404).json({"message" : "Requested User not found"});
    }
    else{
        res.status(400).json({"message" : "Server Error"});
    }
}

export const updateUserById = (req:Request,res:Response)=>{
    let requestUserBody:User = req.body;
    if(requestUserBody){
        let selectedUser = userList.find((user:User)=>user.userId === requestUserBody.userId);
        if(selectedUser){
           selectedUser.userName = requestUserBody.userName;
           selectedUser.userRoles = requestUserBody.userRoles;
           res.status(200).json(userList)
        }
        else
        res.status(404).json({"message" : "Requested User not found"});
       
    }
    else{
        res.status(400).json({"message" : "Server Error"});
    }
}

export const deleteUserById =(req:Request,res:Response)=>{
    let requestUserId:String = req.params.id;
    let index = userList.findIndex((user:User)=> user.userId ===  requestUserId)
    if (index!= -1)
     {
        userList.splice(index,1)
        res.status(200).json(userList)
     }
     else
     res.status(404).json({"message" : "Requested User not found"});;
}

