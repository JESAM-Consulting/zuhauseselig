import "../styles/globals.css";
import "../styles/styles.css";

import React, { useState } from "react";
import AppContext from "../Context/AppContext";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({});

  return (
    <AppContext.Provider
      value={{
        step: step,
        setStep: setStep,
        userData: userData,
        setUserData: setUserData,
      }}>
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="beforeInteractive" id="analitycs">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
