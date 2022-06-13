const productModel = require("../models/productModel");

const createProduct = async function (req, res) {
  let data = req.body;
  let savedData = await productModel.create(data);
  res.send(savedData);
};

const getProduct = async function (req, res) {
  let allProducts = await productModel.find();
  res.send({ allProducts });
};

module.exports = {
  createProduct,
  getProduct,
};
