const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createNewBook", bookController.createBook);

router.get("/getBookData", bookController.getBookData);

module.exports = router;
