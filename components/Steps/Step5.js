import React, { useRef, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { sendForm } from "../global/sendForm";
import { forEmail } from "../../config";
import MyTips from "../MyTips";
import AppContext from "../../Context/AppContext";
import axios from "axios";

export default function Step5() {
  const myForm = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const { step, setStep, userData, setUserData } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const config = {
    headers: {
      "X-API-Account": "71658",
      "X-API-Key":
        "OiJKV1QiLCJub25jZSI6IjJFY0RuMHAtLW9YQU1vVnZtaDZYaEFNQ0lIcVBEMzRvaUppWm44cktmY0kiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9feKq9lzfS9RoR4pWxajCpaLVk8EcQBGsy4",
    },
  };

  const onSubmit = async (data) => {
    console.log(data);
    const sendData = {
      vorname: data.name,
      plz: userData.step4,
      stromverbrauch: userData.step1,
      Eigentuemer: userData?.step3?.[0],
      // isLiveInOwnProperty: userData?.step3?.[1],
      dachform: userData.step2,
      telefon: data.telefon,
      email: data.email,
      leadherkunft: "https://zuhauseselig.netlify.app",
    };
    await axios
      .post(
        `https://fe-partnerportal.de/FE_API/lead_api/v1/lead`,
        sendData,
        config
      )
      .then((res) => {
        myForm.current.reset();

        setStep(step + 1);
      })


      const Data = {
        name: data.name,
        plz: userData.step4,
        stromverbrauch: userData.step1,
        Eigentuemer: userData?.step3?.[0],
        // isLiveInOwnProperty: userData?.step3?.[1],
        dachform: userData.step2,
        telefon: data.telefon,
        email: data.email,
        leadherkunft: "https://zuhauseselig.netlify.app",
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
      });

    const DataToSend = {
      from: "FE Leads Generator",
      to: forEmail,
      subject: "FE Leads Generator",
      body: `    
        <strong>FE Leads Generator</strong> <br />
        <strong>Vor- & Nachname: </strong> ${data.name} <br />
        <strong>Telefonnummer : </strong> ${data.telefon} <br />
        <strong>E-Mailadresse: </strong> ${data.email} <br />                
        <strong>Wie hoch ist Ihr Stromverbrauch?: </strong> ${
          userData.step1
        } kWh/Jahr <br />                
        <strong>Welche Dachform hat Ihr Haus?: </strong> ${
          userData.step2
        } <br />                
        <strong>Sind Sie Eigentümer der Immobilie?: </strong> ${
          userData.step3[0] ? " Ja " : " Nein"
        } <br />                
        <strong>Bewohnen Sie die Immobilie selbst?: </strong> ${
          userData.step3[1] ? " Ja" : " Nein"
        } <br />  
        <strong>Welche Dachform hat Ihr Haus?: </strong> ${
          userData.step4
        } <br />                                    
        `,
    };

    const respuesta = await sendForm(DataToSend);
    // if (respuesta.data.cod_resp === "000") {
    //   myForm.current.reset();

    //   setStep(step + 1);
    // }
  };

  return (
    <div data-show={step == 5 ? true : false} className="step">
      <h1 className="font-visby lg:text-4xl text-xl font-bold lg:max-w-4xl md:max-w-sm">
        Erhalten Sie jetzt Ihr Top-Angebot von unseren Photovoltaik Fachpartnern
        aus Ihrer Region.
      </h1>
      <form ref={myForm} onSubmit={handleSubmit(onSubmit)} className="mt-5">
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
            {errors.name && <MyTips text="Name is required" />}
          </div>
          <div className="flex flex-col  relative space-y-2 lg:w-1/2">
            <label htmlFor="telefon" className="text-left font-bold font-visby">
              Telefonnummer *
            </label>
            <input
              id="telefon"
              type="number"
              className="px-4 py-2 md:py-3 outline-none border border-[#1D1D1B] rounded-sm"
              {...register("telefon", { required: false })}
            />
            {errors.telefon && <MyTips text="Verify your phone" />}
          </div>
        </div>

        <div className="flex flex-col  relative mt-4 space-y-2">
          <label htmlFor="email" className="text-left font-bold font-visby ">
            E-Mailadresse *
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
            <MyTips text="Email is required" />
          )}
          {errors.email?.type === "pattern" && (
            <MyTips text="Verify your email" />
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
        <button
          type="submit"
          className="mt-4 bg-yellow-1 outline-none lg:px-12 lg:text-base md:px-8 font-visby font-bold py-3 rounded-md hover:cursor-pointer text-white transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#977e6d] md:text-sm md:w-auto w-full">
          Angebote erhalten kostenlos & unverbindlich
        </button>

        <p className="mt-4 font-visby">
          Wir können Ihnen Informationen über ähnliche Produkte und Leistungen
          per E-Mail zusenden. Ein Widerspruch ist jederzeit hier möglich.
        </p>
      </form>
    </div>
  );
}
