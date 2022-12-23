const { Flights } = require('../models/index');

class FlightRepository {

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            console.log(flight);
            // return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteCity(flightId) {
        try {
            await Flights.destroy({
                where: {
                    id: flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }





}

module.exports = FlightRepository;