//shows the selected package by the user
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const CarDetails = require("./CarDetails");

const CarPackageSchema = new Schema({
  amount: { type: Number },
  CarDetails: [
    {
      CarDetails: { type: mongoose.Schema.Types.ObjectId, ref: "CarDetails" },
      CarOwner: { type: mongoose.Schema.Types.ObjectId, ref: "CarOwner" },
      CarPackage: { type: mongoose.Schema.Types.ObjectId, ref: "CarPackage" },
    },
  ],
});

module.exports.CarPackage = mongoose.model("CarPackage", CarPackageSchema);
