const express = require("express");

const { CityController } = require("../../controllers");
const { CityMiddleswares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  CityMiddleswares.ValidateCreateRequest,
  CityController.createCity
);
router.get("/", CityController.getCities);
router.get("/:id", CityController.getCity);
router.delete("/:id", CityController.destroyCity);

module.exports = router;
