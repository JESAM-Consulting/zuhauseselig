import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../Context/AppContext";

export default function Step8() {
  const {
    step,
    setStep,
    userData,
    setUserData,
    calculatedDataAll,
    setCalculatedDataAll,
  } = useContext(AppContext);

  const values = {
    sauna: 1500,
    pool: 1500,
    numBike: 150,
    ma: 100,
    sau: 100,
    fa: 1000,
    kli: 900,
    home: 500,
  };
  const [data, setData] = useState(4000);
  const myRound = (n) => {
    let aux = n.toString();

    aux = aux.split(".");

    console.log(aux);
    let result = aux[0];
    let aux2 = [];

    for (let i = 0; i < aux[1]?.length; i++) {
      aux2[i] = parseInt(aux[1][i]);
    }

    for (let i = aux2?.length - 1; i >= 1; i--) {
      let digit = aux2[i];
      if (digit > 5) {
        aux2[i - 1] += 1;
      }
    }

    return (result += "." + aux2[0]);
  };
  const getNumber = (n) => {
    if (n[0] == "2" || n[0] == "1") {
      return 980;
    } else if (n[0] == "6" || n[0] == "7" || n[0] == "8" || n[0] == "9") {
      return 1361;
    } else {
      return 1181;
    }
  };

  let calculatedData = [];
  // {step === 8 &&
  // }
  useEffect(() => {
    // {step === 8 &&
    setCalculatedDataAll(calculatedData);
    // }
  }, [step]);

  {
    userData?.step6 &&
      calculatedData.push(
        "Ihr produzierter Solarstrom im Jahr",
        Math.round(
          ((data * 1.3) / 1000 / 0.38) *
            0.4 *
            (userData.step6 ? getNumber(userData.step6) : 0)
        )
      );
  }
  {
    calculatedData.push(
      "Zukünftiger jährlicher Stromverbrauch",
      Math.round(data)
    );
  }
  {
    calculatedData.push(
      "optimale Modulanzahl",
      Math.round((data * 1.3) / 1000 / 0.38)
    );
  }
  {
    calculatedData.push(
      "Dachfläche für empfohlene Autarkie ca in m²",
      Math.round((data * 1.3) / 1000 / 0.38) * 2
    );
  }
  {
    calculatedData.push(
      "Speicher",
      userData.step7?.spei ? "true" : "false",

      "E-Mobility",
      userData.step7?.mobility ? "true" : "false",
      userData?.step7?.distance
        ? `(${(userData.step7?.distance * 20) / 100} kWh)`
        : "",
      "Sauna",
      userData.step7?.sauna ? "true" : "false",
      userData.step7?.sauna ? `(${values["sauna"]} kWh)` : "",
      "Pool",
      userData.step7?.pool ? "true" : "false",
      userData.step7?.pool ? `(${values["pool"]} kWh)` : "",
      "Mähroboter",
      userData.step7?.ma ? "true" : "false",
      userData.step7?.ma ? `(${values["ma"]} kWh)` : "",
      "Familienzuwachs",
      userData.step7?.fa ? userData.step7?.fa : "false",
      userData.step7?.fa
        ? `(${values["fa"] * (userData.step7.fa * 1)} kWh)`
        : "",
      "Saugroboter",
      userData.step7?.sau ? "true" : "false",
      userData.step7?.sau ? `(${values["sau"] * userData.step7.sau} kWh)` : "",
      "E-Bike",
      userData.step7?.bike ? userData.step7?.bike : "false",
      userData.step7?.bike
        ? `(${values["numBike"] * (userData.step7?.bike * 1)} kWh)`
        : "",
      "Klimaanlage",
      userData.step7?.kli ? "true" : "false",
      userData.step7?.kli ? `(${values["kli"]} kWh)` : "",
      "Homeoffice",
      userData.step7?.home ? "true" : "false",
      userData.step7?.home ? `(${values["home"]} kWh)` : ""
    );
  }

  useEffect(() => {
    if (userData.step2 && userData.step7) {
      if (userData.step7.distance) {
        setData(
          parseInt(userData.step2.consumo) +
            parseInt(userData.step7.suma) +
            (20 * parseInt(userData.step7.distance)) / 100
        );
      } else if (!userData.step7.distance) {
        setData(
          parseInt(userData.step2.consumo) + parseInt(userData.step7.suma)
        );
      }
    }
  }, [step]);

  const optionLabel = ["Speicher", "Wärme", "E-Mobility"];
  const [options, setOption] = useState(true);

  return (
    <div
      data-show={step == 8 ? true : false}
      className="flex flex-col step font-visby">
      <div className="grid md:grid-cols-2 md:gap-x-20 md:gap-y-0 gap-y-6 justify-items-center w-full justify-center pb-4">
        <div className="">
          <div className="font-visby lg:text-3xl md:text-2xl">
            <h2 className="font-bold">Ihre Solar-Zukunft</h2>
            <p className="my-1">so erreichen Sie empfohlene</p>
            <div className="flex">
              <p className="backline">Autarkie</p>
            </div>
          </div>
          <div className="border-b-2 border-[#ADADAD] p-1 mt-5 text-sm md:ml-3 flex justify-between">
            <p>Ihr produzierter Solarstrom im Jahr</p>
            <p className="text-sm">
              {Math.round(
                ((data * 1.3) / 1000 / 0.38) *
                  0.4 *
                  (userData.step6 ? getNumber(userData.step6) : 0)
              )}{" "}
              kWh
            </p>
          </div>

          <div className="text-center mt-5 max-w-xs mx-auto">
            <div className="flex items-start">
              <div className="translate-y-1">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.0002 0C2.99237 0 2.02583 0.434608 1.31319 1.20822C0.600551 1.98182 0.200195 3.03106 0.200195 4.12511C0.200221 4.66682 0.298537 5.20323 0.489529 5.7037C0.680521 6.20417 0.960448 6.6589 1.31333 7.04194C1.66621 7.42497 2.08513 7.7288 2.54618 7.93608C3.00723 8.14336 3.50137 8.25003 4.00039 8.25C4.49942 8.24997 4.99355 8.14324 5.45458 7.93591C5.9156 7.72858 6.3345 7.4247 6.68734 7.04163C7.04018 6.65856 7.32007 6.2038 7.51101 5.7033C7.70196 5.20281 7.80022 4.66639 7.8002 4.12468C7.8002 1.84684 6.09851 0 4.0002 0ZM3.94042 6.53099H3.92024C3.6107 6.52111 3.3922 6.27317 3.4013 5.94187C3.41001 5.61616 3.63365 5.3794 3.9329 5.3794L3.95111 5.38026C4.26936 5.39014 4.48549 5.6355 4.47638 5.97625C4.46728 6.30282 4.24759 6.53099 3.94042 6.53099ZM5.24311 3.72463C5.17028 3.83635 5.01036 3.97643 4.80849 4.14702L4.58603 4.31332C4.46411 4.41644 4.39049 4.51399 4.36317 4.60895C4.34101 4.68372 4.33072 4.70391 4.32874 4.85645V4.89513H3.47968L3.48205 4.81692C3.49274 4.49723 3.49986 4.30816 3.62217 4.15218C3.81415 3.90811 4.2377 3.61162 4.25551 3.59916C4.31361 3.55308 4.3643 3.49689 4.40553 3.43286C4.49459 3.29923 4.53378 3.19438 4.53378 3.09211C4.53378 2.94859 4.49499 2.81582 4.4178 2.69851C4.34338 2.58421 4.20207 2.52749 3.99782 2.52749C3.79515 2.52749 3.65622 2.5971 3.57349 2.74062C3.48799 2.88715 3.44484 3.04141 3.44484 3.19911V3.23864H2.56965L2.57124 3.19739C2.5938 2.61601 2.78538 2.19705 3.13926 1.95255C3.36211 1.79743 3.63959 1.71879 3.96299 1.71879C4.38574 1.71879 4.74357 1.83052 5.02461 2.05052C5.31001 2.27354 5.45449 2.60784 5.45449 3.04356C5.45409 3.28719 5.38324 3.51622 5.24311 3.72463Z"
                    fill="#8C8C8C"
                  />
                </svg>
              </div>
              <div>
                <p className="max-w-lg mx-auto text-sm">
                  Es handelt sich bei den ermittelten Werten um eine
                  wirtschaftlich und energietechnisch empfohlene effiziente
                  Photovoltaikbelegung.
                </p>
                <p className="text-sm">
                  Die Werte basieren auf Ihren angegebenen Daten.
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 mt-7 justify-end md:mb-0 mb-4">
            <div
              onClick={() => {
                setStep(step - 1);
              }}
              className="font-bold font-roboto px-10 py-2 border-[#B29A89] border rounded-md text-[#B29A89] hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#706f69] hover:bg-green-1 hover:text-white">
              Zurück
            </div>
            <div
              onClick={() => {
                setUserData({
                  ...userData,
                  step8: {
                    optimaleModulanzahl: Math.round((data * 1.3) / 1000 / 0.38),
                    maximaleAutarkie:
                      Math.round((data * 1.3) / 1000 / 0.38) * 2,
                  },
                });

                setStep(step + 1);
              }}
              className="font-bold font-roboto px-10 py-2 border-green-1 border rounded-md bg-green-1 text-white hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#706f69] hover:text-green-1 hover:bg-white">
              Weiter
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="border border-[#0B0909] text-[#0B0909] px-5 py-7">
            <div className="flex justify-between">
              <p className="font-bold">Ihre Daten im Detail</p>
            </div>
            <div className="flex justify-between my-2 md:text-base text-smitems-cente lg:space-x-6">
              <p className="text-sm md:w-auto w-3/5">
                Ihr aktueller jährlicher Stromverbrauch
              </p>
              <p className="text-sm md:w-auto w-2/5 text-end">
                {userData.step2 ? userData.step2.consumo : ""} kWh
              </p>
            </div>
            <div className="flex justify-between my-2 md:text-base text-sm lg:space-x-6">
              <p className="text-sm md:w-auto w-3/5">
                Zukünftiger jährlicher Stromverbrauch
              </p>
              <p className="text-sm md:w-auto w-2/5 text-end">
                {Math.round(data)} kWh
                {/* { calculatedData.push("Zukünftiger jährlicher Stromverbrauch",Math.round(data))} */}
              </p>
            </div>
            <div className="flex justify-between md:text-base text-sm items-center">
              <p>Ihr Standort</p>
              <p className="text-sm">{userData.step6}</p>
            </div>
            <div className="flex justify-between mt-5 md:text-base text-sm items-center">
              <p className="font-bold">So erreichen Sie empfohlene Autarkie</p>
              <p></p>
            </div>
            <div className="flex justify-between my-2 md:text-base text-sm items-center">
              <p className="">optimale Modulanzahl</p>
              <p className="text-sm">
                {Math.round((data * 1.3) / 1000 / 0.38)}
                {/* {calculatedData.push("optimale Modulanzahl",Math.round((data * 1.3) / 1000 / 0.38))} */}
              </p>
            </div>
            <div className="flex justify-between md:text-base text-sm">
              <p className="md:w-auto max-w-[14rem]">
                Dachfläche für empfohlene Autarkie ca.
              </p>
              <p className="relative text-sm flex">
                {Math.round((data * 1.3) / 1000 / 0.38) * 2} m²
                {/* {calculatedData.push("Dachfläche für empfohlene Autarkie ca in m²",(Math.round((data * 1.3) / 1000 / 0.38) * 2))} */}
              </p>
            </div>
            <div className="mt-5 flex justify-between">
              <p className="font-bold">Weitere Optionen</p>
            </div>
            {userData.step7?.spei && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>Speicher</p>
                <div className="grid grid-cols-2 w-1/2">
                  <label className="container_check text-xs font-visby">
                    <input type="checkbox" checked={true} />
                    <p className="checkmark2" />
                  </label>
                  <p className="text-xs"></p>
                </div>
              </div>
            )}
            {userData.step7?.mobility && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>E-Mobility</p>
                <div className="grid grid-cols-2 w-1/2">
                  <label className="container_check text-xs font-visby">
                    <input type="checkbox" checked={true} />
                    <p className="checkmark2" />
                  </label>
                  <p className="text-xs text-end">
                    {userData.step7.distance
                      ? `(${(userData.step7.distance * 20) / 100} kWh)`
                      : ""}
                  </p>
                </div>
              </div>
            )}
            {userData.step7?.sauna && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>Sauna</p>
                <div className="grid grid-cols-2 w-1/2">
                  <label className="container_check text-xs font-visby">
                    <input type="checkbox" checked={true} />
                    <p className="checkmark2" />
                  </label>
                  <p className="text-xs text-end">
                    {userData.step7.sauna ? `(${values["sauna"]} kWh)` : ""}
                  </p>
                </div>
              </div>
            )}
            {userData.step7?.pool && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>Pool</p>
                <div className="grid grid-cols-2 w-1/2">
                  <label className="container_check text-xs font-visby">
                    <input type="checkbox" checked={true} />
                    <p className="checkmark2" />
                  </label>
                  <p className="text-xs text-end">
                    {userData.step7.pool ? `(${values["pool"]} kWh)` : ""}
                  </p>
                </div>
              </div>
            )}
            {userData.step7?.ma && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>Mähroboter</p>
                <div className="grid grid-cols-2 w-1/2">
                  <label className="container_check text-xs font-visby">
                    <input type="checkbox" checked={true} />
                    <p className="checkmark2" />
                  </label>
                  <p className="text-xs text-end">
                    {userData.step7.ma ? `(${values["ma"]} kWh)` : ""}
                  </p>
                </div>
              </div>
            )}
            {userData.step7?.fa && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>Familienzuwachs</p>
                <div className="grid grid-cols-2 w-1/2">
                  <p className="pr-6">{userData.step7?.fa}</p>
                  <p className="text-xs text-end">
                    {userData.step7.fa
                      ? `(${values["fa"] * (userData.step7.fa * 1)} kWh)`
                      : ""}
                  </p>
                </div>
              </div>
            )}
            {userData.step7?.sau && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>Saugroboter</p>
                <div className="grid grid-cols-2 w-1/2">
                  <label className="container_check text-xs font-visby">
                    <input type="checkbox" checked={true} />
                    <p className="checkmark2" />
                  </label>
                  <p className="text-xs text-end">
                    {userData.step7.sau
                      ? `(${values["sau"] * userData.step7.sau} kWh)`
                      : ""}
                  </p>
                </div>
              </div>
            )}{" "}
            {userData.step7?.bike && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>E-Bike</p>
                <div className="grid grid-cols-2 w-1/2">
                  <p className="pr-6">{userData.step7?.bike}</p>
                  <p className="text-xs text-end">
                    {userData.step7.bike
                      ? `(${values["numBike"] * (userData.step7.bike * 1)} kWh)`
                      : ""}
                  </p>
                </div>
              </div>
            )}{" "}
            {userData.step7?.kli && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>Klimaanlage</p>
                <div className="grid grid-cols-2 w-1/2">
                  <label className="container_check text-xs font-visby">
                    <input type="checkbox" checked={true} />
                    <p className="checkmark2" />
                  </label>
                  <p className="text-xs text-end">
                    {userData.step7.kli ? `(${values["kli"]} kWh)` : ""}
                  </p>
                </div>
              </div>
            )}{" "}
            {userData.step7?.home && (
              <div className="flex justify-between my-2 items-center md:text-base text-sm">
                <p>Homeoffice</p>
                <div className="grid grid-cols-2 w-1/2">
                  <label className="container_check text-xs font-visby">
                    <input type="checkbox" checked={true} />
                    <p className="checkmark2" />
                  </label>
                  <p className="text-xs text-end">
                    {userData.step7.home ? `(${values["home"]} kWh)` : ""}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* <div className="flex space-x-10 mt-5 md:justify-end justify-center md:mb-0 mb-4">
            <div
              onClick={() => {
                setStep(step - 1);
              }}
              className="font-bold font-roboto px-10 py-2 border-[#737F38] border rounded-md text-[#737F38] hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#706f69] hover:bg-green-1 hover:text-white">
              Zurück
            </div>
            <div
              onClick={() => {
                setUserData({
                  ...userData,
                  step8: {
                    optimaleModulanzahl: Math.round((data * 1.3) / 1000 / 0.38),
                    maximaleAutarkie:
                      Math.round((data * 1.3) / 1000 / 0.38) * 2,
                  },
                });

                setStep(step + 1);
              }}
              className="font-bold font-roboto px-10 py-2 border-green-1 border rounded-md bg-green-1 text-white hover:cursor-pointer transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#706f69] hover:text-green-1 hover:bg-white">
              Weiter
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
