require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectDatabase = require("./config/database");
const productRoutes = require("./routes/productRoutes");
const productViewRoutes = require("./routes/productViewRoutes");
const resultsRoutes = require("./routes/resultsRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/error");

connectDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/products", productRoutes);
app.use("/product-view", productViewRoutes);
app.use("/results", resultsRoutes);
app.use("/user", userRoutes);


app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
