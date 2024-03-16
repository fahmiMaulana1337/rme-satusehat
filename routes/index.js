const express = require('express');
const router = express.Router()
const {checkToken}  = require('../middlewares/auth');
const GeneralController = require("../controllers/GeneralController");
const PatientController = require('../controllers/patientController');
const routerPatient = require('./patientRoute');

router.use(checkToken)
router.use(routerPatient);
router.get('/check',GeneralController.healtCheck);
module.exports=router;
