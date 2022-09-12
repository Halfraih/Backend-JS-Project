const CarOwner = require("../models/CarOwner");

const CarOwner_get = (req, res) => {
  res.render("create", { title: "Car Owner" });
};
const CarOwner_post = (req, res) => {
  const CarOwner = new CarOwner(req.body);
  CarOwner.save()
    .then((result) => {
      res.redirect("/CarOwner");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  CarOwner_get,
  CarOwner_post,
};
