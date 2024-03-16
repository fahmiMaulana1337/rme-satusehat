const express = require('express');
const patientRouter = express.Router()
const PatientController = require('../controllers/patientController');

patientRouter.get('/patient/nik',PatientController.getPatientByNik);
patientRouter.get('/patient/id',PatientController.getPatientById);
patientRouter.get('/patient/filter',PatientController.getPatientByFilter);

module.exports=patientRouter;
