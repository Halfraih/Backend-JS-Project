const CarDetails = require("../models/CarDetails");

const CarDetails_index = (req, res) => {
  CarDetails.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { carDetails: result, title: "All car details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const CarDetails_create_get = (req, res) => {
  res.render("create", { title: "Create a new car details" });
};

const CarDetails_create_post = (req, res) => {
  const CarDetails = new CarDetails(req.body);
  CarDetails.save()
    .then((result) => {
      res.redirect("/CarDetails");
    })
    .catch((err) => {
      console.log(err);
    });
};

const CarDetails_delete = (req, res) => {
  const id = req.params.id;
  CarDetails.findByIDAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/CarDetails" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  CarDetails_index,
  CarDetails_create_get,
  CarDetails_create_post,
  CarDetails_delete,
};
