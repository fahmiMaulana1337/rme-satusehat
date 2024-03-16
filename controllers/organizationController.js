const axios = require('axios')

class OrganizationController {
    static async healtCheck(req, res) {
        res.send('Organization')
    }
}

module.exports = OrganizationController
