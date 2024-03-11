"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.postProduct = exports.getAllProducts = void 0;
const mockdata_1 = require("../mockData/mockdata");
const getAllProducts = (req, res) => {
  res.status(200).json(mockdata_1.productList);
};
exports.getAllProducts = getAllProducts;
const postProduct = (req, res) => {
  mockdata_1.productList.push(req.body);
  res.status(201).json(mockdata_1.productList);
};
exports.postProduct = postProduct;
const getProductById = (req, res) => {
  let requestProductId = req.params.id;
  if (requestProductId) {
    res.status(200).json(mockdata_1.productList.find((product) => product.productId === requestProductId));
  }
  else {
    res.sendStatus(400);
  }
};
exports.getProductById = getProductById;
const updateProductById = (req, res) => {
  let requestProductBody = req.body;
  if (requestProductBody) {
    let selectedProduct = mockdata_1.productList.find((product) => product.productId === requestProductBody.productId);
    if (selectedProduct) {
      selectedProduct.productCategory = requestProductBody.productCategory;
      selectedProduct.productDescription = requestProductBody.productDescription;
      selectedProduct.productName = requestProductBody.productName;
      selectedProduct.productPrice = requestProductBody.productPrice;
    }
    res.status(200).json(mockdata_1.productList);
  }
  else {
    res.sendStatus(400);
  }
};
exports.updateProductById = updateProductById;
const deleteProductById = (req, res) => {
  let requestProductId = req.params.id;
  let index = mockdata_1.productList.findIndex((product) => product.productId === requestProductId);
  if (index != -1)
    mockdata_1.productList.splice(index, 1);
  res.status(200).json(mockdata_1.productList);
};
exports.deleteProductById = deleteProductById;
