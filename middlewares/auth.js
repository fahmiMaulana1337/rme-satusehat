const cache = require('memory-cache');
const axios = require('axios'); // Don't forget to require axios

const helper = require('../helpers/constant');

const checkToken = async (req, res, next) => {
    try {
        const token = cache.get('access_token');
        console.log("🚀 ~ checkToken ~ token", token)
        if (!token) {
            await helper.generateToken();
        }
        next();
    } catch (error) {
        console.error(error);
        next(error);
    }
};

module.exports = { checkToken };
