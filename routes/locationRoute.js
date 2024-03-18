const express = require('express')
const locationRouter = express.Router()
const LocationController = require('../controllers/locationController')

locationRouter.get('/', LocationController.getLocationsDynamic)
locationRouter.get('/id', LocationController.getLocationsById)

module.exports = locationRouter
