const axios = require('axios');

class GeneralController {
    static async healtCheck(req,res){
        res.send('General');
    }
}

module.exports = GeneralController