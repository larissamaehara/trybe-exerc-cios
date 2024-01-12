const { carModel, driverModel } = require('../models');
const { validateNewCar } = require('./validations/validationsInputValues');
const { isValidLicensePlateFormat } = require('./validations/validationsInputValues');
const { isLicensePlateAlreadyRegistered } = require('./validations/validationsInputValues');
const { isCarOlderThanTenYears } = require('./validations/validationsInputValues');

const driverExists = async (driverId) => {
  const driver = await driverModel.findById(driverId);
  return driver || false;
};


const validateLicensePlate = async (licensePlate) => {
  const licenseAlreadyRegistered = await isLicensePlateAlreadyRegistered(licensePlate);
    if (licenseAlreadyRegistered) {
       return { status: 'CONFLICT', data: { message: 'Car already registered' } };
    }

  const isValidPlate = isValidLicensePlateFormat(licensePlate);
  if (!isValidPlate) {
    return {
      status: 'INVALID_VALUES',
      data: { message: 'Invalid license plate' },
    };
  }

};

const createCar = async ({ model, licensePlate, year, color, driverId }) => {
  if (isCarOlderThanTenYears(year)) {
    return { 
      status: 'INVALID_VALUES', 
      data: { message: 'The year of the car cannot be more than 10 years old' },
    };
  }

  const error = validateNewCar({ model, licensePlate, year, color, driverId });
  if (error) return { status: error.status, data: { message: error.message } };

  const driver = await driverExists(driverId);
  if (!driver) return { status: 'NOT_FOUND', data: { message: 'Driver not found' } };

  const licensePlateError = await validateLicensePlate(licensePlate);
  if (licensePlateError) return licensePlateError;

  const carId = await carModel.insert({ model, licensePlate, year, color, driverId });
  const newCar = { id: carId, model, licensePlate, year, color, driverId };
  return { status: 'SUCCESSFUL', data: newCar };
};

const findAll = async () => {
  const cars = await carModel.findAll();
  return { status: 'SUCCESSFUL', data: cars };
};

module.exports = {
  createCar,
  findAll,
};