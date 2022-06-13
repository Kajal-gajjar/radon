const express = require("express");
const {
  createProduct,
  getProduct,
} = require("../controllers/productController");
const { createUser, getUsers } = require("../controllers/userController");
const { createOrder, getOrder } = require("../controllers/orderController");
const { isFreeAppUser } = require("../middleware/middleware");

const router = express.Router();

// routes for products
router.post("/createProduct", createProduct);
router.get("/getProduct", getProduct);

// routes for users
router.post("/createUser", isFreeAppUser, createUser);
router.get("/getUsers", getUsers);

// routes for orders
router.post("/createOrder", isFreeAppUser, createOrder);
router.get("/getOrder", getOrder);

module.exports = router;
