import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

export default function CookieForm({ show, setShow, cancel, setCancel }) {
  const [active, setActive] = useState(0);
  const [marketing, setMarketing] = useState(false);
  const [funktional, setFunktional] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [gac, setGac] = useState(true);
  const [werch, setWerch] = useState(false);

  const handleCancel = () => {
    setCancel(true);
  };

  let first_time = Cookies.get("first_time");
  const ISSERVER = typeof window === "undefined";
  if (first_time === undefined || first_time === "true") {
    first_time = true;
  } else {
    first_time = false;
  }

  const cancelCookie = () => {
    if (!ISSERVER) {
      localStorage.setItem("cancel", "1");
      localStorage.setItem("accept_cookies", "0");
    }
    Cookies.remove("marketing");
    Cookies.remove("funktional");
    Cookies.remove("werch");
    Cookies.remove("analytics");
    Cookies.remove("gac");
    Cookies.set("first_time", false, { expires: 7 });
    setShow(false);
    disableScroll.off();
  };

  const aceptCookie = () => {
    if (!ISSERVER) {
      localStorage.setItem("accept_cookies", "1");
    }

    Cookies.set("marketing", marketing, {
      expires: 7,
    });
    // Cookies.set("pixel", pixel, {
    //   expires: 7,
    // });
    Cookies.set("funktional", funktional, {
      expires: 7,
    });
    Cookies.set("analytics", analytics, {
      expires: 7,
    });
    Cookies.set("werch", werch, {
      expires: 7,
    });
    // Cookies.set("aff", aff, {
    //   expires: 7,
    // });
    Cookies.set("gac", gac, {
      expires: 7,
    });

    Cookies.set("first_time", false, { expires: 7 });
    setShow(false);
  };

  useEffect(() => {
    if (first_time === true) {
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div
      className={`md:min-h-screen overflow-auto h-screen fixed bg-black bg-opacity-60 w-full flex items-center  py-1 ${
        cancel ? " justify-start " : " justify-center "
      } ${clases(show)}`}
      style={{ zIndex: "9999" }}>
      <div
        className={`bg-white rounded-md px-7 text-[#797980] pt-8 pb-1 lg:max-w-[40rem] md:w-[40rem] w-full${
          cancel ? " hidden " : " block "
        }`}>
        <p className="lg:text-sm md:text-base text-sm">
          Für unseren Service speichern wir Cookies und andere Informationen auf
          Ihren Geräten und verarbeiten damit einhergehend Ihre personenbezogene
          Daten bzw. greifen auf solche zu. Dies hilft uns, um das
          Nutzungserlebnis unserer Services stetig zu verbessern, sowie
          personalisierte Empfehlungen und Werbung auszuspielen. Hierfür bitten
          wir um Ihre Einwilligung. Sie können diese jederzeit – auch später
          noch ändern oder widerrufen. Mehr erfahren Sie in der{" "}
          <Link legacyBehavior href="/datenschutz">
            <a className="text-yellow-1">Datenschutzerklärung</a>
          </Link>
        </p>
        <div className="flex text-sm my-6 space-x-6">
          <Link legacyBehavior href="/datenschutz">
            <a className="text-yellow-1 underline">Datenschutz</a>
          </Link>
          <Link legacyBehavior href="/impressum">
            <a className="text-yellow-1 underline">Impressum</a>
          </Link>
        </div>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-4 md:justify-between">
          <div
            onClick={handleCancel}
            className="md:w-[16rem] w-full text-center py-2.5 bg-[#999999] text-white hover:cursor-pointer transition-all ease-in-out duration-200 hover:bg-opacity-90">
            Einstellungen oder ablehnen
          </div>
          <div
            onClick={aceptCookie}
            className="md:w-[16rem] w-full text-center py-2.5 text-white bg-yellow-1 hover:cursor-pointer transition-all ease-in-out duration-200 hover:bg-opacity-90">
            Alles Akzeptieren
          </div>
        </div>

        <div className="mt-4 text-xs text-[#797980] text-center"></div>
      </div>

      <div
        className={`min-h-screen bg-white relative rounded-md lg:w-[40rem] overflow-auto ${
          cancel ? " block " : " hidden"
        }`}>
        <div className="p-7 ">
          <div>
            <div className="flex justify-between">
              <p>Datenschutz-Einstellungen</p>
              <p>
                <svg
                  onClick={() => {
                    setCancel(!cancel);
                  }}
                  className="hover:cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 492 492"
                  height="16px"
                  width="16px">
                  <path
                    d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"
                    fill="#797980"></path>
                </svg>
              </p>
            </div>
            <p className="lg:text-sm md:text-sm text-sm lg:my-4 md:my-3 my-1">
              Dieses Tool hilft Ihnen, verschiedene Tags / Tracker /
              Analyse-Tools auf dieser Webseite auszuwählen und zu deaktivieren.
            </p>

            <div className="flex text-sm md:my-6 my-2 space-x-6">
              <Link legacyBehavior href="/datenschutz">
                <a className="text-yellow-1 underline">Datenschutz</a>
              </Link>
              <Link legacyBehavior href="/impressum">
                <a className="text-yellow-1 underline">Impressum</a>
              </Link>
            </div>

            <div className="flex">
              <div
                onClick={() => {
                  setActive(0);
                }}
                className={`pb-1 hover:cursor-pointer w-1/2 text-center ${
                  active == 0
                    ? " text-green-1 font-bold border-green-1 border-b-2 "
                    : " border-b border-opacity-10 border-black"
                }`}>
                Kategorien
              </div>
              <div
                onClick={() => {
                  setActive(1);
                }}
                className={`pb-1 hover:cursor-pointer w-1/2 text-center  ${
                  active == 1
                    ? " text-green-1 font-bold border-green-1 border-b-2 "
                    : " border-b border-opacity-10 border-black"
                }`}>
                Services
              </div>
            </div>
            <div
              className={` text-[#797980] mt-4 space-y-4 h-[49vh] overflow-auto ${
                active == 0
                  ? "relative opacity-100 block"
                  : " absolute opacity-0 hidden"
              }`}>
              <div className="w-full md:text-base lg:text-sm">
                <div
                  onClick={() => {
                    setMarketing(!marketing);
                  }}
                  className="hover:cursor-pointer border items-center flex border-black border-opacity-10 rounded-md p-4 py-2">
                  <div className="">
                    <p>Marketing</p>
                    <div className="flex md:flex-row flex-col md:space-y-0 space-y-4 md:space-x-8">
                      <p className="lg:text-xs md:text-sm text-xs md:mt-1 mt-2">
                        Diese Technologien werden von Werbetreibenden verwendet,
                        um Anzeigen zu schalten, die für Ihre Interessen
                        relevant sind.
                      </p>
                      <div>
                        <svg
                          className={`${marketing ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#A1A09C"></path>
                                <path
                                  d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"
                                  fill="#ffffff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <svg
                          className={`${!marketing ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#595959"></path>
                                <path
                                  d="M 10 18 C 14.4183 18 18 14.4183 18 10 C 18 5.5817 14.4183 2 10 2 C 5.5817 2 2 5.5817 2 10 C 2 14.4183 5.5817 18 10 18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M 29.725 10.204 l 3.318 -3.315 a 0.51 0.51 0 1 0 -0.724 -0.724 L 29 9.48 l -3.319 -3.315 a 0.51 0.51 0 1 0 -0.724 0.724 l 3.318 3.315 l -3.318 3.317 a 0.51 0.51 0 1 0 0.724 0.723 L 29 10.928 l 3.319 3.317 a 0.509 0.509 0 0 0 0.724 0 c 0.2 -0.2 0.2 -0.525 0 -0.724 l -3.318 -3.317 z"
                                  fill="#ffffff"
                                  fillRule="nonzero"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:text-base lg:text-sm">
                <div
                  onClick={() => {
                    setFunktional(!funktional);
                  }}
                  className="hover:cursor-pointer border items-center flex border-black border-opacity-10 rounded-md p-4 py-2">
                  <div className="">
                    <p>Funktional</p>
                    <div className="flex md:flex-row flex-col md:space-y-0 space-y-4 md:space-x-8">
                      <p className="lg:text-xs md:text-sm text-xs md:mt-1 mt-2">
                        Diese Technologien ermöglichen es uns, die Nutzung der
                        Website zu analysieren, um die Leistung zu messen und zu
                        verbessern.
                      </p>
                      <div>
                        <svg
                          className={`${funktional ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#A1A09C"></path>
                                <path
                                  d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"
                                  fill="#ffffff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <svg
                          className={`${!funktional ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#595959"></path>
                                <path
                                  d="M 10 18 C 14.4183 18 18 14.4183 18 10 C 18 5.5817 14.4183 2 10 2 C 5.5817 2 2 5.5817 2 10 C 2 14.4183 5.5817 18 10 18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M 29.725 10.204 l 3.318 -3.315 a 0.51 0.51 0 1 0 -0.724 -0.724 L 29 9.48 l -3.319 -3.315 a 0.51 0.51 0 1 0 -0.724 0.724 l 3.318 3.315 l -3.318 3.317 a 0.51 0.51 0 1 0 0.724 0.723 L 29 10.928 l 3.319 3.317 a 0.509 0.509 0 0 0 0.724 0 c 0.2 -0.2 0.2 -0.525 0 -0.724 l -3.318 -3.317 z"
                                  fill="#ffffff"
                                  fillRule="nonzero"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:text-base lg:text-sm">
                <div className="hover:cursor-pointer border items-center flex border-black border-opacity-10 rounded-md p-4 py-2">
                  <div className="">
                    <p>Wesentlich</p>
                    <div className="flex md:flex-row flex-col md:space-y-0 space-y-4 md:space-x-8">
                      <p className="lg:text-xs md:text-sm text-xs md:mt-1 mt-2">
                        Diese Technologien werden benötigt, um die
                        Kernfunktionalität der Webseite zu aktivieren.
                      </p>
                      <div>
                        <svg
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#dedede"></path>
                                <path
                                  d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"
                                  fill="#ffffff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` text-[#797980] mt-4 px-2 space-y-4  h-[49vh] overflow-auto ${
                active == 1
                  ? "relative opacity-100 block"
                  : " absolute opacity-0 hidden"
              }`}>
              {/* <div className="w-full lg:text-sm md:text-base text-sm">
                <div className="hover:cursor-pointer border items-center  border-black border-opacity-10 rounded-md p-4 py-2">
                  <div className="w-full">
                    <p></p>
                    <div className="flex justify-between items-center">
                      <p className="lg:text-xs md:text-sm text-xs">
                        Wesentlich
                      </p>
                      <div>
                        {" "}
                        <svg
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#dedede"></path>
                                <path
                                  d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"
                                  fill="#ffffff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="w-full lg:text-sm md:text-base text-sm">
                <div
                  onClick={() => {
                    setWerch(!werch);
                  }}
                  className="hover:cursor-pointer border items-center  border-black border-opacity-10 rounded-md p-4 py-2">
                  <div className="w-full">
                    <p></p>
                    <div className="flex justify-between">
                      <p className="md:text-sm lg:text-xs text-xs md:mt-1 mt-2">
                        Wesentlich
                      </p>
                      <div>
                        <svg
                          className={`${werch ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#A1A09C"></path>
                                <path
                                  d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"
                                  fill="#ffffff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <svg
                          className={`${!werch ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#595959"></path>
                                <path
                                  d="M 10 18 C 14.4183 18 18 14.4183 18 10 C 18 5.5817 14.4183 2 10 2 C 5.5817 2 2 5.5817 2 10 C 2 14.4183 5.5817 18 10 18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M 29.725 10.204 l 3.318 -3.315 a 0.51 0.51 0 1 0 -0.724 -0.724 L 29 9.48 l -3.319 -3.315 a 0.51 0.51 0 1 0 -0.724 0.724 l 3.318 3.315 l -3.318 3.317 a 0.51 0.51 0 1 0 0.724 0.723 L 29 10.928 l 3.319 3.317 a 0.509 0.509 0 0 0 0.724 0 c 0.2 -0.2 0.2 -0.525 0 -0.724 l -3.318 -3.317 z"
                                  fill="#ffffff"
                                  fillRule="nonzero"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="w-full lg:text-sm md:text-base text-sm">
                <div
                  onClick={() => {
                    setAnalytics(!analytics);
                  }}
                  className="hover:cursor-pointer border items-center  border-black border-opacity-10 rounded-md p-4 py-2">
                  <div className="w-full">
                    <p>Google Analytics Statistics</p>
                    <div className="flex justify-between">
                      <p className="md:text-sm lg:text-xs text-xs md:mt-1 mt-2">
                        Marketing
                      </p>
                      <div>
                        <svg
                          className={`${analytics ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#A1A09C"></path>
                                <path
                                  d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"
                                  fill="#ffffff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <svg
                          className={`${!analytics ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#595959"></path>
                                <path
                                  d="M 10 18 C 14.4183 18 18 14.4183 18 10 C 18 5.5817 14.4183 2 10 2 C 5.5817 2 2 5.5817 2 10 C 2 14.4183 5.5817 18 10 18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M 29.725 10.204 l 3.318 -3.315 a 0.51 0.51 0 1 0 -0.724 -0.724 L 29 9.48 l -3.319 -3.315 a 0.51 0.51 0 1 0 -0.724 0.724 l 3.318 3.315 l -3.318 3.317 a 0.51 0.51 0 1 0 0.724 0.723 L 29 10.928 l 3.319 3.317 a 0.509 0.509 0 0 0 0.724 0 c 0.2 -0.2 0.2 -0.525 0 -0.724 l -3.318 -3.317 z"
                                  fill="#ffffff"
                                  fillRule="nonzero"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* <div className="w-full lg:text-sm md:text-base text-sm">
                <div
                  onClick={() => {
                    setAff(!aff);
                  }}
                  className="hover:cursor-pointer border items-center  border-black border-opacity-10 rounded-md p-4 py-2">
                  <div className="w-full">
                    <p>affilinet (Webmasterplan)</p>
                    <div className="flex justify-between">
                      <p className="md:text-sm lg:text-xs text-xs md:mt-1 mt-2">
                        Marketing
                      </p>
                      <div>
                        <svg
                          className={`${aff ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#A1A09C"></path>
                                <path
                                  d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"
                                  fill="#ffffff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <svg
                          className={`${!aff ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#595959"></path>
                                <path
                                  d="M 10 18 C 14.4183 18 18 14.4183 18 10 C 18 5.5817 14.4183 2 10 2 C 5.5817 2 2 5.5817 2 10 C 2 14.4183 5.5817 18 10 18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M 29.725 10.204 l 3.318 -3.315 a 0.51 0.51 0 1 0 -0.724 -0.724 L 29 9.48 l -3.319 -3.315 a 0.51 0.51 0 1 0 -0.724 0.724 l 3.318 3.315 l -3.318 3.317 a 0.51 0.51 0 1 0 0.724 0.723 L 29 10.928 l 3.319 3.317 a 0.509 0.509 0 0 0 0.724 0 c 0.2 -0.2 0.2 -0.525 0 -0.724 l -3.318 -3.317 z"
                                  fill="#ffffff"
                                  fillRule="nonzero"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "} */}
              <div className="w-full lg:text-sm md:text-base text-sm">
                <div
                  onClick={() => {
                    setGac(!gac);
                  }}
                  className="hover:cursor-pointer border items-center  border-black border-opacity-10 rounded-md p-4 py-2">
                  <div className="w-full">
                    <p>Google Ads Conversion</p>
                    <div className="flex justify-between">
                      <p className="md:text-sm lg:text-xs text-xs md:mt-1 mt-2">
                        Marketing
                      </p>
                      <div>
                        <svg
                          className={`${gac ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#A1A09C"></path>
                                <path
                                  d="M30,18 C34.418278,18 38,14.418278 38,10 C38,5.581722 34.418278,2 30,2 C25.581722,2 22,5.581722 22,10 C22,14.418278 25.581722,18 30,18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M15.8228065,6.13470278 C16.038065,6.32450074 16.0587048,6.65286384 15.8689068,6.8681223 C15.8665182,6.87083131 15.8641014,6.87351535 15.8616569,6.87617398 L9.47642761,13.8205455 C9.39995063,13.9037194 9.30336409,13.9576046 9.20086748,13.9814572 C9.01166585,14.0332136 8.80114396,13.9796182 8.65955286,13.8256282 L8.65955286,13.8256282 L6.13834311,11.083641 L6.13834311,11.083641 L6.13109318,11.0755893 C5.94129522,10.8603308 5.96193502,10.5319677 6.17719348,10.3421698 C6.39831738,10.1472001 6.73475108,10.164828 6.93428873,10.3818388 L6.93428873,10.3818388 L9.06521734,12.6992981 L15.0657113,6.17437179 C15.2652489,5.95736102 15.6016826,5.93973313 15.8228065,6.13470278 Z"
                                  fill="#ffffff"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <svg
                          className={`${!gac ? " block " : "hidden"}`}
                          aria-hidden="true"
                          width="42px"
                          height="23px"
                          viewBox="0 0 42 23"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                            <g transform="translate(-86.000000, -31.000000)">
                              <g transform="translate(87.000000, 32.949632)">
                                <path
                                  d="M30.0094932,-0.5 C32.8534346,-0.5 35.4330697,0.632406246 37.3226603,2.47154687 C39.2173227,4.31562389 40.4181217,6.87029149 40.4959736,9.70631513 C40.4981622,12.7440885 39.3375699,15.4233885 37.4620437,17.3539966 C35.5609243,19.3109495 32.9241909,20.5 30.0094932,20.5 L30.0094932,20.5 L9.99050677,20.5 C7.14626154,20.5 4.56639324,19.3679366 2.67675543,17.5287725 C0.782448937,15.6850644 -0.418130086,13.1306858 -0.49597372,10.2937978 C-0.498162151,7.25597731 0.662425032,4.576654 2.53794226,2.64603293 C4.43906304,0.689056047 7.07580212,-0.5 9.99050677,-0.5 L9.99050677,-0.5 Z"
                                  stroke="#ffffff"
                                  fill="#595959"></path>
                                <path
                                  d="M 10 18 C 14.4183 18 18 14.4183 18 10 C 18 5.5817 14.4183 2 10 2 C 5.5817 2 2 5.5817 2 10 C 2 14.4183 5.5817 18 10 18 Z"
                                  fill="#ffffff"></path>
                                <path
                                  d="M 29.725 10.204 l 3.318 -3.315 a 0.51 0.51 0 1 0 -0.724 -0.724 L 29 9.48 l -3.319 -3.315 a 0.51 0.51 0 1 0 -0.724 0.724 l 3.318 3.315 l -3.318 3.317 a 0.51 0.51 0 1 0 0.724 0.723 L 29 10.928 l 3.319 3.317 a 0.509 0.509 0 0 0 0.724 0 c 0.2 -0.2 0.2 -0.525 0 -0.724 l -3.318 -3.317 z"
                                  fill="#ffffff"
                                  fillRule="nonzero"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="bg-white md:mt-0 mt-2 absolute bottom-3 left-0  w-full px-8 pt-5 border-t border-black border-opacity-10">
            <div className="flex md:flex-row flex-col md:space-y-0 space-y-4 md:justify-between">
              <div
                onClick={cancelCookie}
                className="md:w-[16rem] w-full text-center py-2.5 bg-[#999999] text-white hover:cursor-pointer transition-all ease-in-out duration-200 hover:bg-opacity-90">
                Einstellungen oder ablehnen
              </div>
              <div
                onClick={aceptCookie}
                className="md:w-[16rem] w-full text-center py-2.5 text-white bg-yellow-1 hover:cursor-pointer transition-all ease-in-out duration-200 hover:bg-opacity-90">
                Alles Akzeptieren
              </div>
            </div>

            <div className="mt-2 text-center text-xs"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const clases = (mostrar) => {
  let resultado = "hidden";
  if (mostrar) {
    resultado = "flex";
  }

  return resultado + " fade-in";
};
