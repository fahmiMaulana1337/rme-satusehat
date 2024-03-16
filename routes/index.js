const express = require('express')
const router = express.Router()
const { checkToken } = require('../middlewares/auth')
const GeneralController = require('../controllers/GeneralController')
const patientRoute = require('./patientRoute')
const practitionerRouter = require('./practitioner')
const locationRouter = require('./locationRoute')

router.use(checkToken)
router.get('/check', GeneralController.healtCheck)
router.use('/api/v1/patient', patientRoute)
router.use('/api/v1/practitioner', practitionerRouter)
router.use('/api/v1/location', locationRouter)

module.exports = router
