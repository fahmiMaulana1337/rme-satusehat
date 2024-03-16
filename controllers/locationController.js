const axios = require('axios')

class LocationController {
    static async healtCheck(req, res) {
        res.send('Location')
    }
}

module.exports = LocationController
