const publisherModel = require("../models/publisherModel");

const createPublisher = async function (req, res) {
  let data = req.body;
  let savedData = await publisherModel.create(data);
  res.send(savedData);
};

const getPublisher = async function (req, res) {
  let allAuthors = await publisherModel.find();
  res.send({ allAuthors });
};

module.exports.createPublisher = createPublisher;
module.exports.getPublisher = getPublisher;
