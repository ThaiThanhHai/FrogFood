const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
    phone: { type: String },
    address: { type: String },
    isAdmin: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", Users);
