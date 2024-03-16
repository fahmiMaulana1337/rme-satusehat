const axios = require('axios')
let url = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Location'
const helper = require('../helpers/constant')

class LocationController {
    static async healtCheck(req, res) {
        res.send('Location')
    }

    //query dinamis name, identifier,organisasi
    static async getLocations(req, res) {
        try {
            let { name } = req.query
            // let { key } = Object.keys(params)[0]
            // let value = params.key
            console.log(name, 'key>>>>>>>>>>>>>>>>>')
            url += `?name=${name}`
            console.log(url, 'url >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.')
            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                status: 500,
                message: 'internal server error',
            })
        }
    }
}

module.exports = LocationController
