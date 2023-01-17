const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req,res,next)=>{
    res.send('<h1>The add product page</h1><form action="/product" method="POST"><input type="text" name="title"><input type="number" name="quantity" placeholder="quantity"><button type="submit">Add product</button></form>');
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Default page</h1>')
})


app.listen('3000');