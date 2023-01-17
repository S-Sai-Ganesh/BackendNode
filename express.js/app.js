// const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('From middleware1');
    next();
})

app.use((req,res,next)=>{
    console.log('middleware2');
    res.send({key1: 'value'})
})


app.listen('3000');
// const server = http.createServer(app);

// server.listen(3000);

