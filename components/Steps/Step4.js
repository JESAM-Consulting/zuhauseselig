import React, { useState, useContext } from "react";
import AppContext from "../../Context/AppContext";

export default function Step4() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const { step, setStep, userData, setUserData } = useContext(AppContext);

  const handleChange = (e) => {
    setData(e.target.value.slice(0, 5));
  };

  return (
    <div data-show={step == 4 ? true : false} className="flex flex-col step">
      <h1 className="font-visby lg:text-4xl md:text-3xl font-bold md:block hidden">
        Wo soll die Photovoltaik installiert werden?
      </h1>

      <div className="md:mt-8 flex items-center lg:space-x-16 lg:flex-row flex-col lg:space-y-0 space-y-3">
        <div>
          <img
            src="/images/bitte.webp"
            alt=""
            className="lg:w-48 md:w-48 w-44"
          />
        </div>
        <h1 className="font-visby text-xl font-bold md:hidden block my-10">
          Wo soll die Photovoltaik installiert werden?
        </h1>
        <div className="font-roboto md:w-auto w-full">
          <div className="flex flex-col space-y-3">
            <label htmlFor="postle">
              Bitte geben Sie eine gültige Postleitzahl ein.
            </label>
            <input
              type="number"
              name="postle"
              placeholder="Postleitzahl"
              id="postle"
              onKeyDown={(evt) => {
                (evt.key === "." || evt.key === "e") && evt.preventDefault();
              }}
              className={`${
                err ? " border-red-700 " : " border-[#1D1D1B] "
              }border rounded-sm  placeholder-[#1D1D1B] outline-none px-4 py-3 md:w-auto`}
              value={data ? data : ""}
              onChange={(e) => {
                setErr(false);
                handleChange(e);
              }}
            />
          </div>

          <div className="flex lg:mt-8 md:mt-4 mt-4">
            <div
              onClick={() => {
                if (
                  !data ||
                  data.length != 5 ||
                  data == "00000" ||
                  data == "11111" ||
                  data == "99999"
                ) {
                  setErr(true);
                } else {
                  setUserData({
                    ...userData,
                    step4: data,
                  });

                  setStep(step + 1);
                }
              }}
              className="text-white bg-yellow-1 font-roboto rounded-md py-2.5 w-44 text-center font-semibold hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#76756d]">
              Weiter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
