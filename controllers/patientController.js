const axios = require('axios');
let url = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient';
const helper = require('../helpers/constant')
class PatientController {
    static async getPatientByNik(req, res) {
        try {
            const { nik } = req.body;
            url += `?identifier=https://fhir.kemkes.go.id/id/nik|${nik}`;
            const data = await helper.apiGet(url);
            res.status(200).json(data);
        } catch (error) {
            console.log(error)
        }
    }

    static async getPatientById(req, res) {
        try {
            const id = req.body.id;
            url += `/${id}`

            const data = await helper.apiGet(url);
            console.log("🚀 ~ PatientController ~ getPatientById ~ data:", data)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async getPatientByFilter(req, res) {
        try {
            let { name, date, gender } = req.body;

            name = 'pasien 1';
            date = '1980-12-03';
            gender = 'male';
            url += `?name=${name}&birthdate=${date}&gender=${gender}`;
            const data = await helper.apiGet(url);
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = PatientController;
