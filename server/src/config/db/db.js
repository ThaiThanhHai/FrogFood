const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect database successfuly!!!");
  } catch (err) {
    console.log("Connect database failure!!!");
  }
}

module.exports = { connect };
