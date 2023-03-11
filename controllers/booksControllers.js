const { Book } = require("../models/bookModel");

async function getBooks(req, res) {
  try {
    const data = await Book.find();

    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "server error" });
  }
}

async function addBook(req, res) {
  console.log(req.body);
  try {
    const newBook = await Book.create(req.body);

    res.status(201).json({ newBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
}

module.exports = { getBooks, addBook };
