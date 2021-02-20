const express = require('express');

const quotesRouter = require('./routes/quotes');

const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cacheddata.hvjcn.mongodb.net/Products-API?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/quotes", quotesRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;
