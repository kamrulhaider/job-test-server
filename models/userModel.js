const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    subcategoryOne: {
      type: String,
      required: true,
    },
    subcategoryTwo: {
      type: String,
      required: false,
    },
    subcategoryThree: {
      type: String,
      required: false,
    },
    agreeToTerms: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
module.exports = user;
