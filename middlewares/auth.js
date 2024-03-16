const cache = require('memory-cache');
const axios = require('axios'); // Don't forget to require axios

const helper = require('../helpers/constant');

const checkToken = async (req, res, next) => {
    try {
        const token = cache.get('access_token');
        if (!token || token==null) {
            await helper.generateToken();
        }
        next();
    } catch (error) {
        console.log("TAIII");
    }
};

module.exports = { checkToken };
