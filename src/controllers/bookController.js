const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook = async function (req, res) {
  let data = req.body;
  console.log(data);
  if (!data.author) res.send("Please enter the Author ID");
  let author = await authorModel.findById(data.author);
  if (!author) res.send("Entered Author ID is not valid");

  if (!data.publisher) res.send("Please enter the Publisher ID");
  let publisher = await publisherModel.findById(data.publisher);
  if (!publisher) res.send("Entered Publisher ID is not valid");

  let savedData = await bookModel.create(data);
  res.send(savedData);
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel
    .find()
    .populate("author")
    .populate("publisher");
  res.send({ allBooks });
};

const updateBookCover = async function (req, res) {
  let data = await publisherModel
    .find({
      name: { $in: ["Penguin", "HarperCollins"] },
    })
    .select({ _id: 1 });
  let publisherId = data.map((x) => x._id);
  let book = await bookModel.updateMany(
    { publisher: { $in: publisherId } },
    { $set: { isHardCover: true } }
  );

  let allBooks = await bookModel
    .find({ isHardCover: true })
    .populate(["author", "publisher"]);
  res.send({ allBooks });
};

const updatePrice = async function (req, res) {
  let authorRating = await authorModel
    .find({ rating: { $gt: 3.5 } })
    .select({ _id: 1 });

  let authorID = authorRating.map((x) => x._id);
  let book = await bookModel
    .find({ author: { $in: authorID } })
    .update({ $inc: { price: 10 } });

  let allBooks = await bookModel.find({ author: { $in: authorID } });
  res.send({ allBooks });
};

module.exports = {
  createBook,
  getBooks,
  updateBookCover,
  updatePrice,
};
