const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();
const { FlightMiddlewares } = require('../../middlewares/index')

router.post('/city', CityController.create);
router.post('/allcity', CityController.createAll);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);
router.get('/city/airports/:id', CityController.getAirports);


router.post('/airport', AirportController.create);
router.delete('/airport/:id', AirportController.destroy);
router.get('/airport/:id', AirportController.get);
router.get('/airport', AirportController.getAll);
router.patch('/airport/:id', AirportController.update);

router.post('/flight', FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flight', FlightController.getAll);
router.get('/flight/:id', FlightController.get);
router.patch('/flight/:id', FlightController.update);
module.exports = router;