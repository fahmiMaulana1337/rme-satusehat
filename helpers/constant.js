const axios = require('axios');
const cache = require('memory-cache');


module.exports = {
    generateToken: async (req, res) => {
        try {
            const url = `https://api-satusehat-stg.dto.kemkes.go.id/oauth2/v1/accesstoken?grant_type=client_credentials`;
            const body = {
                client_id: process.env.client_id,
                client_secret: process.env.client_secret
            }
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: body,
                url,
            };
            const { data } = await axios(options);
            cache.put('access_token', data.access_token, 3600000);
        } catch (error) {
            console.error('Error while fetching access token:', error.message);
        }
    }
}