const express = require("express");

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/airplanes -> POST

router.post(
  "/",
  AirplaneMiddlewares.ValidateCreateRequest,
  AirplaneController.createAirplane
);
router.get("/", AirplaneController.getAirplane);
module.exports = router;
