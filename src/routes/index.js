const express = require('express')
const Router = express.Router();
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')

//Metodos
Router.get("/product", productCtrl.getProducts);
Router.get("/product/:productId", productCtrl.getProduct);
Router.post("/product", productCtrl.saveProduct);
Router.put("/product/:productId", productCtrl.updateProduct);
Router.delete("/product/:productId", productCtrl.deleteProduct);
Router.post("/signup", userCtrl.signUp);
Router.post("/signin", userCtrl.signIn)
Router.get("/private", auth ,(req, res) => {
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = Router