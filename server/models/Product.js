const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  images: [String],
  stock: Number,
  availability: {
    type: String,
    enum: ["in-stock", "out-of-stock", "pre-order"],
    default: "in-stock",
  },
  customizationAvailable: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
