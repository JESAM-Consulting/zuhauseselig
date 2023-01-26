import React, { useState, useContext } from "react";
import AppContext from "../../Context/AppContext";

export default function Step6() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const { step, setStep, userData, setUserData } = useContext(AppContext);
  const handleChange = (e) => {
    // setData(e.target.value);
    const limit = 5;
    setData(e.target.value.slice(0, limit));
  };
  return (
    <div data-show={step == 6 ? true : false} className="flex flex-col step">
      <h1 className="font-visby lg:text-3xl md:text-2xl text-xl font-bold ">
        Wo soll die Photovoltaik installiert werden?
      </h1>

      <div className="md:mt-1 mt-5 flex md:flex-row flex-col-reverse items-center lg:space-x-16 lg:flex-row  lg:space-y-0 space-y-3">
        <div>
          <img
            src="/images/bitte.webp"
            alt=""
            className="lg:w-[17rem] md:w-48 w-60"
          />
        </div>
        <div className="lg:mt-4 space-y-4 text-xs md:hidden block">
          <div className="flex items-start space-x-2">
            <div className="opacity-25">
              <img
                src="/images/exclam.svg"
                alt=""
                className="w-4 translate-y-[1.5px]"
              />
            </div>
            <div className="text-xs max-w-xs">
              Globaleinstrahlung in der Bundesrepublik Deutschland Jahressumme
              in kWh/m2
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div>
                <div className="w-6 h-3 bg-[#9DD601]"></div>
              </div>
              <div>980 - 1000</div>
            </div>
            <div className="flex items-center space-x-3">
              <div>
                <div className="w-6 h-3 bg-[#C29707]"></div>
              </div>
              <div>1181 - 1200</div>
            </div>
            <div className="flex items-center space-x-3">
              <div>
                <div className="w-6 h-3 bg-[#D62916]"></div>
              </div>
              <div>1361 - 1380</div>
            </div>
          </div>
        </div>

        <div className="font-roboto md:w-auto w-full">
          <div className="flex flex-col space-y-3">
            <label htmlFor="postle">
              Bitte geben Sie Ihre gültige Postleitzahl ein.
            </label>
            <input
              type="number"
              name="postle"
              maxLength={5}
              placeholder="Postleitzahl"
              id="postle"
              className={`${
                err ? " border-red-700 " : " border-[#1D1D1B] "
              }border rounded-sm  placeholder-[#1D1D1B] outline-none px-4 py-3 md:w-auto`}
              value={data ? data : ""}
              onKeyDown={(evt) => {
                (evt.key === "." || evt.key === "e") && evt.preventDefault();
              }}
              onChange={(e) => {
                setErr(false);
                handleChange(e);
              }}
            />
          </div>

          <div className="flex lg:mt-4 md:mt-4 mt-4 md:mb-0 mb-5">
            <div
              onClick={() => {
                if (
                  !data ||
                  data?.length != 5 ||
                  data == "00000" ||
                  data == "11111" ||
                  data == "99999"
                ) {
                  setErr(true);
                } else {
                  setUserData({
                    ...userData,
                    step6: data,
                  });

                  setStep(step + 1);
                }
              }}
              className="text-white bg-green-1 font-roboto rounded-md py-2.5 w-44 text-center font-semibold hover:cursor-pointer transition-all ease-in-out duration-150">
              Weiter
            </div>
          </div>

          <div className="lg:mt-4 space-y-4 text-xs md:block hidden lg:-translate-x-[4rem]">
            <div className="flex items-start space-x-2">
              <div className="opacity-25">
                <img src="/images/exclam.svg" alt="" className="w-4" />
              </div>
              <div className="text-xs max-w-xs">
                Globaleinstrahlung in der Bundesrepublik Deutschland Jahressumme
                in kWh/m²
              </div>

              
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="w-6 h-3 bg-[#9DD601]"></div>
                </div>
                <div>980 - 1000</div>
              </div>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="w-6 h-3 bg-[#C29707]"></div>
                </div>
                <div>1181 - 1200</div>
              </div>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="w-6 h-3 bg-[#D62916]"></div>
                </div>
                <div>1361 - 1380</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
