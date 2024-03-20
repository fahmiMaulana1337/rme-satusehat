const express = require('express')
const EncounterController = require('../controllers/encounterController')
const router = express.Router()

router.post('/', EncounterController.postEncounter)
router.put('/:id/inProgres', EncounterController.putEncounter)
router.put('/:id/finish', EncounterController.putFinalEncounter)

module.exports = router
