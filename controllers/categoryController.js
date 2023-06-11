const express = require("express");
const Category = require("../models/categoryModel");

//create category
const addCategoryDetails = async (req, res) => {
  let category = new Category({
    category: req.body.category,
  });
  try {
    await category.save();
    res.send({ status: "success", message: "Category data saved." });
  } catch (err) {
    res.send({ status: "failed", message: "Something went wrong!" });
  }
};

//get stored category
const getCategory = async (req, res) => {
  let categories = await Category.find();
  res.send({ status: "success", message: categories });
};

module.exports = {
  addCategoryDetails,
  getCategory,
};
