const authorModel = require("../models/authorModel");

const createAuthor = async function (req, res) {
  let data = req.body;
  let savedData = await authorModel.create(data);
  res.send(savedData);
};

const getAuthor = async function (req, res) {
  let allAuthors = await authorModel.find();
  res.send({ allAuthors });
};

module.exports.createAuthor = createAuthor;
module.exports.getAuthor = getAuthor;
