const axios = require('axios')
let url = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Organization'
const helper = require('../helpers/constant')

class OrganizationController {
    static async getOrganizationByName(req, res) {
        try {
            const { name } = req.body

            url += `?name=${name}`
            console.log('>>>>', name)

            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async getOrganizationById(req, res) {
        try {
            const { id } = req.body
            console.log('>>>>', id)
            url += `?partof=${id}`

            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = OrganizationController
