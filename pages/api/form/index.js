const qs = require("qs");
import axios from "axios";

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(405).json({ cod_resp: "901", msg: "Only POST request" });
  }

  const remoteServerUrl =
    "https://api.jesamconsulting.com/.netlify/functions/send-email";

  try {
    let bodyData = qs.stringify(req.body);
    const respuesta_api = await axios.post(remoteServerUrl, bodyData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const data = await respuesta_api.data;

    if (!data) {
      res
        .status(200)
        .json({ cod_resp: "902", msg: "No data received from server" });
    }

    if (data.error === "") {
      res.status(200).json({ cod_resp: "000", msg: data.message });
    } else {
      res.status(200).json({ cod_resp: "903", msg: "Error: " + data.error });
    }
  } catch (err) {
    res.status(200).json({ cod_resp: "950", msg: err.message });
  }
}
