const express = require('express')
const patientRouter = express.Router()
const PatientController = require('../controllers/patientController')

patientRouter.get('/nik', PatientController.getPatientByNik)
patientRouter.get('/id', PatientController.getPatientById)
patientRouter.get('/filter', PatientController.getPatientByFilter)

module.exports = patientRouter
