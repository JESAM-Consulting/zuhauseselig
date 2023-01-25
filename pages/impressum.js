import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavTop from "../components/NavTop";

export default function Impressum() {
  return (
    <div className="font-visby">
      <Header />
      <NavTop />
      <div className="lg:pb-24 pb-14">
        <div className="bg-white rounded-3xl container mx-auto p-6 md:p-20">
          <p>
            <span className="text-3xl md:text-4xl font-semibold">
              Impressum
            </span>
            <br />
            <span>&nbsp;</span>
          </p>

          <p>
            <span className="font-bold">Angaben gemäß § 5 TMG</span>
          </p>
          <p>
            <span>Energiekonzepte Deutschland GmbH</span>
            <br />
            <span>Straße des 17. Juni 4a</span>
            <br />
            <span>04425 Taucha</span>
          </p>

          <p>
            <br />
            <span>Handelsregister: HRB 34979</span>
            <br />
            <span>Registergericht: AG Leipzig</span>
            <br />
            <p>
              <br />
              <span className="font-semibold">Vertreten durch:</span>
              <br />
              <span>Geschäftsführer Silvio Bräuer, Ricardo Kopp</span>
              <br />
            </p>
            <br />
            <span className="font-semibold">Kontakt</span>
            <br />
            <span>
              E-Mail:{" "}
              <a
                className="hover:text-yellow-1 transition-all ease-in-out duration-150"
                href="mailto: info@ekd-solar.de ">
                info@ekd-solar.de
              </a>
            </span>
            <span>&nbsp;</span>
            <br />
            <span>Telefon: </span>
            <span>
              <a
                className="hover:text-yellow-1 transition-all ease-in-out duration-150"
                href="tel:+49 342 98 98 990">
                +49 342 98 98 990
              </a>
            </span>
          </p>

          <div className="mt-4">
            <p className="font-semibold">Umsatzsteuer-ID</p>

            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
            </p>
            <p>DE318392423</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </p>

            <p>Berufsbezeichnung: Photovoltaik + Stromspeicher Installateur</p>
            <p>Zuständige Kammer:</p>
            <p>Verliehen durch:</p>
            <p>Es gelten folgende berufsrechtliche Regelungen:</p>
            <p>Regelungen einsehbar unter:</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">EU-Streitschlichtung</p>

            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <Link href="https://ec.europa.eu/consumers/odr" passHref>
                <a
                  target="__blank"
                  className="hover:text-yellow-1 transition-all ease-in-out duration-150">
                  LINK
                </a>
              </Link>
              .
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">
              Verbraucher­streit­beilegung/ Universal­schlichtungs­stelle
            </p>

            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold mb-2">Haftung für Inhalte</p>

            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Haftung für Links</p>

            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Urheberrecht</p>

            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>

            <p className="mt-3">
              Quelle:{" "}
              <Link
                href="https://www.e-recht24.de/impressum-generator.html"
                passHref>
                <a
                  target="__blank"
                  className="hover:text-yellow-1 transition-all ease-in-out duration-150">
                  https://www.e-recht24.de/impressum-generator.html
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
