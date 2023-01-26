import React, { useState, useEffect } from "react";
import NavTop from "../components/NavTop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Datenschutz() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="font-visby">
      <NavTop />
      <Header />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={`${
          scrollPosition > 300 ? " fixed " : " hidden "
        } md:p-2 p-1 md:bottom-10 bottom-10 right-10 md:right-14 z-50 rounded-full bg-green-1 hover:-translate-y-1 transition-all ease-linear duration-200`}>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff">
          <path d="M 16 6.59375 L 15.28125 7.28125 L 2.78125 19.78125 L 4.21875 21.21875 L 16 9.4375 L 27.78125 21.21875 L 29.21875 19.78125 L 16.71875 7.28125 Z" />
        </svg>
      </button>
      <div className="datenschutz-all-content-alignment">
        <div className="cus-container">
          <div className="datenschutz-first-text">
            <p className="mb-3">
              Hier finden Sie unsere Informationen zum Datenschutz für:
              <a href="https://www.solar-pvcheck.de/" target="_blank"  rel="noreferrer">
                https://www.solar-pvcheck.de/
              </a>
            </p>
          </div>
          <div className="first-text-style">
            <p className="font-medium text-base mb-3">
              Damit Sie wissen, wie und warum Ihre Daten verwendet werden, ist
              es wichtig, dass Sie diese Datenschutzerklärung und alle weiteren
              Hinweise zum Datenschutz und fairer Datenverarbeitung lesen, die
              wir Ihnen im Zusammenhang mit der Erhebung und Verarbeitung Ihrer
              personenbezogenen Daten bei bestimmten Gelegenheiten zur Verfügung
              stellen.
            </p>
            <p className="font-medium text-base mb-3">
              Wir beziehen uns bei den verwendeten Begrifflichkeiten auf die
              Definitionen gem. Art. 4 EU-Datenschutz-Grundverordnung (DS-GVO):
            </p>
            <ul className="list-type pl-3 pb-3">
              <li>Hinweis zur verantwortlichen Stelle</li>
            </ul>
            <p className="font-medium text-base mb-3">
              Die verantwortliche Stelle für die Verarbeitung Ihrer
              personenbezogenen Daten auf dieser Website ist:
            </p>
            <p className="font-medium text-base mb-3">FE Leads GmbH</p>
            <p className="font-medium text-base mb-3">Zollpfad 4</p>
            <p className="font-medium text-base mb-3">D-28217 Bremen</p>
            <p className="font-medium text-base mb-3">
              Zertifizierter Partner der Energiekonzepte Deutschland GmbH
            </p>
            <p className="font-medium text-base mb-3">
              Registergericht: Amtsgericht Bremen
            </p>
            <p className="font-medium text-base mb-3">HRB 38018</p>
            <p className="font-medium text-base mb-3">
              USt.-Ident.-Nr. DE353153929
            </p>
            <a
              href="mailto: datenschutz@fe-leads.de"
              className="font-medium text-base mb-3 block"
            >
              E-Mail: datenschutz@fe-leads.de{" "}
            </a>
            <a
              href="tel:0421 6485230"
              className="font-medium text-base mb-3 block"
            >
              Telefon: 0421 6485230
            </a>
            <p className="font-medium text-base mb-3">
              vertreten durch den Geschäftsführer:
            </p>
            <p className="font-medium text-base mb-3">Pouria Daftari</p>
            <p className="font-medium text-base mb-3">
              Wir haben einen Datenschutzbeauftragten benannt. Sie erreichen
              diesen bei Fragen zum Datenschutz unter:
            </p>
            <p className="font-medium text-base mb-3">
              Florian Melzer, Patronus Services GmbH,{" "}
              <a
                className="new-orange-text"
                href="http://www.patronus-datenservice.de/"
                target="_blank"  rel="noreferrer"
              >
                {" "}
                www.patronus-datenservice.de
              </a>
            </p>
            <a
              href="mailto: datenschutz@fe-leads.de"
              className="font-medium text-base mb-3 block"
            >
              E-Mail: datenschutz@fe-leads.de
            </a>
            <ul className="list-type pl-3 pb-3">
              <li className="text-lg font-bold">Kurzfassung</li>
            </ul>
            <p className="font-medium text-base mb-3">
              Für den Betrieb unserer Webseite ist es notwendig Daten zu
              verarbeiten. Um Ihre Anfrage abwickeln zu können, benötigen wir
              Ihre Anfragedaten. Um unser Webangebot für Sie stetig zu
              verbessern, setzen wir auf die Unterstützung von Analyse- und
              Marketingdiensten. Wir arbeiten mit einigen Dienstleistern und
              Partnern zusammen, die zweckgebunden Ihre Daten erhalten können.
            </p>
            <ul className="list-type pl-3 pb-3">
              <li className="text-lg font-bold">Server-Log-Dateien</li>
            </ul>
            <p className="font-medium text-base mb-3">
              Der Provider der Seite erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die ihr Browser
              automatisch an uns übermittelt und uns zur Verfügung stellt.
            </p>
            <p className="text-lg font-bold pb-3">Dies sind:</p>
            <ul className="list-type pl-3 pb-3">
              <li className="text-lg pb-2">Browsertyp und Browserversion</li>
              <li className="text-lg pb-2">verwendetes Betriebssystem</li>
              <li className="text-lg pb-2">Referrer URL</li>
              <li className="text-lg pb-2">
                Hostname des zugreifenden Rechners
              </li>
              <li className="text-lg pb-2">Uhrzeit der Serveranfrage</li>
              <li className="text-lg pb-2">IP-Adresse</li>
            </ul>
            <p className="font-medium text-base mb-3">
              Eine Speicherung dieser Daten zusammen mit anderen
              personenbezogenen Daten des Nutzers findet nicht statt. Grundlage
              für die Datenverarbeitung ist Art. 6 Abs. 1 b, f DS-GVO. Die
              Speicherung in Logfiles erfolgt, um eine Auslieferung der Website
              an den Rechner des Nutzers zu ermöglichen und die
              Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns
              die Daten zur technischen Optimierung der Website und zur
              Sicherstellung der Sicherheit unserer informationstechnischen
              Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in
              diesem Zusammenhang nicht statt. Hierin liegt auch zugleich unser
              berechtigtes Interesse.
            </p>
            <ul className="list-type pl-3 pb-3">
              <li className="text-lg font-bold">
                Hosting: Amazon Web Services
              </li>
            </ul>
            <p className="font-medium text-base mb-3">
              Teile der Datenbank- und Webinhalte unserer Website hosten wir bei
              Amazon Web Services („AWS“) der Amazon Web Services, Inc., P.O.
              Box 81226, Seattle, WA 98108-1226, USA. Unsererseits bestehen nur
              eng begrenzte Zugriffsrechte und die Daten werden automatisch
              verschlüsselt.
            </p>
            <p className="font-medium text-base mb-3">
              Die Datenverarbeitung kann insoweit teilweise auch außerhalb der
              EU oder des EWR erfolgen. Sofern AWS dadurch Ihre
              personenbezogenen Daten in die USA übermittelt, werden wir u.a.
              durch die Verwendung von Standardvertragsklauseln der
              EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO), Sicherungsmaßnahmen
              ergreifen, um Ihre personenbezogenen Daten bestmöglich schützen zu
              können.
            </p>
            <p className="font-medium text-base mb-3">
              Da Amazon eine Unternehmensgruppe mit Sitz des
              „Mutterunternehmens“ in den USA ist, kann Amazon auch
              Datenanfragen von US-Behörden unterliegen, deren daran
              anschließende Datenverwendung durch die Behörden mindestens unklar
              ist. Gegen diese Anfragen besteht kein dem Niveau in der EU
              vergleichbarer Rechtsschutz, so dass hier ein erhöhtes Risiko für
              Ihre Rechte und Freiheiten besteht.
            </p>
            <p className="font-medium text-base mb-3">
              Für den Datentransfer in die USA hat Amazon sog.
              Standarddatenschutzklauseln nach Art. 46 Abs. c 2 DS-GVO
              abgeschlossen.
            </p>
            <p className="font-medium text-base mb-3">
              Die Übermittlung Ihrer personenbezogenen Daten zu diesen Zwecken
              erfolgt aufgrund unseres berechtigten Interesses Ihnen die
              technische Infrastruktur unserer Website, insbesondere Webserver
              und Datenbanken, bereitstellen zu können, Art. 6 Abs. 1 lit. f
              DS-GVO.
            </p>
            <p className="font-medium text-base mb-3">
              Nähere Informationen zu AWS und zum Datenschutz finden Sie unter
              <a
                href="https://aws.amazon.com/de/compliance/eu-data-protection/"
                target="_blank"  rel="noreferrer"
              >
                 https://aws.amazon.com/de/compliance/eu-data-protection/ sowie
              </a>{" "}
              unter{" "}
              <a href="https://aws.amazon.com/de/privacy/" target="_blank"  rel="noreferrer">
                https://aws.amazon.com/de/privacy/
              </a>
              .
            </p>
            <ul className="list-type pl-3 pb-3">
              <li className="text-base pb-3">Kommunikation</li>
              <li className="text-base pb-3">
                Gratis Anfrage/ Vermittlung von Aufträgen
              </li>
            </ul>
            <p className="font-medium text-base mb-3">
              Sie können das Angebot der Vermittlung Ihrer Anfrage an
              verschiedene Fachbetriebe in Ihrer Region über das Ausfüllen
              unseres Anfragenformulars in Anspruch nehmen. Dabei verarbeiten
              wir folgende Daten von Ihnen:
            </p>
            <p className="font-bold text-base mb-3">Zu Ihnen</p>
            <ul className="list-type pl-3 pb-3">
              <li className="text-base pb-3">
                Vor- und Nachname, Postleitzahl
              </li>
              <li className="text-base pb-3">Telefon, E-Mail-Adresse</li>
            </ul>
            <p className="font-bold text-base mb-3">Zum Projekt</p>
            <ul className="list-type pl-3 pb-3">
              <li className="text-base pb-3">Stromverbrauch im Jahr</li>
              <li className="text-base pb-3">Dachform</li>
              <li className="text-base pb-3">
                Wohn- und Eigentumssituation der betreffenden Immobilie
              </li>
            </ul>
            <p className="font-medium text-base mb-3">
              Sie beauftragen uns dabei mit der Weiterleitung Ihrer Anfrage an
              Fachbetriebe (dazu gehören ggf. auch Händler und Hersteller). Wir
              verarbeiten die mitgeteilten Daten, um Ihre Anfrage zu bearbeiten
              und mit Ihnen Ihre Anfrage ggf. telefonisch oder per WhatsApp, SMS
              oder E-Mail zu konkretisieren. Die Fachbetriebe werden mit Ihnen
              zur Angebotserstellung telefonisch oder per WhatsApp, SMS oder
              E-Mail Kontakt aufnehmen.
            </p>
            <p className="font-medium text-base mb-3">
              Wir und die Fachbetriebe verarbeiten die Daten auf Grundlage des
              Art. 6 Abs. 1 b DS-GVO, nämlich zur Anbahnung eines
              Vertragsverhältnisses auf Ihre Anfrage und bei Vertragsschluss
              auch zur Durchführung und Beendigung dieses und Art. 6 Abs. 1 f
              DS-GVO. Unser berechtigtes Interesse folgt aus der Beantwortung
              Ihrer Anfrage.
            </p>
            <p className="font-medium text-base mb-3">
              In der Regel bewahren wir Ihre Daten aus handels- und
              steuerrechtlichen Gründen bis zu 10 Jahren auf und für etwaige
              Gewährleistungsansprüche bis zu 2 Jahren. Bei bloßen Anfragen
              löschen wir diese grundsätzlich nach 1 Jahr. Näheres erfahren Sie
              weiter unten.
            </p>
            <p className="font-medium text-base mb-3">
              Ohne Angabe Ihrer Daten, können wir Ihre Anfrage nicht bearbeiten.
            </p>
            <ul className="list-type pl-3 pb-3">
              <li className="text-base pb-3">Werbung (§ 7 UWG)</li>
            </ul>
            <p className="font-medium text-base mb-3">
              Wir möchten Sie gerne auch in Zukunft darüber informieren
              (vorausgesetzt, Sie haben uns einen Vermittlungsauftrag erteilt),
              was es bei uns Neues gibt und im Zusammenhang mit Ihrer letzten
              Vermittlungsanfrage bei uns steht – also Werbung. Dafür nutzen wir
              Ihre Kontaktdaten wie E-Mail-Adresse und Namen. Rechtsgrundlage
              für diese Verarbeitung ist Art. 6 Abs. 1 f DS-GVO. Wir haben ein
              berechtigtes Interesse an einer werblichen Nutzung Ihrer Daten,
              wenn Sie einmal bei uns einen Vermittlungsauftrag ausgelöst haben.
            </p>
            <p className="font-bold text-lg text-base mb-3">Widerspruch</p>
            <p className="font-bold text-base mb-3">
              Sie können gegen die Verarbeitung Ihrer personenbezogenen Daten zu
              Zwecken der Direktwerbung jederzeit kostenfrei Widerspruch
              einlegen. Näheres entnehmen Sie bitte den Informationen zu Ihren
              Rechten weiter unten.
            </p>
            <ul className="list-type pl-3 pb-3">
              <li className="text-lg font-bold">
                Cookies, Drittanbieter Tools und Services
              </li>
            </ul>
            <ul className="list-type pl-8 pb-3">
              <li className="text-base font-medium">
                Cookies und Speicherelemente
              </li>
            </ul>
            <p className="font-medium text-base mb-3">
              Wir verwenden teilweise so genannte Cookies und andere
              Speicherelemente. Cookies richten auf Ihrem Rechner keinen Schaden
              an und enthalten keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
              sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und
              die Ihr Browser speichert.
            </p>
            <p className="font-medium text-base mb-3">
              Die meisten der von uns verwendeten Cookies sind so genannte
              “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch
              gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert
              bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren
              Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="font-medium text-base mb-3">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <ul className="list-type pl-8 pb-3">
              <li className="text-base font-medium">Google</li>
            </ul>
            <p className="font-medium text-base mb-3">
              Wir setzten verschiedene Dienste von „Google“ ein. Google ist ein
              Konzern aus mehreren Unternehmen. Welches Unternehmen konkret für
              den in Anspruch genommenen Dienst und der damit einhergehenden
              Datenverarbeitung verantwortlich ist, teilen wir Ihnen bei der
              jeweiligen Dienstbeschreibung mit. Soweit im Folgenden nicht
              abweichend benannt, ist für die Datenverarbeitung Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland
              verantwortlich.
            </p>
            <p className="font-medium text-base mb-3">
              Durch den Besuch unserer Website erhält Google die Information,
              dass Sie die entsprechende Unterseite unserer Website aufgerufen
              haben. Soweit im Folgenden nicht abweichend beschrieben, werden
              mindestens die unter Ziff. 4 genannten Daten an Google
              übermittelt. Dies erfolgt unabhängig davon, ob Google ein
              Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob
              kein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind,
              werden Ihre Daten direkt Ihrem Konto zugeordnet. Wenn Sie die
              Zuordnung mit Ihrem Profil bei Google nicht wünschen, müssen Sie
              sich vor Aktivierung des Buttons ausloggen. Google speichert Ihre
              Daten als Nutzungsprofile und kann sie für Zwecke der Werbung,
              Marktforschung und/oder bedarfsgerechten Gestaltung seiner Dienste
              nutzen. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung
              dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google
              richten müssen. Google übermittelt die Daten über Ihr
              Nutzungsverhalten insbesondere an die Google LLC und ggf. Alphabet
              Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA zur
              eigenständigen Verarbeitung durch diese.
            </p>
            <p className="font-medium text-base mb-3">
              Google kann Ihre Daten an Server weltweit übermitteln. Davon sind
              auch Standorte in Länder ohne angemessenen Datenschutzniveau
              betroffen. Für den Datentransfer z.B. in die USA hat Google sog.
              Standarddatenschutzklauseln nach Art. 46 Abs. 2 lit. c DS-GVO
              abgeschlossen. Da Google zu einer Unternehmensgruppe mit Sitz des
              „Mutterunternehmens“ in den USA gehört, kann Google auch
              Datenanfragen von US-Behörden unterliegen, deren daran
              anschließende Datenverwendung durch die Behörden mindestens unklar
              ist. Gegen diese Anfragen besteht derezit kein dem Niveau in der
              EU vergleichbarer Rechtsschutz, so dass hier ein erhöhtes Risiko
              für Ihre Rechte und Freiheiten besteht.
            </p>
            <p className="font-medium text-base mb-3">
              Wir haben keinen Einfluss auf die weitere Datenverarbeitung durch
              Google, über die genannten Zwecke hinaus. Die gegebenen
              Informationen stellen daher lediglich unseren aktuellen
              Kenntnisstand dar.
            </p>

            <p className="font-medium text-base mb-3">
              Nähere Informationen zum Datenschutz bei Google finden Sie unter:
            </p>
            <a
              className="font-medium text-base mb-3 block"
              href="https://policies.google.com/privacy"
              target="_blank"  rel="noreferrer"
            >
              https://policies.google.com/privacy.
            </a>
            <p className="font-medium text-base mb-3">
              Widerspruchsmöglichkeit gegen die Datenverwendung durch Google
              finden Sie hier:
            </p>
            <p className="font-medium text-base mb-3">
              Opt-Out-Plugin:{" "}
              <a
                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"  rel="noreferrer"
              >
                http://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              ,
            </p>
            <p className="font-medium text-base mb-3">
              Einstellungen für die Darstellung von Werbeeinblendungen unter:{" "}
            </p>
            <p className="font-medium text-base mb-3">
              <a
                href="https://myadcenter.google.com/?sasb=true"
                target="_blank"  rel="noreferrer"
              >
                https://adssettings.google.com/authenticated.
              </a>
            </p>
            <ul className="list-type pl-8 pb-3">
              <li className="text-base font-medium">Google Tag Manager</li>
            </ul>
            <p className="font-medium text-base mb-3">
              Wir verwenden auf unserer Website den Google Tag Manager. Der
              Google Tag Manager ist ein Dienst von Google, der unter anderem
              andere Dienste nachladen kann. Dies geschieht mit sogenannten
              Tags. Ein Tag ist ein Code-Schnipsel.
            </p>
            <p className="font-medium text-base mb-3">
              Mit dieser Anwendung werden JavaScript-Tags, Pixel oder HTML-Tags
              verwaltet, die zur Implementierung insbesondere von Tracking- und
              Analyse-Tools verwendet werden. Durch den Tag Manager wird damit
              ein zentraler Ort geschaffen, über den alle Tools gestartet und
              auch wieder ausgeschaltet werden können. Die Datenverarbeitung
              dient dem Zweck der bedarfsgerechten Gestaltung und der
              Optimierung unserer Website.
            </p>
            <p className="font-medium text-base mb-3">
              Der Google Tag Manager ermöglicht die Auslösung weiterer Tags, die
              personenbezogene Daten erheben und verarbeiten können.
            </p>

            <p className="font-medium text-base mb-3">
              Den Einsatz des Google Tag Managers stützen wir auf Ihre
              freiwillige Einwilligung Art. 6 Abs. 1 lit. a DS-GVO.
            </p>
            <p className="font-bold text-lg mb-3">Widerruf</p>
            <p className="font-medium text-base mb-3">
              <mark>
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die
                Zukunft widerrufen, indem Sie die Cookie-Einstellungen [HIER DEN
                LINK ZU DEN EINSTELLUNGSMÖGLICHKEITEN DES CONSENT-TOOLS SETZEN]
                aufrufen und dort Ihre Auswahl ändern. Die Rechtmäßigkeit der
                aufgrund der Einwilligung bis zum Widerruf erfolgten
                Verarbeitung bleibt davon unberührt.
              </mark>
            </p>
            <ul className="list-type pl-8 pb-3">
              <li className="text-base font-medium">Google Analytics</li>
            </ul>
            <p className="font-medium text-base mb-3">
              Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser
              Website Google Analytics eingesetzt.
            </p>
            <p className="font-bold text-base mb-3">
              Warum setzen wir Google Analytics ein?
            </p>
            <p className="font-medium text-base mb-3">
              Unsere Webseite soll Sie ansprechen und Ihnen den bestmöglichen
              Service bieten. Die Statistiken und Daten von Google Analytics
              helfen uns dabei.
            </p>
            <p className="font-medium text-base mb-3">
              Durch die Daten und Auswertungen von GA, sehen wir, welche
              Bereiche unseres Webangebotes Sie besonders ansprechen und bei
              welchen wir noch Optimierungsbedarf haben. Darüber hinaus helfen
              uns die Daten, Sie als Besucher besser zu verstehen. Die Daten
              dienen uns auch, unsere Werbe- und Marketing-Maßnahmen
              individueller und kostengünstiger durchzuführen. Schließlich macht
              es nur Sinn, unsere Produkte und Dienstleistungen Menschen zu
              zeigen, die sich dafür interessieren. Google Analytics verwendet
              Cookies, die eine Analyse der Benutzung unserer Webseiten durch
              Sie ermöglichen. Die mittels der Cookies erhobenen Informationen
              über Ihre Benutzung dieser Website werden in der Regel an einen
              Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p className="font-bold text-lg mb-3">Betroffene Daten</p>
            <p className="font-medium text-base mb-3">
              Während Ihres Website-Besuchs wird Ihr Nutzerverhalten in Form von
              „Ereignissen“ erfasst. Ereignisse können sein:
            </p>
            <ul className="list-type">
              <li className="text-base font-medium pb-3">Seitenaufrufe</li>
              <li className="text-base font-medium pb-3">
                Erstmaliger Besuch der Website
              </li>
              <li className="text-base font-medium pb-3">Start der Sitzung</li>
              <li className="text-base font-medium pb-3">
                Ihr „Klickpfad“, Interaktion mit der Website
              </li>
              <li className="text-base font-medium pb-3">
                Scrolls (immer, wenn ein Nutzer bis zum Seitenende (90%)
                scrollt)
              </li>
              <li className="text-base font-medium pb-3">
                Klicks auf externe Links{" "}
              </li>
              <li className="text-base font-medium pb-3">
                interne Suchanfragen
              </li>
              <li className="text-base font-medium pb-3">
                Interaktion mit Videos
              </li>
              <li className="text-base font-medium pb-3">Dateidownloads</li>
              <li className="text-base font-medium pb-3">
                gesehene / angeklickte Anzeigen
              </li>
              <li className="text-base font-medium pb-3">Spracheinstellung</li>
            </ul>
            <p className="font-medium text-base mb-3">Außerdem wird erfasst:</p>
            <ul className="list-type">
              <li className="text-base font-medium pb-3">Ihr ungefährer Standort (Region)</li>
              <li className="text-base font-medium pb-3">Ihre IP-Adresse (in gekürzter Form)
