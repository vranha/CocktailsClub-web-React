const express = require("express");
const bodyParser = require("body-parser");

const PORT = 4000;

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(PORT, () => {
  console.log(`Server running in http://127.0.0.1:${PORT}`);
});
