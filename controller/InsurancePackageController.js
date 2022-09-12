const InsurancePackage = require("../models/InsurancePackage");

const InsurancePackage_get = (req, res) => {
  res.render("create", { title: "Insurance Package" });
};

module.exports = {
  InsurancePackage_get,
};
