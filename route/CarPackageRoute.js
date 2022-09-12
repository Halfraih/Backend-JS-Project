const express = require("express");
const CarPackageController = require("../controller/CarPackageController");
const router = express.Router();

router.get("/create", CarPackageController.CarPackage_get);
router.delete("/:id", CarPackageController.CarPackage_delete);

module.exports = router;
