const CarPackage = require("../models/CarPackage");

const CarPackage_get = (req, res) => {
  res.render("create", { title: "Car Package" });
};

const CarPackage_delete = (req, res) => {
  const id = req.params.id;
  CarPackage.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/CarPackage" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  CarPackage_get,
  CarPackage_delete,
};
