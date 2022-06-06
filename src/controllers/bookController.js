const bookModel = require("../models/bookModel");

//to create a new entry..use this api to create 11+ entries in your collection
const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await bookModel.create(data);
  res.send({ msg: savedData });
};

// gives all the books- their bookName and authorName only
const getBookData = async function (req, res) {
  let allBooks = await bookModel
    .find()
    .select({ bookName: 1, authorName: 1, _id: 0 });
  res.send({ msg: allBooks });
};

//takes year as input in post request and gives list of all books published that year
const getBooksInYear = async function (req, res) {
  let publishedYear = req.body.year;
  let books = await bookModel.find({ year: publishedYear });
  res.send(books);
};

//request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”
const getXINRBooks = async function (req, res) {
  let allBooks = await bookModel.find({
    "price.indianPrice": { $in: ["100INR", "200INR", "500INR"] },
  });
  res.send(allBooks);
};

//returns books that are available in stock or have more than 500 pages
const getRandomBooks = async function (req, res) {
  let allBooks = await bookModel.find({
    $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }],
  });
  res.send(allBooks);
};

//take any input and use it as a condition to fetch books that satisfy that condition
const getParticularBooks = async function (req, res) {
  let filter = {};
  const {
    bookName,
    authorName,
    prices,
    totalPages,
    stockAvailable,
    year,
    tags,
  } = req.body;

  if (bookName != undefined) {
    filter.bookName = bookName;
  }
  if (authorName != undefined) {
    filter.authorName = authorName;
  }

  let price = await bookModel.find({
    "prices.indianPrice": prices.indianPrice,
  });
  if (price != undefined) {
    filter["prices.indianPrice"] = prices.indianPrice;
  }

  if (totalPages != undefined) {
    filter.totalPages = totalPages;
  }

  if (stockAvailable != undefined) {
    filter.stockAvailable = stockAvailable;
  }

  if (year != undefined) {
    filter.year = year;
  }

  if (tags != undefined) {
    filter.tags = { $in: tags };
  }
  console.log(filter);
  let result = await bookModel.find(filter);
  res.send(result);
};

module.exports.createBook = createBook;
module.exports.getBookData = getBookData;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getParticularBooks = getParticularBooks;
