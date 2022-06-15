const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");
const productModel = require("../models/productModel");

const createOrder = async function (req, res) {
  // creating new object to store result
  const newOrder = {
    ...req.body,
    isFreeAppUser: req.isFreeAppUser,
  };

  if (!newOrder.userId) res.send("Please enter the user ID");
  else if (!newOrder.productId) res.send("Please enter the Product ID");

  // validating userID
  let user = await userModel.findById(newOrder.userId);
  if (!user) res.send("Entered user ID is not valid");

  // validating productID
  let product = await productModel.findById(newOrder.productId);
  if (!product) res.send("Entered Product ID is not valid");
  let response;

  const date = new Date();
  // converting date to MM/DD/YYYY format
  newOrder["date"] = date.toLocaleDateString("en-US");

  // checking for isFreeAppUser value and updating amount accordingly
  if (newOrder.isFreeAppUser === "true") {
    newOrder["amount"] = 0;
    response = await orderModel.create(newOrder);
  } else {
    let amount = product.price;
    if (amount > user.balance) res.send("Insufficient Balance");
    else {
      user = await userModel
        .findById(newOrder.userId)
        .updateOne({ $inc: { balance: -amount } });

      newOrder["amount"] = amount;
      response = await orderModel.create(newOrder);
    }

    res.send(response);
  }
};

const getOrder = async function (req, res) {
  let allOrders = await orderModel.find();
  res.send({ allOrders });
};

module.exports = {
  createOrder,
  getOrder,
};
