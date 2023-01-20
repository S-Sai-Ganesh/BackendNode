const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const admin = require('./routes/admin.js');
const shop = require('./routes/shop.js');
const contactus = require('./routes/contactus.js');

const controller404 = require('./controllers/404');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',admin)

app.use('/shop',shop)

app.use('/contactus',contactus)

app.use('/',controller404.get404)

app.listen('3000');