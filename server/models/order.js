const mongoose = require("mongoose");

const order = new mongoose.Schema({
  table: { type: Number },
  product: { type: Number },
  date: { type: Date },
});

const Order = mongoose.model("order", order);

module.exports = Order;
