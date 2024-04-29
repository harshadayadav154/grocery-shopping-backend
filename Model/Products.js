const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define the Product schema
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
  images: { type: String, required: true },
});

// Define the Category schema
const categorySchema = new Schema({
  name: { type: String, required: true },
  products: [productSchema], // Embed product documents within the category document
});

// Create models for Category and Product using the schemas
const Category = mongoose.model("Category", categorySchema);
const Product = mongoose.model("Product", productSchema);

module.exports = { Category, Product };
