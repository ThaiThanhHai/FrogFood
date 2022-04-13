const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new Schema(
  {
    name: { type: "string", required: true, maxLength: 255 },
    image: { type: "string", required: true },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Categories", Categories);
