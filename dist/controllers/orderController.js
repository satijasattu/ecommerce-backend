"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderById = exports.updateOrderById = exports.getOrderById = exports.postOrder = exports.getAllOrders = void 0;
const mockdata_1 = require("../mockData/mockdata");
const getAllOrders = (req, res) => {
  res.status(200).json(mockdata_1.orderList);
};
exports.getAllOrders = getAllOrders;
const postOrder = (req, res) => {
  mockdata_1.orderList.push(req.body);
  res.status(201).json(mockdata_1.orderList);
};
exports.postOrder = postOrder;
const getOrderById = (req, res) => {
  let requestOrderId = req.params.id;
  if (requestOrderId) {
    res.status(200).json(mockdata_1.orderList.find((order) => order.orderId === requestOrderId));
  }
  else {
    res.sendStatus(400);
  }
};
exports.getOrderById = getOrderById;
const updateOrderById = (req, res) => {
  let requestOrderBody = req.body;
  if (requestOrderBody) {
    let selectedOrder = mockdata_1.orderList.find((order) => order.orderId === requestOrderBody.orderId);
    if (selectedOrder) {
      selectedOrder.orderSKU = requestOrderBody.orderSKU;
      selectedOrder.modeOfPayment = requestOrderBody.modeOfPayment;
      selectedOrder.productDetails = requestOrderBody.productDetails;
      selectedOrder.shipmentAddress = requestOrderBody.shipmentAddress;
      selectedOrder.userId = requestOrderBody.userId;
    }
    res.status(200).json(mockdata_1.orderList);
  }
  else {
    res.sendStatus(400);
  }
};
exports.updateOrderById = updateOrderById;
const deleteOrderById = (req, res) => {
  let requestOrderId = req.params.id;
  let index = mockdata_1.orderList.findIndex((order) => order.orderId === requestOrderId);
  if (index != -1)
    mockdata_1.orderList.splice(index, 1);
  res.status(200).json(mockdata_1.orderList);
};
exports.deleteOrderById = deleteOrderById;
