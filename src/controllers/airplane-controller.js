const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require("../services");
const { response } = require("express");
const { error } = require("winston");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.message = "Airplane created successfully";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplane(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.message = "All Airplanes data fetched successfully";
    SuccessResponse.data = airplanes;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplane,
};
