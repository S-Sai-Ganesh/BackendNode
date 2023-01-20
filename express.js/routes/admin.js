const express = require('express');

const addProductController = require('../controllers/addProduct');

const Router = express.Router();

Router.get('/add-product',addProductController.getAddProduct)

Router.post('/add-product',addProductController.postAddProduct)

module.exports = Router;