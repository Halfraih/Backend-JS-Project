const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarDetailsSchema = new Schema(
  {
    carName: { type: String },
    year: { type: Number },
    color: { type: String },
    CarOwner: { type: mongoose.Schema.Types.ObjectId, ref: "CarOwner" },
  },
  { timestamps: true }
);

module.exports.CarDetails = mongoose.model("CarDetails", CarDetailsSchema);
