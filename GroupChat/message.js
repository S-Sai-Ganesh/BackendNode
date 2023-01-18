const express = require('express');
const Router = express.Router();
const fs = require('fs');

Router.get('/',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        console.log(err);
        res.send(`<h1>Send Message</h1>
        <p>${data}</p>
        <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
            <input type="text" id="message" name="message">
            <input type="hidden" name="username" id="username">
            <button type="submit"> Send </button>
        </form>`)
    });
})

Router.post('/',(req,res,next)=>{
    console.log(req.body);
    fs.appendFileSync("message.txt",`=>${req.body.username} : ${req.body.message}  `)
    res.redirect('/');
})

module.exports=Router;