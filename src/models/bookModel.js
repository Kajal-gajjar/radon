const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      unique: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    prices: {
      indianPrice: String,
      europePrice: String,
    },
    category: String,
    totalPages: Number,
    stockAvailable: {
      type: Boolean,
      default: true,
    },
    year: {
      type: Number,
      default: 2021,
    },
    tags: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookDatabase", bookSchema);
