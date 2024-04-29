const mongoose = require("mongoose");

// Define the schema for the Order model
const orderSchema = new mongoose.Schema({
  user: {
    username: { type: String, required: true },
    email: { type: String, required: true },
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  // Add more fields as needed
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Order model from the schema
module.exports = mongoose.model("Order", orderSchema);
