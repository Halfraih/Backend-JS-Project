const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentsSchema = new Schema(
  {
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    paymentMethod: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports.Payments = mongoose.model("Payments", PaymentsSchema);
