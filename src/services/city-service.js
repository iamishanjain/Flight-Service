const { StatusCodes } = require("http-status-codes");

const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { SuccessResponse } = require("../utils/common");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    console.log(error);
    if (
      error.name === "SequelizeValidationError" ||
      "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new City Object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCities(params) {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      "Something went wrong while fetching cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The city with this ID does not see to exist!!!",
        StatusCodes.BAD_REQUEST
      );
    }
    throw new AppError(
      "Something went wrong while Fetching City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyCity(id) {
  try {
    const response = await cityRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The City you requested to delete is not present!!!",
        error.statusCode
      );
    }
    throw new AppError(
      "Something went wrong while Deleting City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id) {
  try {
    
  } catch (error) {
    
  }
}

module.exports = {
  createCity,
  getCities,
  getCity,
  destroyCity,
};
