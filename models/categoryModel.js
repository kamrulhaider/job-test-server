const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: {
    type: [],
  },
});

const category = mongoose.model("category", categorySchema);
module.exports = category;
