const axios = require('axios')
const cache = require('memory-cache')

module.exports = {
    generateToken: async (req, res) => {
        try {
            const url = `https://api-satusehat-stg.dto.kemkes.go.id/oauth2/v1/accesstoken?grant_type=client_credentials`
            const body = {
                client_id: process.env.client_id,
                client_secret: process.env.client_secret,
            }
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: body,
                url,
            }
            const { data } = await axios(options)
            cache.put('access_token', data.access_token, 3600000)
        } catch (error) {
            console.error('Error while fetching access token:', error.message)
        }
    },
    apiGet: async (url) => {
        try {
            const token = cache.get('access_token')
            const options = {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
                url,
            }
            const { data } = await axios(options)
            return data
        } catch (error) {
            console.log(error, 'ERROR')
        }
    },
    apiPost: async (body, url) => {
        try {
            const { data } = await axios({
                method: 'POST',
                url: url,
                headers: { Authorization: `Bearer ${token}` },
                data: body,
            })
            return data
        } catch (error) {
            console.log(error.message, 'ERROR')
        }
    },
    formatResponse: async (code, message, response) => {
        const result = {
            response_code: code,
            message: message,
            response: response,
        }

        return result
    },
}
