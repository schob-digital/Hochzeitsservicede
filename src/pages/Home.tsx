import { motion } from "motion/react";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import boatImg from "../Foto/boat.png";
import castleImg from "../Foto/castle.PNG";
import museumImg from "../Foto/museum.PNG";
import img3664 from "../Foto/IMG_3664.PNG";
import img3665 from "../Foto/IMG_3665.PNG";
import img3668 from "../Foto/IMG_3668.PNG";
import img3669 from "../Foto/IMG_3669.PNG";
import img3670 from "../Foto/IMG_3670.PNG";
import img3671 from "../Foto/IMG_3671.PNG";
import sunsetImg from "../Foto/sunset.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle hash scrolling when navigating back from other pages
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Handle transparent to solid navbar transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-[#1a1a1a] overflow-x-hidden selection:bg-[#1a1a1a] selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
          ? "bg-sky-200/30 backdrop-blur-md shadow-sm py-4 text-black"
          : "bg-transparent py-8 text-white"
          }`}
      >
        <div className="w-full flex justify-center items-center px-6 md:px-12">
          {/* Mobile Menu Button - keep for mobile */}
          <div className="md:hidden absolute left-6 top-1/2 -translate-y-1/2">
            <button className="hover:opacity-70 transition-opacity">
              <Menu size={24} />
              <span className="sr-only">Menü</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-[10px] lg:text-xs tracking-widest uppercase font-bold drop-shadow-md">
            <a href="#hochzeiten" className="hover:opacity-70 transition-opacity">Hochzeiten</a>
            <a href="#ueber-mich" className="hover:opacity-70 transition-opacity whitespace-nowrap">Über mich</a>

            <a href="#" className="font-sans text-xl lg:text-3xl tracking-tight px-2 lg:px-8 drop-shadow-md flex items-center">
              <span className="font-semibold">HOCHZEITS</span>
              <span className="font-black">SERVICEDE</span>
            </a>

            <a href="#kontakt" className="hover:opacity-70 transition-opacity">Kontakt</a>
            <Link to="/impressum" className="hover:opacity-70 transition-opacity">Impressum</Link>
            <Link to="/datenschutz" className="hover:opacity-70 transition-opacity">Datenschutz</Link>
          </div>

          <a href="#" className="md:hidden font-sans text-xl tracking-tight drop-shadow-md flex items-center">
            <span className="font-semibold">HOCHZEITS</span>
            <span className="font-black">SERVICEDE</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image - completely opaque and untouched */}
        <div className="absolute inset-0 z-0 bg-black/10">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={boatImg}
            alt="Hochzeitsfotografie"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={48} strokeWidth={1} className="drop-shadow-md" />
        </motion.div>
      </section>

      {/* Echte Momente Section */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 font-serif tracking-tight italic text-[#1a1a1a]" style={{ fontFamily: "'Georgia', serif" }}>
          Echte Momente
        </h2>
        <p className="font-sans text-[#1a1a1a] max-w-4xl text-lg md:text-xl font-light tracking-wide leading-relaxed">
          Eure Liebesgeschichte ist einzigartig und braucht keine künstlichen Posen, um zu wirken. Ich fange für euch die echten, flüchtigen Momente und tiefen Gefühle ein, damit sich eure Hochzeitsbilder für immer authentisch und greifbar anfühlen.
        </p>
      </section>

      {/* Image Gallery Section */}
      <section id="hochzeiten" className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="w-full aspect-[4/5] overflow-hidden group">
            <img
              src={castleImg}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Hochzeit Schloss"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full aspect-[4/5] overflow-hidden group">
            <img
              src={museumImg}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Hochzeit Museum"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full aspect-[4/5] overflow-hidden group">
            <img
              src={img3664}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Hochzeit Reportage 1"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full aspect-[4/5] overflow-hidden group">
            <img
              src={img3665}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Hochzeit Reportage 2"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full aspect-[4/5] overflow-hidden group">
            <img
              src={img3671}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Hochzeit Reportage 3"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full aspect-[4/5] overflow-hidden group">
            <img
              src={img3670}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Hochzeit Reportage 4"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Über Mich Section */}
      <section id="ueber-mich" className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-24 md:pb-32 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 font-serif tracking-tight italic text-[#1a1a1a] text-center" style={{ fontFamily: "'Georgia', serif" }}>
          Über mich
        </h2>
        <div className="w-full max-w-5xl aspect-square md:aspect-[21/9] overflow-hidden mb-12">
          <img
            src={img3668}
            className="w-full h-full object-cover"
            alt="Über mich"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="font-sans text-[#1a1a1a] max-w-3xl text-lg font-light tracking-wide leading-relaxed text-center">
          Von Berlin aus, wo ich gemeinsam mit meinem Hund lebe, ziehe ich gerne in die Welt hinaus. Reisen, gutes Essen und meine Kamera im Gepäck sind für mich die perfekte Kombination. Doch mein Herz schlägt besonders für Paare und ihre einzigartigen Geschichten. Es gibt für mich nichts Schöneres, als das echte, ungestellte Lachen und die tiefen Blicke zwischen zwei Menschen einzufangen. An eurem Hochzeitstag bin ich nicht nur ein Dienstleister mit Kamera, sondern ein Begleiter an eurer Seite. Ihr sollt jede Sekunde eures Tages genießen, frei von steifen Posen und Erwartungen. Seid einfach ihr selbst und lasst euch fallen. Ich helfe euch dabei und halte diese unbezahlbaren Momente für euch fest.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-24 md:pb-32 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16 font-serif tracking-tight italic text-[#1a1a1a] text-center" style={{ fontFamily: "'Georgia', serif" }}>
          Rezensionen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full">
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 ring-1 ring-[#1a1a1a]/10">
              <img
                src={img3669}
                className="w-full h-full object-cover object-top"
                alt="Karina & Peter"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-sans text-[#1a1a1a] text-base md:text-lg font-light tracking-wide leading-relaxed italic mb-6">
              "Unsere Fotos sind der absolute Hammer geworden! Es ist unglaublich, wie natürlich und authentisch die Bilder wirken. Der Fotograf hat einfach ein besonderes Talent dafür. Er hat uns wunderbar angeleitet und uns danach den Freiraum gegeben, die Zeit miteinander zu genießen. Das Shooting war traumhaft schön und die Ergebnisse sprechen für sich!"
            </p>
            <span className="font-serif text-xl tracking-tight text-[#1a1a1a]" style={{ fontFamily: "'Georgia', serif" }}>
              Karina & Peter
            </span>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 ring-1 ring-[#1a1a1a]/10">
              <img
                src={sunsetImg}
                className="w-full h-full object-cover object-center"
                alt="Anna & Tom"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-sans text-[#1a1a1a] text-base md:text-lg font-light tracking-wide leading-relaxed italic mb-6">
              "Wir hatten ihn für unseren kompletten Hochzeitstag gebucht und sind restlos begeistert. Er ist super professionell, extrem empathisch und integriert sich perfekt in die Hochzeitsgesellschaft. Eine absolute Herzensempfehlung von uns! Dazu kommt noch, dass die Hochzeitsfotos einfach weltklasse geworden sind."
            </p>
            <span className="font-serif text-xl tracking-tight text-[#1a1a1a]" style={{ fontFamily: "'Georgia', serif" }}>
              Anna & Tom
            </span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="bg-[#fcfbf9] py-24 md:py-32 px-6 md:px-12 flex flex-col items-center">
        <p className="font-sans text-red-600 max-w-4xl text-sm md:text-base font-medium tracking-wide leading-relaxed text-center mb-12">
          Diese Seite ist lediglich eine Beispiel-Seite, die ich für einen Kunden erstellt habe. Über diese Seite werden keine Daten erhoben und sie dient nicht der Kontaktaufnahme, sondern ausschließlich als visuelle Darstellung. GitHub wird hierbei lediglich als Hoster genutzt. Weitere Informationen hierzu finden Sie im Abschnitt Datenschutz.
        </p>
        <h2 className="text-3xl md:text-5xl mb-6 font-serif tracking-tight italic text-[#1a1a1a] text-center" style={{ fontFamily: "'Georgia', serif" }}>
          Sichert euch jetzt euren Wunschtermin!
        </h2>
        <p className="font-sans text-[#1a1a1a]/70 mb-16 text-center max-w-2xl font-light tracking-wide">
          Schreibt uns eine Nachricht für ein unverbindliches Angebot. Wir freuen uns darauf, euch kennenzulernen und eure Pläne zu hören.
        </p>

        <form className="w-full max-w-4xl flex flex-col gap-10 font-sans text-sm tracking-widest text-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name1" className="uppercase text-[10px] font-semibold text-[#1a1a1a]/50">Du</label>
              <input type="text" id="name1" className="bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#1a1a1a] outline-none py-2 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name2" className="uppercase text-[10px] font-semibold text-[#1a1a1a]/50">Deine bessere Hälfte</label>
              <input type="text" id="name2" className="bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#1a1a1a] outline-none py-2 transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="uppercase text-[10px] font-semibold text-[#1a1a1a]/50">Email-Adresse *</label>
              <input type="email" id="email" required className="bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#1a1a1a] outline-none py-2 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="uppercase text-[10px] font-semibold text-[#1a1a1a]/50">Telefonnummer (optional)</label>
              <input type="tel" id="phone" className="bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#1a1a1a] outline-none py-2 transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="uppercase text-[10px] font-semibold text-[#1a1a1a]/50">Datum der Hochzeit</label>
              <input type="text" id="date" placeholder="TT.MM.JJJJ" className="bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#1a1a1a] outline-none py-2 transition-colors placeholder:text-[#1a1a1a]/30" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="uppercase text-[10px] font-semibold text-[#1a1a1a]/50">Feier-Location / Ort</label>
              <input type="text" id="location" className="bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#1a1a1a] outline-none py-2 transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="message" className="uppercase text-[10px] font-semibold text-[#1a1a1a]/50">Erzählt etwas mehr über euch und eure Pläne! *</label>
            <textarea id="message" rows={5} required className="bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#1a1a1a] outline-none py-2 resize-none transition-colors"></textarea>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="source" className="uppercase text-[10px] font-semibold text-[#1a1a1a]/50">Wie habt ihr von uns erfahren?</label>
            <input type="text" id="source" className="bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#1a1a1a] outline-none py-2 transition-colors" />
          </div>

          <div className="flex items-start gap-4 mt-6">
            <input type="checkbox" id="privacy" required className="mt-1 accent-[#1a1a1a] w-4 h-4 cursor-pointer" />
            <label htmlFor="privacy" className="text-xs leading-relaxed opacity-70 cursor-pointer">
              Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. *
            </label>
          </div>

          <div className="mt-8 flex justify-center">
            <button type="button" className="px-16 py-5 border border-[#1a1a1a] bg-transparent text-[#1a1a1a] uppercase text-xs tracking-[0.3em] font-semibold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
              Anfrage absenden
            </button>
          </div>
        </form>
      </section>

      {/* Basic Footer/Info Rail matching the immersive UI template */}
      <div className="h-16 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 border-t border-gray-100 bg-white z-20 relative gap-4 md:gap-0">
        <div className="text-[9px] md:text-[10px] tracking-widest uppercase text-gray-400 mt-2 md:mt-0 text-center">
          © {new Date().getFullYear()} HochzeitServiceDe — Premium Hochzeitsfotografie
        </div>
        <div className="hidden md:flex space-x-4 text-[10px] tracking-widest uppercase">
          <Link to="/impressum" className="text-black font-semibold cursor-pointer hover:opacity-70">Impressum</Link>
          <Link to="/datenschutz" className="text-black font-semibold cursor-pointer hover:opacity-70">Datenschutz</Link>
        </div>
      </div>
    </div>
  );
}
