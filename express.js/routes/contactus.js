const express = require('express');
const path = require('path');
const rootDir = require('../helper/path.js');

const Router = express.Router();

Router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
})

Router.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','success.html'))
})

module.exports = Router;