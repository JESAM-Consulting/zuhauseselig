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
            <span className="font-bold">FE Leads GmbH</span>
          </p>
          <p>
            <span>Zollpfad 4</span>
            <br />
            <span>D-28217 Bremen</span>
          </p>
          <br />

          <p>Zertifizierter Partner der Energiekonzepte Deutschland GmbH</p>
          <p>
            <br />
            <span>Registergericht: Amtsgericht Bremen</span>
            <br />
            <span>HRB 38018</span>
            <br />
            <span>USt.-Ident.-Nr. DE353153929</span>
            <br />
            <br />
            <span>
              E-Mail:{" "}
              <a
                className="text-green-15"
                href="mailto: datenschutz@fe-leads.de">
                datenschutz@fe-leads.de
              </a>
            </span>
            <span>&nbsp;</span>
            <br />
            <span>Telefon: </span>
            <span>
              <a className="text-green-15" href="tel:0421 6485230">
                0421 6485230
              </a>
            </span>
          </p>
          <p>
            <br />
            <span>vertreten durch den Geschäftsführer:</span>
            <br />
            <span>Pouria Daftari</span>
            <br />

            <span className="font-semibold">
              Verbraucherinformation gemäß Verordnung EU Nr. 524/2013
            </span>
          </p>

          <p>
            <br />
            <span>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit. Die Plattform finden Sie unter{" "}
              <a
                href="http://ec.europa.eu/consumers/odr/"
                className="text-green-15">
                http://ec.europa.eu/consumers/odr/
              </a>
            </span>
            <br />
            <br />
          </p>

          <p>
            <span>
              Unsere Email-Adresse lautet:{" "}
              <a href="mailto: impressum@fe-leads.de" className="text-green-15">
                impressum@fe-leads.de
              </a>
            </span>
          </p>
          <p>
            <br />
            <span className="text-semibold">
              Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
            </span>
            <br />
            <br />
            <span>
              Die FE Leads GmbH sind nicht bereit und verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen. Rechtlicher Hinweis
            </span>

            <br />
            <span>
              Die Texte, Bilder, Grafiken, Animationen, Video- und Audiodateien
              sowie alle weiteren Inhalte auf dieser Webseite unterliegen den
              gesetzlichen Bestimmungen des Urheberrechts und ggf. weiteren
              Rechten des geistigen Eigentums. Der geschützte Inhalt dieser
              Webseite darf ohne Einwilligung des Rechtsinhabers nicht
              vervielfältigt, verbreitet, wiedergegeben, öffentlich zugänglich
              gemacht oder sonst verwertet werden.
            </span>
            <br />
            <br />

            <span>
              Änderungen von Konstruktion, Ausstattung und Lieferumfang sowie
              Abweichungen im Farbton sowie Irrtümer bleiben vorbehalten. Alle
              angegebenen Preise sind unverbindlich.
            </span>
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
