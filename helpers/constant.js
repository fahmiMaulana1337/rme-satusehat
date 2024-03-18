const axios = require('axios')
const cache = require('memory-cache')

module.exports = {
    generateToken: async (req, res) => {
        try {
            cache.del('access_token')
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
            cache.put('access_token', data.access_token)
        } catch (error) {
            return error.response.data.issue[0].details.text
        }
    },
    apiGet: async (url) => {
        try {
            const token = cache.get('access_token')
            console.log('🚀 ~ apiGet: ~ token:', token)
            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                url,
            }
            const { data } = await axios(options)
            return data
        } catch (error) {
            return error.response.data.issue[0].details.text
        }
    },
    apiPost: async (body, url) => {
        try {
            const token = cache.get('access_token')
            const data = await axios({
                method: 'POST',
                url: url,
                headers: { Authorization: `Bearer ${token}` },
                data: body,
            })
            console.log("🚀 ~ apiPost: ~ data:", data.data)
            return data
        } catch (error) {
            return {error:error.response.data.issue[0].details.text}
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
