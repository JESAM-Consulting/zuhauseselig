import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>ZuhauseSelig</title>
      <meta
        name="description"
        content="Photovoltaik Angebot - individuelle Solar-Beratung."
      />

      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
