const { StatusCodes } = require("http-status-codes");

const { FlightService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 * POST :/flights
 * req-body {
 * flightNumber : UK 808,
 * airplaneId : 1,
 * departureAirportId : DEL,
 * arrivalAirportId  : BLR,
 * arrivalTime : 2023-08-17 04:30:00,
 * departureTime : 2023-08-17 01:00:00,
 * price : 3500,
 * boardingGate :
 * totalSeats : 120
 * }
 */

async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    SuccessResponse.message = "flight created successfully";
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAllFlights(req, res) {
  try {
    const flights = await FlightService.getAllFlights(req.query);
    SuccessResponse.message = "Flights data fetched successfully";
    SuccessResponse.data = flights;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while fetching flights";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// /**
//  * GET :/airplorts
//  * req-body {}
//  */

// async function getAirports(req, res) {
//   try {
//     const airports = await AirportService.getAirports();
//     SuccessResponse.message = "All Airports data fetched successfully";
//     SuccessResponse.data = airports;

//     return res.status(StatusCodes.OK).json(SuccessResponse);
//   } catch (error) {
//     ErrorResponse.error = error;
//     return res.status(error.statusCode).json(ErrorResponse);
//   }
// }

// /**
//  * POST :/flights/:id
//  * req-body {}
//  */

async function getFlight(req, res) {
  try {
    const flight = await FlightService.getFlight(req.params.id);
    SuccessResponse.message = "Flight data fetched successfully";
    SuccessResponse.data = flight;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// /**
//  * DELETE :/airports/:id
//  * req-body {}
//  */

// async function destroyAirport(req, res) {
//   try {
//     const response = await AirportService.destroyAirport(req.params.id);
//     SuccessResponse.message = "Airport deleted successfully";
//     SuccessResponse.data = response;

//     return res.status(StatusCodes.OK).json(SuccessResponse);
//   } catch (error) {
//     ErrorResponse.error = error;
//     return res.status(error.statusCode).json(ErrorResponse);
//   }
// }

async function updateSeats(req, res) {
  try {
    const response = await FlightService.updateSeats({
      flightId: req.params.id,
      seats: req.body.seats,
      dec: req.body.dec,
    });
    SuccessResponse.message = "Remaining seats data updated successfully";
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats,
};

// update API need to be implemneted
