const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  chatId: { type: String },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);
