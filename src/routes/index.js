const express = require('express')
const Router = express.Router();
const productCtrl = require('../controllers/product')

//Metodos
Router.get("/product", productCtrl.getProducts);
Router.get("/product/:productId", productCtrl.getProduct);
Router.post("/product", productCtrl.saveProduct);
Router.put("/product/:productId", productCtrl.updateProduct);
Router.delete("/product/:productId", productCtrl.deleteProduct);

module.exports = Router