const express = require("express");
const CarDetailsController = require("../controller/CarDetailsController");
const router = express.Router();

router.get("/create", CarDetailsController.CarDetails_create_get);
router.get("/", CarDetailsController.CarDetails_index);
router.post("/", CarDetailsController.CarDetails_create_post);
router.get("/:id", CarDetailsController.CarDetails_create_get);
router.delete("/:id", CarDetailsController.CarDetails_delete);

module.exports = router;
