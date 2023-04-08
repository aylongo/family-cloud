const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
  name: String,
  path: String,
  file: [{ body: String, date: Date }],
  dateCreated: { type: Date, default: Date.now },
  size: Number,
  isFolder: { type: Boolean, default: false },
});

module.exports = mongoose.model("file", fileSchema);
