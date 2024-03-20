const helper = require('../helpers/constant')
let url = 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Condition'

class ConditionController {
    static async postConditionPrimary(req, res) {
        try {
            let { patient, encounter, diagnose } = req.body
            let body = {
                resourceType: 'Condition',
                clinicalStatus: {
                    coding: [
                        {
                            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                            code: 'active',
                            display: 'Active',
                        },
                    ],
                },
                category: [
                    {
                        coding: [
                            {
                                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                                code: 'encounter-diagnosis',
                                display: 'Encounter Diagnosis',
                            },
                        ],
                    },
                ],
                code: {
                    coding: [
                        {
                            system: 'http://hl7.org/fhir/sid/icd-10',
                            code: 'A15.0',
                            display: 'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                        },
                    ],
                },
                subject: {
                    reference: 'Patient/100000030009',
                    display: 'Budi Santoso',
                },
                encounter: {
                    reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
                },
                onsetDateTime: '2022-11-14T02:00:00+00:00',
                recordedDate: '2022-11-14T02:00:00+00:00',
            }

            /*  // input dari user
            body.code.coding = diagnose
            body.subject = patient
            body.encounter.reference = encounter */

            const data = await helper.apiPost(body, url)
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async postConditionSecondary(req, res) {
        try {
            let { patient, encounter, diagnose } = req.body
            let body = {
                resourceType: 'Condition',
                clinicalStatus: {
                    coding: [
                        {
                            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                            code: 'active',
                            display: 'Active',
                        },
                    ],
                },
                category: [
                    {
                        coding: [
                            {
                                system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                                code: 'encounter-diagnosis',
                                display: 'Encounter Diagnosis',
                            },
                        ],
                    },
                ],
                code: {
                    coding: [
                        {
                            system: 'http://hl7.org/fhir/sid/icd-10',
                            code: 'E11.9',
                            display: 'Non-insulin-dependent diabetes mellitus without complications ',
                        },
                    ],
                },
                subject: {
                    reference: 'Patient/100000030009',
                    display: 'Budi Santoso',
                },
                encounter: {
                    reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
                    display: 'Kunjungan Budi Santoso di tanggakl 14 Juli 2023',
                },
                onsetDateTime: '2022-11-14T02:00:00+00:00',
                recordedDate: '2022-11-14T02:00:00+00:00',
            }
            /*  // input dari user
            body.code.coding = diagnose
            body.subject = patient
            body.encounter.reference = encounter // ada input baru, display (pasient+tanggal condition primary), dari user
             */
            const data = await helper.apiPost(body, url)
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ConditionController
