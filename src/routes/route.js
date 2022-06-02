const express = require("express");
const logger = require("../logger/logger");
const helper = require("../util/helper");
const validator = require("../validator/formatter");
const chunk = require("chunk");

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

router.get("/hello", function (req, res) {
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let result = chunk(month, 4);
  console.log("The sub-array of Months: ", result);
});

router.get("/candidate", function (req, res) {
  console.log("Query Object: ", JSON.stringify(req.query));
  const gender = req.query.gender;
  console.log(gender);
  let candidate = ["Kajal", "Ankita"];
  res.send(candidate);
});

router.get("/candidate/:name", function (req, res) {
  console.log(req.params.name);
  res.send("Done");
});

module.exports = router;
// adding this comment for no reason
