const mongoose = require("mongoose");

const url =
  "mongodb+srv://carlos:pedA6GaJsh9OcXGd@mycluster.svunz.mongodb.net/myBar";

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to database");
  } catch (error) {
    console.error(`Failed db connection => ${error}`);
  }
};

module.exports = connect;
