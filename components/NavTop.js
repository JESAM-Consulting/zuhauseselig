import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import { useRouter } from "next/router";

export default function NavTop() {
  const { step, setStep } = useContext(AppContext);

  const router = useRouter();
  const [progress, setProgress] = useState("w-0");
  useEffect(() => {
    if (step < 7) {
      setProgress("w-[33%]");
    } else if (step == 8) {
      setProgress("w-[66%]");
    } else {
      setProgress("w-[100%]");
    }
  }, [step]);

  return (
    <div>
      <div className="flex lg:px-10 md:px-6 px-6 bg-white items-center md:min-h-[8vh]">
        <div
          className={`hover:cursor-pointer lg:ml-10  py-3`}
          onClick={() => {
            router.push("/");
          }}>
          <img src="/images/logo.webp" alt="" className="md:w-60 w-52" />
        </div>
        <div className="md:flex items-center w-full justify-evenly hidden">
          <div className="flex items-center lg:space-x-4 md:space-x-3">
            <div
              data-active={step <= 10 ? true : false}
              className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
              <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                1
              </div>
            </div>
            <span className="font-roboto font-bold ">Bedarf</span>
          </div>
          <div className="flex items-center lg:space-x-4 md:space-x-3">
            <div
              data-active={step >= 9 ? true : false}
              className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
              <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                2
              </div>
            </div>
            <span className="font-roboto font-bold ">Anfrage</span>
          </div>
          <div className="flex items-center lg:space-x-4 md:space-x-3">
            <div
              data-active={step == 10 ? true : false}
              className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
              <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                3
              </div>
            </div>
            <span className="font-roboto font-bold "> Prüfung</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.35rem] bg-gradient-to-b from-[#c4c4c4] to-[#E5E5E5]">
        <div
          className={`bg-green-1 h-[0.35rem] ${progress} md:block hidden`}></div>
      </div>
    </div>
  );
}
