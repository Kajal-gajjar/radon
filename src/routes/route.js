const express = require("express");
const bookController = require("../controllers/bookController");
const authorController = require("../controllers/authorController");
const publisherController = require("../controllers/publisherController");
const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createBook", bookController.createBook);
router.post("/createAuthor", authorController.createAuthor);
router.post("/createPublisher", publisherController.createPublisher);

router.get("/getAuthor", authorController.getAuthor);
router.get("/getBooks", bookController.getBooks);
router.get("/getPublisher", publisherController.getPublisher);

router.put("/books", bookController.updateBookCover);
router.put("/updatePrice", bookController.updatePrice);

module.exports = router;
