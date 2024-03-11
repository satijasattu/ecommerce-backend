"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryById = exports.updateCategoryById = exports.getCategoryById = exports.postCategory = exports.getAllCategories = void 0;
const mockdata_1 = require("../mockData/mockdata");
const getAllCategories = (req, res) => {
  res.status(200).json(mockdata_1.categoryList);
};
exports.getAllCategories = getAllCategories;
const postCategory = (req, res) => {
  mockdata_1.categoryList.push(req.body);
  res.status(201).json(mockdata_1.categoryList);
};
exports.postCategory = postCategory;
const getCategoryById = (req, res) => {
  let requestCategoryId = req.params.id;
  if (requestCategoryId) {
    res.status(200).json(mockdata_1.categoryList.find((category) => category.categoryId === requestCategoryId));
  }
  else {
    res.sendStatus(400);
  }
};
exports.getCategoryById = getCategoryById;
const updateCategoryById = (req, res) => {
  let requestCategoryBody = req.body;
  if (requestCategoryBody) {
    let selectedCategory = mockdata_1.categoryList.find((category) => category.categoryId === requestCategoryBody.categoryId);
    if (selectedCategory) {
      selectedCategory.categoryDescription = requestCategoryBody.categoryDescription;
      selectedCategory.categoryName = requestCategoryBody.categoryName;
    }
    res.status(200).json(mockdata_1.categoryList);
  }
  else {
    res.sendStatus(400);
  }
};
exports.updateCategoryById = updateCategoryById;
const deleteCategoryById = (req, res) => {
  let requestCategoryId = req.params.id;
  let index = mockdata_1.categoryList.findIndex((category) => category.categoryId === requestCategoryId);
  if (index != -1)
    mockdata_1.categoryList.splice(index, 1);
  res.status(200).json(mockdata_1.categoryList);
};
exports.deleteCategoryById = deleteCategoryById;
