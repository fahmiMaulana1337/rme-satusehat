const axios = require('axios')
const helper = require('../helpers/constant')
let url = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Encounter'

class EncounterController {
    static async postEncounter(req, res) {
        try {
            let { patient, doctor, location, kelas } = req.body
            let body = {
                resourceType: 'Encounter',
                identifier: [
                    {
                        system: 'http://sys-ids.kemkes.go.id/encounter/10000004',
                        value: 'P20240010',
                    },
                ],
                status: 'arrived',
                class: {
                    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
                    code: 'AMB',
                    display: 'ambulatory',
                },
                subject: {
                    reference: 'Patient/100000030009',
                    display: 'Budi Santoso',
                },
                participant: [
                    {
                        type: [
                            {
                                coding: [
                                    {
                                        system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                                        code: 'ATND',
                                        display: 'attender',
                                    },
                                ],
                            },
                        ],
                        individual: {
                            reference: 'Practitioner/N10000001',
                            display: 'Dokter Bronsig',
                        },
                    },
                ],
                period: {
                    start: '2022-11-14T01:00:00+00:00',
                },
                location: [
                    {
                        location: {
                            reference: 'Location/ef011065-38c9-46f8-9c35-d1fe68966a3e',
                            display: 'Ruang 1A, Poliklinik Rawat Jalan',
                        },
                        extension: [
                            {
                                url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/ServiceClass',
                                extension: [
                                    {
                                        url: 'value',
                                        valueCodeableConcept: {
                                            coding: [
                                                {
                                                    system: 'http://terminology.kemkes.go.id/CodeSystem/locationServiceClass-Outpatient',
                                                    code: 'reguler',
                                                    display: 'Kelas Reguler',
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
                statusHistory: [
                    {
                        status: 'arrived',
                        period: {
                            start: '2022-11-14T01:00:00+00:00',
                        },
                    },
                ],
                serviceProvider: {
                    reference: 'Organization/10000004',
                },
            }
            /* // input dari user
            body.subject = patient
            body.participant.individual = doctor
            body.location.location = location // user milih ruangan
            body.location.extension.extension[0].valueCodeableConcept.coding = kelas
            */

            const data = await helper.apiPost(body, url)
            if (data.error) {
                throw { error: data.error }
            }
            res.status(201).json(data.data)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    static async putEncounter(req, res) {
        try {
            let id = req.params.id // id encounter/kunjungan yg sudah dibuat, status: arrived
            let body = {
                resourceType: 'Encounter',
                id: 'da0b1df7-60c5-46fb-8379-d10365a18580', //
                identifier: [
                    {
                        system: 'http://sys-ids.kemkes.go.id/encounter/10000004',
                        value: 'P20240010',
                    },
                ],
                status: 'in-progress',
                class: {
                    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
                    code: 'AMB',
                    display: 'ambulatory',
                },
                subject: {
                    reference: 'Patient/100000030009',
                    display: 'Budi Santoso',
                },
                participant: [
                    {
                        type: [
                            {
                                coding: [
                                    {
                                        system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                                        code: 'ATND',
                                        display: 'attender',
                                    },
                                ],
                            },
                        ],
                        individual: {
                            reference: 'Practitioner/N10000001',
                            display: 'Dokter Bronsig',
                        },
                    },
                ],
                period: {
                    start: '2022-11-14T01:00:00+00:00',
                },
                location: [
                    {
                        location: {
                            reference: 'Location/ef011065-38c9-46f8-9c35-d1fe68966a3e',
                            display: 'Ruang 1A, Poliklinik Rawat Jalan',
                        },
                        extension: [
                            {
                                url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/ServiceClass',
                                extension: [
                                    {
                                        url: 'value',
                                        valueCodeableConcept: {
                                            coding: [
                                                {
                                                    system: 'http://terminology.kemkes.go.id/CodeSystem/locationServiceClass-Outpatient',
                                                    code: 'reguler',
                                                    display: 'Kelas Reguler',
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
                statusHistory: [
                    {
                        status: 'arrived',
                        period: {
                            start: '2022-11-14T01:00:00+00:00',
                            end: '2022-11-14T02:00:00+00:00',
                        },
                    },
                    {
                        status: 'in-progress',
                        period: {
                            start: '2022-11-14T02:00:00+00:00', // harusnya ini new Date() atau handle langsung di query
                        },
                    },
                ],
                serviceProvider: {
                    reference: 'Organization/10000004',
                },
            }
            /* // input dari user
            body.id = id */
            const data = await helper.apiPut(body, url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async putFinalEncounter(req, res) {
        try {
            let id = req.params.id
            // let { conditionPrimary, conditionSecondary } = req.body
            // let urlCondition = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Condition/'
            // let diangosisPrimary = await helper.apiGet(urlCondition + conditionPrimary) // hit buat ambil data condition
            // let diagnosisSecondary = await helper.apiGet(urlCondition + conditionSecondary) // hit buat ambil data condition
            let body = {
                resourceType: 'Encounter',
                id: 'da0b1df7-60c5-46fb-8379-d10365a18580',
                identifier: [
                    {
                        system: 'http://sys-ids.kemkes.go.id/encounter/10000004',
                        value: 'P20240001',
                    },
                ],
                status: 'finished',
                class: {
                    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
                    code: 'AMB',
                    display: 'ambulatory',
                },
                subject: {
                    reference: 'Patient/100000030009',
                    display: 'Budi Santoso',
                },
                participant: [
                    {
                        type: [
                            {
                                coding: [
                                    {
                                        system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                                        code: 'ATND',
                                        display: 'attender',
                                    },
                                ],
                            },
                        ],
                        individual: {
                            reference: 'Practitioner/N10000001',
                            display: 'Dokter Bronsig',
                        },
                    },
                ],
                period: {
                    start: '2022-11-14T01:00:00+00:00',
                    end: '2022-11-14T02:00:00+00:00',
                },
                location: [
                    {
                        location: {
                            reference: 'Location/ef011065-38c9-46f8-9c35-d1fe68966a3e',
                            display: 'Ruang 1A, Poliklinik Rawat Jalan',
                        },
                        extension: [
                            {
                                url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/ServiceClass',
                                extension: [
                                    {
                                        url: 'value',
                                        valueCodeableConcept: {
                                            coding: [
                                                {
                                                    system: 'http://terminology.kemkes.go.id/CodeSystem/locationServiceClass-Outpatient',
                                                    code: 'reguler',
                                                    display: 'Kelas Reguler',
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
                diagnosis: [
                    {
                        condition: {
                            reference: 'Condition/8ca6da00-5ea9-481c-a3ba-e640b4e22ce4',
                            display: 'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                        },
                        use: {
                            coding: [
                                {
                                    system: 'http://terminology.hl7.org/CodeSystem/diagnosis-role',
                                    code: 'DD',
                                    display: 'Discharge diagnosis',
                                },
                            ],
                        },
                        rank: 1,
                    },
                    {
                        condition: {
                            reference: 'Condition/2984c564-263d-4979-8cd0-07c72637edc9',
                            display: 'Non-insulin-dependent diabetes mellitus without complications',
                        },
                        use: {
                            coding: [
                                {
                                    system: 'http://terminology.hl7.org/CodeSystem/diagnosis-role',
                                    code: 'DD',
                                    display: 'Discharge diagnosis',
                                },
                            ],
                        },
                        rank: 2,
                    },
                ],
                statusHistory: [
                    {
                        status: 'arrived',
                        period: {
                            start: '2022-11-14T01:00:00+00:00',
                            end: '2022-11-14T02:00:00+00:00',
                        },
                    },
                    {
                        status: 'in-progress',
                        period: {
                            start: '2022-11-14T01:00:00+00:00',
                            end: '2022-11-14T03:00:00+00:00',
                        },
                    },
                    {
                        status: 'finished',
                        period: {
                            // bisa pakai new Date() atau langsung di query
                            start: '2022-11-14T03:00:00+00:00',
                            end: '2022-11-14T03:00:00+00:00',
                        },
                    },
                ],
                serviceProvider: {
                    reference: 'Organization/10000004',
                },
            }
            /* // input dari user
            body.id = id
            // untuk condition harus ambil display saja dan reference/id
            body.diagnosis.condition = [diangosisPrimary, diagnosisSecondary]
             */
            url += `/:${id}`
            const data = await helper.apiPost(body, url)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = EncounterController
