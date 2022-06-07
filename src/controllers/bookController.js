const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

const mapBook = (book, author) => {
  return { price: book.price, author_name: author.author_name };
};

const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await bookModel.create(data);
  res.send(savedData);
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find();
  res.send({ allBooks });
};

const findAuthor = async function (req, res) {
  let book = await bookModel.findOneAndUpdate(
    { name: "Two states" },
    { price: 100 },
    { new: true }
  );
  let authorName = await authorModel.findOne({ author_id: book.author_id });
  res.send(mapBook(book, authorName));
};

const findAuthorName = async function (req, res) {
  const values = await bookModel.aggregate([
    {
      $match: {
        price: { $gte: 50, $lte: 100 },
      },
    },
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "author_id",
        as: "AuthorDetails",
      },
    },
    {
      $project: {
        name: 1,
        _id: 0,
        "AuthorDetails.author_name": 1,
      },
    },
    { $unwind: "$AuthorDetails" },
  ]);
  res.send(values);
};

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
module.exports.findAuthor = findAuthor;
module.exports.findAuthorName = findAuthorName;
