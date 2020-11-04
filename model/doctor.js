const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    comment: [{ name: String, body: String }],
    imageURL: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