</li>
              <li className="text-base font-medium pb-3">technische Informationen zu Ihrem Browser und den von Ihnen genutzten Endgeräten (z.B. Spracheinstellung, Bildschirmauflösung)</li>
              <li className="text-base font-medium pb-3">Ihr Internetanbieter</li>
              <li className="text-base font-medium pb-3">die Referrer-URL (über welche Website/ über welches Werbemittel Sie auf diese Website gekommen sind)
</li>
            </ul>
            <p className="font-bold text-lg mb-3">
            Google Analytics Berichte zu demografischen Merkmalen und Interessen

            </p>
            <p className="font-medium text-base mb-3">
            Wir haben in Google Analytics die Funktionen für Werbeberichte eingeschaltet. Die Berichte zu demografischen Merkmalen und Interessen enthalten Angaben zu Alter, Geschlecht und Interessen. Damit können wir uns – ohne diese Daten einzelnen Personen zuordnen zu können – ein besseres Bild von unseren Nutzern machen. Google verarbeitet die Daten und wir bekommen Berichte über Ihr Nutzerverhalten.
             Dabei kann es sich unter anderem um folgende Berichte handeln:
            </p>
            <p className="font-medium text-base mb-3">
            <b>Zielgruppenberichte:</b> Über Zielgruppenberichte lernen wir unsere Nutzer besser kennen und wissen genauer, wer sich für 
            unser Service interessiert.
            </p>
            <p className="font-medium text-base mb-3">
            <b>Anzeigeberichte:</b> Durch Anzeigeberichte können wir unsere Onlinewerbung leichter analysieren und verbessern.
            </p>
            <p className="font-medium text-base mb-3">
            <b>Akquisitionsberichte:</b> Akquisitionsberichte geben uns hilfreiche Informationen darüber, wie wir 
            mehr Menschen für unser Service begeistern können.
            </p>
            <p className="font-medium text-base mb-3">
            <b>Verhaltensberichte:</b> Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir können nachvollziehen welchen Weg Sie auf unserer Seite zurücklegen 
            und welche Links Sie anklicken.
            </p>
            <p className="font-medium text-base mb-3">
            <b>Conversionsberichte:</b> Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer Marketing-Botschaft eine gewünschte Handlung ausführen. Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem Käufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate 
            steigern.
            </p>
            <p className="font-medium text-base mb-3">
              
