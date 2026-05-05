import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Datenschutz() {
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
          Datenschutz
        </h1>
        
        <div className="space-y-8 font-sans text-base font-light tracking-wide leading-relaxed">
          <section>
            <h2 className="text-xl font-medium mb-4">SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Aus Sicherheitsgründen nutzt diese Website eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt, sowie an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4">Webhosting und Bereitstellung der Website</h2>
            <p className="mb-4">
              Ich hoste meine Website bei der GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.
            </p>
            <p className="mb-4">
              Wenn Sie meine Website besuchen, werden personenbezogene Daten, insbesondere Ihre IP-Adresse, auf den Servern von GitHub verarbeitet. Dies ist erforderlich, um die Inhalte meiner Website an Ihr Endgerät zu übermitteln und die sichere sowie stabile Bereitstellung der Website zu gewährleisten.
            </p>
            <p className="mb-4">
              Die Nutzung von GitHub erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Ich habe ein berechtigtes Interesse an einer möglichst zuverlässigen und sicheren Darstellung sowie Bereitstellung meiner Website. Da die Datenverarbeitung in den USA erfolgt, weise ich darauf hin, dass GitHub unter dem EU-U.S. Data Privacy Framework zertifiziert ist. Soweit eine Übermittlung in ein Drittland erfolgt, stütze ich diese zudem auf die Standardvertragsklauseln der EU-Kommission, um ein angemessenes Datenschutzniveau sicherzustellen.
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub unter: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement</a>
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
