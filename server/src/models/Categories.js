const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true, maxLength: 255 },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", Categories);
