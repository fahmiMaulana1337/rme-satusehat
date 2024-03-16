const express = require('express')
const locationRouter = express.Router()
const LocationController = require('../controllers/locationController')

locationRouter.get('/', LocationController.getLocations)

module.exports = locationRouter
