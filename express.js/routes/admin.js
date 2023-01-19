const express = require('express');
const path = require('path');
const rootDir = require('../helper/path.js');

const Router = express.Router();

Router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

Router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop')
})

module.exports = Router;