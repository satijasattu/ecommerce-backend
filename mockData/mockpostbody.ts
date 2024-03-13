import { Category } from "../models/category";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { User } from "../models/user";

export const mockOrderPostBody : Order =

{
    "orderId":"OR980",
    "userId":"USR777",
    "orderSKU":"SKU111",
    "modeOfPayment":"Debit Card",
    "shipmentAddress":"Amazon Pvt Ltd",
    "productDetails" : [
        {
            "productId" :"CL098", 
            "productName":"Leather Jacket",
            "productDescription":"Leather Jacket from jack and jones",
            "productCategory":{
                "categoryId":"CL765HDTYILKJ",
                "categoryName":"Clothing",
                "categoryDescription":"Category containing clothing and fashion products"
            },
            "productPrice":200, 
        }
        
    ]

}


export const mockCaegoryPostBody : Category =

 {
        "categoryId":"KIT098768",
        "categoryName":"Kitchen",
        "categoryDescription":"Category containing kitchen products"
  }


export const mockProductPostBody : Product =

{
            "productId" :"KI098", 
            "productName":"Utensils Stand",
            "productDescription":"This is a utensils stand",
            "productCategory":{
                "categoryId":"KIT098768",
                "categoryName":"Kitchen",
                "categoryDescription":"Category containing kitchen products"
            },
            "productPrice":400

}


export const mockUserPostBody : User =

{
    "userId":"USR004",
    "userName":"Bmkesh bakshi",
    "userRoles" : ["ROLE_FIREARM","ROLE_EXPLOSIVES","ROLE_CLOTHING"]
}