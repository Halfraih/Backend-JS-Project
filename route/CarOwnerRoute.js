const express = require("express");
const CarOwnerController = require("../controller/CarOwnerController");
const router = express.Router();

router.get("/create", CarOwnerController.CarOwner_get);
router.post("/", CarOwnerController.CarOwner_post);

module.exports = router;
