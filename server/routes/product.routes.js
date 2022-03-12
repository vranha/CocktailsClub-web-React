const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return Product.find().then((products) => {
    return res.status(200).json(products);
  });
});

router.post("/new", async (req, res, next) => {
  const { name, type, price, image, description, others } = req.body;
  let id = 1;
  const productCounter = await Product.countDocuments();
  const productExist = await Product.findOne({ name });

  productCounter ? (id = productCounter + 1) : id;

  if (productExist) {
    res.status(400);
    res.json("Product already in db");
  } else if (type != "cocktail" && type != "appetizer") {
    res.status(400);
    res.json("Product type has to be cocktail or appetizer");
  } else {
    Product.create({
      id,
      name,
      type,
      price,
      image,
      description,
      others,
    });
    res.status(200);
    res.json("Product created in db");
  }
});

module.exports = router;
