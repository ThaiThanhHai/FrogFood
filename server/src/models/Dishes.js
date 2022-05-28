const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Dishes = new Schema(
  {
    name: { type: String, required: true, maxLength: 255 },
    image: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dishes", Dishes);
