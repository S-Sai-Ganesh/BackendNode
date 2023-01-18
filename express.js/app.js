const express = require('express');
const bodyParser = require('body-parser');

const admin = require('./routes/admin.js');
const shop = require('./routes/shop.js');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',admin)

app.use('/shop',shop)

app.use('/',(req,res,next)=>{
    res.status(404).send("<h1>Error:404 Page not found</h1>")
})

app.listen('3000');