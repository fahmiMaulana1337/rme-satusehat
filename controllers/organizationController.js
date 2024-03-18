const axios = require('axios')
const base_url = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Organization'
const helper = require('../helpers/constant')

class OrganizationController {
    static async getOrganizationByName(req, res) {
        try {
            const { name } = req.body

            url += `?name=${name}`
            console.log('>>>>', name)

            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async getOrganizationById(req, res) {
        try {
            const { id } = req.body
            console.log('>>>>', id)
            url = base_url+ `?partof=${id}`

            const data = await helper.apiGet(url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async createOrganization(req, res) {
        try {
            let body = {
                resourceType: 'Organization',
                active: true,
                identifier: [
                    {
                        use: 'official',
                        system: 'http://sys-ids.kemkes.go.id/organization/11121121141',
                        value: 'Pos Imunisasi LUBUK BATANG',
                    },
                ],
                type: [
                    {
                        coding: [
                            {
                                system: 'http://terminology.hl7.org/CodeSystem/organization-type',
                                code: 'dept',
                                display: 'Hospital Department',
                            },
                        ],
                    },
                ],
                name: 'Pos Imunisasi',
                telecom: [
                    {
                        system: 'phone',
                        value: '+6221-783042654',
                        use: 'work',
                    },
                    {
                        system: 'email',
                        value: 'rs-satusehat@gmail.com',
                        use: 'work',
                    },
                    {
                        system: 'url',
                        value: 'www.rs-satusehat@gmail.com',
                        use: 'work',
                    },
                ],
                address: [
                    {
                        use: 'work',
                        type: 'both',
                        line: ['Jalan Jati Asih'],
                        city: 'Jakarta',
                        postalCode: '55292',
                        country: 'ID',
                        extension: [
                            {
                                url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode',
                                extension: [
                                    {
                                        url: 'province',
                                        valueCode: '31',
                                    },
                                    {
                                        url: 'city',
                                        valueCode: '3171',
                                    },
                                    {
                                        url: 'district',
                                        valueCode: '317101',
                                    },
                                    {
                                        url: 'village',
                                        valueCode: '31710101',
                                    },
                                ],
                            },
                        ],
                    },
                ],
                partOf: {
                    reference: 'Organization/10000004',
                },
            }
            const data = await helper.apiPost(body, url)
            if (data.error) {
                throw { error: data.error }
            }

            res.status(201).json(data.data)
        } catch (error) {
            console.log('🚀 ~ OrganizationController ~ createOrganization ~ error:', error)
            res.status(400).json(error)
        }
    }
}

module.exports = OrganizationController
