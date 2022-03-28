const express = require("express");
const router = express.Router();

const Booking = require("../models/booking");

router.get("/", async (req, res, next) => {
  // const {date} = req.params
  // console.log(date)
  // const books = await Booking.find({ date: date });
  const books = await Booking.find();
  // console.log(books);
  res.json(books);
  
});

router.post("/new", async (req, res, next) => {
  const { date, hour, table } = req.body;
  const bookingData = await Booking.findOne({ date: date, hour: hour, table: table });
  if (!bookingData) {
    // let table = 1;
    // const bookingCounter = await Booking.countDocuments();
    // bookingCounter ? (table = bookingCounter + 1) : table;

    try {
      Booking.create({
        table,
        date,
        hour,
      });
      res.status(200);
      res.json("New booking send to db");
    } catch (error) {
      res.json(`Error creating new booking => ${error}`);
      res.status(400);
    }
  } else {
    console.log("Current booking not available");
    res.json("Not available");
  }
});

module.exports = router;
