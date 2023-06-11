const express = require("express");
const User = require("../models/userModel");

//create new user and save to DB
const addUserDetails = async (req, res) => {
  let user = new User({
    name: req.body.name,
    category: req.body.category,
    subcategoryOne: req.body.subcategoryOne,
    subcategoryTwo: req.body.subcategoryTwo,
    subcategoryThree: req.body.subcategoryThree,
    agreeToTerms: req.body.agreeToTerms,
  });
  try {
    await user.save();
    res.send({ status: "success", message: user._id });
  } catch (err) {
    res.send({ status: "failed", message: "Something went wrong!" });
  }
};

//Update the stored user details
const updateUserDetail = async (req, res) => {
  const user = await User.findById(req.body.id);
  if (user !== null) {
    req.body.name ? (user.name = req.body.name) : (user.name = user.name);
    req.body.category ? (user.category = req.body.category) : (user.category = user.category);
    req.body.subcategoryOne ? (user.subcategoryOne = req.body.subcategoryOne) : (user.subcategoryOne = user.subcategoryOne);
    req.body.subcategoryTwo ? (user.subcategoryTwo = req.body.subcategoryTwo) : (user.subcategoryTwo = user.subcategoryTwo);
    req.body.subcategoryThree ? (user.subcategoryThree = req.body.subcategoryThree) : (user.subcategoryThree = user.subcategoryThree);
    try {
      await user.save();
      return res.send({ status: "success", message: user });
    } catch (err) {
      res.send({ status: "failed", message: "Something went wrong!" });
    }
  } else {
    return res.send({ status: "failed", message: "User not found!!" });
  }
};

module.exports = {
  addUserDetails,
  updateUserDetail,
};
