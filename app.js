const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotEnv = require("dotenv");
const path = require("path");
const fs = require("fs");
// Database Connection
require("./database/db");
// END Connection

const adminRoutes = require("./router/admin");
const allDataRoutes = require("./router/allData");
const errorController = require("./controller/error404");

dotEnv.config({ path: "./config/config.env" });

const app = express();

//Custom Middleware START
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//Custom Middleware END

//Routes START
app.get("/", (req, res) => {
  res.send('hello world');
});

app.use("/admin", adminRoutes);
app.use("/admin", allDataRoutes);
//Routes END

app.use(express.static("public"));
app.use(errorController.get404);
const Port = process.env.Port || 5000;
app.listen(5000, () => {
  console.log(
    `Server is running in ${[process.env.Node_Env]} mode on port ${Port} ...`
  );
});
