const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const { getDate, getTime } = require("../utils/functions/getDateTime");

router.get("/", async (req, res, next) => {
  const currentDate = getDate();
  const orders = await Order.find({ date: currentDate });
  res.json(orders);
});

router.post("/new", async (req, res, next) => {
  const { table, products } = req.body;
  const date = getDate();
  const time = getTime();

  try {
    Order.create({
      table,
      products,
      date,
      time,
    });
    res.status(200);
    res.json("New order send to db");
  } catch (error) {
    res.json(`Error creating new order => ${error}`);
    res.status(400);
  }
});

module.exports = router;
