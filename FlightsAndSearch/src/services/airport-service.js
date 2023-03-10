const { AirportRepository } = require('../repository/index');

class AirportService {

    constructor() {
        this.AirportRepository = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = await this.AirportRepository.createAirport(data);
            console.log(airport);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async deleteAirport(airportId) {
        try {
            const response = await this.AirportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async updateAirport(airportId, data) {
        try {
            const airport = await this.AirportRepository.updateAirport(airportId, data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async getAirport(airportId) {
        try {
            const airport = await this.AirportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async getAllAirport(filter) { // filter can be empty also
        try {
            const airports = await this.AirportRepository.getAllAirport({ name: filter.name });
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}
module.exports = AirportService;