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
  res.send("Assignment- Node Modules");
});

module.exports = router;
// adding this comment for no reason
