const express = require("express");
const router = express.Router();
const OrganizationController = require("../controllers/organizationController");

router.get("/name", OrganizationController.getOrganizationByName);
router.get("/id", OrganizationController.getOrganizationById);

module.exports = router;
