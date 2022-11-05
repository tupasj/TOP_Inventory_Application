require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDatabase = require('./config/database');
const { errorHandler } = require('./middleware/error');

connectDatabase();

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});