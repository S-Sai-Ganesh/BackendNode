const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const cors = require('cors');
const usersRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(usersRoutes);
app.use('/expense',expenseRoutes);

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then(res => {
      app.listen(3000);
  })
  .catch(err => console.log(err))
