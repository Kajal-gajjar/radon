const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createNewBook", bookController.createBook);
router.post("/getBooksInYear", bookController.getBooksInYear);

router.get("/getXINRBooks", bookController.getXINRBooks);
router.get("/getBookData", bookController.getBookData);
router.get("/getRandomBooks", bookController.getRandomBooks);
router.get("/getParticularBooks", bookController.getParticularBooks);

module.exports = router;
