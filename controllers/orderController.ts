import { Request, Response } from "express";
import { Order } from '../models/order';
import {orderList} from "../mockData/mockdata"

export const getAllOrders = (req:Request,res:Response)=>{
    res.status(200).json(orderList)
};

export const postOrder = (req:Request,res:Response)=>{
    orderList.push(req.body);
    res.status(201).json(orderList);
    
}

export const getOrderById = (req:Request,res:Response)=>{
    let requestOrderId:String = req.params.id;
    if(requestOrderId){
        let order = orderList.find((order:Order)=>order.orderId === requestOrderId);
        if(order)
        res.status(200).json(order);
        else
        res.status(404).json({"message" : "Requested order not found"});
    }
    else{
        res.status(400).json({"message" : "server Error"});
    }
}

export const updateOrderById = (req:Request,res:Response)=>{
    let requestOrderBody:Order = req.body;
    if(requestOrderBody){
        let selectedOrder = orderList.find((order:Order)=>order.orderId === requestOrderBody.orderId);
        if(selectedOrder){
            selectedOrder.orderSKU = requestOrderBody.orderSKU;
            selectedOrder.modeOfPayment = requestOrderBody.modeOfPayment;
            selectedOrder.productDetails = requestOrderBody.productDetails;
            selectedOrder.shipmentAddress = requestOrderBody.shipmentAddress;
            selectedOrder.userId = requestOrderBody.userId;
            res.status(200).json(orderList);
        }
        else
        res.status(404).json({"message" : "Requested order not found"});
    }
    else{
        res.status(400).json({"message" : "server Error"});
    }
   
}

export const deleteOrderById =(req:Request,res:Response)=>{
    let requestOrderId:String = req.params.id;
    let index = orderList.findIndex((order:Order)=> order.orderId ===  requestOrderId)
    if (index!= -1) {
        orderList.splice(index,1)
        res.status(200).json(orderList)
    }
    else 
        res.status(404).json({"message" : "Requested order not found"});
      

}

