const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const CarOwner = require("./CarOwner");

const userSchema = new Schema({
  name: { type: String, required: true },
  nationalID: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, reuqired: true }, //user type: role customer, admin
  DBirth: { Date },
  carOwner: { type: mongoose.Schema.Types.ObjectId, ref: "carOwner" },
});

module.exports.User = mongoose.model("User", userSchema);
