const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: objectId,
      ref: "newAuthor",
    },
    publisher: {
      type: objectId,
      ref: "newPublisher",
    },
    price: Number,
    ratings: Number,
    isHardCover: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("newBook", bookSchema);