<b>Echtzeitberichte:</b> Hier erfahren wir immer sofort, was gerade auf unserer Website passiert. Zum Beispiel sehen wir wie viele Nutzer gerade diesen Text lesen.

            </p>
            <p className="font-medium text-base mb-3">
              <mark>[OPTIONAL: Wir nutzen die Funktion Nutzer-ID. Mithilfe der Nutzer ID können wir einer oder mehreren Sitzungen (und den Aktivitäten innerhalb dieser Sitzungen) eine eindeutige, dauerhafte ID zuweisen und Nutzerverhalten geräteübergreifend analysieren.]</mark>
            </p>
            <p className="font-medium text-base mb-3">
              <mark>[OPTIONAL: Wir nutzen Google Signale. Damit werden in Google Analytics zusätzliche Informationen zu Nutzern erfasst, die personalisierte Anzeigen aktiviert haben (Interessen und demographische Daten) und Anzeigen können in geräteübergreifenden Remarketing-Kampagnen an diese Nutzer ausgeliefert werden.]
</mark>
            </p>
            <p className="font-medium text-base mb-3">
            Mehr über die Werbefunktionen erfahren Sie auf 
            <a href="https://support.google.com/analytics/answer/3450482?hl=de_AT&utm_id=ad" target="_blank"  rel="noreferrer">https://support.google.com/analytics/answer/3450482?hl=de_AT&utm_id=ad</a>.
            </p>
            <p className="font-medium text-base mb-3">
              <mark>
              Sie können die Nutzung der Aktivitäten und Informationen Ihres Google Kontos unter “Einstellungen für Werbung” auf 
              <a href="https://myadcenter.google.com/?sasb=true" target="_blank"  rel="noreferrer">
              https://adssettings.google.com/authenticated
              </a> per Checkbox beenden.
              </mark>
            </p>
            <p className="font-bold text-lg mb-3">
            IP-Anonymisierung
            </p>
            <p className="font-medium text-base mb-3">
            Bei Google Analytics ist die Anonymisierung von IP-Adressen standardmäßig aktiviert. Aufgrund der IP-Anonymisierung wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird laut Google nicht mit anderen Daten 
            von Google zusammengeführt.
            </p>
            <p className="font-bold text-lg mb-3">Speicherdauer</p>
            <p className="font-medium text-base mb-3">
              <mark>
              Die von uns gesendeten und mit Cookies verknüpften Daten werden nach 2 [ODER: 14 Monaten] 
              automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.
              </mark>
            </p>
            <p className="font-bold text-lg mb-3">
            Rechtsgrundlage
            </p>
            <p className="font-medium text-base mb-3">Rechtsgrundlage für diese Datenverarbeitung ist Ihre Einwilligung gem. Art.6 Abs.1 S.1 lit. a DS-GVO </p>
            <ul className="list-type pl-8">
              <li className="font-medum text-base pb-3">Löschen</li>
            </ul>
            <p className="font-medium text-base mb-3">
            Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist, einschließlich der Erfüllung gesetzlicher Rechnungslegungs- 
            oder Meldevorschriften.
            </p>
            <p className="font-medium text-base mb-3">
            Wir sind gesetzlich verpflichtet, grundlegende Informationen zu unseren Kunden (einschließlich Kontakt-, Identitäts- und Transaktionsdaten, Geschäftsbriefe) aus steuerlichen sowie handelsrechtlichen Gründen für die Dauer von sechs Jahren nach Beendigung der Geschäftsbeziehung bzw. zehn Jahren nach Ende des laufenden Steuerjahrs, in dem die Rechnung erstellt wurde 
            aufzubewahren (§ 257 HGB, § 147 AO u.a.).
            </p>
            <p className="font-medium text-base mb-3">
            Im Einzelfall gelten gesonderte Löschfristen, was wir dann in den jeweiligen Abschnitten 
            herausgestellt haben.
            </p>
            <p className="font-medium text-base mb-3">
            Unter bestimmten Umständen können Sie die Löschung Ihrer personenbezogenen Daten verlangen: nähere Informationen dazu finden Sie unter 
            „Recht auf Löschung“.
            </p>
            <ul className="list-type pl-8">
              <li className="font-medum text-base pb-3">Ihre Rechte</li>
            </ul>
            <p className="font-medium text-base mb-3">In bestimmten Fällen haben Sie in Bezug auf Ihre personenbezogenen Daten folgende Rechte:</p>
            <p className="font-medium text-base mb-3">
            Recht auf Auskunft (Art. 15 DS-GVO) über Ihre personenbezogenen Daten, welche wir verarbeiten. Aufgrund dieses Rechts können Sie eine Kopie Ihrer bei uns gespeicherten personenbezogenen Daten erhalten und überprüfen, ob wir diese 
            Daten rechtmäßig verarbeiten.
            </p>
            <p className="font-medium text-base mb-3">
            Recht auf Berichtigung (Art. 16 DS-GVO) Ihrer bei uns gespeicherten personenbezogenen Daten. Aufgrund dieses Rechts können Sie bei uns gespeicherte unvollständige oder unrichtige Daten berichtigen lassen, auch wenn wir die Richtigkeit, der von Ihnen zur Verfügung gestellten neuen Daten möglicherweise überprüfen 
            müssen.
            </p>
            <p className="font-medium text-base mb-3">
            Recht auf Löschung (Art. 17 DS-GVO) Ihrer personenbezogenen Daten. Aufgrund dieses Rechts können Sie von uns die Löschung oder Entfernung von personenbezogenen Daten verlangen, wenn kein triftiger Grund für deren weitere Verarbeitung vorliegt. Sie können von uns auch die Löschung oder Entfernung Ihrer personenbezogenen Daten verlangen, wenn Sie Ihr Recht auf Widerspruch gegen die Verarbeitung erfolgreich ausgeübt haben (siehe unten), wenn wir Ihre Daten unrechtmäßig verarbeitet haben oder wenn wir zur Einhaltung lokaler Rechtsvorschriften zur Löschung verpflichtet sind. Möglicherweise kann Ihrem Löschungsantrag aus rechtlichen Gründen nicht immer nachgekommen werden, was Ihnen jedoch gegebenenfalls zum Zeitpunkt der Beantragung 
            mitgeteilt wird.

            </p>
            <p className="font-medium text-base mb-3">
            Recht auf Einschränkung der Verarbeitung (Art. 18 DS-GVO) Ihrer personenbezogenen Daten. Aufgrund dieses Rechts können Sie uns in folgenden Fällen zur Aussetzung der Verarbeitung Ihrer personenbezogenen Daten auffordern: (a) wenn Sie möchten, dass wir die Richtigkeit dieser Daten feststellen; (b) wenn die Verwendung der Daten durch uns zwar unrechtmäßig ist, Sie aber gegen die Löschung sind; (c) wenn Sie möchten, dass wir die Daten länger als für uns notwendig speichern, da Sie diese zur Begründung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen; oder (d) wenn Sie der Verwendung Ihrer Daten durch uns widersprochen haben, wir aber prüfen müssen, ob vorrangige berechtigte Gründe für ihre 
            Verwendung vorliegen.
            </p>
            <p className="font-medium text-base mb-3">
            Recht auf Übertragbarkeit (Art. 20 DS-GVO) Ihrer personenbezogenen Daten an Sie oder einen Dritten. Wenn Sie dies wünschen, stellen wir Ihnen oder einem von Ihnen benannten Dritten eine Kopie Ihrer personenbezogenen Daten in einem strukturierten, gängigen, maschinenlesbaren Format zur Verfügung. Dieses Recht gilt jedoch nur für automatisierte Daten, in deren Verwendung Sie ursprünglich eingewilligt haben bzw. die zur Erfüllung eines Vertrags mit Ihnen verwendet 
            wurden.
            </p>
            <p className="font-medium text-base mb-3">
            Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DS-GVO) Ihrer personenbezogenen Daten. Dieses Recht besteht, wenn wir uns auf ein berechtigtes Interesse (oder das eines Dritten) berufen und Ihre besondere Situation Sie dazu veranlasst, der Verarbeitung aus diesem Grund zu widersprechen, da Sie Ihre Grundrechte und Grundfreiheiten beeinträchtigt sehen. Ein Widerspruchsrecht haben Sie auch, wenn Ihre personenbezogenen Daten verarbeitet werden, um Direktwerbung zu betreiben. In manchen Fällen weisen wir möglicherweise zwingende schutzwürdige Gründe für die Verarbeitung nach, die Ihre Rechte und Freiheiten 
            überwiegen
            </p>
            <p className="font-medium text-base mb-3">
            Recht, nicht einer automatisierten Entscheidungsfindung (Art. 22 DS-GVO) (einschließlich Profiling) unterworfen zu werden, wenn Sie dies erheblich beeinträchtigen würde. Da wir uns an solchen Tätigkeiten nicht beteiligen, ist dieses Recht in der Praxis für Ihre Nutzung der Website 
            nicht relevant.
            </p>
            <p className="font-medium text-base mb-3">
            Recht, die Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3 DS-GVO), wenn wir für die Verarbeitung Ihrer personenbezogenen Daten Ihre Einwilligung benötigen. Dies hat jedoch keine Auswirkung auf die Rechtmäßigkeit der Verarbeitung vor dem Widerruf der Einwilligung. Wenn Sie Ihre Einwilligung widerrufen, können wir Ihnen bestimmte Produkte, Inhalte oder Dienstleistungen möglicherweise nicht mehr zur Verfügung stellen. Darüber werden wir Sie zum Zeitpunkt des Widerrufs jedoch in 
            Kenntnis setzen.
            </p>
            <p className="font-medium text-base mb-3">Recht, sich bei einer Aufsichtsbehörde zu beschweren.</p>
            <p className="font-medium text-base mb-3">Die für uns zuständige Aufsichtsbehörde ist die:</p>
            <p className="font-medium text-base mb-3">Bremen Datenschutzbehörde</p>
            <p className="font-medium text-base mb-3">Landesbeauftragte für Datenschutz: Imke Sommer
</p>
            <p className="font-medium text-base mb-3">Adresse: Arndtstraße 1, 27570 Bremerhaven.
</p>
<ul className="list-type pl-8">
              <li className="font-medum text-base pb-3">Änderungen dieser Datenschutzerklärung
</li>
            </ul>
            <p className="font-medium text-base mb-3">
            Diese Datenschutzerklärung kann jederzeit aktualisiert oder anderweitig geändert werden. Über sämtliche Änderungen unserer Datenschutzerklärung werden Sie durch Veröffentlichung der geänderten Fassung auf der Website in Kenntnis gesetzt.

            </p>
            <p className="font-medium text-base mb-3">
            Diese Version wurde zuletzt am unten angegebenen Datum geändert. Ältere Versionen können bei uns angefordert werden.
            </p>
            <p className="font-medium text-base mb-3">
            Zuletzt geändert am: 20.09.2022
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
