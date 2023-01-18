const express = require('express');

const Router = express.Router();

Router.get('/add-product',(req,res,next)=>{
    res.send('<h1>The add product page</h1><form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="quantity" placeholder="Quantity"><button type="submit">Add product</button></form>');
})

Router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop')
})

module.exports = Router;