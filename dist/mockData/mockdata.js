"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderList = exports.userList = exports.categoryList = exports.productList = void 0;
exports.productList = [
  {
    "productId": "EL123",
    "productName": "Laptop",
    "productDescription": "Dell Laptop",
    "productCategory": {
      "categoryId": "E123RAHU0987",
      "categoryName": "Electronics",
      "categoryDescription": "Category containing electronic products",
    },
    "productPrice": 1000,
  },
  {
    "productId": "CL098",
    "productName": "Leather Jacket",
    "productDescription": "Leather Jacket from jack and jones",
    "productCategory": {
      "categoryId": "CL765HDTYILKJ",
      "categoryName": "Clothing",
      "categoryDescription": "Category containing clothing and fashion products",
    },
    "productPrice": 200,
  },
  {
    "productId": "FB987",
    "productName": "Chivas Regal Whisky",
    "productDescription": "This is a very fine whisky",
    "productCategory": {
      "categoryId": "FANDB876JHYRT",
      "categoryName": "Food & Beverages",
      "categoryDescription": "Category containing food and beverage products",
    },
    "productPrice": 100,
  },
];
exports.categoryList = [
  {
    "categoryId": "E123RAHU0987",
    "categoryName": "Electronics",
    "categoryDescription": "Category containing electronic products",
  },
  {
    "categoryId": "CL765HDTYILKJ",
    "categoryName": "Clothing",
    "categoryDescription": "Category containing clothing and fashion products",
  },
  {
    "categoryId": "FANDB876JHYRT",
    "categoryName": "Food & Beverages",
    "categoryDescription": "Category containing food and beverage products",
  },
];
exports.userList = [
  {
    "userId": "USR123",
    "userName": "Rahul Satija",
    "userRoles": ["ROLE_ELECTRONICS", "ROLE_FOOD_AND_BEVERAGE", "ROLE_CLOTHING"],
  },
  {
    "userId": "USR777",
    "userName": "James Bons",
    "userRoles": ["ROLE_FIREARM", "ROLE_EXPLOSIVES", "ROLE_CLOTHING"],
  },
];
exports.orderList = [
  {
    "orderId": "OR8976",
    "userId": "USR123",
    "orderSKU": "SKU987",
    "modeOfPayment": "CREDIT CARD",
    "shipmentAddress": "Nagarro Software Pvt Ltd",
    "productDetails": [
      {
        "productId": "EL123",
        "productName": "Laptop",
        "productDescription": "Dell Laptop",
        "productCategory": {
          "categoryId": "E123RAHU0987",
          "categoryName": "Electronics",
          "categoryDescription": "Category containing electronic products",
        },
        "productPrice": 1000,
      },
      {
        "productId": "CL098",
        "productName": "Leather Jacket",
        "productDescription": "Leather Jacket from jack and jones",
        "productCategory": {
          "categoryId": "CL765HDTYILKJ",
          "categoryName": "Clothing",
          "categoryDescription": "Category containing clothing and fashion products",
        },
        "productPrice": 200,
      },
      {
        "productId": "FB987",
        "productName": "Chivas Regal Whisky",
        "productDescription": "This is a very fine whisky",
        "productCategory": {
          "categoryId": "FANDB876JHYRT",
          "categoryName": "Food & Beverages",
          "categoryDescription": "Category containing food and beverage products",
        },
        "productPrice": 100,
      },
    ],
  },
  {
    "orderId": "OR123H",
    "userId": "USR777",
    "orderSKU": "SKU077",
    "modeOfPayment": "COD",
    "shipmentAddress": "Google Pvt Ltd",
    "productDetails": [
      {
        "productId": "FB987",
        "productName": "Chivas Regal Whisky",
        "productDescription": "This is a very fine whisky",
        "productCategory": {
          "categoryId": "FANDB876JHYRT",
          "categoryName": "Food & Beverages",
          "categoryDescription": "Category containing food and beverage products",
        },
        "productPrice": 100,
      },
    ],
  },
];
