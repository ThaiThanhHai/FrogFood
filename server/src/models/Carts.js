const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Carts = new Schema(
  {
    customer: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    note: { type: String },
    dishes: { type: Array, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Carts", Carts);
