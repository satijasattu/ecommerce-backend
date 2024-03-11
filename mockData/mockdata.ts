import { Category } from "../models/category";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { User } from "../models/user";

export const productList:Product[] = [
    {
        "productId" :"EL123", 
        "productName":"Laptop",
        "productDescription":"Dell Laptop",
        "productCategory":{
            "categoryId":"E123RAHU0987",
            "categoryName":"Electronics",
            "categoryDescription":"Category containing electronic products"
        },
        "productPrice":1000, 
    },
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
    },
    {
        "productId" :"FB987", 
        "productName":"Chivas Regal Whisky",
        "productDescription":"This is a very fine whisky",
        "productCategory":{
            "categoryId":"FANDB876JHYRT",
            "categoryName":"Food & Beverages",
            "categoryDescription":"Category containing food and beverage products"
        },
        "productPrice":100, 
    }
    
]

export const categoryList:Category[] = [
    {
        "categoryId":"E123RAHU0987",
        "categoryName":"Electronics",
        "categoryDescription":"Category containing electronic products"
    },
    {
        "categoryId":"CL765HDTYILKJ",
        "categoryName":"Clothing",
        "categoryDescription":"Category containing clothing and fashion products"
    },
    {
        "categoryId":"FANDB876JHYRT",
        "categoryName":"Food & Beverages",
        "categoryDescription":"Category containing food and beverage products"
    },
]

export const userList:User[] = [
{
    "userId":"USR123",
    "userName":"Rahul Satija",
    "userRoles" : ["ROLE_ELECTRONICS","ROLE_FOOD_AND_BEVERAGE","ROLE_CLOTHING"]
},

{
    "userId":"USR777",
    "userName":"James Bons",
    "userRoles" : ["ROLE_FIREARM","ROLE_EXPLOSIVES","ROLE_CLOTHING"]
}


];


export const orderList : Order[] = [

{
    "orderId":"OR8976",
    "userId":"USR123",
    "orderSKU":"SKU987",
    "modeOfPayment":"CREDIT CARD",
    "shipmentAddress":"Nagarro Software Pvt Ltd",
    "productDetails" : [
        {
            "productId" :"EL123", 
            "productName":"Laptop",
            "productDescription":"Dell Laptop",
            "productCategory":{
                "categoryId":"E123RAHU0987",
                "categoryName":"Electronics",
                "categoryDescription":"Category containing electronic products"
            },
            "productPrice":1000, 
        },
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
        },
        {
            "productId" :"FB987", 
            "productName":"Chivas Regal Whisky",
            "productDescription":"This is a very fine whisky",
            "productCategory":{
                "categoryId":"FANDB876JHYRT",
                "categoryName":"Food & Beverages",
                "categoryDescription":"Category containing food and beverage products"
            },
            "productPrice":100, 
        }
        
    ]

},

{
    "orderId":"OR123H",
    "userId":"USR777",
    "orderSKU":"SKU077",
    "modeOfPayment":"COD",
    "shipmentAddress":"Google Pvt Ltd",
    "productDetails" : [
        {
            "productId" :"FB987", 
            "productName":"Chivas Regal Whisky",
            "productDescription":"This is a very fine whisky",
            "productCategory":{
                "categoryId":"FANDB876JHYRT",
                "categoryName":"Food & Beverages",
                "categoryDescription":"Category containing food and beverage products"
            },
            "productPrice":100, 
        }
        
    ]

}

]