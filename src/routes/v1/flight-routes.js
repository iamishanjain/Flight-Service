const express = require("express");

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/flights -> POST

router.post(
  "/",
  FlightMiddlewares.ValidateCreateRequest,
  FlightController.createFlight
);
// /api/v1/flights?trips=MUM-HYD -> get

router.get("/", FlightController.getAllFlights);

// // /api/v1/flights -> GET
// router.get("/", AirportController.getAirport);

// // /api/v1/flights/:id -> GET
// router.get("/:id", AirportController.getAirport);

// // /api/v1/flights/:id -> DELETE
// router.delete("/:id", AirportController.destroyAirport);
module.exports = router;
