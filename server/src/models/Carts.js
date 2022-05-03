const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Carts = new Schema(
  {
    user: { type: String, required: true },
    dish: { type: String, required: true },
    quantity: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    isPayment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Carts", Carts);
