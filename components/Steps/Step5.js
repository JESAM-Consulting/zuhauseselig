import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";

export default function Step5() {
  const { step, setStep, userData, setUserData } = useContext(AppContext);

  return (
    <div
      data-show={step == 5 ? true : false}
      className="flex flex-col step md:justify-start justify-center md:items-start items-center">
      <h1 className="font-visby lg:text-3xl md:text-2xl text-xl font-bold">
        Wie heizen Sie Ihr Gebäude?
      </h1>
      <div className="mt-8">
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-x-5 gap-x-1">
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step5: "Elektrische",
              });

              setStep(step + 1);
            }}
            className="flex flex-col m-2 items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="153"
              height="109"
              viewBox="0 0 153 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-green-1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M79.25 70H98.75V48L76.75 29.5L54.25 48V70H73.75M47.25 48.5L44.75 46L76.75 19L108.25 46L104.75 48.5L76.75 24.5L47.25 48.5Z"
                stroke="#B29A89"
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <mask id="path-3-inside-1_353_78" fill="white">
                <rect x="65.25" y="52" width="23" height="4" rx="1" />
              </mask>
              <rect
                x="65.25"
                y="52"
                width="23"
                height="4"
                rx="1"
                stroke="#B29A89"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
                strokeWidth="3"
                strokeLinejoin="round"
                mask="url(#path-3-inside-1_353_78)"
              />
              <path
                d="M70 46.5C70 45.5335 70.7835 44.75 71.75 44.75C72.7165 44.75 73.5 45.5335 73.5 46.5V52.25H70V46.5Z"
                stroke="#B29A89"
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M78.5 76C78.5 77.2426 77.4926 78.25 76.25 78.25C75.0074 78.25 74 77.2426 74 76L74 66.75L78.5 66.75L78.5 76Z"
                stroke="#B29A89"
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M79 46.5C79 45.5335 79.7835 44.75 80.75 44.75C81.7165 44.75 82.5 45.5335 82.5 46.5V52.25H79V46.5Z"
                stroke="#B29A89"
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M68 55.75H85.5V62C85.5 64.3472 83.5972 66.25 81.25 66.25H72.25C69.9028 66.25 68 64.3472 68 62V55.75Z"
                stroke="#B29A89"
                strokeWidth="1.5"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <rect x="0.5" y="0.5" width="152" height="108" stroke="#B29A89" />
            </svg>

            <span className="font-visby md:text-base text-sm text-green-1 mt-2">
              Elektrische Heizung
            </span>
          </div>
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step5: "Wärmepumpe",
              });

              setStep(step + 1);
            }}
            className="flex m-2 flex-col items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="154"
              height="109"
              viewBox="0 0 154 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-green-1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M70.5 62.5V65.5H66.5V58.5H89V69H93L87.5 74.5L81.5 69H85.5V62.5H70.5Z"
                stroke="#B29A89"
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M85.5 77.5H89.5V84.5H66.5V74H62.5L68 68L74 74H70V80.5H85.5V77.5Z"
                stroke="#B29A89"
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M93 75.5H99.5V53.5L77.5 35L55 53.5V75.5H60.5M48 54L45.5 51.5L77.5 24.5L109 51.5L105.5 54L77.5 30L48 54Z"
                stroke="#B29A89"
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <rect
                x="1.25"
                y="0.5"
                width="152"
                height="108"
                stroke="#B29A89"
              />
            </svg>

            <span className="font-visby md:text-base text-sm text-green-1 mt-2">
              Wärmepumpe
            </span>
          </div>
          <div
            onClick={() => {
              setUserData({
                ...userData,
                step5: "Öl,Gas",
              });

              setStep(step + 1);
            }}
            className="flex m-2 flex-col items-center group hover:cursor-pointer transition-all ease-in-out duration-150">
            <svg
              width="153"
              height="109"
              viewBox="0 0 153 109"
              fill="none"
              className="bg-white hover transition-all ease-in-out duration-150 group-hover:bg-green-1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M76.5 82.4163C62.6254 82.4163 51.375 75.2083 51.375 62.8747V62.629C51.375 56.7163 55.1103 51.9872 60.7969 48.9163C66.2378 45.9795 69.4538 40.5693 68.6498 34.958L67.0781 26.583L72.9015 28.8024C83.3898 32.7945 92.125 39.7234 97.7865 48.5283C100.276 52.3531 101.608 56.8149 101.625 61.3783V62.8747C101.625 67.2353 100.218 70.9565 97.7865 73.9436"
                stroke="#B29A89"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <path
                d="M76.5 82.4163C71.8742 82.4163 68.125 78.4159 68.125 73.483C68.125 69.5747 70.9613 66.4452 73.4571 63.5782L76.5 60.083L79.5429 63.5782C82.0387 66.448 84.875 69.5747 84.875 73.483C84.875 78.4159 81.1258 82.4163 76.5 82.4163Z"
                stroke="#B29A89"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-green-1 group-hover:stroke-white transition-all ease-in-out duration-150"
              />
              <rect x="0.5" y="0.5" width="152" height="108" stroke="#B29A89" />
            </svg>

            <span className="font-visby md:text-base text-sm text-green-1 mt-2 max-w-[7rem] mx-auto">
              Öl, Gas, Holz, Fernwärme
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
