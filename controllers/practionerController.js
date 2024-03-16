const axios = require("axios");
const cache = require("memory-cache");

class PractitionerController {
  static async getPractitionerByNIK(req, res, next) {
    try {
      const { nik } = req.params;
      const url = `https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Practitioner?identifier=https://fhir.kemkes.go.id/id/nik|${nik}`;
      const options = {
        url,
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${cache.get("access_token")}`,
        },
      };
      const { data } = await axios(options);
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PractitionerController;
