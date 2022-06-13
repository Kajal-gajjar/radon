const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  req.body["isFreeAppUser"] = req.isFreeAppUser;
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send(savedData);
};

const getUsers = async function (req, res) {
  let allUsers = await userModel.find();
  res.send({ allUsers });
};

module.exports = {
  createUser,
  getUsers,
};
