const express = require("express");

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  AirplaneMiddlewares.ValidateCreateRequest,
  AirplaneController.createAirplane
);

module.exports = router;
