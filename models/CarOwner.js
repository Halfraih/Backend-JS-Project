const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarOwnerSchema = new Schema(
  {
    name: { type: String, required: true },
    nationalId: { type: String, required: true, unique: true },
    DBirth: { Date },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports.CarOwner = mongoose.model("CarOwner", CarOwnerSchema);
