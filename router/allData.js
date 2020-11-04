const Doctor = require("../model/doctor");
const express = require("express");

const routerall = express.Router();

routerall.post("/all-data", (req, res) => {
  Doctor.find()
    .then((resolve) => {
      res.send(resolve);
      
    })
    .catch((err) => {
      console.log(`There is an Error ${err}`);
    });
});
module.exports = routerall;
