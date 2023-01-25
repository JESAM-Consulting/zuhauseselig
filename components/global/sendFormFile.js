import axios from "axios";

const qs = require("qs");

const sendFormFile = async (datos) => {
  const url = `/api/formFile`;

  try {
    const respuesta_api = await axios.post(url, datos, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return respuesta_api;
  } catch (err) {}
};

module.exports.sendFormFile = sendFormFile;
