const express = require("express");
const bookController = require("../controllers/bookController");
const authorController = require("../controllers/authorController");
const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createBook", bookController.createBook);
router.post("/createAuthor", authorController.createAuthor);

router.get("/getAuthor", authorController.getAuthor);
router.get("/getBooks", bookController.getBooks);

router.get("/getBookByAuthor", authorController.getBookByAuthor);
router.get("/findAuthor", bookController.findAuthor);
router.get("/findAuthorName", bookController.findAuthorName);
router.get("/booksByAuthorId/:author_id", bookController.booksByAuthorId);
router.get("/authorOlderThan50", bookController.AuthorOlderThan50);

module.exports = router;
