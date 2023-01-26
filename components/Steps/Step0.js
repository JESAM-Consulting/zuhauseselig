import React, { useContext, useState } from "react";
import AppContext from "../../Context/AppContext";
import Link from "next/link";

export default function Step0({ openlg, setOpenlg, openM, setOpenM }) {
  const { step, setStep } = useContext(AppContext);

  return (
    <div
      data-show={step == 0 ? true : false}
      className="flex flex-col step lg:pb-0 pb-10 lg:min-h-[60vh] md:justify-center justify-center place-items-center w-full">
      <div className={`md:block hidden text-center font-bold mb-5`}>
        <p>
          Sie sparen <span className="text-[#F1C88B]">49.715</span> €
        </p>
        <p>im Schnitt in der Betriebszeit*</p>
      </div>

      <h1 className="font-visby lg:text-3xl md:text-2xl text-xl font-bold lg:max-w-xl md:text-center text-center">
        Erhalten Sie in nur 3 Schritten Ihr individuelles Angebot!
      </h1>
      <div className="md:my-6 my-4">
        <div className="flex md:justify-start justify-center">
          <div
            onClick={() => {
              setStep(step + 1);
            }}
            className="bg-green-1 px-5 py-3 rounded-md hover:cursor-pointer text-[#F1C88B] transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#706f69] font-bold lg:text-base text-sm">
            GRATIS ANFRAGE STARTEN
          </div>
        </div>
      </div>

      <div className="hidden items-center space-x-8 md:flex">
        <div className="flex items-center space-x-4">
          <div className=" rounded-full p-[1rem] bg-green-1  relative box-border border-green-1 border transition-all ease-in-out duration-500">
            <div className="text-white absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
              1
            </div>
          </div>
          <span className="font-roboto font-bold ">Bedarf</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
            <div className=" absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
              2
            </div>
          </div>
          <span className="font-roboto font-bold ">Anfrage</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
            <div className=" absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
              3
            </div>
          </div>
          <span className="font-roboto font-bold"> Prüfung</span>
        </div>
      </div>

      <div className="md:hidden block text-center my-2 font-bold text-base">
        <p>
          Sie sparen <span className="text-[#F1C88B]">49.715</span> €
        </p>
        <p>im Schnitt in der Betriebszeit*</p>
      </div>

      <div
        onClick={() => {
          setOpenlg(!openlg);
        }}
        className="bg-[#E4E3E3] text-sm hover:cursor-pointer rounded-md py-5 px-7 mt-10 lg:grid hidden place-items-center font-bold">
        <svg
          width="25"
          height="25"
          className={`mx-auto block`}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.00033 0.666016C7.35215 0.666016 5.74099 1.15476 4.37058 2.07044C3.00017 2.98611 1.93206 4.2876 1.30133 5.81032C0.670603 7.33304 0.505575 9.00859 0.827119 10.6251C1.14866 12.2416 1.94234 13.7265 3.10777 14.8919C4.27321 16.0573 5.75807 16.851 7.37458 17.1726C8.99109 17.4941 10.6666 17.3291 12.1894 16.6983C13.7121 16.0676 15.0136 14.9995 15.9292 13.6291C16.8449 12.2587 17.3337 10.6475 17.3337 8.99935C17.3337 7.905 17.1181 6.82137 16.6993 5.81032C16.2805 4.79927 15.6667 3.88061 14.8929 3.10679C14.1191 2.33297 13.2004 1.71914 12.1894 1.30035C11.1783 0.881564 10.0947 0.666016 9.00033 0.666016ZM9.83366 12.3327C9.83366 12.5537 9.74586 12.7657 9.58958 12.9219C9.4333 13.0782 9.22134 13.166 9.00033 13.166C8.77931 13.166 8.56735 13.0782 8.41107 12.9219C8.25479 12.7657 8.167 12.5537 8.167 12.3327V8.16602C8.167 7.945 8.25479 7.73304 8.41107 7.57676C8.56735 7.42048 8.77931 7.33268 9.00033 7.33268C9.22134 7.33268 9.4333 7.42048 9.58958 7.57676C9.74586 7.73304 9.83366 7.945 9.83366 8.16602V12.3327ZM9.00033 6.49935C8.83551 6.49935 8.67439 6.45048 8.53735 6.35891C8.40031 6.26734 8.2935 6.13719 8.23043 5.98492C8.16736 5.83265 8.15085 5.66509 8.18301 5.50344C8.21516 5.34179 8.29453 5.1933 8.41107 5.07676C8.52762 4.96022 8.6761 4.88085 8.83775 4.84869C8.9994 4.81654 9.16696 4.83304 9.31923 4.89612C9.4715 4.95919 9.60165 5.066 9.69322 5.20304C9.78479 5.34008 9.83366 5.5012 9.83366 5.66602C9.83366 5.88703 9.74586 6.09899 9.58958 6.25527C9.4333 6.41155 9.22134 6.49935 9.00033 6.49935Z"
            fill="#F1C88B"
          />
        </svg>
        <p className="mt-2">Beispielrechnung für eine </p>
        <p>durchschnittliche Solaranlage</p>
      </div>

      <div
        onClick={() => {
          setOpenM(!openM);
        }}
        className="lg:hidden block mt-8 bg-[#EEEBEB] p-5 rounded-md md:w-[25rem] w-full">
        <h1 className="mb-4 font-bold  text-center">
          Beispielrechnung für eine durchschnittliche Solaranlage
        </h1>

        <div className="">
          <svg
            width="25"
            height="25"
            className={`mx-auto ${openM ? "hidden" : "block"}`}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.00033 0.666016C7.35215 0.666016 5.74099 1.15476 4.37058 2.07044C3.00017 2.98611 1.93206 4.2876 1.30133 5.81032C0.670603 7.33304 0.505575 9.00859 0.827119 10.6251C1.14866 12.2416 1.94234 13.7265 3.10777 14.8919C4.27321 16.0573 5.75807 16.851 7.37458 17.1726C8.99109 17.4941 10.6666 17.3291 12.1894 16.6983C13.7121 16.0676 15.0136 14.9995 15.9292 13.6291C16.8449 12.2587 17.3337 10.6475 17.3337 8.99935C17.3337 7.905 17.1181 6.82137 16.6993 5.81032C16.2805 4.79927 15.6667 3.88061 14.8929 3.10679C14.1191 2.33297 13.2004 1.71914 12.1894 1.30035C11.1783 0.881564 10.0947 0.666016 9.00033 0.666016ZM9.83366 12.3327C9.83366 12.5537 9.74586 12.7657 9.58958 12.9219C9.4333 13.0782 9.22134 13.166 9.00033 13.166C8.77931 13.166 8.56735 13.0782 8.41107 12.9219C8.25479 12.7657 8.167 12.5537 8.167 12.3327V8.16602C8.167 7.945 8.25479 7.73304 8.41107 7.57676C8.56735 7.42048 8.77931 7.33268 9.00033 7.33268C9.22134 7.33268 9.4333 7.42048 9.58958 7.57676C9.74586 7.73304 9.83366 7.945 9.83366 8.16602V12.3327ZM9.00033 6.49935C8.83551 6.49935 8.67439 6.45048 8.53735 6.35891C8.40031 6.26734 8.2935 6.13719 8.23043 5.98492C8.16736 5.83265 8.15085 5.66509 8.18301 5.50344C8.21516 5.34179 8.29453 5.1933 8.41107 5.07676C8.52762 4.96022 8.6761 4.88085 8.83775 4.84869C8.9994 4.81654 9.16696 4.83304 9.31923 4.89612C9.4715 4.95919 9.60165 5.066 9.69322 5.20304C9.78479 5.34008 9.83366 5.5012 9.83366 5.66602C9.83366 5.88703 9.74586 6.09899 9.58958 6.25527C9.4333 6.41155 9.22134 6.49935 9.00033 6.49935Z"
              fill="#F1C88B"
            />
          </svg>
        </div>
        <div
          className={`${
            openM ? " flex h-[33.5rem] opacity-100" : " h-0 opacity-0"
          } flex-col md:space-x-5 md:space-y-0 space-y-5 md:items-center overflow-hidden transition-all ease-linear duration-500`}>
          <div>
            <img
              src="/images/graph.png"
              alt=""
              className="lg:w-[17vw] md:w-[18rem] w-[20rem] mx-auto"
            />
          </div>
          <div className="text-sm mt-10">
            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>Spitzenleistung:</span>
              <span className="font-bold">10 kWp</span>
            </div>
            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>Jährlicher Stromertrag pro kWh/kWp:</span>
              <span className="font-bold">990</span>
            </div>
            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>Anschaffungskosten (ohne MwSt):</span>
              <span className="font-bold">37.000 EUR</span>
            </div>
            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>Davon anteilige Kosten für Speicher :</span>
              <span className="font-bold">12.000 EUR</span>
            </div>
            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>Anschaffung/Inbetriebnahme:</span>
              <span className="font-bold">Mai 2020</span>
            </div>
            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>Betriebszeitraum:</span>
              <span className="font-bold">20 Jahre</span>
            </div>

            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>Ø Stromkosten eines Drittanbieters:</span>
              <span className="font-bold">0,42 €/kWh</span>
            </div>
            <div className="flex justify-between lg:space-x-20 md:space-x-14 lg:mt-2">
              <span>
                Ersparnis Stromkosten: <strong>81.270 €</strong>
              </span>
              <span className="font-bold"></span>
            </div>
            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>
                Einspeisevergütung: <strong>5.445 € (20 Jahre)</strong>
              </span>
              <span className="font-bold"></span>
            </div>
            <div className="flex justify-between lg:space-x-20 md:space-x-14">
              <span>
                Ersparnis gesamt: <strong>49.715 € über 20 Jahre</strong>
              </span>
              <span className="font-bold"></span>
            </div>
            <div className="text-xs font-thin text-end w-full mt-4">
              <p>Quelle </p>
              <Link href="https://www.test.de/Photovoltaik-Rechner-1391893-0/">
                <a>https://www.test.de/Photovoltaik-Rechner-1391893-0/</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
