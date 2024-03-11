import { Order } from "../models/order";

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