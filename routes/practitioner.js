const express = require('express')
const router = express.Router()
const PractitionerController = require('../controllers/practionerController')

router.get('/nik', PractitionerController.getPractitionerByNIK)
router.get('/filter', PractitionerController.getPractitionerByFilter)
router.get('/id', PractitionerController.getPractitionerById)

module.exports = router
