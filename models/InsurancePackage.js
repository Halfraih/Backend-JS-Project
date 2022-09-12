//shows the available packages for the user
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InsurancePackageSchema = new Schema(
  {
    packageName: { type: String, required: true },
    packageType: { type: String }, //["third party, comprehensive"]
    price: { type: Number },

    insuranceCompany: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports.InsurancePackage = mongoose.model(
  "InsurancePackage",
  InsurancePackageSchema
);
