import NavTop from "../components/NavTop";
import React, { useContext, useState, useEffect } from "react";
import AppContext from "../Context/AppContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Step0 from "../components/Steps/Step0";
import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";
import Step3 from "../components/Steps/Step3";
import Step4 from "../components/Steps/Step4";
import Step5 from "../components/Steps/Step5";
import Step6 from "../components/Steps/Step6";
import Step7 from "../components/Steps/Step7";
import Step8 from "../components/Steps/Step8";
import Step9 from "../components/Steps/Step9";
import Step10 from "../components/Steps/Step10";

import CookieForm from "../components/CookieForm";
import disableScroll from "disable-scroll";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const { step, setStep } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const [path, setPath] = useState(true);
  const [openM, setOpenM] = useState(false);

  const textGray = [
    "Als Eigentümer der Immobilie können Sie selbst entscheiden, wann und wie autark Sie werden möchten. Falls Sie nicht der Eigentümer sind, gibt es andere Vorraussetzungen.",
    "Die Angabe des Stromverbrauchs ist für ein persönliches Angebot relevant. Die Anzahl an Personen in Ihrem Haushalt beeinflusst die Strommenge, die Sie durchschnittlich verbrauchen.",
    "Der Neigungswinkel Ihres Daches beeinflusst die Menge an Strom, die Ire Photovoltaik-Anlage produziert. Auf Flachdächern werden die PV-Anlagen aufgeständert.",
    "Eine elektrische Heizung oder Wärmepumpe ist ein großer Stomverbraucher und in diesem Fall empfiehlt sich die PV Anlage größer zu dimensionieren.",
    "In verschiedenen Teilen Deutschlands scheint unterschiedlich lange die Sonne.",
    "Der Speicher wird von uns ausdrücklich empfohlen und ist für die Effizienz Ihrer Photovoltaikanlage unabdingbar. Der Verbrauch des Autos steigert Ihren Stromverbrauch und ist ein wichtiger Wert für die individuelle Berechnung der Anlagengröße.",
    "Durch eine Finanzierung können Sie Ihren monatlichen Stromabschlag durch den Finanzierungsabschlag ersetzen. Dieser bleibt auf die nächsten Jahre gleich und schützt Sie vor steigenden Stromkosten. Als Gegenwert bleibt Ihnen die PV-Anlage.",
  ];
  const [show, setShow] = useState(0);

  const isShow = () => {
    if (step >= 1 && step <= 7) return true;
    return false;
  };

  const [open, setOpen] = useState(false);
  const [dimension, setDimension] = useState(1234);

  useEffect(() => {
    const handleRezise = () => {
      if (typeof windows !== undefined) {
        setDimension(window.innerWidth);
      }
    };
    handleRezise();
    window.addEventListener("resize", handleRezise);

    return window.removeEventListener("resize", handleRezise);
  }, [dimension]);

  useEffect(() => {
    if (dimension < 900 && step != 10 && step != 0) {
      if (step == 9) {
        window.scroll({
          top: 130,
          left: 0,
          behavior: "smooth",
        });
      } else {
        window.scroll({
          top: 210,
          left: 0,
          behavior: "smooth",
        });
      }
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    if (step == 1) {
      setIndex(0);
    }
    if (step == 2) {
      setIndex(1);
    }

    if (step == 3) {
      setIndex(2);
    }
    if (step == 4) {
      setIndex(6);
    }

    if (step == 5) {
      setIndex(3);
    }

    if (step == 6) {
      setIndex(4);
    }

    if (step == 7) {
      setIndex(5);
    }
  }, [step, dimension]);

  const [progress, setProgress] = useState("w-0");
  const [cancel, setCancel] = useState(false);
  const conversions = [
    "Start",
    "Eigentümer",
    "Stromverbrauch",
    "Dachform",
    "Finanzierung",
    "",
    "Heizung",
    "Weitere Optionen",
    "Solar-Zukunft",
  ];
  let [marked, setMarked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  useEffect(() => {
    window.gtag("event", "number_step", { value: step });
    console.log(marked);
    if (step < 10 && step != 5 && marked[step] == false && step != 9) {
      window.gtag("event", conversions[step]);
      setMarked(
        marked.map((e, index) => {
          if (index == step && !e) {
            return true;
          } else return e;
        })
      );
    }

    if (step < 6) {
      setProgress("w-[33%]");
    } else if (step == 6) {
      setProgress("w-[66%]");
    } else {
      setProgress("w-[100%]");
    }
  }, [step]);

  useEffect(() => {
    const handleRouteChange = async (url) => {
      if (url != "/") {
        disableScroll.off();
      } else if (url == "/" && show && !cancel) {
        disableScroll.on();
      } else if (url == "/" && show && cancel) {
        disableScroll.off();
      } else if (!show) {
        disableScroll.off();
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    if (show && !cancel) {
      disableScroll.on();
    } else if (show && cancel) {
      disableScroll.off();
    } else if (!show) {
      disableScroll.off();
    }

    return () => {
      router.events.off("routeChangeComplete", async () => {
        console.log("stoped");
      });
    };
  }, [show, cancel, router.events]);

  return (
    <div className="min-h-[100vh] relative">
      <CookieForm
        show={show}
        setShow={setShow}
        cancel={cancel}
        setCancel={setCancel}
      />
      <NavTop />
      <Header />
      <div
        className={`grid lg:grid-cols-[70%_30%] ${
          step == 8
            ? " lg:min-h-[77.5vh]"
            : " lg:h-[77.5vh] lg:overflow-y-hidden"
        } overflow-hidden`}>
        <div className="lg:px-16 lg:py-6 lg:pb-0 md:pt-10 relative ">
          <div>
            <div className="font-visby reltive lg:px-0 px-6 md:py-0 py-6 flex justify-between items-center">
              <div className={step != 9 && step != 10 ? "block" : "hidden"}>
                <h1 className="font-bold text-base bottomLine relative mb-3">
                  Photovoltaik Angebot
                </h1>
                <p className="text-[#AFA9A9] text-sm max-w-md">
                  Jetzt die individuelle Solar-Beratung nutzen und Ihr
                  persönliches Photovoltaik Angebot erhalten!
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:hidden relative">
            <div className="flex items-center space-x-16 relative">
              <div className="w-full h-[0.28rem] absolute">
                <div className={`bg-green-1 h-[0.28rem] ${progress}`}></div>
              </div>

              <div className="flex items-center lg:space-x-4 md:space-x-3 my-1">
                <div
                  data-active={step <= 10 ? true : false}
                  className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
                  <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                    1
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:space-x-4 md:space-x-3">
                <div
                  data-active={step >= 8 ? true : false}
                  className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
                  <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                    2
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:space-x-4 md:space-x-3">
                <div
                  data-active={step == 10 ? true : false}
                  className="circle rounded-full p-[1rem] bg-white  relative box-border border-green-1 border transition-all ease-in-out duration-500">
                  <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`md:mt-6 mt-6 flex lg:mt-4 stepperContainer lg:px-0 px-6 md:mb-0`}>
            <div className="flex sliderContainer relative md:pl-10 md:justify-start justify-center w-full">
              <Step0
                openlg={open}
                setOpenlg={setOpen}
                setOpenM={setOpenM}
                openM={openM}
              />
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
              <Step5 />
              <Step6 />
              <Step7 />
              <Step8 />
              <Step9 />
              <Step10 />
            </div>
          </div>
          <div
            onClick={() => {
              setStep(step - 1);
            }}
            data-show={step != 0 && step != 10 && step != 8 ? true : false}
            className={`bg-green-1 mb-4 mt-4 mx-6 lg:hidden lg:opacity-0 md:mt-8 z-50 backButtonM relative group hover:cursor-pointer  transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#706f69] flex justify-center items-center space-x-3 font-roboto rounded-md py-2.5 md:w-32 w-10 text-white text-center`}>
            <span className="w-3 group-hover:-translate-x-[0.18rem] transition-all ease-in-out duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div
            className={`w-full lg:absolute relative bg-[#EFEFEF] lg:left-0 lg:bottom-0 lg:mt-0 md:mt-10 mt-6 ${
              isShow() ? " block " : " hidden "
            }`}>
            <div className="text-[#8C8C8C] lg:px-20 md:px-6 lg:py-3 py-3 px-6">
              <div className="flex mb-4 items-start space-x-2">
                <img src="/images/help.svg" alt="" className="mt-1.5" />
                <div>
                  <h1 className="text-base">Warum fragen wir das?</h1>
                  <p className="text-sm lg:max-w-3xl">{textGray[index]}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              setStep(step - 1);
            }}
            data-show={step != 0 && step != 10 && step != 7 && step != 8}
            className={`bg-green-1 lg:absolute lg:flex hidden ${
              step == 9 ? "bottom-[50px]" : "bottom-[120px]"
            } right-4 backButton group hover:cursor-pointer  transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#706f69] justify-center items-center space-x-3 font-roboto rounded-md py-2.5 md:w-32 w-10 text-white text-center`}>
            <span className="w-3 group-hover:-translate-x-1 transition-all ease-in-out duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  fill="white"
                />
              </svg>
            </span>

            <span className="font-semibold md:block md:text-base text-sm hidden font-visby group-hover:scale-[1.05] delay-100 transition-all ease-in-out duration-150">
              zurück
            </span>
          </div>
        </div>
        <div
          className={`overflow-hidden lg:block hidden ${
            step < 10
              ? "bg-[url('/images/house.webp')]"
              : "bg-[url('/images/peoples.webp')]"
          } bg-center bg-cover bg-no-repeat`}>
          <div className="relative">
            {/* <img
              src="/images/house.webp"
              alt=""
              className={`${step < 10 ? "block" : "hidden"} ${
                step == 8 ? "min-h-full object-cover" : "lg:h-auto md:h-full"
              } object-cover absolute`}
            /> */}
            <img
              data-show={open && step != 10 ? true : false}
              onClick={() => {
                setOpen(!open);
              }}
              src="/images/sun.png"
              alt=""
              className="sun-btn absolute top-3 left-5 w-[7rem] lg:block hidden hover:cursor-pointer z-30"
            />
            <div
              data-show={open ? true : false}
              className={`card-info-calc absolute bg-[#FFFFFF] bg-opacity-[93%] py-10 px-5 z-40 grid place-items-center`}>
              <div>
                <img src="/images/graph.png" alt="" className="lg:w-[15vw]" />
              </div>
              <div className="text-xs mt-10 w-full">
                <div className="flex justify-between">
                  <span>Spitzenleistung:</span>
                  <span className="">10 kWp</span>
                </div>
                <div className="flex justify-between">
                  <span>Jährlicher Stromertrag pro kWh/kWp:</span>
                  <span className="">990</span>
                </div>
                <div className="flex justify-between">
                  <span>Anschaffungskosten (ohne MwSt):</span>
                  <span className="">37.000 EUR</span>
                </div>
                <div className="flex justify-between ">
                  <span>Davon anteilige Kosten für Speicher :</span>
                  <span className="">12.000 EUR</span>
                </div>
                <div className="flex justify-between ">
                  <span>Anschaffung/Inbetriebnahme:</span>
                  <span className="">Mai 2020</span>
                </div>
                <div className="flex justify-between ">
                  <span>Betriebszeitraum:</span>
                  <span className="">20 Jahre</span>
                </div>

                <div className="flex justify-between ">
                  <span>Ø Stromkosten eines Drittanbieters:</span>
                  <span className="">0,42 €/kWh</span>
                </div>
                <div className="flex justify-between lg:mt-2">
                  <span>
                    Ersparnis Stromkosten: <strong>81.270 €</strong>
                  </span>
                  <span className=""></span>
                </div>
                <div className="flex justify-between">
                  <span>
                    Einspeisevergütung: <strong>5.445 € (20 Jahre)</strong>
                  </span>
                  <span className="font-bold"></span>
                </div>
                <div className="flex justify-between">
                  <span>
                    Ersparnis gesamt: <strong>49.715 € über 20 Jahre</strong>
                  </span>
                  <span className="font-bold"></span>
                </div>
              </div>
              <div className="text-xs font-thin text-end w-full">
                <p>Quelle </p>
                <Link href="https://www.test.de/Photovoltaik-Rechner-1391893-0/">
                  <a>https://www.test.de/Photovoltaik-Rechner-1391893-0/</a>
                </Link>
              </div>
            </div>
            {/* <img
              src="/images/peoples.webp"
              alt=""
              className={`${step == 10 ? "lg:block hidden" : " hidden "}`}
            /> */}
          </div>
        </div>

        <div className={`lg:hidden block`}>
          <div className="relative">
            <img
              data-show={openM && step != 10 ? true : false}
              onClick={() => {
                setOpenM(!openM);
              }}
              src="/images/sun.png"
              alt=""
              className="sun-btn absolute top-3 left-5 w-[5rem] lg:hidden block hover:cursor-pointer z-30"
            />
            <img
              src="/images/housemovile.webp"
              alt=""
              className={`${step < 10 ? "block" : "hidden"} relative`}
            />
          </div>
          <img
            src="/images/peoplemovile.webp"
            alt=""
            className={`${step == 10 ? " lg:hidden md:block" : "hidden"} `}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
