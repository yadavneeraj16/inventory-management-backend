const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json({ id: product._id, message: "Product added" });
};

exports.updateQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const product = await Product.findByIdAndUpdate(id, { quantity }, { new: true });
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const products = await Product.find()
    .skip((page - 1) * limit)
    .limit(limit);
  res.json(products);
};
