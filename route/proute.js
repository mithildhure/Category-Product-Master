const express = require('express');
const { getProducts, addProduct, deleteProduct, updateProduct, fetchProductId } = require('../controller/productController');

const proute = express.Router();

proute.get("/", getProducts);             
proute.post("/addP", addProduct);             
proute.get("/editForm/:id", fetchProductId);  
proute.patch("/editP/:id", updateProduct);      
proute.delete("/deleteP/:id", deleteProduct);     

module.exports = proute;
