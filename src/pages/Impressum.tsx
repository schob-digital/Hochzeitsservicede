import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white flex flex-col">
      <nav className="w-full bg-sky-200/30 backdrop-blur-md shadow-sm py-4 text-black z-50">
        <div className="w-full flex justify-center items-center px-6 md:px-12">
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-[10px] lg:text-xs tracking-widest uppercase font-bold drop-shadow-md">
            <Link to="/#hochzeiten" className="hover:opacity-70 transition-opacity">Hochzeiten</Link>
            <Link to="/#ueber-mich" className="hover:opacity-70 transition-opacity whitespace-nowrap">Über mich</Link>
            
            <Link to="/" className="font-sans text-xl lg:text-3xl tracking-tight px-2 lg:px-8 drop-shadow-md flex items-center">
              <span className="font-semibold">HOCHZEITS</span>
              <span className="font-black">SERVICEDE</span>
            </Link>
            
            <Link to="/#kontakt" className="hover:opacity-70 transition-opacity">Kontakt</Link>
            <Link to="/impressum" className="hover:opacity-70 transition-opacity">Impressum</Link>
            <Link to="/datenschutz" className="hover:opacity-70 transition-opacity">Datenschutz</Link>
          </div>
          
          <Link to="/" className="md:hidden font-sans text-xl tracking-tight drop-shadow-md flex items-center">
             <span className="font-semibold">HOCHZEITS</span>
             <span className="font-black">SERVICEDE</span>
          </Link>
        </div>
      </nav>

      <main className="flex-1 py-32 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12 font-serif tracking-tight italic text-[#1a1a1a]" style={{ fontFamily: "'Georgia', serif" }}>
          Impressum
        </h1>
        
        <div className="space-y-8 font-sans text-base font-light tracking-wide leading-relaxed">
          <p>
            Die folgenden Angaben enthalten die Pflichtinformationen zu dieser Website und den angebotenen Leistungen.
          </p>

          <section>
            <h2 className="text-xl font-medium mb-4">Angaben gemäß § 5 DDG</h2>
            <p className="mb-2"><strong>Anbieter dieser Website</strong></p>
            <p>
              Vasily Schob<br />
              Straße der Jugend 18<br />
              14974 Ludwigsfelde<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:schobvasily.digital@gmail.com" className="underline hover:opacity-70">schobvasily.digital@gmail.com</a><br />
              Telefon: +49 156 78301732
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
            <p className="mb-2"><strong>Name und Anschrift des Versicherers</strong></p>
            <p>
              Hiscox SA, Niederlassung für Deutschland<br />
              Bernhard-Wicki-Str. 3<br />
              80636 München
            </p>
            <p className="mt-2">Geltungsraum der Versicherung: Weltweit</p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">EU-Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p className="mt-2">Meine E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf dieser Website nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">Haftung für Links</h2>
            <p>
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </main>

      <footer className="h-16 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 border-t border-gray-100 bg-white z-20 relative gap-4 md:gap-0 mt-auto">
        <div className="text-[9px] md:text-[10px] tracking-widest uppercase text-gray-400 mt-2 md:mt-0 text-center">
          © {new Date().getFullYear()} HochzeitServiceDe — Premium Hochzeitsfotografie
        </div>
        <div className="hidden md:flex space-x-4 text-[10px] tracking-widest uppercase">
          <Link to="/impressum" className="text-black font-semibold hover:opacity-70">Impressum</Link>
          <Link to="/datenschutz" className="text-black font-semibold hover:opacity-70">Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
}
