const axios = require('axios')
let url = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Location'
const helper = require('../helpers/constant')
const { response } = require('express')

class LocationController {
    static async healtCheck(req, res) {
        res.send('Location')
    }

    //query dinamis name, identifier,organisasi
    static async getLocationsDynamic(req, res) {
        try {
            let params = req.query
            let key = Object.keys(params)
            let value = Object.values(params)
            url += `?${key}=${value}`
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

    //query by id
    static async getLocationsById(req, res) {
        try {
            let id = req.body.id
            url += `/${id}`
            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.error(error.data)
        }
    }
}

module.exports = LocationController
