const express = require("express");
const router = express.Router();
const PaymentsController = require("../controller/PaymentsController");

router.get("/create", PaymentsController.Payments_get);
router.post("/", PaymentsController.Payments_post);

module.exports = router;
