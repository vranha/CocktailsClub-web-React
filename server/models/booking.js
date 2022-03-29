const mongoose = require("mongoose");

const booking = new mongoose.Schema({
  table: { type: String, required: true },
  date: { type: String, required: true },
  hour: { type: String, required: true },
  phone: { type: String, required: true },
  username: { type: String, required: true },
});


const Booking = mongoose.model("booking", booking);

module.exports = Booking;
