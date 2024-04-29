const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// routes
const productsRouter = require("./routes/Products"); //  productsRouter
const userRouter = require("./routes/User"); //  userRouter
const orderRouter = require("./routes/Order");

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Allow requests from all origins
app.use(cors());
const HTTP_PORT = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' directory

app.use("/products", productsRouter); // Mount the productsRouter at the '/products' endpoint
app.use("/user", userRouter);
app.use("/order", orderRouter);

app.listen(HTTP_PORT, async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});
