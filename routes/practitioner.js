const express = require('express')
const router = express.Router()
const PractitionerController = require('../controllers/practionerController')

router.get('/:nik', PractitionerController.getPractitionerByNIK)

module.exports = router
