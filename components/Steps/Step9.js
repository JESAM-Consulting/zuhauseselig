import React, { useRef, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { sendForm } from "../global/sendForm";
import { forEmail } from "../../config";
import MyTips from "../MyTips";
import AppContext from "../../Context/AppContext";
import axios from "axios";

export default function Step9() {
  const myForm = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const [send, setSend] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const {
    step,
    setStep,
    userData,
    setUserData,
    calculatedDataAll,
  } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const config = {
    headers: {
      "X-API-Account": "6543285",
      "X-API-Key":
        "m5ldC85MhbGciqqTAwMDAtYzAwMC0wMD1NiIqwdsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmgsdgx3425OiJSUzIRGpfyVnpNYyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLd2UU8yqnpNYyIsImtpZCI6ImpTMVhvMU9XAwMDAwMNTJ2YndHTmd2UU8DAwMDAiLCJpc3MiOiJodHRwc3aW5kb3dzLm5ldC85MjNkZ",
    },
  };

  const calculatedDa =
    `${calculatedDataAll?.[0]}` +
    ` ` +
    `${calculatedDataAll?.[1]}` +
    ` , ` +
    `${calculatedDataAll?.[2]}` +
    ` ` +
    `${calculatedDataAll?.[3]}` +
    ` , ` +
    `${calculatedDataAll?.[4]}` +
    ` ` +
    `${calculatedDataAll?.[5]}` +
    ` , ` +
    `${calculatedDataAll?.[6]}` +
    ` ` +
    `${calculatedDataAll?.[7]}` +
    ` , ` +
    `${calculatedDataAll?.[8]}` +
    ` ` +
    `${calculatedDataAll?.[9]}` +
    ` , ` +
    `${calculatedDataAll?.[10]}` +
    ` ` +
    `${calculatedDataAll?.[11]}` +
    ` ` +
    `${calculatedDataAll?.[12]}` +
    ` , ` +
    ` ` +
    `${calculatedDataAll?.[13]}` +
    ` ` +
    `${calculatedDataAll?.[14]}` +
    ` ` +
    `${calculatedDataAll?.[15]}` +
    ` , ` +
    `${calculatedDataAll?.[16]}` +
    ` ` +
    `${calculatedDataAll?.[17]}` +
    ` ` +
    `${calculatedDataAll?.[18]}` +
    ` , ` +
    `${calculatedDataAll?.[19]}` +
    ` ` +
    `${calculatedDataAll?.[20]}` +
    ` ` +
    `${calculatedDataAll?.[21]}` +
    ` , ` +
    `${calculatedDataAll?.[22]}` +
    ` ` +
    `${calculatedDataAll?.[23]}` +
    ` ` +
    `${calculatedDataAll?.[24]}` +
    ` , ` +
    `${calculatedDataAll?.[25]}` +
    ` ` +
    `${calculatedDataAll?.[26]}` +
    ` ` +
    ` ` +
    `${calculatedDataAll?.[27]}` +
    ` , ` +
    `${calculatedDataAll?.[28]}` +
    ` ` +
    ` ` +
    `${calculatedDataAll?.[29]}` +
    ` ` +
    `${calculatedDataAll?.[30]}` +
    ` , ` +
    `${calculatedDataAll?.[31]}` +
    ` ` +
    ` ` +
    `${calculatedDataAll?.[32]}` +
    ` ` +
    `${calculatedDataAll?.[33]}` +
    ` , ` +
    `${calculatedDataAll?.[34]}` +
    ` ` +
    ` ` +
    `${calculatedDataAll?.[35]}` +
    ` ` +
    `${calculatedDataAll?.[36]}`;

  const onSubmit = async (data) => {
    setSend(true);

    const sendData = {
      Eigentuemer: userData.step1 === "Nein" ? false : true,
      Name: data.name,
      plz: parseInt(userData.step6),
      telefon: data.telefon,
      email: data.email,
      stromverbrauch: parseInt(userData.step2.consumo),
      interesse_finanzierung: userData.step4,
      dachform: userData.step3,
      art_heizung: userData.step5,
      leadherkunft: "http://zuhauselig.solar-pvcheck.de",
      Bemerkungen: calculatedDa,
      
    };

    console.log(sendData);

    await axios
      .post(
        `https://fe-partnerportal.de/FE_API/lead_api/v1/lead`,
        sendData,
        config
      )
      .then((res) => {
        // console.log("res", res);
        window.gtag("event", "Angebot erhalten");
        myForm.current.reset();
        setStep(step + 1);
      })


      const Data = {
        Eigentuemer: userData.step1 === "Nein" ? false : true,
        name: data.name,
        plz: parseInt(userData.step6),
        telefon: data.telefon,
        email: data.email,
        stromverbrauch: parseInt(userData.step2.consumo),
        interesse_finanzierung: userData.step4,
        dachform: userData.step3,
        art_heizung: userData.step5,
        leadherkunft: "http://zuhauselig.solar-pvcheck.de",
        Bemerkungen: calculatedDa,
        project:"zuhauseselig"
      };


      await axios
      .post(
        `https://fe-lead-commen-api.rejoicehub.com/FE_API/lead_api/v1/contact`,
        Data,
        config
      )
      .then((res) => {
        myForm.current.reset();
        setStep(step + 1);
      })




      .catch((error) => {
        console.log(error);
        setSend(false);
      });

    // const DataToSend = {
    //   from: "Leads Generator",
    //   to: forEmail,
    //   subject: "Leads Generator",
    //   body: `
    //     <strong>Leads Generator</strong> <br />
    //     <strong>Vor- & Nachname: </strong> ${data.name} <br />
    //     <strong>Telefonnummer : </strong> ${data.telefon} <br />
    //     <strong>E-Mailadresse: </strong> ${data.email} <br />
    //     <strong>Sind Sie Eigentümer der Immobilie?: </strong> ${userData.step1}<br />
    //     <strong>Wie hoch ist Ihr Stromverbrauch?: </strong> ${userData.step2.consumo} kWh/Jahr <br />  </strong> ${userData.step2.personas} Personen im Haushalt <br />
    //     <strong>Welche Dachform hat Ihr Haus?: </strong> ${userData.step3} <br />
    //     <strong>Welche Finanzierung kommt für Sie Frage?: </strong> ${userData.step4} <br />
    //     <strong>Wie heizen Sie Ihr Gebäude?: </strong> ${userData.step5} <br />
    //     <strong>Wo soll die Photovoltaik installiert werden?: </strong> ${userData.step6} <br />
    //     <strong>Weitere Optionen: </strong> ${userData.step7.distance} km/Jahr<br />

    //     `,
    // };

    // const respuesta = await sendForm(DataToSend);
    // if (respuesta.data.cod_resp === "000") {
    //   gtag("event", "send_form", {
    //     name: data.name,
    //     email: data.email,
    //   });
    //   // myForm.current.reset();
    //   // setStep(step + 1);
    // } else {
    //   setSend(false);
    // }
  };

  return (
    <div data-show={step == 9 ? true : false} className="step">
      <h1 className="font-visby lg:text-3xl text-xl font-bold lg:max-w-4xl md:max-w-sm">
        Erhalten Sie jetzt Ihr Top-Angebot von unseren Photovoltaik Fachpartnern
        aus Ihrer Region.
      </h1>
      <form ref={myForm} onSubmit={handleSubmit(onSubmit)} className="  mt-7">
        <div className="flex lg:space-x-10 lg:flex-row flex-col lg:space-y-0 space-y-4">
          <div className="flex flex-col  relative space-y-2 lg:w-1/2">
            <label htmlFor="name" className="text-left font-bold font-visby">
              {`Vor- & Nachname*`}
            </label>
            <input
              id="name"
              type="text"
              className="px-4 py-2 md:py-3 outline-none border border-[#1D1D1B] rounded-sm"
              {...register("name", { required: false })}
            />
            {errors.name && (
              <MyTips text="Bitte überprüfen Sie ihre Eingabe." />
            )}
          </div>
          <div className="flex flex-col  relative space-y-2 lg:w-1/2">
            <label htmlFor="telefon" className="text-left font-bold font-visby">
            Telefonnummer*
            </label>
            <input
              id="telefon"
              type="number"
              className="px-4 py-2 md:py-3 outline-none border border-[#1D1D1B] rounded-sm"
              {...register("telefon", { required: false })}
            />
            {errors.telefon && (
              <MyTips text="Bitte überprüfen Sie ihre Eingabe." />
            )}
          </div>
        </div>

        <div className="flex flex-col  relative mt-4 space-y-2">
          <label htmlFor="email" className="text-left font-bold font-visby ">
          E-Mail Adresse*
          </label>
          <input
            type="email"
            className="px-4 py-2 md:py-3 outline-none border border-[#1D1D1B] rounded-sm"
            {...register("email", {
              required: false,
              pattern:
                "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$",
            })}
          />
          {errors.email?.type === "required" && (
            <MyTips text="Bitte überprüfen Sie ihre Eingabe." />
          )}
          {errors.email?.type === "pattern" && (
            <MyTips text="Bitte überprüfen Sie ihre Eingabe." />
          )}
        </div>

        <div className="mt-4">
          <label className="container_check text-xs font-visby">
            Mit dem Absenden meiner Anfrage akzeptiere ich die AGB und, dass ich
            die Datenschutzerklärung zur Kenntnis genommen habe.
            <input type="checkbox" {...register("agree", { required: true })} />
            <span className="checkmark" />
          </label>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="mt-4 bg-green-1 items-center justify-center flex outline-none relative lg:px-12 lg:text-base md:px-8 font-visby font-bold py-3 rounded-md hover:cursor-pointer text-[#F1C88B] transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#706f69] md:text-sm md:w-auto text-sm w-full">
            <div className="absolute w-full flex justify-center items-center bg-slate-300 z-30">
              <svg
                className={`animate-spin h-5 w-5 text-white absolute${
                  send ? " block " : " hidden "
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <span className={`${send ? "opacity-0" : "opacity-1"}`}>
              Angebote erhalten kostenlos & unverbindlich
            </span>
          </button>
        </div>

        <p className="mt-4 font-visby">
          Wir können Ihnen Informationen über ähnliche Produkte und Leistungen
          per E-Mail zusenden. Ein Widerspruch ist jederzeit hier möglich.
        </p>
      </form>
    </div>
  );
}
