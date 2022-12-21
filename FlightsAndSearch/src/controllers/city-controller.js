// const { CityRepository } = require('../repository');
const { CityService } = require('../services/index');


const cityService = new CityService();
/**
 * POST
 * data -> req.body
 */

const create = async(req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });
    }
}

const createAll = async(req, res) => {
        try {
            console.log(req.body);
            const cities = await cityService.createAllCity(req.body);
            console.log(cities);
            return res.status(201).json({
                data: cities,
                success: true,
                message: "Successfully created all city",
                err: {}
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to create all cities",
                err: error
            });
        }
    }
    // DELETE  -> /city/:id
const destroy = async(req, res) => {
        try {
            const response = await cityService.deleteCity(req.params.id);
            return res.status(200).json({
                data: response,
                success: true,
                message: "Successfully deleted a city",
                err: {}
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to delete a city",
                err: error
            });
        }
    }
    // get  -> /city/:id
const get = async(req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully fetched a city",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a city",
            err: error
        });
    }
}
const getAll = async(req, res) => {
        try {
            // console.log(req.query);
            const cities = await cityService.getAllCities(req.query);
            return res.status(200).json({
                data: cities,
                success: true,
                message: "Successfully fetched all cities",
                err: {}
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                data: {},
                success: false,
                message: "Not able to get all the cities",
                err: error
            });
        }
    }
    // Patch -> /city/:id ->req.body
const update = async(req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated a city",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
}
const getAirports = async(req, res) => {
    try {
        const response = await cityService.airportsOfCity(req.params.id);
        res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched airports of a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetched airports of a city",
            err: error
        })
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    createAll,
    getAirports
}