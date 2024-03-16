const axios = require('axios');

class PractionerController {
    static async healtCheck(req,res){
        res.send('Practioner');
    }
}

module.exports = PractionerController