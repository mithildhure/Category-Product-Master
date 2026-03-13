const express = require('express');
const { getCategories, addCategory, deleteCategory, updateCategory, fetchCategoryId } = require('../controller/categoryController');

const croute = express.Router();

croute.get("/", getCategories);           
croute.post("/addC", addCategory);            
croute.get("/editForm/:id", fetchCategoryId); 
croute.patch("/editC/:id", updateCategory);     
croute.delete("/deleteC/:id", deleteCategory);    

module.exports = croute;