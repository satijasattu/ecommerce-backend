
export const orderSchema = {
    type: "object",
    properties: 
    {
        orderId: { type: "string"},
        userId: { type: "string"},
        shipmentAddress: { type: "string"},
        modeOfPayment: { type: "string"},
        orderSKU: { type: "string"},
        productDetails : { type : "array"}
    },
    required: ["userId", "shipmentAddress", "modeOfPayment", "orderSKU","productDetails"]
  };


  export const productSchema = {
    type: "object",
    properties: 
    {
      productId : { type: "string"},
      productName: { type: "string"},
      productDescription : { type: "string"},
      productCategory : { type: "string"},
      productPrice : { type: "number"}
     
     },
     required: ["productName", "productDescription", "productCategory", "productPrice"]

  }

  export const categorySchema = {
    type: "object",
    properties: 
    {
        categoryId : { type: "string"},
        categoryName: { type: "string"},
        categoryDescription : { type: "string"},
    },

     required: ["categoryName", "categoryDescription"]

  }

  export const userSchema = {

    type: "object",
    properties: 
    {
        userId : { type: "string"},
        userName: { type: "string"},
        userRoles : { type: "array"},
    },
    
    required: ["userName", "userRoles"]
  }

