const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return Product.find().then((products) => {
    return res.status(200).json(products);
  });
});

module.exports = router;
