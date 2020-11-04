const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config({ path: "./config/config.env" });

mongoose
  .connect("mongodb://localhost/doctor", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(`There is an error ${err} `);
  });
