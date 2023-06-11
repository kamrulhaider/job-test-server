const express = require("express");
const router = express.Router();

const { addCategoryDetails, getCategory } = require("../controllers/categoryController");

//Routes for category
router.post("/create", addCategoryDetails);
router.get("/all", getCategory);

module.exports = router;
