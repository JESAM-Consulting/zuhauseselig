import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#B29A89] flex lg:px-24 md:px-10 lg:py-7 md:min-h-[8vh] font-roboto  font-bold text-base md:justify-between relative z-10 py-8 px-6">
      <div className="text-white space-x-5 items-center md:flex hidden">
        <p className="lg:text-xl">Gut für die Umwelt!</p>
        <p className="text-sm">
          30% weniger CO₂ heißt, soviel wie 2 PKWs pro Jahr gespart!
        </p>
      </div>

      <div className="flex md:items-center md:space-x-6 flex-row  md:w-auto w-full">
        <div className="md:block flex w-full justify-between">
          <Link href="/datenschutz">
            <a className="text-white hover:text-opacity-60 transition-all ease-in-out duration-150">
              Datenschutzerklärung
            </a>
          </Link>
        </div>
        <div>
          <Link href="/impressum">
            <a className="text-white hover:text-opacity-60 transition-all ease-in-out duration-150">
              Impressum
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
