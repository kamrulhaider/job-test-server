const express = require("express");
const router = express.Router();

const {
  addUserDetails,
  updateUserDetail,
} = require("../controllers/userController");

//Routes for user
router.post("/create", addUserDetails);
router.put("/updateUserDetail", updateUserDetail);

module.exports = router;
