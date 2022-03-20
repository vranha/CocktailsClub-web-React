const mongoose = require('mongoose');

const order = new mongoose.Schema({
    table: { type: Number, required: true },
    products: { type: Array, required: true },
    date: { type: String },
    time: { type: String },
});

const Order = mongoose.model('order', order);

module.exports = Order;
