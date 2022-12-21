const AirportService = require('../services/airport-service');

const airportSerivce = new AirportService();

const create = async(req, res) => {
    try {
        const airport = await airportSerivce.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created a airport",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a airport",
            err: error
        });
    }
}
const destroy = async(req, res) => {
    try {
        const response = await airportSerivce.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a airport",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a airport",
            err: error
        });
    }
}
const get = async(req, res) => {
    try {
        const airport = await airportSerivce.getAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully fetched a airport",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a airport",
            err: error
        });
    }
}
const getAll = async(req, res) => {
    try {
        // console.log(req.query);
        const airports = await airportSerivce.getAllAirport(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Successfully fetched all airports",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all the airports",
            err: error
        });
    }
}
const update = async(req, res) => {
    try {
        const airport = await airportSerivce.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully updated a airport",
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the airport",
            err: error
        });
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}