const route = require('express').Router();
const { driverController } = require('../controllers');
const validateDriverFields = require('../middlewares/validateDriverFields');

route.get('/open/travels', driverController.openTravels);
route.get('/', driverController.findAll);
route.get('/:id', driverController.findById);
route.post('/', validateDriverFields, driverController.createDriver);

module.exports = route;
