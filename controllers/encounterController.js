const axios = require('axios');

class EncounterController {
    static async healtCheck(req,res){
        res.send('Encounter');
    }
}

module.exports = EncounterController