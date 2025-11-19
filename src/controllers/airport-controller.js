const { StatusCodes } = require("http-status-codes");

const { AirportService } = require("../services");
const { error } = require("winston");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 * POST :/airports
 * req-body {name : "Jaipur", code : "JPR", address : "Jaipur Road", cityId : 12}
 */

async function createAirport(req, res) {
  try {
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });
    SuccessResponse.message = "Airport created successfully";
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * GET :/airplorts
 * req-body {}
 */

async function getAirports(req, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.message = "All Airports data fetched successfully";
    SuccessResponse.data = airports;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * POST :/airports/:id
 * req-body {}
 */

async function getAirport(req, res) {
  try {
    const airports = await AirportService.getAirport(req.params.id);
    SuccessResponse.message = "Airport data fetched successfully";
    SuccessResponse.data = airports;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE :/airports/:id
 * req-body {}
 */

async function destroyAirport(req, res) {
  try {
    const response = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.message = "Airport deleted successfully";
    SuccessResponse.data = response;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
};

// update API need to be implemneted
