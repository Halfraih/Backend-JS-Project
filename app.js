const express = require("express");
const mongoose = require("mongoose");
const CarOwnerRoute = require("./route/CarOwnerRoute");
const CarDetailsRoute = require("./route/CarDetailsRoute");
const InsurancePackageRoute = require("./route/InsurancePackageRoute");
const CarPackageRoute = require("./route/CarPackageRoute");
const PaymentsRoute = require("./route/PaymentsRoute");

// express app
const app = express();

// connect to mongodb & listen for requests
mongoose.connect(
  "mongodb+srv://HadeelI:1234@cluster0.zhwqow5.mongodb.net/projectDB"
);
console.log("DataBase connected");

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// routes
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// car... routes
app.use("/CarDetails", CarDetailsRoute);
app.use("/CarOwner", CarOwnerRoute);
app.use("/CarPackage", CarPackageRoute);
app.use("/InsurancePackage", InsurancePackageRoute);
app.use("/Payments", PaymentsRoute);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});