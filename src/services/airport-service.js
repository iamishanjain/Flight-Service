const { StatusCodes } = require("http-status-codes");

const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepository = new AirportRepository();

async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airplort Object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports(params) {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw new AppError(
      "Something went wrong while fetching Airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airpirt you requested is not present!",
        error.statusCode
      );
    }
    throw new AppError(
      "Airport from this ID does not seem to exist!!",
      StatusCodes.NOT_FOUND
    );
  }
}

async function destroyAirport(id) {
  try {
    const response = await airportRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airport you requested to delete is not present!!!",
        error.statusCode
      );
    }
    throw new AppError(
      "Something went wrong while Deleting Airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirport(id) {
  try {
    const updateResponse = await airportRepository.update(id);

    return updateResponse;
  } catch (error) {
    throw new AppError(
      "Something went wrong while Updating Airpor",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createAirport,
  getAirport,
  getAirports,
  destroyAirport,
  updateAirport,
};
