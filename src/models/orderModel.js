const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: objectId,
      ref: "user",
    },
    productId: {
      type: objectId,
      ref: "product",
    },
    amount: Number,
    date: String,
    isFreeAppUser: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
