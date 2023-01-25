import axios from "axios";

const qs = require("qs");

const SendForm = async (datos) => {
  const url = `/api/form`;

  let bodyData = qs.stringify(datos);

  try {
    const respuesta_api = await axios.post(url, bodyData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return respuesta_api;
  } catch (err) {}
};

module.exports.sendForm = SendForm;
