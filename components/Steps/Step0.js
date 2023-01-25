import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";

export default function Step0() {
  const { step, setStep } = useContext(AppContext);

  return (
    <div data-show={step == 0 ? true : false} className="flex flex-col step">
      <h1 className="font-visby lg:text-4xl md:text-3xl text-xl font-bold lg:max-w-xl">
        Erhalten Sie in nur 3 Schritten Ihr individuelles Angebot!
      </h1>
      <div className="md:my-8 my-4">
        <div className="flex">
          <div
            onClick={() => {
              setStep(step + 1);
            }}
            className="bg-yellow-1 px-5 py-3 rounded-md hover:cursor-pointer text-white transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#76756d] font-bold lg:text-base text-sm">
            GRATIS ANFRAGE STARTEN
          </div>
        </div>
      </div>

      <div className="hidden items-center space-x-8 md:flex">
        <div className="flex items-center space-x-4">
          <div className=" rounded-full p-[1rem] bg-yellow-1  relative box-border border-yellow-1 border transition-all ease-in-out duration-500">
            <div className="text-white absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
              1
            </div>
          </div>
          <span className="font-roboto font-bold ">Bedarf</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" rounded-full p-[1rem] bg-white  relative box-border border-yellow-1 border transition-all ease-in-out duration-500">
            <div className=" absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
              2
            </div>
          </div>
          <span className="font-roboto font-bold ">Anfrage</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" rounded-full p-[1rem] bg-white  relative box-border border-yellow-1 border transition-all ease-in-out duration-500">
            <div className=" absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
              3
            </div>
          </div>
          <span className="font-roboto font-bold"> Prüfung</span>
        </div>
      </div>
    </div>
  );
}
