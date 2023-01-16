const express = require("express");
const Admin = require("../models/Admin");
const router = express.Router();

router.post("/adminlogin", (req, res) => {
  console.log(req.body);
  if (Admin.find(req.body) == null) {
    console.log("Sorry, You entered wrong email or password");
  } else {
    console.log("Logged in succesfully");
  }
});

module.exports = router;
