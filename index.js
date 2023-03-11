const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const booksRouter = require("./router/booksRouter");
require("dotenv").config();

const startServer = () => {
  const app = express();

  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(cors());

  app.use("/api/books", booksRouter);

  try {
    mongoose.connect(process.env.DB_URL);

    console.log("database connection success");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
