const { Schema, model } = require("mongoose");

const booksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: {
    type: String,
    validate: (value) => {
      value.includes("http");
    },
  },
  plot: { type: String, required: true },
  isRead: { type: Boolean, default: false },
});

const Book = model("books", booksSchema);

module.exports = { Book };
