const mongoose = require("mongoose");

// Define the schema for the Order model
const orderSchema = new mongoose.Schema({
  user: {
    type: {
      username: { type: String, required: true },
      email: { type: String, required: true },
    },
    required: true,
  },
  shippingAddress: { type: String, required: true },
  items: {
    type: Map,
    of: {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      unit: { type: String, required: true },
      images: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
    required: true,
  },
  totalPrice: { type: Number, required: true },
  totalWithShipping: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create the Order model from the schema
module.exports = mongoose.model("Order", orderSchema);
