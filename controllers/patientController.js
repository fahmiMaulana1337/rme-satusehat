const axios = require('axios');

class PatientController {
    static async healtCheck(req,res){
        res.send('Patient');
    }
}

module.exports = PatientController