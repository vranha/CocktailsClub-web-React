const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require("./database/connection");

require("dotenv").config();

const PORT = process.env.PORT;

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

connect();

server.options("*", cors()); // include before other routes
server.use(cors());

server.listen(PORT, () => {
  console.log(`Server running in http://127.0.0.1:${PORT}`);
});
