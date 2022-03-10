const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.get("/", async (req, res, next) => {});

router.post("/new", async (req, res, next) => {
  const { table, products } = req.body;

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const date = `${year}-${month + 1}-${day}`;
  console.log(year, month, day);

  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hour = currentDate.getHours();
  const time = `${hour}:${minutes}:${seconds}`;
  console.log(products);

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
