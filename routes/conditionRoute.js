const express = require('express')
const ConditionController = require('../controllers/conditionController')
const router = express.Router()

router.post('/', ConditionController.postConditionPrimary)
router.post('/', ConditionController.postConditionSecondary)

module.exports = router
