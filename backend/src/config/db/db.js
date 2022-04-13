const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://haib1809343:b1809343@cluster0.yuipz.mongodb.net/food-delivery"
    );
    console.log("Connect database successfuly!!!");
  } catch (err) {
    console.log("Connect database failure!!!");
  }
}

module.exports = { connect };
