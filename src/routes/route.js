const express = require("express");
const logger = require("../logger/logger");
const helper = require("../util/helper");
const validator = require("../validator/formatter");

const router = express.Router();

router.get("/test-me", function (req, res) {
  logger.welcome();
  helper.printDate();
  helper.printMonth();
  helper.getBatchInfo();
  validator.trim();
  validator.changetoLowerCase();
  validator.changeToUpperCase();
});

router.get("/test-me1", function (req, res) {
  res.send("My second api!");
});

module.exports = router;
// adding this comment for no reason
