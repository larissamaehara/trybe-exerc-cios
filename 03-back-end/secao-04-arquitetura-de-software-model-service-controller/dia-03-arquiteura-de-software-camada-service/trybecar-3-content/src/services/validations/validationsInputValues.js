const { carModel } = require('../../models');

const { addCarSchema } = require('./schemas');

const validateNewCar = ({ model, licensePlate, year, color, driverId }) => {
  const { error } = addCarSchema
    .validate({ model, licensePlate, year, color, driverId });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

const isValidLicensePlateFormat = (license_plate) => {
  // esse regex permite os dois formatos de placa. 
  // O | representa uma alternativa, ou seja, o regex aceita o primeiro padrão  "LLLNNN" (^[A-Z]{3}[0-9]{3}[A-Z0-9]$) 
  // ou o segundo padrão "LLLNLNN" (^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$).
  const licensePlateRegex = /^[A-Z]{3}[0-9]{3}[A-Z0-9]$|^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/;

  return licensePlateRegex.test(license_plate);
};

const isLicensePlateAlreadyRegistered = async (licensePlate) => {
  const car = await carModel.findByLicensePlate(licensePlate);
  return car || false;
};

const isCarOlderThanTenYears = (year) => {
  const currentYear = new Date().getFullYear();
  const carYear = Number(year);
  return currentYear - carYear > 10;
};

module.exports = {
  validateNewCar,
  isValidLicensePlateFormat,
  isLicensePlateAlreadyRegistered,
  isCarOlderThanTenYears,
};