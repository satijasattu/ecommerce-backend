"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.postUser = exports.getAllUsers = void 0;
const mockdata_1 = require("../mockData/mockdata");
const getAllUsers = (req, res) => {
  res.status(200).json(mockdata_1.userList);
};
exports.getAllUsers = getAllUsers;
const postUser = (req, res) => {
  mockdata_1.userList.push(req.body);
  res.status(201).json(mockdata_1.userList);
};
exports.postUser = postUser;
const getUserById = (req, res) => {
  let requestUserId = req.params.id;
  if (requestUserId) {
    res.status(200).json(mockdata_1.userList.find((user) => user.userId === requestUserId));
  }
  else {
    res.sendStatus(400);
  }
};
exports.getUserById = getUserById;
const updateUserById = (req, res) => {
  let requestUserBody = req.body;
  if (requestUserBody) {
    let selectedUser = mockdata_1.userList.find((user) => user.userId === requestUserBody.userId);
    if (selectedUser) {
      selectedUser.userName = requestUserBody.userName;
      selectedUser.userRoles = requestUserBody.userRoles;
    }
    res.status(200).json(mockdata_1.userList);
  }
  else {
    res.sendStatus(400);
  }
};
exports.updateUserById = updateUserById;
const deleteUserById = (req, res) => {
  let requestUserId = req.params.id;
  let index = mockdata_1.userList.findIndex((user) => user.userId === requestUserId);
  if (index != -1)
    mockdata_1.userList.splice(index, 1);
  res.status(200).json(mockdata_1.userList);
};
exports.deleteUserById = deleteUserById;
