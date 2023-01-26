import React, { useState, useContext } from "react";
import AppContext from "../../Context/AppContext";

export default function Step2() {
  const [data, setData] = useState(null);
  const [person, setPerson] = useState(null);
  const { step, setStep, userData, setUserData } = useContext(AppContext);
  const [label, setLabel] = useState("weiß ich nicht");
  const [err, setErr] = useState(false);
  const [errP, setErrP] = useState(false);
  const rangeConsum = [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

  return (
    <div data-show={step == 2 ? true : false} className="flex flex-col step">
      <h1 className="font-visby lg:text-3xl md:text-2xl text-xl font-bold ">
        Wie hoch ist Ihr jährlicher Stromverbrauch?
      </h1>

      <div className="md:mt-8 mt-4 flex lg:items-center lg:space-x-8 lg:flex-row flex-col lg:space-y-0 space-y-4">
        <div className="flex md:items-center md:space-x-5 md:flex-row flex-col md:space-y-0 space-y-4">
          <div className="font-visby">
            <div className="relative flex items-center">
              <input
                type="number"
                name=""
                value={data ? data : ""}
                onChange={(e) => {
                  setErr(false);
                  setErrP(false);
                  setData(e.target.value);
                }}
                placeholder="kWh/Jahr"
                className={`border ${
                  err ? " border-red-700 " : " border-[#D9D9D9] "
                } p-3 rounded-md outline-none w-80 width-full-mobile-devices placeholder-[#A1A1A1]`}
              />
              <span
                className={`text-[#A1A1A1] absolute right-4 ${
                  data ? " block " : " hidden "
                }`}>
                kWh/Jahr
              </span>
            </div>
          </div>

          <span className="text-[#A1A1A1] text-center">oder</span>

          <div>
            <input
              type="number"
              name=""
              value={person ? person : ""}
              onChange={(e) => {
                setErr(false);
                setErrP(false);
                setPerson(e.target.value);
              }}
              placeholder="Personen im Haushalt"
              className={`border ${
                errP ? " border-red-700 " : " border-[#D9D9D9] "
              } p-3 rounded-md outline-none w-80 width-full-mobile-devices placeholder-[#A1A1A1]`}
            />
          </div>
        </div>
      </div>

      <div className="flex lg:mt-4 md:mt-4 mt-4 md:mb-0 mb-5">
        <div
          onClick={() => {
            if (data && !person) {
              setUserData({
                ...userData,
                step2: { consumo: data, personas: "Ich weiß nicht" },
              });

              setStep(step + 1);
            } else if (!data && person && person < 9) {
              setUserData({
                ...userData,
                step2: {
                  consumo: rangeConsum[person - 1],
                  personas: person,
                },
              });
              setStep(step + 1);
            } else if (data && person) {
              setUserData({
                ...userData,
                step2: { consumo: data, personas: person },
              });
              setStep(step + 1);
            }
            if (!person && !data) {
              setErrP(true);
              setErr(true);
            }
          }}
          className="text-white bg-green-1 font-roboto rounded-md py-2.5 w-44 text-center font-semibold hover:cursor-pointer transition-all ease-in-out duration-150">
          Weiter
        </div>
      </div>
    </div>
  );
}
