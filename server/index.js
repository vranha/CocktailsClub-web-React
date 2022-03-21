const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require("./database/connection");
const passport = require('passport');

// Routes
const authRoute = require ("./routes/user.routes");
const productRoute = require("./routes/product.routes");
const orderRoute = require("./routes/order.routes");

connect();

require("dotenv").config();

const PORT = process.env.PORT;

const server = express();

server.use(passport.initialize()); //inicializamos passport si no Error

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


require('./authentication/passport');


server.options("*", cors());
server.use(cors());

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Unexpected error";

  return res.status(status).json(message);
});

server.use("/auth", authRoute); //Ruta auth añadida para la authentication
server.use("/product", productRoute);
server.use("/order", orderRoute);

server.listen(PORT, () => {
  console.log(`Server running in http://127.0.0.1:${PORT}`);
});
