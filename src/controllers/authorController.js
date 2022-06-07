const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

const createAuthor = async function (req, res) {
  let data = req.body;
  let savedData = authorModel.create(data);
  res.send(savedData);
};

const getAuthor = async function (req, res) {
  let allAuthors = await authorModel.find();
  res.send({ allAuthors });
};

const getBookByAuthor = async function (req, res) {
  let author = await authorModel.findOne({ author_name: "Chetan Bhagat" });
  let id = author.author_id;
  let books = await bookModel.find({ author_id: id });
  res.send(books);
};

module.exports.createAuthor = createAuthor;
module.exports.getAuthor = getAuthor;
module.exports.getBookByAuthor = getBookByAuthor;
