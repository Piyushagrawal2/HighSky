const express = require('express');

const { infoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes')

const router = express.Router();
router.get('/info', infoController.info)

router.use('/airplane', airplaneRoutes)



module.exports = router;