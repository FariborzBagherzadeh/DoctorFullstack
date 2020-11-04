const express = require("express");

const adminController = require("../controller/admin");

const router = express.Router();

router.post("/add-post", adminController.addDoctor);
router.post("/delete-data/:id", adminController.deleteDoctor);
router.get("/gallery/:id", adminController.galleryPost);
router.post("/gallery/:id/comment", adminController.addComment);

module.exports = router;
