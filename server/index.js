const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require("./database/connection");

// Routes
const productRoute = require("./routes/product.routes");
const orderRoute = require("./routes/order.routes");

require("dotenv").config();

const PORT = process.env.PORT;

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

connect();

server.options("*", cors());
server.use(cors());

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Unexpected error";

  return res.status(status).json(message);
});

server.use("/product", productRoute);
server.use("/order", orderRoute);

server.listen(PORT, () => {
  console.log(`Server running in http://127.0.0.1:${PORT}`);
});
