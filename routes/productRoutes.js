const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { addProduct, updateQuantity, getProducts } = require("../controllers/productController");

router.post("/", auth, addProduct);
router.put("/:id/quantity", auth, updateQuantity);
router.get("/", auth, getProducts);

module.exports = router;
