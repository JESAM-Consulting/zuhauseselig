import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";

export default function Step3() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  const { step, setStep, userData, setUserData } = useContext(AppContext);

  useEffect(() => {
    if (data1 !== null && data2 !== null) {
      setUserData({
        ...userData,
        step3: [data1, data2],
      });
      setStep(step + 1);
    }
  }, [data1, data2]);

  return (
    <div data-show={step == 3 ? true : false} className="flex flex-col step">
      <h1 className="font-visby lg:text-4xl md:text-3xl text-xl font-bold ">
        Sind Sie Eigentümer der Immobilie?
      </h1>

      <div className="flex space-x-10 mt-4 md:mt-10 md:ml-auto lg:pr-10">
        <div
          onClick={() => {
            setData1(true);
          }}
          className={`${
            data1 === true
              ? " text-white bg-yellow-1 "
              : " text-yellow-1 bg-white "
          } border hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-yellow-1 hover:text-white border-yellow-1 rounded-md lg:w-[12rem] lg:py-3.5 md:py-3  text-center w-[8rem] py- md:text-lg font-bold md:w-[10rem] text-sm py-2.5`}>
          Ja
        </div>
        <div
          onClick={() => {
            setData1(false);
          }}
          className={`${
            data1 === false
              ? " text-white bg-yellow-1 "
              : " text-yellow-1 bg-white "
          } border hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-yellow-1 hover:text-white border-yellow-1 rounded-md lg:w-[12rem] lg:py-3.5 md:py-3  text-center w-[8rem] py- md:text-lg font-bold md:w-[10rem] text-sm py-2.5`}>
          Nein
        </div>
      </div>

      <h1 className="font-visby lg:text-4xl md:text-3xl text-xl font-bold lg:mt-16 md:mt-10 mt-6">
        Bewohnen Sie die Immobilie selbst?
      </h1>

      <div className="flex space-x-10 md:mt-10 mt-4 md:ml-auto lg:pr-10">
        <div
          onClick={() => {
            setData2(true);
          }}
          className={`${
            data2 === true
              ? " text-white bg-yellow-1 "
              : " text-yellow-1 bg-white "
          } border hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-yellow-1 hover:text-white border-yellow-1 rounded-md lg:w-[12rem] lg:py-3.5 md:py-3 md:w-[10rem] text-center w-[8rem]  md:text-lg font-bold  text-base py-2.5`}>
          Ja
        </div>
        <div
          onClick={() => {
            setData2(false);
          }}
          className={`${
            data2 === false
              ? " text-white bg-yellow-1 "
              : " text-yellow-1 bg-white "
          } border hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-yellow-1 hover:text-white border-yellow-1 rounded-md lg:w-[12rem] lg:py-3.5 md:py-3 md:w-[10rem] text-center w-[8rem]  md:text-lg font-bold  text-base py-2.5`}>
          Nein
        </div>
      </div>
    </div>
  );
}
