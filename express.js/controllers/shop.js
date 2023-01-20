const path = require('path');
const rootDir = require('../helper/path.js');

exports.getShop = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}