const express = require('express');
const router = express.Router()
// const { authentication } = require('../middlewares/auth');
const GeneralController = require("../controllers/GeneralController");

router.get('/check',GeneralController.healtCheck);

module.exports=router;
