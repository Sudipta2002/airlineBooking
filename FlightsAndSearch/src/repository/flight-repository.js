const { Op } = require('sequelize');
const { Flights } = require('../models/index');

class FlightRepository {


    #createFilter(data) {
        let filter = {};
        // console.log(data);
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice&&data.maxPrice){
            Object.assign(filter, {
                price: {
                    [Op.between]: [data.minPrice,data.maxPrice]
                }
            });
        }else
        if (data.minPrice) {
            Object.assign(filter, {
                price: {
                    [Op.gte]: data.minPrice
                }
            });
        }else
        if (data.maxPrice) {
            Object.assign(filter, {
                price: {
                    [Op.lte]: data.maxPrice
                }
            });
        }
        return filter;

    }
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            // console.log(flight);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async getAllFlight(filter) {
        try {
            const filterObject=  this.#createFilter(filter);
            console.log(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
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