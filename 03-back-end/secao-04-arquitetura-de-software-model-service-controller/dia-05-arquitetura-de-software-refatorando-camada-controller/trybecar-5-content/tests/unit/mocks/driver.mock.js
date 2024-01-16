const driverFromModel = { id: 4, name: 'Samara Granjeiro' };

const driversFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: driversFromModel,
};

const driverFromServiceNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'message' },
};

const driverFromServiceCreated = {
  status: 'CREATED',
  data: newDriverFromModel,
};
const driverFromServiceInvalidValue = {
  status: 'INVALID_VALUE',
  data: { message: 'message' },
};

module.exports = {
  driverFromModel,
  driversFromServiceSuccessful,
  driverFromServiceNotFound,
  driverFromServiceCreated,
  driverFromServiceInvalidValue,
};