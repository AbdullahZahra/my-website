const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  language: { type: String, required: true, enum: ["en", "ar"] },
  tags: [String],
  date: { type: String },
});

// CRITICAL: This compiles the schema into a model and exports it directly
module.exports = mongoose.model("Article", articleSchema);
