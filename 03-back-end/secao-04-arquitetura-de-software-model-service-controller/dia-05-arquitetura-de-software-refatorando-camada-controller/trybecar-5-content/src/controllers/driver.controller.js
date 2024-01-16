const { travelService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const openTravels = async (_req, res) => {
  const { status, data } = await travelService.getOpenTravels();
  return res.status(mapStatusHTTP(status)).json(data);
};

const findAll = async (_req, res) => {
  const { status, data } = await driverService.findAll();
  return res.status(mapStatusHTTP(status)).json(data);
}

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await driverService.findById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const createDriver = async (req, res) => {
  const { status, data } = await driverService.createDriver(req.body);
  return res.status(mapStatusHTTP(status)).json(data);
};


module.exports = {
  openTravels,
  findAll,
  findById,
  createDriver,
};