const express = require('express');
const Router = express.Router();

Router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET" ><input id="username" type="text" name="name" ><button type="submit">Login</button></form>');
})

module.exports=Router;