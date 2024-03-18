let url = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Practitioner'
const helper = require('../helpers/constant')

class PractitionerController {
    static async getPractitionerByNIK(req, res, next) {
        try {
            const { nik } = req.body
            url += `?identifier=https://fhir.kemkes.go.id/id/nik|${nik}`
            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.error(error)
        }
    }

    static async getPractitionerByFilter(req, res, next) {
        try {
            let { name, date, gender } = req.body
            url += `?name=${name}&gender=${gender}&birthdate=${date}`
            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async getPractitionerById(req, res, next) {
        try {
            const id = req.body.id
            url += `/${id}`

            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = PractitionerController
