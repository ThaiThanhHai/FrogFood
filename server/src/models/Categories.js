const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categories = new Schema(
  {
    id: { type: "string", required: true },
    name: { type: "string", required: true, maxLength: 255 },
    image: { type: "string", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", Categories);
