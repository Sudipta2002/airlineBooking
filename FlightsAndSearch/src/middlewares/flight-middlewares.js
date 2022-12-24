const { ClientErrorCodes } = require('../utils/helper');
const validateCreateFlight = (req, res, next) => {
    if (!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for creating a flight",
            err: "Missing mandetory properties to create a flight"
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}