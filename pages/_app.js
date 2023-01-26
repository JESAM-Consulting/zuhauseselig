import "../styles/globals.css";
import "../styles/styles.css";
import Head from "next/head";
import React, { useState } from "react";
import AppContext from "../Context/AppContext";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({});
  const [calculatedDataAll, setCalculatedDataAll] = useState([]);

  return (
    <AppContext.Provider
      value={{
        step: step,
        setStep: setStep,
        userData: userData,
        setUserData: setUserData,
        calculatedDataAll: calculatedDataAll,
        setCalculatedDataAll: setCalculatedDataAll,
      }}>
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics-script" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
        />
        <meta charSet="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
