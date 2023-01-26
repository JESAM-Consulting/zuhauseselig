import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";

export default function Step1() {
  const { step, setStep, userData, setUserData } = useContext(AppContext);

  return (
    <div data-show={step == 1 ? true : false} className="flex flex-col step">
      <h1 className="font-visby lg:text-3xl md:text-2xl text-xl font-bold ">
        Sind Sie Eigentümer der Immobilie?
      </h1>

      <div className="md:mt-8 mt-4 flex lg:items-center lg:space-x-8 lg:flex-row flex-col lg:space-y-0 space-y-4">
        <div className="flex md:items-center space-x-5 justify-center">
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step1: "Ja",
              });
              setStep(step + 1);
            }}
            className="font-bold font-roboto md:w-[8rem] w-[8rem] text-center py-2  md:py-3 border-green-1 border rounded-md hover:bg-green-1 hover:text-white hover:cursor-pointer transition-all ease-in-out duration-150 bg-opacity-90 hover:shadow-md text-green-1 bg-white">
            Ja
          </div>

          <div
            onClick={() => {
              setUserData({
                ...userData,
                step1: "Nein",
              });
              setStep(step + 1);
            }}
            className="font-bold font-roboto md:w-[8rem] w-[8rem] text-center py-2  md:py-3 border-green-1 border rounded-md hover:bg-green-1 hover:text-white hover:cursor-pointer transition-all ease-in-out duration-150 bg-opacity-90 hover:shadow-md  text-green-1 bg-white">
            Nein
          </div>
        </div>
      </div>
    </div>
  );
}
