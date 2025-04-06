const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      note: { type: String }, // Optional buyer note (e.g., "Buy for Diwali")
      addedAt: { type: Date, default: Date.now }
    }
  ],
  wishlistCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Wishlist", wishlistSchema);
