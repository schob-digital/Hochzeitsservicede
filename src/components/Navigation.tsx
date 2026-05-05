import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  transparentTop?: boolean;
}

export default function Navigation({ transparentTop = true }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(!transparentTop);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparentTop) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentTop]);

  // Close mobile menu when window resizes to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
    isScrolled || !transparentTop
      ? "bg-sky-200/30 backdrop-blur-md shadow-sm py-4 text-black"
      : "bg-transparent py-8 text-white"
  }`;

  const linkClass = "hover:opacity-70 transition-opacity whitespace-nowrap";
  const mobileLinkClass = "text-xl font-medium tracking-widest uppercase hover:opacity-70 transition-opacity border-b border-black/10 pb-4";

  return (
    <>
      <nav className={navClasses}>
        <div className="w-full flex justify-center items-center px-6 md:px-12 relative h-10 md:h-auto">
          {/* Mobile Menu Button */}
          <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-50">
            <button 
              className="hover:opacity-70 transition-opacity p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-[10px] lg:text-xs tracking-widest uppercase font-bold drop-shadow-md">
            <Link to="/#hochzeiten" className={linkClass}>Hochzeiten</Link>
            <Link to="/#ueber-mich" className={linkClass}>Über mich</Link>

            <Link to="/" className="font-sans text-xl lg:text-3xl tracking-tight px-2 lg:px-8 drop-shadow-md flex items-center">
              <span className="font-semibold">HOCHZEITS</span>
              <span className="font-black">SERVICEDE</span>
            </Link>

            <Link to="/#kontakt" className={linkClass}>Kontakt</Link>
            <Link to="/impressum" className={linkClass}>Impressum</Link>
            <Link to="/datenschutz" className={linkClass}>Datenschutz</Link>
          </div>

          {/* Mobile Logo centered */}
          <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-40">
            <Link to="/" className="font-sans text-xl tracking-tight drop-shadow-md flex items-center pointer-events-auto">
              <span className="font-semibold">HOCHZEITS</span>
              <span className="font-black">SERVICEDE</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* The Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/20 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* The Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-[60%] max-w-sm z-[70] bg-sky-100/95 shadow-xl flex flex-col p-8 md:hidden"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:opacity-70 transition-opacity text-black"
                  aria-label="Menü schließen"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col space-y-8 text-black mt-4">
                <Link to="/#hochzeiten" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Hochzeiten</Link>
                <Link to="/#ueber-mich" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Über mich</Link>
                <Link to="/#kontakt" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Kontakt</Link>
                <Link to="/impressum" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Impressum</Link>
                <Link to="/datenschutz" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>Datenschutz</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
