const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/User');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findUserById('643f652a33d565f5cec4690a')
//     .then(user => {
//       req.user = new User(user.name, user.email, user.mobile, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect('mongodb+srv://mongodbusername:OYYhMshMIuAnpIb8@cluster0.vtzjy7t.mongodb.net/shop?retryWrites=true&w=majority')
  .then(result=>{
    app.listen(3000);
    console.log('Connected!');
  })
  .catch(err=> console.log(err));