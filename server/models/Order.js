const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: Number,
  }],
  totalAmount: Number,
  shippingAddress: String,
  paymentStatus: {
    type: String,
    enum: ["paid", "pending", "refunded"],
    default: "pending",
  },
  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
  trackingId: String,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
