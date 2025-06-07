const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  sku: String,
  image_url: String,
  description: String,
  quantity: Number,
  price: Number,
});

module.exports = mongoose.model("Product", ProductSchema);
