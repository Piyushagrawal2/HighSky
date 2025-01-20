const { StatuCodes } = require('http-status-codes')
const { AirplaneService } = require('../services/airplane-service')


/*
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        return res
            .status(StatuCodes.CREATED)
            .json({
                status: true,
                message: "Successfully create an airplane",
                data: airplane,
                error: {}
            })
    } catch (error) {
        return res
            .status(StatuCodes.INTERNAL_SERVER_ERROR)
            .json({
                status: false,
                message: "Something went wrong while creating an airplane",
                data: {},
                error: error
            })
    }
}

module.exports = {
    createAirplane
}