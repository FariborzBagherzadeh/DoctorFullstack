const Doctor = require("../model/doctor");
const path = require("path");
const fs = require("fs");

exports.addDoctor = (req, res) => {
  if (!req.body.title || !req.body.description) return console.log(req.body);
  Doctor.create({
    title: req.body.title,
    description: req.body.description,
    imageURL: req.body.imageURL,
  })
    .then((resolve) => {
      console.log("data has been saved");
      res.redirect("/SuperAdmin");
    })
    .catch((err) => {
      console.log(`There is an Error ${err}`);
    });
};

exports.deleteDoctor = (req, res) => {
  Doctor.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log("Data has been deleted");
      res.redirect("/SuperAdmin");
    })
    .catch((err) => {
      console.log(`There is an Error ${err}`);
    });
};
exports.galleryPost = (req, res) => {
  Doctor.findById(req.params.id)
    .then((resolve) => {
      res.send(resolve);
    })
    .catch((err) => {
      console.log(`There is an Error ${err}`);
    });
};

exports.addComment = (req, res) => {
  Doctor.findOneAndUpdate(
    req.params.id,
    {
      $push: { comment: [{ name: req.body.name, body: req.body.comment }] },
    },{useFindAndModify:false,upsert:true,new:true,},
    (e) => {
      console.log(e);
    }
  )
    .then((resolve) => {
      res.redirect(`/gallery/${req.params.id}`);
    })
    .catch((err) => {
      console.log(`There is an Error ${err}`);
    });
};
