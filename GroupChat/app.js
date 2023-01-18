const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const login = require('./login.js');
const message = require('./message.js');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(login);

app.use(message);

app.listen(3000);