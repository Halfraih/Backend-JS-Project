const Payments = require("../models/Payments");

const Payments_get = (req, res) => {
  res.render("create", { title: "Payments" });
};
const Payments_post = (req, res) => {
  const Payments = new Payments(req.body);
  Payments.save()
    .then((result) => {
      res.redirect("/Payments");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  Payments_get,
  Payments_post,
};
