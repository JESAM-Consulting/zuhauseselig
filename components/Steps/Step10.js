import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";

export default function Step10() {
  const { step, setStep } = useContext(AppContext);
  return (
    <div
      data-show={step == 10 ? true : false}
      className="flex flex-col step font-visby">
      <div className="flex lg:items-center lg:space-x-10 lg:flex-row flex-col lg:space-y-0 md:space-y-4">
        <div>
          <h2 className="font-bold lg:text-3xl md:text-2xl text-2xl">
            Vielen Dank für Ihre Anfrage
          </h2>
          <p className="text-[#5D5D5D] text-sm lg:my-4 md:my-2">
            Wir kümmern uns schnellstöglich um Ihr Anliegen. Ein Fachberater in
            Ihrer Nähe wird Ihnen weitere Infomationen und Terminvorschäge auf
            Ihrem bevorzugtem Kontaktweg mitteilen.
          </p>

          <p className="font-bold mb-2 md:mt-0 mt-6">Was passiert nun?</p>
          <p className="font-bold text-lg">
            Zur Photovoltaik-Anlage in wenigen Schritten
          </p>
        </div>
        <div className="relative md:flex hidden flex-col lg:items-center">
          <div className="flex">
            <div className="relative lg:p-16 md:p-12 p-16 bg-[#EEEEEE] rounded-full">
              <img
                src="/images/flower.webp"
                alt=""
                className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 lg:w-10 md:w-6 w-9"
              />
            </div>
          </div>

          <div className="lg:text-center font-visby mt-3">
            <p className="text-lg font-bold my-2">Gut für die Umwelt</p>
            <p className="text-base">
              30% weniger CO₂ heißt, soviel wie 2 PKWs pro Jahr gespart!
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-nowrap md:flex-wrap md:flex-row flex-col lg:items-start md:items-start relative lg:justify-between md:justify-start lg:mt-16 md:mt-8 mt-6 md:space-y-0 space-y-4">
        <div className="flex flex-col items-center relative z-10 bg-white lg:m-0 md:m-2">
          <img src="/images/chat.svg" alt="" className="w-20" />
          <p className="max-w-[6.5rem] text-center mt-2 font-bold text-base">
            Persönliche Beratung
          </p>
        </div>
        <div
          className="bg-black p-[1px] absolute w-[100%] top-[2.5rem] lg:block md:hidden"
          style={{ zIndex: "-1" }}></div>

        <div className="flex justify-center md:hidden">
          <img src="/images/linevert.svg" alt="" />
        </div>
        <div className="flex flex-col items-center relative z-10 bg-white lg:m-0 md:m-2">
          <img src="/images/note.svg" alt="" className="w-20" />
          <p className="max-w-[6.5rem] text-center mt-2 font-bold text-base">
            Individuelles Angebot
          </p>
        </div>
        <div
          className="bg-black p-[1px] absolute w-[100%] top-[2.5rem] lg:block md:hidden"
          style={{ zIndex: "-1" }}></div>
        <div className="flex justify-center md:hidden">
          <img src="/images/linevert.svg" alt="" />
        </div>
        <div className="flex flex-col items-center relative z-10 bg-white lg:m-0 md:m-2">
          <img src="/images/checknote.svg" alt="" className="w-20" />
          <p className="max-w-[6.5rem] text-center mt-2 font-bold text-base">
            Organisation
          </p>
        </div>
        <div
          className="bg-black p-[1px] absolute w-[100%] top-[2.5rem] lg:block md:hidden"
          style={{ zIndex: "-1" }}></div>
        <div className="flex justify-center md:hidden">
          <img src="/images/linevert.svg" alt="" />
        </div>
        <div className="flex flex-col items-center relative z-10 bg-white lg:m-0 md:m-2">
          <img src="/images/key.svg" alt="" className="w-20" />
          <p className="max-w-[6.5rem] text-center mt-2 font-bold text-base">
            Installation
          </p>
        </div>
        <div
          className="bg-black p-[1px] absolute w-[100%] top-[2.5rem] lg:block md:hidden"
          style={{ zIndex: "-1" }}></div>
        <div className="flex justify-center md:hidden">
          <img src="/images/linevert.svg" alt="" />
        </div>
        <div className="flex flex-col items-center relative z-10 bg-white lg:m-0 md:m-2 ">
          <img src="/images/reload.svg" alt="" className="w-20" />
          <p className="max-w-[6.5rem] font-bold text-center mt-2 text-base">
            Betriebsphase und Services
          </p>
        </div>
      </div>

      <div className="relative md:hidden flex flex-col items-center mt-8">
        <div className="flex">
          <div className="relative lg:p-16 md:p-12 p-12 bg-[#EEEEEE] rounded-full">
            <img
              src="/images/flower.webp"
              alt=""
              className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 lg:w-10 md:w-6 w-7"
            />
          </div>
        </div>

        <div className="text-center font-visby mt-3 md:mb-0 mb-4">
          <p className="text-lg font-bold my-2">Gut für die Umwelt</p>
          <p className="text-base max-w-[13rem] mx-auto">
            30% weniger CO₂ heißt, soviel wie 2 PKWs pro Jahr gespart!
          </p>
        </div>
      </div>
    </div>
  );
}
