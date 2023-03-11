const express = require("express");
const { getBooks, addBook } = require("../controllers/booksControllers");

const booksRouter = new express.Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:bookId");
booksRouter.post("/", addBook);
booksRouter.delete("/:bookId");
booksRouter.put("/:bookId");
booksRouter.patch("/:bookId/isRead");

module.exports = booksRouter;
