import NavTop from "../components/NavTop";
import React, { useContext, useState, useEffect } from "react";
import AppContext from "../Context/AppContext";
import Footer from "../components/Footer";
import Step0 from "../components/Steps/Step0";
import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";
import Step3 from "../components/Steps/Step3";
import Step4 from "../components/Steps/Step4";
import Step5 from "../components/Steps/Step5";
import Step6 from "../components/Steps/Step6";
import Header from "../components/Header";
import { useRouter } from "next/router";
import CookieForm from "../components/CookieForm";
import disableScroll from "disable-scroll";

export default function Home() {
  const { step, setStep } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(0);
  const [cancel, setCancel] = useState(false);
  const router = useRouter();

  const textGray = [
    "Die Angabe des Stromverbrauchs ist für ein persönliches Agebot relevant. Die Anzahl an Personen in Ihrem Haushalt beeinflusst die Strommenge, die Sie durchschnittlich verbrauchen.",
    "Der Neigungswinkel Ihres Daches beeinflusst die Menge an Strom, die Ihre Photovoltaik-Anlage produziert. Auf Flachdächern werden die PV-Anlagen aufgeständert.",
    "In verschiedenen Teilen Deutschlands scheint unterschiedlich lange die Sonne.",
  ];

  const isShow = () => {
    if (step == 1 || step == 2 || step == 4) return true;
    return false;
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (step == 1) {
      setIndex(0);
    }
    if (step == 2) {
      setIndex(1);
    }

    if (step == 4) {
      setIndex(2);
    }
  }, [step]);

  const [progress, setProgress] = useState("w-0");
  const [marked, setMarked] = useState([false, false, false, false, false]);
  const conversion = [
    "Start",
    "Stromverbrauch",
    "Dachform",
    "Immobilie",
    "Heizung",
    "Angebot erhalten",
  ];

  useEffect(() => {
    if (step < 6 && !marked[step]) {
      window.gtag("event", conversion[step]);

      setMarked(
        marked.map((e, index) => {
          if (index == step && !e) {
            return true;
          } else return e;
        })
      );
    }

    if (step < 5) {
      setProgress("w-[33%]");
    } else if (step == 5) {
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
    <div className="min-h-[100vh]">
      <CookieForm
        show={show}
        setShow={setShow}
        cancel={cancel}
        setCancel={setCancel}
      />
      <NavTop />
      <Header />
      <div className="grid lg:grid-cols-[70%_30%] md:grid-cols-2 md:h-[80vh] overflow-hidden">
        <div className="lg:px-20 md:py-6 relative">
          <div className={step != 6 && step != 5 ? "block" : "hidden"}>
            <div className="font-visby reltive lg:px-0 px-6 md:py-0 py-6">
              <h1 className="font-bold text-base bottomLine relative mb-3">
                Photovoltaik Angebot
              </h1>
              <p className="text-[#AFA9A9] text-sm max-w-md">
                Jetzt die individuelle Solar-Beratung nutzen und in wenigen
                Minuten Ihr persönliches Photovoltaik Angebot erhalten!
              </p>
            </div>
          </div>
          <div className="flex md:hidden relative">
            <div className="flex items-center space-x-16 relative">
              <div className="w-full h-[0.28rem] absolute">
                <div className={`bg-yellow-1 h-[0.28rem] ${progress}`}></div>
              </div>

              <div className="flex items-center lg:space-x-4 md:space-x-3 my-1">
                <div
                  data-active={step <= 6 ? true : false}
                  className="circle rounded-full p-[1rem] bg-white  relative box-border border-yellow-1 border transition-all ease-in-out duration-500">
                  <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                    1
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:space-x-4 md:space-x-3">
                <div
                  data-active={step >= 5 ? true : false}
                  className="circle rounded-full p-[1rem] bg-white  relative box-border border-yellow-1 border transition-all ease-in-out duration-500">
                  <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                    2
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:space-x-4 md:space-x-3">
                <div
                  data-active={step == 6 ? true : false}
                  className="circle rounded-full p-[1rem] bg-white  relative box-border border-yellow-1 border transition-all ease-in-out duration-500">
                  <div className="numero absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 font-bold text-base transition-all ease-in-out duration-500">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-8 md:mt-10 mt-6 flex  stepperContainer lg:px-0 px-6 md:mb-0 mb-14">
            <div className="flex sliderContainer relative lg:w-[90%] mx-auto h-full">
              <Step0 />
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 />
              <Step5 />
              <Step6 />
            </div>
          </div>
          <div
            onClick={() => {
              setStep(step - 1);
            }}
            data-show={step != 0 && step != 6}
            className={`bg-yellow-1 mb-4 mx-6 md:hidden z-50 backButton relative group hover:cursor-pointer  transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#977e6d] flex justify-center items-center space-x-3 font-roboto rounded-md py-2.5 md:w-32 w-10 text-white text-center`}>
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
            className={`w-full md:absolute relative bg-[#EFEFEF] md:left-0 md:bottom-0 md:mt-0 mt-6 ${
              isShow() ? " block " : " hidden "
            }`}>
            <div className="text-[#8C8C8C] lg:px-20 md:px-6 lg:py-5 py-3 px-6">
              <div className="flex mb-4 items-start space-x-2">
                <img src="/images/help.svg" alt="" className="mt-1.5" />
                <div>
                  <h1 className="md:text-lg">Warum fragen wir das?</h1>
                  <p className="md:text-base text-sm lg:max-w-3xl">
                    {textGray[index]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              setStep(step - 1);
            }}
            data-show={step != 0 && step != 6}
            className={`bg-yellow-1 md:absolute md:flex hidden ${
              step != 5
                ? " right-4 bottom-3 "
                : " right-[5rem] bottom-[5.5rem] "
            } backButton group hover:cursor-pointer  transition-all ease-in-out duration-150 hover:bg-opacity-90 hover:shadow-md hover:shadow-[#977e6d] flex justify-center items-center space-x-3 font-roboto rounded-md py-2.5 md:w-32 w-10 text-white text-center`}>
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
        <div className="overflow-hidden md:block hidden">
          <img
            src="/images/house.jpg"
            alt=""
            className={`${
              step < 6 ? "block" : "hidden"
            } lg:h-auto md:h-full object-cover md:block hidden`}
          />
          <img
            src="/images/peoples.webp"
            alt=""
            className={`${step == 6 ? " block" : " hidden "}`}
          />
        </div>

        <div className="md:hidden block">
          <img
            src="/images/housemovile.webp"
            alt=""
            className={`${step < 6 ? "block" : "hidden"} `}
          />
          <img
            src="/images/peoplemovile.webp"
            alt=""
            className={`${step == 6 ? " block" : "hidden"} `}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
