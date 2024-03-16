const express = require('express')
const router = express.Router()
const { checkToken } = require('../middlewares/auth')
const GeneralController = require('../controllers/GeneralController')
const PatientController = require('../controllers/patientController')
const practitionerRouter = require('./practitioner')

router.use(checkToken)
router.get('/check', GeneralController.healtCheck)
router.get('/patient', PatientController.healtCheck)
router.use('/api/v1/practitioner', practitionerRouter)

module.exports = router
