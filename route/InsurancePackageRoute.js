const express = require("express");
const InsurancePackageController = require("../controller/InsurancePackageController");
const router = express.Router();

router.get("/create", InsurancePackageController.InsurancePackage_get);

module.exports = router;
