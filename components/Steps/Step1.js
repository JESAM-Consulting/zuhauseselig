import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";

export default function Step1() {
  const [data, setData] = useState(null);
  const { step, setStep, userData, setUserData } = useContext(AppContext);
  const [label, setLabel] = useState("weiß ich nicht");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (data) {
      setLabel("weiter");
    } else {
      setLabel("weiß ich nicht");
    }
  }, [data]);

  return (
    <div data-show={step == 1 ? true : false} className="flex flex-col step">
      <h1 className="font-visby lg:text-4xl md:text-3xl text-xl font-bold ">
        Wie hoch ist Ihr Stromverbrauch?
      </h1>

      <div className="md:mt-10 mt-4 flex lg:items-center lg:space-x-8 lg:flex-row flex-col lg:space-y-0 space-y-4">
        <div className="relative flex items-center font-visby">
          <input
            type="number"
            name=""
            value={data ? data : ""}
            onChange={(e) => {
              setErr(false);
              setData(e.target.value);
            }}
            placeholder="kWh/Jahr"
            className={`border ${
              err ? " border-red-700 " : " border-[#D9D9D9] "
            } p-3 rounded-md outline-none w-80 placeholder-[#A1A1A1]`}
          />
          <span
            className={`text-[#A1A1A1] absolute right-3 ${
              data ? " block " : " hidden "
            }`}>
            kWh/Jahr
          </span>
        </div>

        <div
          onClick={() => {
            if (data) {
              setUserData({
                ...userData,
                step1: data,
              });
            } else {
              setUserData({
                ...userData,
                step1: "weiß ich nicht",
              });
            }
            setStep(step + 1);
          }}
          className="text-white bg-yellow-1 font-roboto rounded-md py-2.5 w-44 text-center font-semibold hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#76756d]">
          {label}
        </div>
      </div>
    </div>
  );
}
