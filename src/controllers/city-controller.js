const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");

const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST :/cities
 * req-body {name : "Jaipur"}
 */

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.message = "City Created Successfully";
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
}

/**
 * GET :/cities
 * req-body {}
 */

async function getCities(req, res) {
  try {
    const cities = await CityService.getCities();
    SuccessResponse.message = "All cities are fetched Sucessfully";
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * POST :/cities/:id
 * req-body {}
 */

async function getCity(req, res) {
  try {
    const city = await CityService.getCity(req.params.id);
    SuccessResponse.message = "City Fetched Successfully";
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE :/cities/:id
 * req-body {}
 */

async function destroyCity(req, res) {
  try {
    const response = await CityService.destroyCity(req.params.id);

    SuccessResponse.message = "City Deleted Successsfully";
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  destroyCity,
};

// update API need to be implemneted
