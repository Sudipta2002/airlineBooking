const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: "Arrival time cannot be less than departure" };
            }
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);

            const flight = await this.FlightRepository.createFlight({...data, totalSeats: airplane.capacity });
            // console.log(flight);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.FlightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
    async getAllFlight(data) {
        try {

            const flight = await this.FlightRepository.getAllFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
    async updateFlight(flightId, data) {
        try {

            const response = await this.FlightRepository.updateFlight(flightId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
}

module.exports = FlightService;