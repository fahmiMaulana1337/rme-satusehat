const express = require("express");
const router = express.Router();
const OrganizationController = require("../controllers/organizationController");

router.get("/name", OrganizationController.getOrganizationByName);
router.get("/id", OrganizationController.getOrganizationById);
router.post("/create", OrganizationController.createOrganization);

module.exports = router;
